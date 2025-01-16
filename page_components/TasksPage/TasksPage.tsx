import styles from './TasksPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';


export const TasksPage = (): JSX.Element => {
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
                                {setLocale(tgUser.language_code).tasks}
                            </Htag>
                            <Htag tag='s' className={styles.tasksText}>
                                {setLocale(tgUser.language_code).tasks_text}
                            </Htag>
                            <Navbar />
                        </>
                }

            </div>
        </>
    );
};
