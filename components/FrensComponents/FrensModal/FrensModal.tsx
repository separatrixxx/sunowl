import { FrensModalProps } from './FrensModal.props';
import styles from './FrensModal.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MainButton } from '../../Buttons/MainButton/MainButton';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { shareLink } from '../../../helpers/share.helper';
import { useState } from 'react';
import { Modal } from '../../Common/Modal/Modal';
import { HowMuchModal } from '../HowMuchModal/HowMuchModal';
import { BorderButton } from '../../Buttons/BorderButton/BorderButton';


export const FrensModal = ({ setIsActive }: FrensModalProps): JSX.Element => {
    const { webApp, tgUser, user } = useSetup();

    const [isActive2, setIsActive2] = useState<boolean>(false)

    return (
        <>
            <Htag tag='s' className={styles.frensModalText}>
                {setLocale(tgUser?.language_code).invite_fren_text_1}
                <br />
                <span>{setLocale(tgUser?.language_code).invite_fren_text_2}</span>
            </Htag>
            <BorderButton className={styles.frensModalButton}
                text={setLocale(tgUser?.language_code).how_much_spins_for_frens + '?'}
                isPrimary={true} onClick={() => setIsActive2(true)} />
            <MainButton text={setLocale(tgUser?.language_code).send_invitation}
                type='primary' isSmall={true} onClick={() => {
                    shareLink(user.data.refferal_link, '', webApp);
                    setIsActive(false);
                }} />
            <MainButton text={setLocale(tgUser?.language_code).copy_link}
                type='primary' isSmall={true} onClick={() => {
                    copyToClipboard(user.data.refferal_link, setLocale(tgUser?.language_code).your_refferal_link_copied,
                        setLocale(tgUser?.language_code).refferal_link_was_not_copied);
                    setIsActive(false);
                }} />
            <MainButton text={setLocale(tgUser?.language_code).close}
                type='black' isSmall={true} onClick={() => setIsActive(false)} />
            <Modal className={styles.frensModal2} title={setLocale(tgUser?.language_code).how_much_spins + '?'}
                isActive={isActive2} setIsActive={setIsActive2} >
                <HowMuchModal setIsActive={setIsActive2} />
            </Modal>
        </>
    );
};
