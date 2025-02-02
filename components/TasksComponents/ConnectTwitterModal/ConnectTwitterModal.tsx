import { ConnectTwitterModalProps } from './ConnectTwitterModal.props';
import styles from './ConnectTwitterModal.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MainButton } from '../../Buttons/MainButton/MainButton';
import { changeUser } from '../../../features/refresh/refreshSlice';


export const ConnectTwitterModal = ({ setIsActive }: ConnectTwitterModalProps): JSX.Element => {
    const { dispatch, webApp, tgUser, user } = useSetup();

    const link = user.data.authentication.find(auth => auth.hasOwnProperty('twitter'))?.auth_url;

    return (
        <>
            <Image className={styles.image} draggable='false'
                loader={() => '/TwitterImage.webp'}
                src='/TwitterImage.webp'
                alt={'connect twitter modal image'}
                width={1}
                height={1}
                unoptimized={true}
            />
            <Htag tag='s' className={styles.connectTwitterModalText}>
                {setLocale(tgUser?.language_code).connect_twitter_text}
            </Htag>
            <MainButton text={setLocale(tgUser?.language_code).connect}
                type='primary' isSmall={true} onClick={() => {
                    webApp?.openLink(link || '/');
                    setIsActive(false);

                    dispatch(changeUser(true));
                }} />
            <MainButton text={setLocale(tgUser?.language_code).close}
                type='black' isSmall={true} onClick={() => setIsActive(false)} />
        </>
    );
};
