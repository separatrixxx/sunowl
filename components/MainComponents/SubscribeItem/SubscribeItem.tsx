import { SubscribeItemProps } from './SubscribeItem.props';
import styles from './SubscribeItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Buttons/Button/Button';
import { FrameButton } from '../../Buttons/FrameButton/FrameButton';
import { useState } from 'react';
import { getUser } from '../../../helpers/user.helper';
import { ToastError, ToastSuccess } from '../../Common/Toast/Toast';
import { isWebPlatform } from '../../../helpers/platform.helper';
import cn from 'classnames';


export const SubscribeItem = ({ type, link, isAuth, isBorder }: SubscribeItemProps): JSX.Element => {
    const { dispatch, webApp, tgUser } = useSetup();

    const [isClick, setIsClick] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <div className={cn(styles.subscribeItem, {
            [styles.borderItem]: isBorder,
        })}>
            <Htag tag='s'>
                {setLocale(tgUser?.language_code).join_owl + ' ' + type}
            </Htag>
            {
                !isClick && !isAuth ?
                    <Button className={cn(styles.subscribeButton, styles.joinButton)}
                        text={setLocale(tgUser?.language_code).join} type='primary' onClick={() => {
                            if (link) {                                
                                try {
                                    if (type !== 'twitter' && !isWebPlatform(webApp?.platform)) {
                                        webApp?.openTelegramLink(link);
                                    } else {
                                        webApp?.openLink(link);
                                    }

                                    ToastSuccess(setLocale(tgUser?.language_code).checking_subscription);
                                    setIsClick(true);
                                } catch (e) {
                                    console.error(e);
                                }
                            }
                        }} />
                : isClick ?
                    <FrameButton className={cn(styles.subscribeButton, {
                        [styles.loadingButton]: isLoading,
                    })} type='pending' isLoading={isLoading}
                        onClick={() => {
                            setIsLoading(true);

                            getUser({
                                webApp: webApp,
                                dispatch: dispatch,
                                tgUser: tgUser,
                            }). then(() => {
                                setIsClick(false);
                                setIsLoading(false);
                            });
                            
                        }} />
                : <FrameButton className={styles.subscribeButton} type='ok' />
            }
        </div>
    );
};
