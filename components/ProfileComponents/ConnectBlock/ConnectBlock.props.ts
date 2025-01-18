import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ConnectBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    text: string,
    isConnected: boolean,
    onClick: (e: any) => void,
}
