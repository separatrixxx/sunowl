import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TagsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: string,
    tags: string[],
}
