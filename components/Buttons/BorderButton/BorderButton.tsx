import { BorderButtonProps } from './BorderButton.props';
import styles from './BorderButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const BorderButton = ({ text, className, onClick }: BorderButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <button className={cn(styles.borderButton, className, {
            [styles.weba]: isWebPlatform(webApp?.platform),
        })} onClick={onClick}>
            <Htag tag='s'>
                {text}
            </Htag>
        </button>
    );
};
