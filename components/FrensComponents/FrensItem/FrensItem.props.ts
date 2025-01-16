import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface FrensItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    photo: string,
    name: string,
    isVerified: boolean,
}
