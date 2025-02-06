import { MainModalProps } from './MainModal.props';
import styles from './MainModal.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MainButton } from '../../Buttons/MainButton/MainButton';


export const MainModal = ({ setIsActive }: MainModalProps): JSX.Element => {
    const { router, webApp, tgUser, pool } = useSetup();

    return (
        <>
            <Htag tag='s' className={styles.mainModalText}>
                {setLocale(tgUser?.language_code).main_modal_text}
            </Htag>
            <Image className={styles.image} draggable='false'
                loader={() => '/MainModalImage.webp'}
                src='/MainModalImage.webp'
                alt={'main mpdal image'}
                width={1}
                height={1}
                unoptimized={true}
            />
            <MainButton text={setLocale(tgUser?.language_code).go_to_profile}
                type='primary' isSmall={true} onClick={() => router.push('/profile')} />
            <MainButton text={setLocale(tgUser?.language_code).close}
                type='black' isSmall={true} onClick={() => setIsActive(false)} />
        </>
    );
};
