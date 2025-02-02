import { HowMuchModalProps } from './HowMuchModal.props';
import styles from './HowMuchModal.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { MainButton } from '../../Buttons/MainButton/MainButton';
import { HowMuchItem } from '../HowMuchItem/HowMuchItem';


export const HowMuchModal = ({ setIsActive }: HowMuchModalProps): JSX.Element => {
    const { tgUser } = useSetup();

    const items = [
        {
            from: 5,
            to: 30,
            count: 5,
        },
        {
            from: 30,
            to: 90,
            count: 10,
        },
        {
            from: 90,
            to: 200,
            count: 20,
        },
        {
            from: 210,
            to: 450,
            count: 40,
        },
        {
            from: 450,
            count: 80,
        },
    ];

    return (
        <>
            <Htag tag='s' className={styles.howMuchModalText}>
                {setLocale(tgUser?.language_code).how_much_Text_1}
                <br />
                <span>{setLocale(tgUser?.language_code).how_much_Text_2}</span>
            </Htag>
            {items.map(i => (
                <HowMuchItem key={i.from} from={i.from} to={i.to} count={i.count}/>
            ))}
            <MainButton className={styles.howMuchModalButton} text={setLocale(tgUser?.language_code).close}
                type='black' isSmall={true} onClick={() => setIsActive(false)} />
        </>
    );
};
