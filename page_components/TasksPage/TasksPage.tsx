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
                            <Htag tag='l'>
                                {setLocale(tgUser.language_code).event_tasks}
                            </Htag>
                            <Htag tag='s' className={styles.tasksText}>
                                {setLocale(tgUser.language_code).tasks_text}
                            </Htag>
                            <TasksProgress tasksCount={8} />
                            <TasksList type='event' />
                            <Htag tag='l'>
                                {setLocale(tgUser.language_code).raid_tasks}
                            </Htag>
                            <TasksList type='raid' />
                            <Navbar />
                        </>
                    : <Preloader />
                }

            </div>
        </>
    );
};
