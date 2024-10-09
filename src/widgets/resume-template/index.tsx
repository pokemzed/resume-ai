import styles from './resumeTemplate.module.css';
import Resume from '@/entities/resume';

export const ResumeTemplate = () => {
    return (
        <section className={styles.wrapper}>
            <Resume />
        </section>
    );
};
