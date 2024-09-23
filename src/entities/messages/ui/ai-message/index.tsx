import styles from './aiMessage.module.css';
import AiIcon from '@/shared/assets/ai.svg';
export const AiMessage = ({ message }: { message: string }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <AiIcon />
            </div>
            <span className={styles.message}>{message}</span>
        </div>
    );
};
