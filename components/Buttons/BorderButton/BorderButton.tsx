import { BorderButtonProps } from './BorderButton.props';
import styles from './BorderButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const BorderButton = ({ text, isDisabled, className, onClick }: BorderButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <button className={cn(styles.borderButton, className, {
            [styles.weba]: !isDisabled && isWebPlatform(webApp?.platform),
            [styles.disabledButton]: isDisabled,
        })} onClick={!isDisabled ? onClick : () => {}}>
            <Htag tag='s' className={styles.text}>
                {text}
            </Htag>
        </button>
    );
};
