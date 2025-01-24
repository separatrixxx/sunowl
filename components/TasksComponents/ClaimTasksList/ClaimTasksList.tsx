import styles from './ClaimTasksList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { TaskItem } from '../TaskItem/TaskItem';


export const ClaimTasksList = (): JSX.Element => {
    const { tasks } = useSetup();

    const allTasks = Object.values(tasks.data.claim_tasks.groups)
        .flatMap(group => group.tasks);

    return (
        <div className={styles.tasksList}>
            {allTasks.map(t => (
                <TaskItem key={t.task_id} taskId={t.task_id} type={!t.completed ? 'active' : 'completed'}
                    text={t.description} link={t.verification.url_to_redirect} />
            ))}
        </div>
    );
};
