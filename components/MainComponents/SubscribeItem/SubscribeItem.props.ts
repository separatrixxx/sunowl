import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SubscribeItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: string,
    link: string,
    isBorder: boolean,
}
