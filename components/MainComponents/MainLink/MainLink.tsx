import styles from './MainLink.module.css';
import { setLocale } from '../../../helpers/locale.helper';
import Link from 'next/link';
import Image from 'next/image';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';


export const MainLink = (): JSX.Element => {
    const { router } = useSetup();
    
    return (
        <Link href={process.env.NEXT_PUBLIC_CHANNEL_LINK || '/'} className={styles.link}
            target='_blank' aria-label='main link'>
            <Image className={styles.image} draggable='false'
                loader={() => '/HzOwlImage.webp'}
                src='/HzOwlImage.webp'
                alt='main link image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
            <Htag tag='l' className={styles.mainTitle}>
                {setLocale(router.locale).main_title}
            </Htag>
        </Link>
    );
};
