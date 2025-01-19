import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface UpgradesModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    spins: number,
    setIsActive: (e: boolean) => void,
}
