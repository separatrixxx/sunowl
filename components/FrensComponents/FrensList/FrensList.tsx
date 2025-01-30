import styles from './FrensList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { FrensItem } from '../FrensItem/FrensItem';
import cn from 'classnames';


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
                        {user.data.statistics.referral_details.map(f => (
                            <FrensItem key={f.user_id} photo={f.profile_url} name={f.profile_name || ''}
                                isVerified={f.fully_authorized} />
                        ))}
                    </>
            }
        </div>
    );
};
