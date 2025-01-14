import { ProfilePage } from "../../page_components/ProfilePage/ProfilePage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";


function Profile(): JSX.Element {
    const { router } = useSetup();

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
