import { RaidBlockProps } from './RaidBlock.props';
import styles from './RaidBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';


export const RaidBlock = ({ type, timeRemaining }: RaidBlockProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={cn(styles.raidDiv, {
            [styles.missedDiv]: type !== 'active',
        })}>
            <Htag tag='s'>
                {
                    timeRemaining && timeRemaining !== '00:00' && type === 'active' ?
                        setLocale(tgUser?.language_code).raid_task_ends_in + ' ' + timeRemaining
                        : type === 'missed' ?
                            setLocale(tgUser?.language_code).raid_task_is_missed
                            : setLocale(tgUser?.language_code).raid_task_is_done
                }
            </Htag>
            <Htag tag='s' className={styles.raidText}>
                {setLocale(tgUser?.language_code).this_task_costs_like_2_tasks}
            </Htag>
        </div>
    );
};
