import styles from './Navbar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { NavbarButton } from '../NavbarButton/NavbarButton';


export const Navbar = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <nav className={styles.navbar}>
            <NavbarButton type='claim' text={setLocale(tgUser?.language_code).claim} link='/' />
            <NavbarButton type='tasks' text={setLocale(tgUser?.language_code).tasks} link='/tasks' />
            <NavbarButton type='frens' text={setLocale(tgUser?.language_code).frens} link='/frens' />
            <NavbarButton type='profile' text={setLocale(tgUser?.language_code).profile} link='/profile' />
        </nav>
    );
};
