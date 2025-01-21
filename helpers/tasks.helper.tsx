import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments, CheckTaskArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { changeTasks, changeUser } from "../features/refresh/refreshSlice";
import { setTasks } from "../features/tasks/tasksSlice";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";



export async function getTasks(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        const { data : response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/tasks/' + tgUser?.id);
            
        dispatch(setTasks(response));
        dispatch(changeTasks(false));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_tasks_error);
        console.error(err);
    }
}

export async function checkTasks(args: CheckTaskArguments) {
    const { dispatch, webApp, tgUser, taskId, setIsLoading } = args;

    setIsLoading(true);

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            `/api/tasks/${tgUser?.id}/check/${taskId}`).then(r => {
                dispatch(changeTasks(true));
                dispatch(changeUser(true));

                ToastError(setLocale(tgUser?.language_code).task_not_completed);
                ToastSuccess(setLocale(tgUser?.language_code).task_successfully_completed);
            });
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.check_task_error);
        console.error(err);
    } finally {
        setIsLoading(false);
    }
}
