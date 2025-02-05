import styles from './SunPumpBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import Image from 'next/image';
import { MainButton } from '../../Buttons/MainButton/MainButton';


export const SunPumpBlock = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const link = process.env.NEXT_PUBLIC_SUNPUMP_LINK || '/';

    return (
        <div className={styles.sunPumpBlock}>
            <Htag tag='l'>
                {setLocale(tgUser?.language_code).buy_owl_on_sunpump}
            </Htag>
            <Htag tag='s' className={styles.connectText}>
                {setLocale(tgUser?.language_code).buy_on_sunpump_text}
            </Htag>
            <MainButton text={setLocale(tgUser?.language_code).buy_on_sunpump} type='primary'
                onClick={() => webApp?.openLink(link)} />
        </div>
    );
};
