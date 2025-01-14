import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface FrameButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'ok' | 'pending' | 'error',
}
