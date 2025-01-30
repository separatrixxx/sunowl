import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TaskItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    taskId: string,
    type: 'active' | 'completed' | 'missed',
    text: string,
    link: string,
    tags?: string[],
    isRaid?: boolean,
    endTime?: string | null,
}
