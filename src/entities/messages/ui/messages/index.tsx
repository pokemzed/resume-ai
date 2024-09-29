'use client';
import styles from './messages.module.css';
import { UserMessage } from '@/entities/messages/ui/user-message';
import { AiMessage } from '@/entities/messages/ui/ai-message';
import { useAppSelector } from '@/app/providers/store';
import { getMessagesReducer } from '@/entities/messages';
import { useEffect, useRef } from 'react';
import { getLoadingMessagesReducer } from '@/entities/messages/model/reducers';
import { Loader } from '@/shared/ui/loader';

export const Messages = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const messages = useAppSelector(getMessagesReducer);
    const isLoading = useAppSelector(getLoadingMessagesReducer);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo(0, ref.current.scrollHeight); // scroll to bottom when new messages appear
        }
    }, [messages]);

    // TODO: replace
    if (messages === null)
        return (
            <section className={styles.wrapper}>
                <p className={styles.clearHistory}>
                    Сообщений пока нет. Начните диалог прямо сейчас
                </p>
            </section>
        );

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
            {isLoading && <AiMessage loading message={<Loader />} />}
        </section>
    );
};
