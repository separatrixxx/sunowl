import styles from './SubscribeLIst.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { SubscribeItem } from '../SubscribeItem/SubscribeItem';


export const SubscribeList = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    // user.data.auth_requirements.required_steps.map((rs, i) => (
    //     console.log(rs)
    // ))

    return (
        <div className={styles.subscribeList}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).subscribe_to_our_socials}
            </Htag>
            {user.data.auth_requirements.required_steps.map((rs, i) => (
                <SubscribeItem key={rs.auth_url} type={rs.type} link={rs.auth_url}
                    isBorder={i !== 2} />
            ))}
        </div>
    );
};
