import { FrensItemProps } from './FrensItem.props';
import styles from './FrensItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import VerifiedIcon from './verified.svg';
import UnverifiedIcon from './unverified.svg';
import { getPhoto } from '../../../helpers/photo.helper';
import { transliterate } from '../../../helpers/transliteration.helper';
import cn from 'classnames';


export const FrensItem = ({ photo, name, isVerified }: FrensItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    const frenPhoto = getPhoto(photo);
    console.log(frenPhoto)

    let Icon = VerifiedIcon;

    if (!isVerified) {
        Icon = UnverifiedIcon;
    }

    return (
        <div className={styles.frensItem}>
            {
                <Image className={styles.frensImage} draggable='false'
                    loader={() => frenPhoto}
                    src={frenPhoto}
                    alt={`${name} fren image`}
                    width={1}
                    height={1}
                    unoptimized={true}
                />
            }
            <Htag tag='s'>
                {transliterate(name, 'ru-to-en')}
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
