import { FrameButtonProps } from './FrameButton.props';
import styles from './FrameButton.module.css';
import OkIcon from './ok.svg';
import ErrorIcon from './error.svg';
import cn from 'classnames';


export const FrameButton = ({ type, className }: FrameButtonProps): JSX.Element => {
    let Icon = OkIcon;

    if (type === 'error') {
        Icon = ErrorIcon;
    }

    return (
        <div className={cn(styles.frameButton, className, {
            [styles.pendingFrame]: type === 'pending',
            [styles.errorFrame]: type === 'error',
        })}>
            <Icon />
        </div>
    );
};
