import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface MainButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    type: 'primary' | 'light' | 'white',
    isLoading?: boolean,
    isDisabled?: boolean,
	onClick: (e: any) => void,
}
