import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { useEffect } from "react";
import { getUser } from "../../helpers/user.helper";
import { getPool } from "../../helpers/pool.helper";


function Main(): JSX.Element {
  const { router, dispatch, tgUser, webApp } = useSetup();

  useEffect(() => {
    if (tgUser) {
      getUser({
        router: router,
        webApp: webApp,
        dispatch: dispatch,
        tgUser: tgUser,
      });

      getPool({
        router: router,
        webApp: webApp,
        dispatch: dispatch,
        tgUser: tgUser,
      });
    }
  }, [router, tgUser, webApp, dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).sunowl}</title>
        <meta name='description' content={setLocale(router.locale).sunowl} />
        <meta property='og:title' content={setLocale(router.locale).sunowl} />
        <meta name='og:description' content={setLocale(router.locale).sunowl} />
        <meta charSet="utf-8" />
      </Head>
      <MainPage />
    </>
  );
}

export default Main;
