import { TaskItemProps } from './TaskItem.props';
import styles from './TaskItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Buttons/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { FrameButton } from '../../Buttons/FrameButton/FrameButton';
import { useState } from 'react';
import { ToastSuccess } from '../../Common/Toast/Toast';
import { checkTasks } from '../../../helpers/tasks.helper';
import cn from 'classnames';


export const TaskItem = ({ taskId, type, text, link }: TaskItemProps): JSX.Element => {
    const { dispatch, webApp, tgUser } = useSetup();

    const [isClick, setIsClick] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <div className={styles.taskItem}>
            <Htag tag='s' className={cn({
                [styles.missedText]: type === 'missed',
            })}>
                {text}
            </Htag>
            {
                !isClick && type === 'active' ?
                    <Button className={styles.taskItemButton} text={setLocale(tgUser?.language_code)[
                        text.toLowerCase().includes('like') ? 'like' :
                        text.toLowerCase().includes('share') ? 'share' : 'go'
                    ]}
                        type='primary' onClick={() => {
                            if (!isClick) {
                                webApp?.openLink(link);

                                ToastSuccess(setLocale(tgUser?.language_code).checking_task);
                                setIsClick(true);
                            }
                        }} />
                : isClick && type === 'active' ?
                    <FrameButton className={cn(styles.taskItemButton, styles.frameButton)}
                        type='pending' isLoading={isLoading} onClick={() => checkTasks({
                            dispatch: dispatch,
                            webApp: webApp,
                            tgUser: tgUser,
                            taskId: taskId,
                            setIsClick: setIsClick,
                            setIsLoading: setIsLoading,
                        })} />
                : type === 'completed' ?
                    <FrameButton className={cn(styles.taskItemButton, styles.frameButton)}
                        type='ok' />
                : <FrameButton className={cn(styles.taskItemButton, styles.frameButton, styles.errorButton)}
                    type='error' />
            }
        </div>
    );
};
