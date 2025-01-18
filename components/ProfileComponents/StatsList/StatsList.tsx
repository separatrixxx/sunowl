import styles from './StatsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { StatsItem } from '../StatsItem/StatsItem';


export const StatsList = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    return (
        <div className={styles.statsList}>
            <StatsItem text={setLocale(tgUser?.language_code).spins}
                stat={user.data.statistics.claimed_count} isBorder={true} />
            <StatsItem text={setLocale(tgUser?.language_code).verified_frens}
                stat={user.data.statistics.authorized_friends} isBorder={true} />
            <StatsItem text={setLocale(tgUser?.language_code).completed_tasks}
                stat={user.data.statistics.completed_tasks.total} isBorder={false} />
        </div>
    );
};
