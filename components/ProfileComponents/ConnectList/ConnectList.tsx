import { setLocale } from "../../../helpers/locale.helper";
import { useSetup } from "../../../hooks/useSetup";
import { ConnectItem } from "../ConnectItem/ConnectItem";


export const ConnectList = (): JSX.Element => {
    const { webApp, tgUser, user } = useSetup();

    return (
        <>
            {user.data.authentication.slice(3, user.data.authentication.length).map(cb => {
                const type = Object.keys(cb).find(key => key !== 'description' && key !== 'auth_url');

                return (
                    <ConnectItem type={type || 'ton_wallet'}
                        title={setLocale(tgUser?.language_code)['connect_' + type as 'connect_ton_wallet']}
                        text={setLocale(tgUser?.language_code)['you_will_need_it_' + type as 'you_will_need_it_ton_wallet']}
                        isConnected={user.status === 'success' ? !Boolean(cb.auth_url) : false}
                        onClick={() => webApp?.openLink(cb.auth_url || '/')} />
                );
            })}
        </>
    );
};
