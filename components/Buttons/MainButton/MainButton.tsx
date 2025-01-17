import { MainButtonProps } from './MainButton.props';
import styles from './MainButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const MainButton = ({ text, type, isLoading, isDisabled, className, onClick }: MainButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <button className={cn(styles.mainButton, className, {
            [styles.activeButton]: !isDisabled,
            [styles.weba]: !isDisabled && isWebPlatform(webApp?.platform),
            [styles.lightButton]: type === 'light',
            [styles.whiteButton]: type === 'white',
            [styles.blackButton]: type === 'black',
            [styles.disabledButton]: isDisabled,
        })} onClick={!isDisabled ? onClick : () => {}}>
            {
                !isLoading ?
                    <Htag tag='l' className={styles.text}>
                        {text}
                    </Htag>
                : <div className={styles.spinner} />
            }
        </button>
    );
};
