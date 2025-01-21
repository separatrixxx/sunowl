import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SpinsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tokens: number,
}
