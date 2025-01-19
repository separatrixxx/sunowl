import { ConnectModalProps } from './ConnectModal.props';
import styles from './ConnectModal.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MainButton } from '../../Buttons/MainButton/MainButton';


export const ConnectModal = ({ type, text, onClick, setIsActive }: ConnectModalProps): JSX.Element => {
    const { tgUser } = useSetup();

    const image = (type === 'ton_wallet' ? '/TonImage.webp' : '/TronImage.webp')

    return (
        <>
            <Image className={styles.image} draggable='false'
                loader={() => image}
                src={image}
                alt={'connect modal image'}
                width={1}
                height={1}
                unoptimized={true}
            />
            <Htag tag='s' className={styles.connectModalText}>
                {text}
            </Htag>
            <MainButton text={setLocale(tgUser?.language_code).connect}
                type='primary' isSmall={true} onClick={onClick} />
            <MainButton text={setLocale(tgUser?.language_code).close}
                type='black' isSmall={true} onClick={() => setIsActive(false)} />
        </>
    );
};
