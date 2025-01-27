import { AuthSuccessPage } from '../../page_components/AuthSuccessPage/AuthSuccessPage';
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function AuthSuccess(): JSX.Element {
    const { router } = useSetup();

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).auth_success}</title>
                <meta name='description' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).auth_success} />
                <meta property='og:title' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).auth_success} />
                <meta name='og:description' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).auth_success} />
                <meta charSet="utf-8" />
            </Head>
            <AuthSuccessPage />
        </>
    );
}

export default AuthSuccess;
