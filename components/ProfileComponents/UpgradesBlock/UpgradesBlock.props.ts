import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface UpgradesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    spins: number,
    nextSpins?: number,
    priceTon?: number,
    priceStars?: number,
    isFinal: boolean,
}
