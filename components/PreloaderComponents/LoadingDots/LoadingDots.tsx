import styles from './LoadingDots.module.css';


export const LoadingDots = (): JSX.Element => {
    return (
        <div className={styles.loadingDots}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
        </div>
    );
};
