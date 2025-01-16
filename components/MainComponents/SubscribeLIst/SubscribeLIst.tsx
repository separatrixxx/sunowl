import styles from './SubscribeLIst.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { SubscribeItem } from '../SubscribeItem/SubscribeItem';


export const SubscribeList = (): JSX.Element => {
    const { tgUser } = useSetup();

    const links = ['telegram', 'chat', 'twitter'];

    return (
        <div className={styles.subscribeList}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).subscribe_to_our_socials}
            </Htag>
            {links.map((l, i) => (
                <SubscribeItem key={l} type={l} isBorder={i !== 2} />
            ))}
        </div>
    );
};
