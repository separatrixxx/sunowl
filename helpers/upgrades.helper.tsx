import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments, PayUpgradeArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { setUpgrades } from "../features/upgrades/upgradesSlice";
import { changeUser } from "../features/refresh/refreshSlice";


export async function getUpgrades(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        const { data : response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/upgrades/' + tgUser?.id);
            
        dispatch(setUpgrades(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_upgrades_error);
        console.error(err);
    }
}

export async function payUpgrade(args: PayUpgradeArguments) {
    const { dispatch, webApp, tgUser, spins, setIsLoading, setIsActive } = args;

    setIsLoading(true);

    try {
        await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/api/payments/create/${tgUser?.id}/${spins}`);

        setIsActive(true);
        dispatch(changeUser(true))
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.pay_upgarde_error);
        console.error(err);
    } finally {
        setIsLoading(false);
    }
}
