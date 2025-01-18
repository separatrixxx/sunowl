import styles from './SubscribeLIst.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { SubscribeItem } from '../SubscribeItem/SubscribeItem';
import { LoadingDots } from '../../PreloaderComponents/LoadingDots/LoadingDots';
import cn from 'classnames';


export const SubscribeList = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    if (user.status !== 'success') {
        return (
            <div className={cn(styles.subscribeList, styles.loadingDiv)}>
                <LoadingDots />
            </div>
        );
    }

    return (
        <div className={styles.subscribeList}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).subscribe_to_our_socials}
            </Htag>
            {user.data.authentication.slice(0, 3).map((rs, i) => {
                const type = Object.keys(rs).find(key => key !== 'description' && key !== 'auth_url');
                const isAuth = type ? rs[type] : undefined;

                return (
                    <SubscribeItem key={rs.auth_url || i} type={type || ''}
                        link={rs.auth_url} isAuth={Boolean(isAuth)} isBorder={i !== 2} />
                );
            })}
        </div>
    );
};
