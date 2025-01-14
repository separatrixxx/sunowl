import { FrensPage } from "../../page_components/FrensPage/FrensPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function Frens(): JSX.Element {
    const { router } = useSetup();

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).frens}</title>
                <meta name='description' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).frens} />
                <meta property='og:title' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).frens} />
                <meta name='og:description' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).frens} />
                <meta charSet="utf-8" />
            </Head>
            <FrensPage />
        </>
    );
}

export default Frens;
