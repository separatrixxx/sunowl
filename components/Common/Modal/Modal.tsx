import { ModalProps } from './Modal.props';
import styles from './Modal.module.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Htag } from '../Htag/Htag';
import { isWebPlatform } from '../../../helpers/platform.helper';
import { useSetup } from '../../../hooks/useSetup';
import CloseIcon from './close.svg';
import cn from 'classnames';


export const Modal = ({ title, isActive, setIsActive, children, className }: ModalProps): JSX.Element => {
    const { webApp } = useSetup();

    const variants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        }
    };

    const variantsModal = {
        visible: {
            transform: 'translateY(0%)',
        },
        hidden: {
            transform: 'translateY(100%)',
        }
    };

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsActive(false);
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [setIsActive]);

    return (
        <motion.div className={cn(styles.modal, {
            [styles.active]: isActive,
        })} onClick={() => setIsActive(false)}
            variants={variants}
            initial={isActive ? 'visible' : 'hidden'}
            transition={{ duration: 0.15 }}
            animate={isActive ? 'visible' : 'hidden'}>
            <motion.div className={cn(styles.modalContent, className)} onClick={e => e.stopPropagation()}
                variants={variantsModal}
                initial={isActive ? 'visible' : 'hidden'}
                transition={{ duration: 0.15 }}
                animate={isActive ? 'visible' : 'hidden'}>
                <Htag tag='s' className={styles.modalTitle}>
                    <span />
                    {title}
                    <CloseIcon className={cn(styles.closeIcon, {
                        [styles.weba]: isWebPlatform(webApp?.platform),
                    })} onClick={() => setIsActive(false)} />
                </Htag>
                {children}
            </motion.div>
        </motion.div>
    );
};
