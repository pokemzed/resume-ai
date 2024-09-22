'use client';
import styles from './chatField.module.css';
import { TextField } from '@/shared/ui/text-field';
import { TooltipButton } from '@/shared/ui/tooltip-button';
import { useState } from 'react';

export const ChatField = ({ content }: { content: boolean }) => {
    const [fieldValue, setFieldValue] = useState<string>('');

    const onChangeFiledValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFieldValue(e.target.value);

    const sendMessage = async () => {
        if (fieldValue) {
            console.log('sendMessage');
        }
    };

    return (
        <div className={styles.wrapper}>
            <TextField
                fieldValue={fieldValue}
                onChangeFieldValue={onChangeFiledValue}
                onClick={sendMessage}
            />
            {!content && (
                <div className={styles.tooltips}>
                    <TooltipButton>Frontend разработчик</TooltipButton>
                    <TooltipButton>Юрист с высшим образованием</TooltipButton>
                    <TooltipButton>Менеджер по продажам</TooltipButton>
                    <TooltipButton>UI/UX дизайнер</TooltipButton>
                </div>
            )}
        </div>
    );
};
