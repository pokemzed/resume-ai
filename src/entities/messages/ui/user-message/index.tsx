import styles from './userMessage.module.css';

export const UserMessage = ({ message }: { message: string }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.message}>{message}</span>
        </div>
    );
};
