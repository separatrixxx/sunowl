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
import { SpinsBlock } from '../SpinsBlock/SpinsBlock';
import { claimTokens } from '../../../helpers/claim.helper';


export const MainBlock = (): JSX.Element => {
    const { dispatch, webApp, tgUser, user, pool } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    const spinsLeft = user.data.claims_total;
    const spinsPerDay = user.data.claims_available_per_day;
    const spinsUsedToday = user.data.statistics.claims_used_today;
    const isGameOver = pool.data.tokens_remaining === 0;
    const isDisabled = spinsLeft === 0 || spinsPerDay === spinsUsedToday || isGameOver;
    const isFullyAuthorized = user.data.fully_authorized;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [tokens, setTokens] = useState<number>(0);

    return (
        <>
            <div className={styles.mainBlock}>
                <Htag tag='s' className={styles.spinPoints}>
                    {setLocale(tgUser?.language_code).spin_points + ': ' + spinsLeft}
                </Htag>
                {
                    !isFullyAuthorized ?
                        <Htag tag='l' className={styles.mustSubscribed}>
                            {setLocale(tgUser?.language_code)[!isGameOver ? 'to_start_you_must_subscribed' : 'game_over']}
                        </Htag>
                    : <SpinsBlock tokens={tokens} />
                }
                <MainButton text={setLocale(tgUser?.language_code)[
                    spinsLeft === 0 ? 'no_more_spins' :
                    spinsUsedToday === spinsPerDay ? 'next_spin_tomorrow' :
                    'spin_for_tokens'
                ]} type='white' isLoading={isLoading} isDisabled={isDisabled}
                    onClick={() => {
                        if (!isFullyAuthorized) {
                            ToastError(setLocale(tgUser?.language_code).join_our_socials_to_spin);
                        } else if (!isDisabled) {
                            claimTokens({
                                dispatch: dispatch,
                                webApp: webApp,
                                tgUser: tgUser,
                                setIsLoading: setIsLoading,
                                setTokens: setTokens,
                            });
                        }
                    }} />
                <Htag tag='s' className={styles.spinsAvailable}>
                    {setLocale(tgUser?.language_code).spins_available_for_today +
                        `: ${(spinsLeft > 0 ? 1 : 0) * (spinsPerDay - spinsUsedToday)}/${spinsPerDay}`}
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
