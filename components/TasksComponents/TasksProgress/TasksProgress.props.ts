import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TasksProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tasksCount: number,
}
