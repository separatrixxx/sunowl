import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TasksListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'event' | 'raid',
}
