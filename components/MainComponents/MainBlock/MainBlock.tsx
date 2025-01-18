import styles from './MainBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { MainButton } from '../../Buttons/MainButton/MainButton';
import { BorderButton } from '../../Buttons/BorderButton/BorderButton';
import Image from 'next/image';
import { ToastError } from '../../Common/Toast/Toast';
import { useState } from 'react';
import { Modal } from '../../Common/Modal/Modal';
import { MainModal } from '../MainModal/MainModal';


export const MainBlock = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    const spinsLeft = user.data.claims_total;
    const spinsPerDay = user.data.claims_available_per_day;
    const spinsUsedToday = user.data.statistics.claims_used_today;

    return (
        <>
            <div className={styles.mainBlock}>
                <Htag tag='s' className={styles.spinPoints}>
                    {setLocale(tgUser?.language_code).spin_points + ': ' + spinsLeft}
                </Htag>
                <Htag tag='l' className={styles.mustSubscribed}>
                    {setLocale(tgUser?.language_code).to_start_you_must_subscribed}
                </Htag>
                <MainButton text={setLocale(tgUser?.language_code).spin_for_tokens} type='white'
                    onClick={() => {
                        if (!user.data.fully_authorized) {
                            ToastError(setLocale(tgUser?.language_code).join_our_socials_to_spin);
                        }
                    }} />
                <Htag tag='s' className={styles.spinsAvailable}>
                    {setLocale(tgUser?.language_code).spins_available_for_today +
                        `: ${spinsPerDay - spinsUsedToday}/${spinsPerDay}`}
                </Htag>
                <BorderButton text={setLocale(tgUser?.language_code).how_increase_daily_spins + '?'}
                    onClick={() => setIsActive(true)} />
                <Image className={styles.coinImage1} draggable='false'
                    loader={() => '/CroppedCoinImage.webp'}
                    src='/CroppedCoinImage.webp'
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
            <Modal title={setLocale(tgUser?.language_code).how_increase_daily_spins}
                isActive={isActive} setIsActive={setIsActive} >
                <MainModal setIsActive={setIsActive} />
            </Modal>
        </>
    );
};
