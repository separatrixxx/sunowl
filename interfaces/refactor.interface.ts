import { TonConnectUI, Wallet, WalletInfoWithOpenMethod } from "@tonconnect/ui-react";
import { IWebApp, ITelegramUser } from "../types/telegram";
import { AuthenticationInterface } from "./user.interface";


export interface ErrorArguments {
    webApp: IWebApp | undefined,
}

export interface BaseArguments extends ErrorArguments {
    tgUser: ITelegramUser | undefined,
    dispatch: any,
}

export interface ClaimArguments extends BaseArguments {
    setIsLoading: (e: boolean) => void,
    setTokens: (e: number) => void,
}

export interface PayUpgradeArguments extends BaseArguments {
    price: number | undefined,
    spins: number,
    setIsLoading: (e: boolean) => void,
    setIsActive: (e: boolean) => void,
}

export interface PayTonUpgradeArguments extends PayUpgradeArguments {
    wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null,
    tonConnectUI: TonConnectUI,
    price: number | undefined,
    setIsLoading: (e: boolean) => void,
    setIsActive: (e: boolean) => void,
}

export interface CheckTaskArguments extends BaseArguments {
    taskId: string,
    delimeter: number,
    setIsClick: (e: boolean) => void,
    setIsLoading: (e: boolean) => void,
    setIsTaskError: (e: boolean) => void,
}

export interface StartTaskArguments extends Omit<BaseArguments, 'dispatch'> {
    text: string,
    link: string,
    isTwitter?: AuthenticationInterface,
    isClick: boolean,
    isWaiting: boolean,
    setIsClick: (e: boolean) => void,
    setIsActive: (e: boolean) => void,
    isWebPlatform(platform: string | undefined): boolean,
}
