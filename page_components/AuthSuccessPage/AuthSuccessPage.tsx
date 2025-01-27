import styles from './AuthSuccessPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useSetup } from '../../hooks/useSetup';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { useState } from 'react';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Preloader } from '../../components/PreloaderComponents/Preloader/Preloader';
import { MainButton } from '../../components/Buttons/MainButton/MainButton';


export const AuthSuccessPage = (): JSX.Element => {
    const { router, webApp, tgUser, firstVisit } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/');
        });
    }

    return (
        <>
            <div className={styles.wrapper}>
                {
                    !tgUser ?
                        <MainLink />
                    : firstVisit ?
                        <>
                            <Toaster
                                position="top-center"
                                reverseOrder={true}
                                toastOptions={{
                                    duration: 2000,
                                }}
                            />
                            <Htag tag='l'>
                                {setLocale(tgUser.language_code).your_x_authorized}
                            </Htag>
                            <MainButton text={setLocale(tgUser.language_code).back} type='primary'
                                onClick={() => router.push('/')} />
                        </>
                    : <Preloader />
                }

            </div>
        </>
    );
};
