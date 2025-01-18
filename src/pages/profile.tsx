import { ProfilePage } from "../../page_components/ProfilePage/ProfilePage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { useEffect } from "react";
import { getUser } from "../../helpers/user.helper";
import { getPool } from "../../helpers/pool.helper";


function Profile(): JSX.Element {
  const { router, dispatch, webApp, tgUser, refresh } = useSetup();

  useEffect(() => {
    if (tgUser && refresh.user) {
      getUser({
        router: router,
        webApp: webApp,
        dispatch: dispatch,
        tgUser: tgUser,
      });
    }

    if (tgUser && refresh.pool) {
      getPool({
        router: router,
        webApp: webApp,
        dispatch: dispatch,
        tgUser: tgUser,
      });
    }
  }, [router, tgUser, webApp, refresh, dispatch]);

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).profile}</title>
        <meta name='description' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).profile} />
        <meta property='og:title' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).profile} />
        <meta name='og:description' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).profile} />
        <meta charSet="utf-8" />
      </Head>
      <ProfilePage />
    </>
  );
}

export default Profile;
