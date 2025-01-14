import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Button } from '../../components/Buttons/Button/Button';
import { BorderButton } from '../../components/Buttons/BorderButton/BorderButton';
import { FrameButton } from '../../components/Buttons/FrameButton/FrameButton';
import { MainButton } from '../../components/Buttons/MainButton/MainButton';


export const MainPage = (): JSX.Element => {
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
                            <Button text='share' type='primary' onClick={() => {}} />
                            <Button text='share' type='white' onClick={() => {}} />
                            <BorderButton text='HOW To INCREASE DAILY SPINS?' onClick={() => {}} />
                            <FrameButton type='ok' />
                            <FrameButton type='pending' />
                            <FrameButton type='error' />
                            <MainButton text='WITHDRAW' type='primary' onClick={() => {}} />
                            <MainButton text='WITHDRAW' type='white' onClick={() => {}} />
                            <Navbar />
                        </>
                }

            </div>
        </>
    );
};
