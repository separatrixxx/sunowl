import styles from './FrensPage.module.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { useSetup } from '../../hooks/useSetup';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { MainButton } from '../../components/Buttons/MainButton/MainButton';
import { FrensList } from '../../components/FrensComponents/FrensList/FrensList';
import { useState } from 'react';
import { Modal } from '../../components/Common/Modal/Modal';
import { FrensModal } from '../../components/FrensComponents/FrensModal/FrensModal';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Preloader } from '../../components/PreloaderComponents/Preloader/Preloader';
import { FrensDataInterface } from '../../interfaces/data.interface';
import { getFrensData } from '../../helpers/data.helper';
import { BorderButton } from '../../components/Buttons/BorderButton/BorderButton';
import { HowMuchModal } from '../../components/FrensComponents/HowMuchModal/HowMuchModal';


export const FrensPage = (): JSX.Element => {
    const { tgUser, user, firstVisit } = useSetup();

    const frensData: FrensDataInterface = getFrensData(user);

    const [isActive, setIsActive] = useState<boolean>(false);
    const [isActive2, setIsActive2] = useState<boolean>(false);

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
                                {
                                    user.data.statistics.total_friends === 0 ?
                                        setLocale(tgUser.language_code).invite_frens :
                                        <>
                                           {`${frensData.totalFrens} ${setLocale(tgUser.language_code).frens}. `}
                                            <span className={styles.verifiedFrens}>
                                                {`${frensData.authorizedFrens} ${setLocale(tgUser.language_code).verified}`}
                                            </span>
                                        </>
                                }
                            </Htag>
                            <Htag tag='s' className={styles.frensText}>
                                {setLocale(tgUser.language_code).invite_frens_text}
                            </Htag>
                            <BorderButton text={setLocale(tgUser.language_code).how_much_spins_for_frens + '?'}
                                onClick={() => setIsActive2(true)} />
                            <FrensList />
                            <MainButton className={styles.frensButton}
                                text={setLocale(tgUser.language_code).invite_frens} type='primary'
                                onClick={() => setIsActive(true)} />
                            <Navbar />
                            <Modal title={setLocale(tgUser.language_code).invite_a_fren}
                                isActive={isActive} setIsActive={setIsActive} >
                                <FrensModal setIsActive={setIsActive} />
                            </Modal>
                            <Modal title={setLocale(tgUser.language_code).how_much_spins + '?'}
                                isActive={isActive2} setIsActive={setIsActive2} >
                                <HowMuchModal setIsActive={setIsActive2} />
                            </Modal>
                        </>
                    : <Preloader />
                }

            </div>
        </>
    );
};
