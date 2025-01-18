import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ConnectItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: string,
    title: string,
    text: string,
    isConnected: boolean,
    onClick: (e: any) => void,
}
