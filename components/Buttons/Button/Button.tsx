import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { useSetup } from '../../../hooks/useSetup';
import CrossIcon from './cross.svg';
import StarIcon from './star.svg';
import cn from 'classnames';


export const Button = ({ text, type, isLoading, isIcon, isStars, className, onClick }: ButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <button className={cn(styles.button, className, {
            [styles.weba]: isWebPlatform(webApp?.platform),
            [styles.whiteButton]: type === 'white',
        })} onClick={onClick}>
            {
                !isIcon && !isLoading ?
                    <Htag tag='m' className={cn(styles.text, {
                        [styles.starsText]: isStars,
                    })}>
                        {text}
                        {isStars && <StarIcon />}
                    </Htag>
                : !isIcon && isLoading ?
                    <div className={styles.spinner} />
                : <CrossIcon className={styles.crossIcon} />
            }
        </button>
    );
};
