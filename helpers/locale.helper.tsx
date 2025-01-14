import { en } from "../locales/en.locale";


type localeType = typeof en;

export function setLocale(locale: string | undefined): localeType {
    switch (locale) {
        default:
            return en;
    }
}

export function getLanguages(router: any): localeType[] {
    const languages = [en];
    const langIndex = languages.indexOf(setLocale(router.locale));

    if (langIndex !== -1) {
        languages.splice(langIndex, 1);
    }

    return languages;
}
