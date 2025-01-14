import styles from './TasksPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';


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
                            <Navbar />
                        </>
                }

            </div>
        </>
    );
};
