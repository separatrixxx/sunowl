import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TasksDataInterface } from '../../../interfaces/data.interface';


export interface TasksProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tasksData: TasksDataInterface,
}
