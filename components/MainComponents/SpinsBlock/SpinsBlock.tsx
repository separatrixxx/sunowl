import { SpinsBlockProps } from './SpinsBlock.props';
import styles from './SpinsBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useEffect, useState } from 'react';
import { ToastSuccess } from '../../Common/Toast/Toast';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';


export const SpinsBlock = ({ tokens, setTokens }: SpinsBlockProps): JSX.Element => {
    const { tgUser } = useSetup();
    console.log(tokens)
    
    const [firstDigit, setFirstDigit] = useState<number>(0);
    const [secondDigit, setSecondDigit] = useState<number>(0);
    const [thirdDigit, setThirdDigit] = useState<number>(0);
        
    const getRandomDigit = () => Math.floor(Math.random() * 10);
    
    useEffect(() => {
        if (tokens === 0) return;
        
        const digits = String(tokens).padStart(3, '0').split('').map(Number);
                
        const spinInterval = setInterval(() => {
            setFirstDigit(getRandomDigit());
            setSecondDigit(getRandomDigit());
            setThirdDigit(getRandomDigit());
        }, 70);
        
        setTimeout(() => {
            clearInterval(spinInterval);
            setThirdDigit(digits[2]);
            
            setTimeout(() => {
                setSecondDigit(digits[1]);
                
                setTimeout(() => {
                    setFirstDigit(digits[0]);
                    ToastSuccess(setLocale(tgUser?.language_code).you_claimed_tokens.replace('$$$', String(tokens)));
                }, 200);
            }, 200);
        }, 3000);
        
        return () => clearInterval(spinInterval);
    }, [tokens, tgUser?.language_code]);
    
    return (
        <div className={styles.spinsBlock}>
            <div className={styles.spinsDiv}>
                <Htag tag='xxxl'>
                    {firstDigit}
                </Htag>
            </div>
            <div className={styles.spinsDiv}>
                <Htag tag='xxxl'>
                    {secondDigit}
                </Htag>
            </div>
            <div className={styles.spinsDiv}>
                <Htag tag='xxxl'>
                    {thirdDigit}
                </Htag>
            </div>
        </div>
    );
};
