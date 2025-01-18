import styles from './ProfilePage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Preloader } from '../../components/PreloaderComponents/Preloader/Preloader';


export const ProfilePage = (): JSX.Element => {
    const { tgUser, firstVisit } = useSetup();

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
                            <Navbar />
                        </>
                    : <Preloader />
                }

            </div>
        </>
    );
};
