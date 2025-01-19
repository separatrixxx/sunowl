import styles from './ProfilePage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Preloader } from '../../components/PreloaderComponents/Preloader/Preloader';
import { WithdrawBlock } from '../../components/ProfileComponents/WithdrawBlock/WithdrawBlock';
import { StatsList } from '../../components/ProfileComponents/StatsList/StatsList';
import Image from 'next/image';
import { StickersBlock } from '../../components/ProfileComponents/StickersBlock/StickersBlock';
import { ConnectList } from '../../components/ProfileComponents/ConnectList/ConnectList';
import { UpgradesBlock } from '../../components/ProfileComponents/UpgradesBlock/UpgradesBlock';


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
                            <StatsList />
                            <div className={styles.profileDiv}>
                                <ConnectList />
                                <UpgradesBlock spins={1} nextSpins={2} priceTon={1}
                                    priceStars={700} isFinal={false} />
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
