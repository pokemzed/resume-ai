import { Chat as ChatWidget } from '@/widgets/chat';
import styles from './chat.module.css';
import { ResumeTemplate } from '@/widgets/resume-template';

const Chat = () => {
    return (
        <div className={styles.wrapper}>
            <ChatWidget />
            <ResumeTemplate />
        </div>
    );
};
export default Chat;
