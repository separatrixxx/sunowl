import { ToastSuccess } from "../components/Common/Toast/Toast";

export function copyToClipboard(link: string, text: string) {
    navigator.clipboard.writeText(link)
        .then(() => {
            ToastSuccess(text);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}
