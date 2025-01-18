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
    const firstVisit = useSelector((state: AppState) => state.firstVisit.firstVisit);
    const refresh = useSelector((state: AppState) => state.refresh.refresh);

    return {
        router,
        dispatch,
        webApp,
        tgUser,
        user,
        pool,
        firstVisit,
        refresh,
    };
};
