import styles from './StickersBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import Image from 'next/image';


export const StickersBlock = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const link = process.env.NEXT_PUBLIC_STICKERS_LINK || '/';

    return (
        <div className={styles.stickersBlock}>
            <Image className={styles.image} draggable='false'
                loader={() => '/StickersOwlImage.webp'}
                src='/StickersOwlImage.webp'
                alt={'stickers image'}
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
            <div className={styles.stickersTextDiv}>
                <Htag tag='l'>
                    {setLocale(tgUser?.language_code).get_owl_stickers}
                </Htag>
                <Button text={setLocale(tgUser?.language_code).get_now} type='primary'
                    onClick={() => webApp?.openTelegramLink(link)} />
            </div>
        </div>
    );
};
