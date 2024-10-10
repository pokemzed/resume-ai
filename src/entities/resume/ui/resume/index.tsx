'use client';
import styles from './resume.module.css';
import { useAppSelector } from '@/app/providers/store';
import { PersonalInformation } from '../personal-information';
import { ContactInformation } from '../contact-information';
import { ProfessionalGoals } from '../professional-goals';
import { WorkExperience } from '../work-experience';
import { Education } from '../education';
import { ProfessionalSkills } from '../professional-skills';
import { Progress } from '../progress';
import { AdditionalInformation } from '../additional-information';
import { useEffect, useRef } from 'react';
import { getUserInfo, getUserIsLoading } from '../../model/reducers';
import { Loader } from '@/shared/ui/loader';
import { About } from '@/entities/resume/ui/about';

export const Resume = () => {
    const userInfo = useAppSelector(getUserInfo);
    const isLoading = useAppSelector(getUserIsLoading);
    const ref = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo(0, ref.current.scrollHeight);
        }
    }, [userInfo, isLoading]);

    return (
        <div ref={ref} className={styles.wrapper}>
            <header className={styles.heaader}>
                <h2>Ваше резюме</h2>
            </header>
            <PersonalInformation />
            <ContactInformation />
            <ProfessionalGoals />
            <WorkExperience />
            <Education />
            <ProfessionalSkills />
            <Progress />
            <AdditionalInformation />
            <About />
            <div className={`${styles.loader} ${isLoading && styles.visible}`}>
                <Loader />
                <span>Форматируем под шаблон</span>
            </div>
        </div>
    );
};
