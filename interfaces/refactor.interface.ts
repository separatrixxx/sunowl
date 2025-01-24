import { IWebApp, ITelegramUser } from "../types/telegram";


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
    spins: number,
    setIsLoading: (e: boolean) => void,
    setIsActive: (e: boolean) => void,
}

export interface CheckTaskArguments extends BaseArguments {
    taskId: string,
    setIsClick: (e: boolean) => void,
    setIsLoading: (e: boolean) => void,
}
