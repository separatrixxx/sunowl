import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface HowMuchItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    from: number,
    to?: number,
    count: number,
}
