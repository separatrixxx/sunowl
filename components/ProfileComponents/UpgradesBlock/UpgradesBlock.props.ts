import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { SpinsDataInterface } from '../../../interfaces/data.interface';


export interface UpgradesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    spinsData: SpinsDataInterface,
}
