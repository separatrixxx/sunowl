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
import { UpgradesBlock } from '../../components/ProfileComponents/UpgradesBlock/UpgradesBlock';
import { ConnectTon } from '../../components/ProfileComponents/ConnectTonButton/ConnectTonButton';
import { SpinsDataInterface } from '../../interfaces/data.interface';
import { getSpinsData } from '../../helpers/data.helper';


export const ProfilePage = (): JSX.Element => {
    const { tgUser, firstVisit, upgrades } = useSetup();

    const spinsData: SpinsDataInterface = getSpinsData(upgrades);
    
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
                                <ConnectTon />
                                <UpgradesBlock spinsData={spinsData} />
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
