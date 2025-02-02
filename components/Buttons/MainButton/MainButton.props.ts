import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface MainButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    type: 'primary' | 'light' | 'white' | 'black',
    isLoading?: boolean,
    isDisabled?: boolean,
    isSmall?: boolean,
    isNoShadow?: boolean,
	onClick: (e: any) => void,
}
