import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { setUser, setUserDefault } from "../features/user/userSlice";
import { BaseArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { changeUser } from "../features/refresh/refreshSlice";
import { getUpgrades } from "./upgrades.helper";



export async function getUser(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;
    
    try {
        const { data : response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/users/' + tgUser?.id);
            
        dispatch(setUser(response));
        dispatch(changeUser(false));

        getUpgrades(args);
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_user_error, async function () {
            webApp.close();
        });

        console.error(err);
    }
}
