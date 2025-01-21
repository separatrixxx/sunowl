import styles from './TasksPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Preloader } from '../../components/PreloaderComponents/Preloader/Preloader';
import { TasksList } from '../../components/TasksComponents/TasksList/TasksList';
import { TasksProgress } from '../../components/TasksComponents/TasksProgress/TasksProgress';
import { ClaimTasksList } from '../../components/TasksComponents/ClaimTasksList/ClaimTasksList';


export const TasksPage = (): JSX.Element => {
    const { tgUser, firstVisit, tasks } = useSetup();

    return (
        <>
            <div className={styles.wrapper}>
                {
                    !tgUser ?
                        <MainLink />
                    : firstVisit ?
                        <>
                            <Toaster
                                position="top-center"
                                reverseOrder={true}
                                toastOptions={{
                                    duration: 2000,
                                }}
                            />
                            <Htag tag='l' className={styles.tasksTitle1}>
                                {setLocale(tgUser.language_code).event_tasks}
                            </Htag>
                            <TasksList type='event' />
                            <Htag tag='l' className={styles.tasksTitle2}>
                                {setLocale(tgUser.language_code).raid_tasks}
                            </Htag>
                            <TasksList type='raid' />
                            <Htag tag='l' className={styles.tasksTitle3}>
                                {setLocale(tgUser.language_code).claim_tasks}
                            </Htag>
                            <Htag tag='s' className={styles.tasksText}>
                                {setLocale(tgUser.language_code).tasks_text}
                            </Htag>
                            <TasksProgress tasksCount={8} />
                            <ClaimTasksList />
                            <Navbar />
                        </>
                    : <Preloader />
                }

            </div>
        </>
    );
};
