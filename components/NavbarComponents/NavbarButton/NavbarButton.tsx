import { NavbarButtonProps } from './NavbarButton.props';
import styles from './NavbarButton.module.css';
import ClaimIcon from './claim.svg';
import TasksIcon from './tasks.svg';
import FrensIcon from './frens.svg';
import ProfileIcon from './profile.svg';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { isWebPlatform } from '../../../helpers/platform.helper';
import cn from 'classnames';


export const NavbarButton = ({ type, text, link }: NavbarButtonProps): JSX.Element => {
    const { router, webApp } = useSetup();

    return (
        <Link href={link} className={cn(styles.navbarButton, {
            [styles.active]: router.asPath === link || (router.asPath.slice(0, 4) === '/#tg' && link === '/'),
            [styles.weba]: isWebPlatform(webApp?.platform),
        })} aria-label={`navbar ${type} link`}>
            <span className={styles.navbarButtonIcon}>
                {
                    type === 'claim' ?
                        <ClaimIcon />
                    : type === 'tasks' ?
                        <TasksIcon />
                    : type === 'frens' ?
                        <FrensIcon />
                    :
                        <ProfileIcon />
                }
            </span>
            <Htag tag='xs' className={styles.navbarButtonText}>
                {text}
            </Htag>
        </Link>
    );
};