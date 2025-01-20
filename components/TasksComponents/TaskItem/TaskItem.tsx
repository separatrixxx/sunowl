import { TaskItemProps } from './TaskItem.props';
import styles from './TaskItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Buttons/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { FrameButton } from '../../Buttons/FrameButton/FrameButton';
import cn from 'classnames';


export const TaskItem = ({ type, text }: TaskItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.taskItem}>
            <Htag tag='s' className={cn({
                [styles.missedText]: type === 'missed',
            })}>
                {text}
            </Htag>
            {
                type === 'active' ?
                    <Button className={styles.taskItemButton} text={setLocale(tgUser?.language_code).go}
                        type='primary' onClick={() => {}} />
                : type === 'completed' ?
                    <FrameButton className={cn(styles.taskItemButton, styles.frameButton)}
                        type='ok' />
                : <FrameButton className={cn(styles.taskItemButton, styles.frameButton, styles.errorButton)}
                    type='error' />
            }
        </div>
    );
};
