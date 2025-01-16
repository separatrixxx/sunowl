import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface FrensModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setIsActive: (e: boolean) => void,
}
