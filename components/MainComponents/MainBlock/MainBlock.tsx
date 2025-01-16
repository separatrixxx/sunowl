import styles from './MainBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { MainButton } from '../../Buttons/MainButton/MainButton';
import { BorderButton } from '../../Buttons/BorderButton/BorderButton';
import Image from 'next/image';


export const MainBlock = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.mainBlock}>
            <Htag tag='s' className={styles.spinPoints}>
                {setLocale(tgUser?.language_code).spin_points + ': 3'}
            </Htag>
            <Htag tag='l' className={styles.mustSubscribed}>
                {setLocale(tgUser?.language_code).to_start_you_must_subscribed}
            </Htag>
            <MainButton text={setLocale(tgUser?.language_code).spin_for_tokens} type='white'
                onClick={() => {}} />
            <Htag tag='s' className={styles.spinsAvailable}>
                {setLocale(tgUser?.language_code).spins_available_for_today + ': 1/1'}
            </Htag>
            <BorderButton text={setLocale(tgUser?.language_code).how_increase_daily_spins}
                onClick={() => {}} />
            <Image className={styles.coinImage1} draggable='false'
                loader={() => '/CoinImage.webp'}
                src='/CoinImage.webp'
                alt={'coin image 1'}
                width={1}
                height={1}
                unoptimized={true}
            />
            <Image className={styles.coinImage2} draggable='false'
                loader={() => '/CoinImage.webp'}
                src='/CoinImage.webp'
                alt={'coin image 1'}
                width={1}
                height={1}
                unoptimized={true}
            />
        </div>
    );
};
