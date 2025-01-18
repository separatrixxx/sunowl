import styles from './ProfilePage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Preloader } from '../../components/PreloaderComponents/Preloader/Preloader';
import { WithdrawBlock } from '../../components/ProfileComponents/WithdrawBlock/WithdrawBlock';
import { StatsBlock } from '../../components/ProfileComponents/StatsBlock/StatsBlock';
import Image from 'next/image';
import { ConnectBlock } from '../../components/ProfileComponents/ConnectBlock/ConnectBlock';
import { setLocale } from '../../helpers/locale.helper';
import { StickersBlock } from '../../components/ProfileComponents/StickersBlock/StickersBlock';


export const ProfilePage = (): JSX.Element => {
    const { webApp, tgUser, user, firstVisit } = useSetup();

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
                            <Image className={styles.starsImage} draggable='false'
                                loader={() => '/StarsImage.webp'}
                                src='/StarsImage.webp'
                                alt={'stars image'}
                                width={1}
                                height={1}
                                unoptimized={true}
                                priority={true}
                            />
                            <WithdrawBlock />
                            <StatsBlock />
                            <div className={styles.profileDiv}>
                                <ConnectBlock title={setLocale(tgUser?.language_code).connect_ton_wallet}
                                    text={setLocale(tgUser?.language_code).you_will_need_it_ton}
                                    isConnected={user.status === 'success' ? Boolean(user.data.authentication[3][0]) : false}
                                    onClick={() => webApp?.openLink(user.data.authentication[3].auth_url || '/')} />
                                <ConnectBlock title={setLocale(tgUser?.language_code).connect_tron_wallet}
                                    text={setLocale(tgUser?.language_code).you_will_need_it_tron}
                                    isConnected={user.status === 'success' ? Boolean(user.data.authentication[4][0]) : false}
                                    onClick={() => webApp?.openLink(user.data.authentication[4].auth_url || '/')} />
                                <StickersBlock />
                            </div>
                            <Navbar />
                        </>
                    : <Preloader />
                }

            </div>
        </>
    );
};
