import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { setPool } from "../features/pool/poolSlice";
import { BaseArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";


export async function getPool(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        const { data : response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/pool/status');
            
        dispatch(setPool(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_pool_error);
        console.error(err);
    }
}
