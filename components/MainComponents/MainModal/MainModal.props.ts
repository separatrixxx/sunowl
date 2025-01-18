import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface MainModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setIsActive: (e: boolean) => void,
}
