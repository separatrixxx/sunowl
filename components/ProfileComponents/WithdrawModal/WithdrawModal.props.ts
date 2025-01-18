import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface WithdrawModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setIsActive: (e: boolean) => void,
}