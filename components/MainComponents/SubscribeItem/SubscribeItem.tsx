import { SubscribeItemProps } from './SubscribeItem.props';
import styles from './SubscribeItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Buttons/Button/Button';
import cn from 'classnames';
import { FrameButton } from '../../Buttons/FrameButton/FrameButton';
import { useState } from 'react';
import { getUser } from '../../../helpers/user.helper';
import { ToastSuccess } from '../../Common/Toast/Toast';


export const SubscribeItem = ({ type, link, isAuth, isBorder }: SubscribeItemProps): JSX.Element => {
    const { dispatch, webApp, tgUser } = useSetup();

    const [isClick, setIsClick] = useState<boolean>(false);

    return (
        <div className={cn(styles.subscribeItem, {
            [styles.borderItem]: isBorder,
        })}>
            <Htag tag='s'>
                {setLocale(tgUser?.language_code).join_owl + ' ' + type}
            </Htag>
            {
                !isClick && !isAuth ?
                    <Button text={setLocale(tgUser?.language_code).join} type='primary'
                        onClick={() => {
                            if (link) {                                
                                try {
                                    webApp?.openTelegramLink(link);

                                    ToastSuccess(setLocale(tgUser?.language_code).checking_subscription);
                                    setIsClick(true);
                                } catch (e) {
                                    console.error(e);
                                }
                            }
                        }} />
                : isClick ?
                    <FrameButton type='pending' onClick={() => getUser({
                        webApp: webApp,
                        dispatch: dispatch,
                        tgUser: tgUser,
                    })} />
                : <FrameButton type='ok' />
            }
        </div>
    );
};
