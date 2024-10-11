import styles from './aiMessage.module.css';
import AiIcon from '@/shared/assets/ai.svg';
export const AiMessage = ({
    message,
    loading,
}: {
    message: string | React.ReactNode;
    loading?: boolean;
}) => {
    const formattedText =
        typeof message === 'string' &&
        message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/### (.+)/g, '<strong>$1</strong>')
            .replace(/---/g, '<hr />')
            .replace(/\n/g, '<br />');
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <AiIcon />
            </div>
            <span className={`${styles.message} ${loading && styles.loading}`}>
                {loading ? (
                    message
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: formattedText }} />
                )}
            </span>
        </div>
    );
};
