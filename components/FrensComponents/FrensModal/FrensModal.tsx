import { FrensModalProps } from './FrensModal.props';
import styles from './FrensModal.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';
import { MainButton } from '../../Buttons/MainButton/MainButton';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { shareLink } from '../../../helpers/share.helper';


export const FrensModal = ({ setIsActive }: FrensModalProps): JSX.Element => {
    const { webApp, tgUser, user } = useSetup();

    return (
        <>
            <Htag tag='s' className={styles.frensModalText}>
                {setLocale(tgUser?.language_code).invite_fren_text_1}
                <br />
                <span>{setLocale(tgUser?.language_code).invite_fren_text_2}</span>
            </Htag>
            <MainButton text={setLocale(tgUser?.language_code).send_invitation}
                type='primary' onClick={() => {
                    shareLink(user.data.refferal_link, '', webApp);
                    setIsActive(false);
                }} />
            <MainButton text={setLocale(tgUser?.language_code).copy_link}
                type='primary' onClick={() => {
                    copyToClipboard(user.data.refferal_link, setLocale(tgUser?.language_code).your_refferal_link_copied,
                    setLocale(tgUser?.language_code).refferal_link_was_not_copied);
                    setIsActive(false);
                }} />
            <MainButton text={setLocale(tgUser?.language_code).close}
                type='black' onClick={() => setIsActive(false)} />
        </>
    );
};
