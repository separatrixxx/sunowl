import styles from './AuthSuccessPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useSetup } from '../../hooks/useSetup';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { Preloader } from '../../components/PreloaderComponents/Preloader/Preloader';
import { MainButton } from '../../components/Buttons/MainButton/MainButton';


export const AuthSuccessPage = (): JSX.Element => {
    const { router, firstVisit } = useSetup();

    return (
        <>
            <div className={styles.wrapper}>
                {
                    firstVisit ?
                        <>
                            <Toaster
                                position="top-center"
                                reverseOrder={true}
                                toastOptions={{
                                    duration: 2000,
                                }}
                            />
                            <Htag tag='l'>
                                {setLocale(router.locale).your_x_authorized}
                            </Htag>
                            <MainButton text={setLocale(router.locale).back} type='primary'
                                onClick={() => router.push('/')} />
                        </>
                    : <Preloader />
                }

            </div>
        </>
    );
};
