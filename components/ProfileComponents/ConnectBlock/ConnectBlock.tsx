import { ConnectBlockProps } from './ConnectBlock.props';
import styles from './ConnectBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Buttons/Button/Button';
import cn from 'classnames';


export const ConnectBlock = ({ title, text, isConnected, onClick }: ConnectBlockProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.connectBlock}>
            <div className={styles.connectTextDiv}>
                <Htag tag='s'>
                    {!isConnected ? title : setLocale(tgUser?.language_code).wallet_connected + ':'}
                </Htag>
                {
                    !isConnected &&
                        <Htag tag='s' className={styles.connectText}>
                            {text}
                        </Htag>
                }
            </div>
            <Button className={cn(styles.connectButton, {
                [styles.connectedButton]: isConnected,
            })} text={setLocale(tgUser?.language_code).connect}
                type='primary' isIcon={isConnected} onClick={onClick} />
        </div>
    );
};
