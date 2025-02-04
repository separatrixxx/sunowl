import { TaskItemProps } from './TaskItem.props';
import styles from './TaskItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Buttons/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import { FrameButton } from '../../Buttons/FrameButton/FrameButton';
import { useEffect, useState } from 'react';
import { ToastSuccess } from '../../Common/Toast/Toast';
import { checkTasks, startTask } from '../../../helpers/tasks.helper';
import { changeTasks } from '../../../features/refresh/refreshSlice';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { Modal } from '../../Common/Modal/Modal';
import { ConnectTwitterModal } from '../ConnectTwitterModal/ConnectTwitterModal';
import { RaidBlock } from '../RaidBlock/RaidBlock';
import { TagsBlock } from '../TagsBlock/TagsBlock';
import cn from 'classnames';


export const TaskItem = ({ taskId, type, text, link, tags, isRaid, endTime }: TaskItemProps): JSX.Element => {
    const { dispatch, webApp, tgUser, user, tasks } = useSetup();

    const [isClick, setIsClick] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [timeRemaining, setTimeRemaining] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);
    const [waitTimer, setWaitTimer] = useState<number>(0);
    const [isWaiting, setIsWaiting] = useState<boolean>(false);

    const isTwitter = user.data.authentication.find(auth => auth.hasOwnProperty('twitter'));
    const isTwitterTask = text.toLowerCase().includes('twitter');

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

    useEffect(() => {
        let waitingTimer: NodeJS.Timeout;

        if (isWaiting && waitTimer > 0) {
            waitingTimer = setInterval(() => {
                setWaitTimer(prev => {
                    if (prev <= 1) {
                        setIsWaiting(false);
                        setIsClick(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (waitingTimer) {
                clearInterval(waitingTimer);
            }
        };
    }, [isWaiting, waitTimer]);

    return (
        <>
            <div className={styles.taskItem}>
                <div className={styles.taskDiv}>
                    <Htag tag='s' className={cn({
                        [styles.missedText]: type !== 'active',
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
                        tags && <TagsBlock type={type} tags={tags} />
                    }
                    {
                        isRaid && <RaidBlock type={type} timeRemaining={timeRemaining} />
                    }
                </div>
                {
                    !isClick && type === 'active' ?
                        <Button className={styles.taskItemButton} text={!(isTwitterTask && isWaiting) ?
                            setLocale(tgUser?.language_code)[
                                (text.toLowerCase().includes('like') ||
                                text.toLowerCase().includes('reactions')) ? 'like' :
                                text.toLowerCase().includes('share') ? 'share' : 'go']
                            : String(waitTimer)} type='primary' onClick={() => {
                            if ((isTwitter ? isTwitter['twitter'] : false) && isTwitterTask && !isWaiting) {
                                ToastSuccess(setLocale(tgUser?.language_code).wait_15_seconds);
                                setWaitTimer(15);
                                setIsWaiting(true);
                            }
                            
                            startTask({webApp, tgUser, text, link, isTwitter,
                                isClick, isWaiting, setIsClick, setIsActive, isWebPlatform});
                        }} />
                        : isClick && type === 'active' ?
                            <FrameButton className={cn(styles.taskItemButton, styles.frameButton)}
                                type='pending' isLoading={isLoading} onClick={() => checkTasks({
                                    dispatch: dispatch,
                                    webApp: webApp,
                                    tgUser: tgUser,
                                    delimeter: tasks.task_delimeter,
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
            <Modal title={setLocale(tgUser?.language_code).connect_twitter}
                isActive={isActive} setIsActive={setIsActive} >
                <ConnectTwitterModal setIsActive={setIsActive} />
            </Modal>
        </>
    );
};
