import { WithdrawModalProps } from './WithdrawModal.props';
import styles from './WithdrawModal.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MainButton } from '../../Buttons/MainButton/MainButton';
import { BorderButton } from '../../Buttons/BorderButton/BorderButton';
import cn from 'classnames';


export const WithdrawModal = ({ setIsActive }: WithdrawModalProps): JSX.Element => {
    const { webApp, tgUser, pool } = useSetup();

    const link = process.env.NEXT_PUBLIC_TRONLINK_WALLET || '/';

    return (
        <>
            <Htag tag='s' className={cn(styles.withdrawText, styles.tokensLeft)}>
                {setLocale(tgUser?.language_code).tokens_left + ':'}
            </Htag>
            <Htag tag='xl' className={styles.tokens}>
                {pool.data.tokens_remaining.toLocaleString('ru-RU')}
                <span> {setLocale(tgUser?.language_code).owl}</span>
            </Htag>
            <Htag tag='s' className={cn(styles.withdrawText, styles.withdrawText1)}>
                {setLocale(tgUser?.language_code).withdraw_text_1}
            </Htag>
            <Image className={styles.image} draggable='false'
                loader={() => '/WithdrawOwlImage.webp'}
                src='/WithdrawOwlImage.webp'
                alt={'withdraw image'}
                width={1}
                height={1}
                unoptimized={true}
            />
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).owl_is_tron_memecoin}
            </Htag>
            <Htag tag='s' className={cn(styles.withdrawText, styles.withdrawText2)}>
                {setLocale(tgUser?.language_code).withdraw_text_2}
            </Htag>
            <BorderButton text={setLocale(tgUser?.language_code).download_tronlink_wallet}
                onClick={() => webApp?.openLink(link)} />
            <MainButton className={styles.withdrawButton} text={setLocale(tgUser?.language_code).close}
                type='black' isSmall={true} onClick={() => setIsActive(false)} />
        </>
    );
};
