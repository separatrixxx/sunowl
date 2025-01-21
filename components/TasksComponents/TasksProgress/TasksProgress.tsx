import { TasksProgressProps } from './TasksProgress.props';
import styles from './TasksProgress.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const TasksProgress = ({ tasksCount }: TasksProgressProps): JSX.Element => {
    const { tgUser } = useSetup();

    const tasksRequired = 15;
    const progressWidth = (tasksCount / tasksRequired) * 100;

    return (
        <div className={styles.tasksProgress}>
            <Htag tag="s">
                {setLocale(tgUser?.language_code)[
                    tasksCount < tasksRequired ? 'get_spin_for_task_done' : 'tas_done_your_points_ready'
                ]}
            </Htag>
            <div className={styles.progressDiv}>
                <Htag tag="s">
                    {`${tasksCount}/${tasksRequired} ${setLocale(tgUser?.language_code).tasks}`}
                </Htag>
                <div className={styles.progressBar} style={{ width: `${progressWidth}%` }} />
            </div>
        </div>
    );
};
