import { OnboardBlockProps } from './OnboardBlock.props';
import styles from './OnboardBlock.module.css';
import Image from 'next/image';
import OnboardBanner from './onboard.svg';
import { useSetup } from '../../hooks/useSetup';
import { Htag } from '../Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { MainButton } from '../Buttons/MainButton/MainButton';


export const OnboardBlock = ({ setIsOnboard }: OnboardBlockProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.onboardBlock}>
            <div className={styles.onboardBannerDiv}>
                <OnboardBanner />
                <Image className={styles.image} draggable='false'
                    loader={() => '/OnboardOwlImage.webp'}
                    src='/OnboardOwlImage.webp'
                    alt={'onboard image'}
                    width={1}
                    height={1}
                    unoptimized={true}
                    priority={true}
                />
            </div>
            <div className={styles.onboardTextDiv}>
                <Htag tag='l'>
                    {setLocale(tgUser?.language_code).onboard_title}
                </Htag>
                <Htag tag='s' className={styles.onboardText}>
                    {setLocale(tgUser?.language_code).onboard_text1}
                </Htag>
                <Htag tag='s' className={styles.onboardText}>
                    {setLocale(tgUser?.language_code).onboard_text2}
                </Htag>
            </div>
            <MainButton className={styles.onboardButton} text={setLocale(tgUser?.language_code).lets_go}
                type='primary' onClick={() => {
                    setIsOnboard(true);
                    localStorage.setItem('onboard', 'true');
                }} />
        </div>
    );
};
