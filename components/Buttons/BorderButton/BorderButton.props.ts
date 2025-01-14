import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface BorderButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
	onClick: (e: any) => void,
}
