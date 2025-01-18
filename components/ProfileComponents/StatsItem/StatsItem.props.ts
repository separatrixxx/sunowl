import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface StatsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string,
    stat: number,
    isBorder: boolean,
}
