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
import { TasksDataInterface } from '../../interfaces/data.interface';
import { getTasksData } from '../../helpers/data.helper';


export const TasksPage = (): JSX.Element => {
    const { tgUser, firstVisit, tasks } = useSetup();
    
    const tasksData: TasksDataInterface = getTasksData(tasks);

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
                                {setLocale(tgUser.language_code).daily_tasks}
                            </Htag>
                            <Htag tag='s' className={styles.tasksText}>
                                {setLocale(tgUser.language_code).tasks_text}
                            </Htag>
                            <TasksProgress tasksData={tasksData} />
                            <TasksList type='event' />
                            <TasksList type='raid' />
                            <ClaimTasksList />
                            <Navbar />
                        </>
                    : <Preloader />
                }

            </div>
        </>
    );
};
