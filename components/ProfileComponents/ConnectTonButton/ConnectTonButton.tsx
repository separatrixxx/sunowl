import styles from './ConnectTonButton.module.css';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useResizeW } from '../../../hooks/useResize';


export const ConnectTon = () => {
    const { tgUser } = useSetup();

    const wallet = useTonWallet();
    const width = useResizeW();

    const slice = width > 450 ? 15 : 6;

    return (
        <div className={styles.connectItem}>
            <div className={styles.connectTextDiv}>
                <Htag tag='s'>
                    {wallet && wallet.account.address ?
                        setLocale(tgUser?.language_code).wallet_connected + ':\n' +
                        wallet.account.address.slice(0, slice) + '...' + wallet.account.address.slice(-4) :
                        setLocale(tgUser?.language_code).connect_ton_wallet}
                </Htag>
                {
                    !(wallet && wallet.account.address) &&
                        <Htag tag='s' className={styles.connectText}>
                            {setLocale(tgUser?.language_code).you_will_need_it_ton_wallet}
                        </Htag>
                }
            </div>
            <TonConnectButton />
        </div>
    );
};
