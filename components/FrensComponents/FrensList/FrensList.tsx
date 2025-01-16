import styles from './FrensList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';
import { FrensItem } from '../FrensItem/FrensItem';


export const FrensList = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    return (
        <div className={cn(styles.frensList, {
            [styles.noFrensList]: user.data.statistics.total_friends === 0,
        })}>
            {
                user.data.statistics.total_friends === 0 ?
                    <>
                        <Image className={styles.image} draggable='false'
                            loader={() => '/HzOwlImage.webp'}
                            src='/HzOwlImage.webp'
                            alt='frens list image'
                            width={1}
                            height={1}
                            unoptimized={true}
                        />
                        <Htag tag='s'>
                            {setLocale(tgUser?.language_code).no_frens}
                        </Htag>
                    </>
                :
                    <>
                        {user.data.statistics.authorized_friend_ids.map(f => (
                            <FrensItem key={f} photo={'/HzOwlImage.webp'} name='fren' isVerified={true} />
                        ))}
                        {user.data.statistics.friend_ids.map(f => (
                            <FrensItem key={f} photo={'/HzOwlImage.webp'} name='fren' isVerified={false} />
                        ))}
                    </>
            }
        </div>
    );
};