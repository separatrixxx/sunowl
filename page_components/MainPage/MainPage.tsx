import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { MainBlock } from '../../components/MainComponents/MainBlock/MainBlock';
import { SubscribeList } from '../../components/MainComponents/SubscribeLIst/SubscribeLIst';
import { useEffect, useState } from 'react';
import { OnboardBlock } from '../../components/OnboardBlock/OnboardBlock';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Preloader } from '../../components/PreloaderComponents/Preloader/Preloader';


export const MainPage = (): JSX.Element => {
    const { tgUser, pool, firstVisit } = useSetup();

    const [isOnboard, setIsOnboard] = useState<boolean>(false);

    useEffect(() => {
        const isOnboard = Boolean(localStorage.getItem('onboard'));

        setIsOnboard(isOnboard);
    }, [setIsOnboard]);

    const tokensLeft = pool.data.tokens_remaining;

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
                            {
                                isOnboard ?
                                    <>
                                        <Htag tag='s' className={styles.mainTitle}>
                                            {setLocale(tgUser.language_code).tokens_left + ':'}
                                        </Htag>
                                        <Htag tag='l' className={styles.mainTokens}>
                                            {tokensLeft.toLocaleString('ru-RU')}
                                            <span>{' ' + setLocale(tgUser.language_code).owl}</span>
                                        </Htag>
                                        <MainBlock />
                                        <SubscribeList />
                                        <Navbar />
                                    </>
                                : <OnboardBlock setIsOnboard={setIsOnboard} />
                            }                            
                        </>
                    : <Preloader />
                }

            </div>
        </>
    );
};
