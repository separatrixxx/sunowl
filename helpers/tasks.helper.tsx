import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { changeTasks } from "../features/refresh/refreshSlice";
import { setTasks } from "../features/tasks/tasksSlice";



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
