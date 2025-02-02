import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ConnectTwitterModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setIsActive: (e: boolean) => void,
}
