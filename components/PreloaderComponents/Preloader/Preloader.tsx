import styles from './Preloader.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Image from 'next/image';
import { LoadingDots } from '../LoadingDots/LoadingDots';
import PreloaderBanner from './preloader.svg';
import TronIcon from './tron.svg';


export const Preloader = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.preloader}>
            <Image className={styles.starsImage} draggable='false'
                loader={() => '/StarsImage.webp'}
                src='/StarsImage.webp'
                alt={'stars image'}
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
            <div className={styles.preloaderBannerDiv}>
                <PreloaderBanner />
                <Image className={styles.image} draggable='false'
                    loader={() => '/PreloaderOwlImage.webp'}
                    src='/PreloaderOwlImage.webp'
                    alt={'preloader image'}
                    width={1}
                    height={1}
                    unoptimized={true}
                    priority={true}
                />
            </div>
            <Htag tag='l' className={styles.preloaderTitle}>
                {setLocale(tgUser?.language_code).preloader_title}
            </Htag>
            <LoadingDots />
            <div className={styles.tronDiv}>
                <TronIcon />
                <Htag tag='s' className={styles.tronText}>
                    {setLocale(tgUser?.language_code).sunowl_powered_by_tron}
                </Htag>
            </div>
        </div>
    );
};
