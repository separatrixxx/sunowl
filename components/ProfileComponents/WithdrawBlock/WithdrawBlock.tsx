import styles from './WithdrawBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MainButton } from '../../Buttons/MainButton/MainButton';
import CoinIcon from './coin.svg';
import { useState } from 'react';
import { Modal } from '../../Common/Modal/Modal';
import { WithdrawModal } from '../WithdrawModal/WithdrawModal';


export const WithdrawBlock = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className={styles.withdrawBlock}>
                <CoinIcon className={styles.coinIcon} />
                <Htag tag='xxl' className={styles.withdrawTitle}>
                    {user.data.claims_total.toLocaleString('ru-RU')}
                    <span> {setLocale(tgUser?.language_code).owl}</span>
                </Htag>
                <MainButton text={setLocale(tgUser?.language_code).withdraw} type='primary'
                    onClick={() => setIsActive(true)} />
            </div>
            <Modal className={styles.withdrawModal} title={setLocale(tgUser?.language_code).withdraw_owl}
                isActive={isActive} setIsActive={setIsActive} >
                <WithdrawModal setIsActive={setIsActive} />
            </Modal>
        </>
    );
};
