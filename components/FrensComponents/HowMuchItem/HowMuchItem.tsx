import { HowMuchItemProps } from './HowMuchItem.props';
import styles from './HowMuchItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const HowMuchItem = ({ from, to, count }: HowMuchItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.howMuchItem}>
            <Htag tag='s'>
                {
                    to ?
                        setLocale(tgUser?.language_code).from_to_verified_fens
                            .replace('$$$', String(from))
                            .replace('$$$$', String(to))
                    : 
                        setLocale(tgUser?.language_code).from_verified_fens
                            .replace('$$$', String(from))
                }
            </Htag>
            <Htag tag='s' className={styles.text}>
                {setLocale(tgUser?.language_code).spins_for_every_frens
                    .replace('$$$', String(count))}
            </Htag>
        </div>
    );
};
