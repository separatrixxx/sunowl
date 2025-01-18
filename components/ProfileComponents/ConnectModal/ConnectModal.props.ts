import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ConnectModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: string,
    text: string,
    onClick: (e: any) => void,
    setIsActive: (e: boolean) => void,
}
