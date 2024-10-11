'use client';
import { IconButton } from '@/shared/ui/icon-button';
import ResumeIcon from '@/shared/assets/resume.svg';
import { useCallback, useState } from 'react';
import { useAppSelector } from '@/app/providers/store';
import { getUserInfo } from '@/entities/resume/model/reducers';
import { ModalTemplate } from '@/shared/ui/modal';
import Resume from '@/entities/resume';
import styles from './resumeModal.module.css';
import { ResumeProgress } from '@/features/resume-progress';

export const ResumeModal = () => {
    const [toggleModal, setToggleModal] = useState<boolean>(false);
    const userInfo = useAppSelector(getUserInfo);

    const onCloseModal = useCallback(() => setToggleModal(false), []);
    const onOpenModal = useCallback(() => setToggleModal(true), []);

    if (!userInfo?.personalInformation) return null;

    return (
        <>
            <IconButton onClick={onOpenModal} className={styles.resumeButton}>
                <ResumeIcon />
                <span>Резюме</span>
            </IconButton>
            <ModalTemplate
                onClose={onCloseModal}
                open={toggleModal}
                title={'Ваше резюме'}
            >
                <Resume />
                <ResumeProgress />
            </ModalTemplate>
        </>
    );
};
