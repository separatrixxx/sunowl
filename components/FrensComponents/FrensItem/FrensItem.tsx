import { FrensItemProps } from './FrensItem.props';
import styles from './FrensItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import VerifiedIcon from './verified.svg';
import UnverifiedIcon from './unverified.svg';
import cn from 'classnames';


export const FrensItem = ({ photo, name, isVerified }: FrensItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    let Icon = VerifiedIcon;

    if (!isVerified) {
        Icon = UnverifiedIcon;
    }

    return (
        <div className={styles.frensItem}>
            {
                photo ?
                    <Image className={styles.frensImage} draggable='false'
                        loader={() => photo}
                        src={photo}
                        alt={`${name} fren image`}
                        width={1}
                        height={1}
                        unoptimized={true}
                    />
                : <div className={styles.frensImage} />
            }
            <Htag tag='s'>
                {name}
            </Htag>
            <Htag tag='s' className={cn(styles.frensStatus, {
                [styles.verifiedStatus]: isVerified,
            })}>
                <Icon />
                {setLocale(tgUser?.language_code)[isVerified ? 'verified' : 'unverified']}
            </Htag>
        </div>
    );
};
