import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TaskItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'active' | 'completed' | 'missed',
    text: string,
}
