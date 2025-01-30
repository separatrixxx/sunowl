import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";


export function copyToClipboard(link: string, text: string, errorText: string) {
    navigator.clipboard.writeText(link)
        .then(() => {
            ToastSuccess(text);
        })
        .catch(() => {
            ToastError(errorText);
        });
}
