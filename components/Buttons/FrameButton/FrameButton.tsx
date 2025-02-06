import { FrameButtonProps } from './FrameButton.props';
import styles from './FrameButton.module.css';
import OkIcon from './ok.svg';
import ErrorIcon from './error.svg';
import { useSetup } from '../../../hooks/useSetup';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';


export const FrameButton = ({ type, isLoading, className, onClick }: FrameButtonProps): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    let Icon = OkIcon;

    if (type === 'error') {
        Icon = ErrorIcon;
    }

    return (
        <div className={cn(styles.frameButton, className, {
            [styles.weba]: onClick && isWebPlatform(webApp?.platform),
            [styles.pendingFrame]: type === 'pending',
            [styles.errorFrame]: type === 'error',
            [styles.clickFrame]: onClick,
        })} onClick={onClick}>
            {
                !isLoading && type !== 'pending' ?
                    <Icon />
                : !isLoading && type === 'pending' ?
                    <Htag tag='s' className={styles.text}>
                        {setLocale(tgUser?.language_code).check}
                    </Htag>
                : <div className={styles.spinner} />
            }
            
        </div>
    );
};
