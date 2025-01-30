import styles from './ConnectTonButton.module.css';
import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import { useState } from 'react';
import { Modal } from '../../Common/Modal/Modal';
import { ConnectModal } from '../ConnectModal/ConnectModal';
import cn from 'classnames';


export const ConnectTon = () => {
    const { tgUser } = useSetup();

    const wallet = useTonWallet();
    const [tonConnectUI] = useTonConnectUI();

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className={styles.connectItem}>
                <div className={styles.connectTextDiv}>
                    <Htag tag='s'>
                        {wallet && wallet.account.address ?
                            setLocale(tgUser?.language_code).wallet_connected + ':\n' +
                            wallet.account.address.slice(0, 15) + '...' + wallet.account.address.slice(-4) :
                            setLocale(tgUser?.language_code).connect_ton_wallet}
                    </Htag>
                    {
                        !(wallet && wallet.account.address) &&
                            <Htag tag='s' className={styles.connectText}>
                                {setLocale(tgUser?.language_code).you_will_need_it_ton_wallet}
                            </Htag>
                    }
                </div>
                <Button className={cn(styles.connectButton, {
                    [styles.connectedButton]: wallet,
                })} text={setLocale(tgUser?.language_code).connect}
                    type='primary' isIcon={Boolean(wallet)}
                    onClick={() => {
                        if (!wallet) {
                            setIsActive(true);
                        } else {
                            tonConnectUI.disconnect();
                        }
                    }} />
            </div>
            <Modal title={setLocale(tgUser?.language_code).connect_wallet}
                isActive={isActive} setIsActive={setIsActive} >
                <ConnectModal type='ton_wallet' text={setLocale(tgUser?.language_code).ton_wallet_modal_text}
                    onClick={() => {
                        tonConnectUI.openModal();
                        setIsActive(false);
                    }} setIsActive={setIsActive} />
            </Modal>
        </>
    );
};
