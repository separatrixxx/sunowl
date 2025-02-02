import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface BorderButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    isPrimary?: boolean,
    isDisabled?: boolean,
	onClick: (e: any) => void,
}
