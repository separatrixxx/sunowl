import styles from './StatsBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { StatsItem } from '../StatsItem/StatsItem';


export const StatsBlock = (): JSX.Element => {
    const { tgUser, user } = useSetup();

    return (
        <div className={styles.statsBlock}>
            <StatsItem text={setLocale(tgUser?.language_code).spins}
                stat={0} isBorder={true} />
            <StatsItem text={setLocale(tgUser?.language_code).verified_frens}
                stat={0} isBorder={true} />
            <StatsItem text={setLocale(tgUser?.language_code).completed_tasks}
                stat={0} isBorder={false} />
        </div>
    );
};
