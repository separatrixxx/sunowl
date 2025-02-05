import { TasksPage } from "../../page_components/TasksPage/TasksPage";
import Head from 'next/head';
import { setLocale } from "../../helpers/locale.helper";
import { useSetup } from "../../hooks/useSetup";
import { useEffect } from "react";
import { getTasks } from "../../helpers/tasks.helper";
import { getUser } from "../../helpers/user.helper";


function Tasks(): JSX.Element {
    const { router, dispatch, tgUser, webApp, refresh } = useSetup();

    useEffect(() => {
        if (tgUser && refresh.tasks) {
            getTasks({
                webApp: webApp,
                dispatch: dispatch,
                tgUser: tgUser,
            });
        }

        if (tgUser && refresh.user) {
            getUser({
                webApp: webApp,
                dispatch: dispatch,
                tgUser: tgUser,
            });
        }
    }, [router, tgUser, webApp, refresh, dispatch]);

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).tasks}</title>
                <meta name='description' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).tasks} />
                <meta property='og:title' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).tasks} />
                <meta name='og:description' content={setLocale(router.locale).sunowl + ' | ' + setLocale(router.locale).tasks} />
                <meta charSet="utf-8" />
            </Head>
            <TasksPage />
        </>
    );
}

export default Tasks;
