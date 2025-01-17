import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface OnboardBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setIsOnboard: (e: boolean) => void,
}
