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
    const { tgUser, firstVisit, upgrades } = useSetup();

    const currentSpins = upgrades.data.current_spins;
    const upgradesData = upgrades.data.upgrades;
    
    const levels = Object.entries(upgradesData)
        .filter(([_, upgrade]) => upgrade !== null && typeof upgrade.spins === 'number')
        .map(([level, upgrade]) => ({
            level: parseInt(level.replace('level_', ''), 10),
            ...upgrade
        }))
        .sort((a, b) => a.spins - b.spins);
    
    const currentLevelIndex = levels.findIndex(level => level.spins === currentSpins);
    const isFinal = currentLevelIndex === levels.length - 1;
    const nextSpins = isFinal || currentLevelIndex === -1 ? undefined : levels[currentLevelIndex + 1]?.spins ?? null;
    const upgradePrice = isFinal || currentLevelIndex === -1 ? undefined : levels[currentLevelIndex + 1]?.price ?? null;
    

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
                                <UpgradesBlock spins={currentSpins} nextSpins={nextSpins}
                                    priceStars={upgradePrice} isFinal={isFinal} />
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
