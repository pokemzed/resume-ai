'use client';
import styles from './startScreen.module.css';
import { ChatField } from '@/features/chat-field';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/app/providers/store';
import { messagesActions } from '@/entities/messages';
import { userActions } from '@/entities/resume';

export const StartScreen = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(messagesActions.clearHistory());
        dispatch(userActions.setUserInfo(null));
        if (visible) {
            setTimeout(() => router.push('/chat'), 250);
        }
    }, [router, visible]);

    return (
        <main className={`${styles.wrapper} ${visible && styles.redirect}`}>
            <section className={styles.text}>
                <h1>Резюме за считанные минуты</h1>
                <p>Создайте своё уникальное резюме в одно мгновение</p>
            </section>
            <ChatField otherFunction={() => setVisible(true)} tooltips />
        </main>
    );
};
