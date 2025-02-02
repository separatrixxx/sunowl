import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface HowMuchModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setIsActive: (e: boolean) => void,
}
