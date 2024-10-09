'use client';
import styles from './resume.module.css';
import { useAppDispatch, useAppSelector } from '@/app/providers/store';
import { getMessagesReducer } from '@/entities/messages';
import { PersonalInformation } from '../personal-information';
import { ContactInformation } from '../contact-information';
import { ProfessionalGoals } from '../professional-goals';
import { WorkExperience } from '../work-experience';
import { Education } from '../education';
import { ProfessionalSkills } from '../professional-skills';
import { Progress } from '../progress';
import { AdditionalInformation } from '../additional-information';
import { useEffect, useRef } from 'react';
import { useGetInfoUserMutation } from '@/app/api';
import { IUserInfo, userActions } from '@/entities/resume';
import { getUserInfo } from '@/entities/resume/model/reducers';
import { Loader } from '@/shared/ui/loader';

export const Resume = () => {
    const dispatch = useAppDispatch();
    const messages = useAppSelector(getMessagesReducer);
    const userInfo = useAppSelector(getUserInfo);
    const [getInfoUser, { isLoading }] = useGetInfoUserMutation();
    const ref = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        if (messages !== null) {
            dispatch(userActions.setLoading(isLoading));
            getInfoUser(messages)
                .unwrap()
                .then((res) => JSON.parse(res.choices[0].message.content))
                .then((json: IUserInfo) => {
                    if (json) {
                        dispatch(userActions.setUserInfo(json));
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => dispatch(userActions.setLoading(isLoading)));
        }
    }, [messages]);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo(0, ref.current.scrollHeight);
        }
    }, [userInfo, isLoading]);

    return (
        <div ref={ref} className={styles.wrapper}>
            <header className={styles.heaader}>
                {messages === null && (
                    <>
                        <h2>Давайте сделаем?</h2>
                        <p>Начните диалог, чтобы увидеть результат</p>
                    </>
                )}
                {messages && <h2>Резюме</h2>}
            </header>
            <PersonalInformation />
            <ContactInformation />
            <ProfessionalGoals />
            <WorkExperience />
            <Education />
            <ProfessionalSkills />
            <Progress />
            <AdditionalInformation />
            {isLoading && <Loader />}
        </div>
    );
};
