import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments, CheckTaskArguments, StartTaskArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { changeTasks, changeUser } from "../features/refresh/refreshSlice";
import { setTasks } from "../features/tasks/tasksSlice";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";


export async function getTasks(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        const { data: response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/tasks/' + tgUser?.id);

        dispatch(setTasks(response));
        dispatch(changeTasks(false));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_tasks_error);
        console.error(err);
    }
}

export async function checkTasks(args: CheckTaskArguments) {
    const { dispatch, webApp, tgUser, taskId, delimeter, setIsClick, setIsLoading, setIsTaskError } = args;

    setIsLoading(true);

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            `/api/tasks/${tgUser?.id}/check/${taskId}`).then(r => {
                if (r.data.data) {
                    ToastSuccess(setLocale(tgUser?.language_code).task_successfully_completed);

                    dispatch(changeTasks(true));
                    dispatch(changeUser(true));    
                } else {
                    ToastError(setLocale(tgUser?.language_code).task_not_completed);
                    
                    setIsTaskError(true);
                    setTimeout(() => setIsTaskError(false), 2000);
                } 

                if (r.data.prize_alert) {
                    ToastSuccess(setLocale(tgUser?.language_code).congratulations_you_have_completed_tasks
                        .replace('$$$', String(delimeter)));
                }
            });
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.check_task_error);
        console.error(err);
    } finally {
        setIsClick(false);
        setIsLoading(false);
    }
}

export async function startTask(args: StartTaskArguments) {
    const { webApp, tgUser, text, link, isTwitter, isClick, isWaiting, setIsClick, setIsActive, isWebPlatform } = args;

    if (text.toLowerCase().includes('twitter') && !(isTwitter ? isTwitter['twitter'] : false)) {
        setIsActive(true);
    } else {
        if (!isClick) {
            if (text.toLowerCase().includes('telegram') && !isWebPlatform(webApp?.platform)) {
                webApp?.openTelegramLink(link);
            } else if (!isWaiting) {
                webApp?.openLink(link);
            }

            if (text.toLowerCase().includes('twitter')) {
                setTimeout(() => setIsClick(true), 15000);
            } else {
                setIsClick(true);
            }
        }
    }
}
