import { useTelegram } from '../layout/TelegramProvider';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../features/store/store';
import { useRouter } from 'next/router';


export const useSetup = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { webApp, tgUser } = useTelegram();

    const user = useSelector((state: AppState) => state.user.user);
    const pool = useSelector((state: AppState) => state.pool.pool);

    return {
        router,
        dispatch,
        webApp,
        tgUser,
        user,
        pool,
    };
};
