import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface RaidBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: string,
    timeRemaining: string,
}
