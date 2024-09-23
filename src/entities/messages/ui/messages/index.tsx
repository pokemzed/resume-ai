import styles from './messages.module.css';
import { UserMessage } from '@/entities/messages/ui/user-message';
import { AiMessage } from '@/entities/messages/ui/ai-message';

export const Messages = () => {
    return (
        <section className={styles.wrapper}>
            <UserMessage message={'Lorem ipsum.'} />
            <AiMessage
                message={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, explicabo.'
                }
            />
        </section>
    );
};
