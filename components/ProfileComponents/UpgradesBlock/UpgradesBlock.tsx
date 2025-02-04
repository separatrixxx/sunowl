import { UpgradesBlockProps } from './UpgradesBlock.props';
import styles from './UpgradesBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import Image from 'next/image';
import { useState } from 'react';
import { Modal } from '../../Common/Modal/Modal';
import { UpgradesModal } from '../UpgradesModal/UpgradesModal';
import { payTonUpgrade, payStarsUpgrade } from '../../../helpers/upgrades.helper';
import { useTonWallet, useTonConnectUI } from '@tonconnect/ui-react';
import cn from 'classnames';


export const UpgradesBlock = ({ spinsData }: UpgradesBlockProps): JSX.Element => {
    const { router, dispatch, webApp, tgUser } = useSetup();

    const { currentSpins, nextSpins, tonPrice, starsPrice, isFinal } = spinsData;

    const [isActive, setIsActive] = useState<boolean>(false);
    const [isLoading1, setIsLoading1] = useState<boolean>(false);
    const [isLoading2, setIsLoading2] = useState<boolean>(false);

    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();
    
    return (
        <>
            <div className={styles.upgradesBlock}>
                <Htag tag='l'>
                    {setLocale(tgUser?.language_code)[currentSpins === 1 ? 'you_have_spin_per_day' : 'you_have_spins_per_day']
                        .replace('$$$', String(currentSpins))}
                </Htag>
                <Htag tag='s' className={styles.upgradesText}>
                    {setLocale(tgUser?.language_code)[!isFinal ? 'upgrade_text' : 'reached_maximum_daily_spins']}
                </Htag>
                {
                    !isFinal &&
                        <Htag tag='s' className={cn(styles.upgradesText, styles.increaseText)}>
                            {setLocale(tgUser?.language_code).increase_to_spins.replace('$$$', String(nextSpins))}
                        </Htag>
                }
                {
                    !isFinal && nextSpins ?
                        <>
                            <Button className={styles.upgradesButton}
                                text={setLocale(tgUser?.language_code).pay_ton.replace('$$$', String(tonPrice))}
                                isLoading={isLoading1} type='primary' onClick={() => payTonUpgrade({
                                    webApp,
                                    tgUser,
                                    dispatch,
                                    wallet,
                                    tonConnectUI,
                                    spins: nextSpins,
                                    price: tonPrice,
                                    setIsLoading: setIsLoading1,
                                    setIsActive: setIsActive,
                                })} />
                            <Button className={styles.upgradesButton}
                                text={setLocale(tgUser?.language_code).pay + ' ' + starsPrice + ' '}
                                isLoading={isLoading2} type='primary' isStars={true}
                                onClick={() => payStarsUpgrade({
                                    webApp,
                                    tgUser,
                                    dispatch,
                                    spins: nextSpins,
                                    price: starsPrice,
                                    setIsLoading: setIsLoading2,
                                    setIsActive,
                                })} />
                        </>
                    :
                        <Button className={cn(styles.upgradesButton, styles.finalButton)}
                            text={setLocale(tgUser?.language_code).spin_now}
                            type='primary' onClick={() => router.push('/')} />
                }
                <Image className={styles.image} draggable='false'
                    loader={() => '/UpgradesOwlImage.webp'}
                    src='/UpgradesOwlImage.webp'
                    alt={'upgrades image'}
                    width={1}
                    height={1}
                    unoptimized={true}
                    priority={true}
                />
            </div>
            <Modal title={setLocale(tgUser?.language_code).succesfully_bought}
                isActive={isActive} setIsActive={setIsActive} >
                <UpgradesModal spins={nextSpins || 0} setIsActive={setIsActive} />
            </Modal>
        </>
    );
};
