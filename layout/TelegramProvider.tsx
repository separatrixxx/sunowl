import Script from "next/script";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ITelegramUser, IWebApp } from "../types/telegram";
import { useSetup } from "../hooks/useSetup";
import { toggleFirstVisit } from "../features/firstVisit/firstVisitSlice";


export interface ITelegramContext {
  webApp?: IWebApp;
  tgUser?: ITelegramUser;
}

export const TelegramContext = createContext<ITelegramContext>({});

export const TelegramProvider = ({ children }: { children: React.ReactNode }) => {
  const { router, dispatch, firstVisit } = useSetup();

  const [webApp, setWebApp] = useState<IWebApp | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateHeight = () => {
        if (window.visualViewport) {
          document.body.style.height = `${window.visualViewport.height}px`;
        }
      };
  
      const preventScroll = () => {
        if (window.scrollY > 0) {
          window.scrollTo(0, 0);
        }
      };
  
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", updateHeight);
        updateHeight();
      }
  
      window.addEventListener("scroll", preventScroll);
  
      return () => {
        if (window.visualViewport) {
          window.visualViewport.removeEventListener("resize", updateHeight);
        }
        window.removeEventListener("scroll", preventScroll);
      };
    }
  }, []);  

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;

    if (app) {
      app.ready();
      setWebApp(app);
      app.expand();

      app.setHeaderColor('#000');
    }

    if (!firstVisit) {
      setTimeout(() => {
        dispatch(toggleFirstVisit());
      }, 3000);
    }
  }, [firstVisit, router, dispatch]);

  const value = useMemo(() => {
    return webApp
      ? {
        webApp,
        unsafeData: webApp.initDataUnsafe,
        tgUser: webApp.initDataUnsafe.user,
      }
      : {};
  }, [webApp]);

  return (
    <TelegramContext.Provider value={value}>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);
