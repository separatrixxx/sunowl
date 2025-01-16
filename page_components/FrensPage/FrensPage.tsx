import styles from './FrensPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { MainButton } from '../../components/Buttons/MainButton/MainButton';


export const FrensPage = (): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <>
            <div className={styles.wrapper}>
                {
                    !tgUser ?
                        <MainLink />
                        :
                        <>
                            <Toaster
                                position="top-center"
                                reverseOrder={true}
                                toastOptions={{
                                    duration: 2000,
                                }}
                            />
                            <Htag tag='l'>
                                {setLocale(tgUser.language_code).invite_frens}
                            </Htag>
                            <Htag tag='s' className={styles.frensText}>
                                {setLocale(tgUser.language_code).invite_frens_text}
                            </Htag>
                            <MainButton className={styles.frensButton}
                                text={setLocale(tgUser.language_code).invite_frens} type='primary'
                                onClick={() => {}} />
                            <Navbar />
                        </>
                }

            </div>
        </>
    );
};
