import { TasksListProps } from './TasksList.props';
import styles from './TasksList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { TaskItem } from '../TaskItem/TaskItem';


export const TasksList = ({ type }: TasksListProps): JSX.Element => {
    const { tgUser, tasks } = useSetup();

    return (
        <>
            <div className={styles.tasksList}>
                {tasks.data[type + '_tasks' as 'event_tasks'].active.map(t => (
                    <TaskItem key={t.task_id} type='active' text={t.description} />
                ))}
            </div>
            <div className={styles.tasksList}>
                {tasks.data[type + '_tasks' as 'event_tasks'].completed.map(t => (
                    <TaskItem key={t.task_id} type='completed' text={t.description} />
                ))}
            </div>
            {
                type === 'raid' &&
                    <div className={styles.tasksList}>
                        {tasks.data.raid_tasks.missed.map(t => (
                            <TaskItem key={t.task_id} type='missed' text={t.description} />
                        ))}
                    </div>
            }
        </>
    );
};
