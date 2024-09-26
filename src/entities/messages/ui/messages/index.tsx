'use client';
import styles from './messages.module.css';
import { UserMessage } from '@/entities/messages/ui/user-message';
import { AiMessage } from '@/entities/messages/ui/ai-message';
import { useAppSelector } from '@/app/providers/store';
import { getMessagesReducer } from '../../model/reducers';
import { useEffect, useRef } from 'react';

export const Messages = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const messages = useAppSelector(getMessagesReducer);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo(0, ref.current.scrollHeight); // scroll to bottom when new messages appear
        }
    }, [messages]);

    // TODO: replace
    if (messages === null)
        return <section className={styles.wrapper}>zalupa</section>;

    return (
        <section ref={ref} className={styles.wrapper}>
            {messages.map((message, index) => {
                if (message.role === 'user')
                    return (
                        <UserMessage key={index} message={message.content} />
                    );
                if (message.role === 'assistant')
                    return <AiMessage key={index} message={message.content} />;
            })}
        </section>
    );
};
