import { MainButtonProps } from './MainButton.props';
import styles from './MainButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const MainButton = ({ text, type, isLoading, className, onClick }: MainButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <button className={cn(styles.mainButton, className, {
            [styles.weba]: isWebPlatform(webApp?.platform),
            [styles.whiteButton]: type === 'white',
        })} onClick={onClick}>
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
