'use client';
import styles from './resumeTemplate.module.css';
import Resume from '@/entities/resume';
import { useAppSelector } from '@/app/providers/store';
import { getUserInfo } from '@/entities/resume/model/reducers';
import { ResumeProgress } from '@/features/resume-progress';

export const ResumeTemplate = () => {
    const userInfo = useAppSelector(getUserInfo);
    const visibleResume =
        userInfo && userInfo.personalInformation ? styles.visible : '';

    return (
        <section className={`${styles.wrapper} ${visibleResume}`}>
            <Resume />
            <ResumeProgress />
        </section>
    );
};
