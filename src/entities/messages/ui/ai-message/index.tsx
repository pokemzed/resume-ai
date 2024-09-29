import styles from './aiMessage.module.css';
import AiIcon from '@/shared/assets/ai.svg';
export const AiMessage = ({
    message,
    loading,
}: {
    message: string | React.ReactNode;
    loading?: boolean;
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <AiIcon />
            </div>
            <span className={`${styles.message} ${loading && styles.loading}`}>
                {message}
            </span>
        </div>
    );
};
