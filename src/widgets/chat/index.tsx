import styles from './chat.module.css';
import { ChatField } from '@/features/chat-field';
import { useState } from 'react';
import { Messages } from '@/features/messages';

export const Chat = () => {
    const [content, setContent] = useState<boolean>(false);
    return (
        <section className={styles.chat}>
            {content && <Messages />}
            <ChatField content={content} />
        </section>
    );
};
