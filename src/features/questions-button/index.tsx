'use client';
import { IconButton } from '@/shared/ui/icon-button';
import QuestionIcon from '@/shared/assets/question.svg';
import { useCallback, useState } from 'react';
import { ModalTemplate } from '@/shared/ui/modal';
import { IconTextTemplate } from '@/shared/ui/resume/icon-text-template';
import TelegramIcon from '@/shared/assets/telegram.svg';
import VkIcon from '@/shared/assets/vk.svg';
import styles from './questionButton.module.css';

export const QuestionsButton = () => {
    const [toggleModal, setToggleModal] = useState<boolean>(false);

    const onCloseModal = useCallback(() => setToggleModal(false), []);
    const onOpenModal = useCallback(() => setToggleModal(true), []);
    return (
        <>
            <IconButton onClick={onOpenModal}>
                <QuestionIcon />
                <span>Остались вопросы?</span>
            </IconButton>
            <ModalTemplate
                onClose={onCloseModal}
                open={toggleModal}
                title={'Остались вопросы?'}
            >
                <p className={styles.text}>
                    Если у вас остались вопросы или вы имеете желание внести
                    вклад в развитие проекта, то можете связаться со мной.
                </p>
                <div className={styles.socials}>
                    <a href={'https://t.me/pokemzed'} target={'_blank'}>
                        <IconTextTemplate
                            icon={<TelegramIcon />}
                            text={'t.me/pokemzed'}
                        />
                    </a>
                    <a href={'https://vk.com/pokemzed'} target={'_blank'}>
                        <IconTextTemplate
                            icon={<VkIcon />}
                            text={'vk.com/pokemzed'}
                        />
                    </a>
                </div>
            </ModalTemplate>
        </>
    );
};
