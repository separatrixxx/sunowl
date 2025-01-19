import { ConnectItemProps } from './ConnectItem.props';
import styles from './ConnectItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import { useState } from 'react';
import { Modal } from '../../Common/Modal/Modal';
import { ConnectModal } from '../ConnectModal/ConnectModal';
import cn from 'classnames';


export const ConnectItem = ({ type, title, text, isConnected, onClick }: ConnectItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className={styles.connectItem}>
                <div className={styles.connectTextDiv}>
                    <Htag tag='s'>
                        {!isConnected ? title : setLocale(tgUser?.language_code).wallet_connected + ':'}
                    </Htag>
                    {
                        !isConnected &&
                        <Htag tag='s' className={styles.connectText}>
                            {text}
                        </Htag>
                    }
                </div>
                <Button className={cn(styles.connectButton, {
                    [styles.connectedButton]: isConnected,
                })} text={setLocale(tgUser?.language_code).connect}
                    type='primary' isIcon={isConnected}
                    onClick={() => setIsActive(true)} />
            </div>
            <Modal title={setLocale(tgUser?.language_code).connect_wallet}
                isActive={isActive} setIsActive={setIsActive} >
                <ConnectModal type={type} text={setLocale(tgUser?.language_code)[type + '_modal_text' as 'ton_wallet_modal_text']}
                    onClick={onClick} setIsActive={setIsActive} />
            </Modal>
        </>
    );
};
