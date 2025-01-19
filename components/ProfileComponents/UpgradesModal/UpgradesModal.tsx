import { UpgradesModalProps } from './UpgradesModal.props';
import styles from './UpgradesModal.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MainButton } from '../../Buttons/MainButton/MainButton';


export const UpgradesModal = ({ spins, setIsActive }: UpgradesModalProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <>
            <div className={styles.upgradesImageDiv}>
                <Image className={styles.image} draggable='false'
                    loader={() => '/UpgradesModalImage.webp'}
                    src='/UpgradesModalImage.webp'
                    alt={'upgrades modal image'}
                    width={1}
                    height={1}
                    unoptimized={true}
                    priority={true}
                />
                <div>
                    <Htag tag='xxl' className={styles.upgradesImageTitle}>
                        {spins}
                    </Htag>
                    <Htag tag='m' className={styles.upgradesImageTitle}>
                        {setLocale(tgUser?.language_code).spins}
                    </Htag>
                </div>
            </div>
            <Htag tag='s' className={styles.upgradesText}>
                {setLocale(tgUser?.language_code).increased_your_spins.replace('$$$', String(spins))}
            </Htag>
            <MainButton className={styles.upgradesButton} text={setLocale(tgUser?.language_code).close}
                type='black' isSmall={true} onClick={() => setIsActive(false)} />
        </>
    );
};
