'use client';
import styles from './chat.module.css';
import { ChatField } from '@/features/chat-field';
import Messages from '@/entities/messages';
import { LeaveChat } from '@/features/leave-chat';
import { ClearHistory } from '@/features/clear-history';
import { QuestionsButton } from '@/features/questions-button';
import { useState } from 'react';

export const Chat = () => {
    const [loadingMessage, setLoadingMessage] = useState<boolean>(false);

    return (
        <section className={styles.chat}>
            <header className={styles.header}>
                <LeaveChat />
                <div className={styles.actions}>
                    <QuestionsButton />
                    <ClearHistory />
                </div>
            </header>
            <Messages />
            <ChatField />
        </section>
    );
};
