import { IWebApp, ITelegramUser } from "../types/telegram";


export interface ErrorArguments {
    router: any,
    webApp: IWebApp | undefined,
}

export interface BaseArguments extends ErrorArguments {
    tgUser: ITelegramUser | undefined,
    dispatch: any,
}
