import { TaskItemProps } from './TaskItem.props';
import styles from './TaskItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Buttons/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { FrameButton } from '../../Buttons/FrameButton/FrameButton';
import { useEffect, useState } from 'react';
import { ToastSuccess } from '../../Common/Toast/Toast';
import { checkTasks } from '../../../helpers/tasks.helper';
import { BorderButton } from '../../Buttons/BorderButton/BorderButton';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { changeTasks } from '../../../features/refresh/refreshSlice';
import cn from 'classnames';


export const TaskItem = ({ taskId, type, text, link, tags, isRaid, endTime }: TaskItemProps): JSX.Element => {
    const { dispatch, webApp, tgUser } = useSetup();

    const [isClick, setIsClick] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [timeRemaining, setTimeRemaining] = useState<string>('');

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (endTime) {
            const updateTimer = () => {
                const now = Date.now();
                const end = Date.parse(endTime);
                const diff = end - now;

                if (diff <= 0) {
                    setTimeRemaining('00:00');
                    dispatch(changeTasks(false));

                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                let timeString = '';

                if (days > 0) {
                    timeString = `${days * 24 + hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                } else if (hours > 0) {
                    timeString = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                } else {
                    timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                }
                
                setTimeRemaining(timeString);
            };

            updateTimer();
            timer = setInterval(updateTimer, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [endTime, dispatch]);

    return (
        <div className={styles.taskItem}>
            <div className={styles.taskDiv}>
                <Htag tag='s' className={cn({
                    [styles.missedText]: type === 'missed',
                })}>
                    {text}
                    {
                        tags &&
                            <span className={styles.tags}>
                                {tags.reduce((t, acc) => t + ' ' + acc, '')}
                            </span>
                    }
                </Htag>
                {
                    tags &&
                        <BorderButton text={setLocale(tgUser?.language_code).copy_tags}
                            isPrimary={true} onClick={() => copyToClipboard(tags.reduce((t, acc) => t + ' ' + acc, ''),
                                setLocale(tgUser?.language_code).tags_copied,
                                setLocale(tgUser?.language_code).tags_were_not_copied)} />
                }
                {
                    isRaid &&
                        <div className={styles.raidDiv}>
                            <Htag tag='s'>
                                {'🔥 ' + setLocale(tgUser?.language_code).raid_task_ends_in + ' ' + timeRemaining}
                            </Htag>
                            <Htag tag='s' className={styles.raidText}>
                                {setLocale(tgUser?.language_code).this_task_costs_like_2_tasks}
                            </Htag>
                        </div>
                }
            </div>
            {
                !isClick && type === 'active' ?
                    <Button className={styles.taskItemButton} text={setLocale(tgUser?.language_code)[
                        (text.toLowerCase().includes('like') ||
                            text.toLowerCase().includes('reactions')) ? 'like' :
                            text.toLowerCase().includes('share') ? 'share' : 'go'
                    ]}
                        type='primary' onClick={() => {
                            if (!isClick) {
                                if (text.toLowerCase().includes('telegram')) {
                                    webApp?.openTelegramLink(link);
                                } else {
                                    webApp?.openLink(link);
                                }
                                
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
