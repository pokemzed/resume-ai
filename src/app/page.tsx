'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { Chat } from '@/widgets/chat';

const Home = () => {
    const [content, setContent] = useState<boolean>(false);
    return (
        <main className={`${styles.wrapper} ${content && styles.content}`}>
            <section className={styles.text}>
                <h1>Резюме за считанные минуты</h1>
                <p>Создайте своё уникальное резюме в одно мгновение</p>
                <button onClick={() => setContent(!content)}>click</button>
            </section>
            <Chat />
        </main>
    );
};
export default Home;
