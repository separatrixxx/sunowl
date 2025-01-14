import { MainPage } from "../../page_components/MainPage/MainPage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Main(): JSX.Element {
  const router = useRouter();

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
