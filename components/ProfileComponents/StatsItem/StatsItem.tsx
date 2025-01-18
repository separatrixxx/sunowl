import { StatsItemProps } from './StatsItem.props';
import styles from './StatsItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const StatsItem = ({ text, stat, isBorder }: StatsItemProps): JSX.Element => {
    return (
        <div className={cn(styles.statsItem, {
            [styles.borderItem]: isBorder,
        })}>
            <Htag tag='s'>
                {text}
            </Htag>
            <Htag tag='s'>
                {stat}
            </Htag>
        </div>
    );
};
