'use client';
import styles from './chatField.module.css';
import { TextField } from '@/shared/ui/text-field';
import { TooltipButton } from '@/shared/ui/tooltip-button';
import { useState } from 'react';
// import { useSendMessageMutation } from '@/app/api';
import { useAppDispatch } from '@/app/providers/store';
import { messagesActions } from '@/entities/messages';

export const ChatField = ({
    tooltips = false,
    otherFunction,
}: {
    tooltips?: boolean;
    otherFunction?: () => void;
}) => {
    const dispatch = useAppDispatch();
    const [fieldValue, setFieldValue] = useState<string>('');
    // const [sendMessages] = useSendMessageMutation();

    const onChangeFiledValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFieldValue(e.target.value);

    const onSelectTooltip = (value: string) => setFieldValue(value);

    const sendMessage = async () => {
        if (fieldValue) {
            dispatch(
                messagesActions.sendMessage({
                    role: 'user',
                    content: fieldValue,
                }),
            );
            if (otherFunction) {
                otherFunction();
            }
            setFieldValue('');
        }
        return;
    };

    return (
        <div className={styles.wrapper}>
            <TextField
                fieldValue={fieldValue}
                onChangeFieldValue={onChangeFiledValue}
                onClick={sendMessage}
            />
            {tooltips && (
                <div className={styles.tooltips}>
                    <TooltipButton
                        value={'Frontend разработчик'}
                        onClick={(e) => onSelectTooltip(e.currentTarget.value)}
                    >
                        Frontend разработчик
                    </TooltipButton>
                    <TooltipButton
                        value={'Юрист с высшим образованием'}
                        onClick={(e) => onSelectTooltip(e.currentTarget.value)}
                    >
                        Юрист с высшим образованием
                    </TooltipButton>
                    <TooltipButton
                        value={'Менеджер по продажам'}
                        onClick={(e) => onSelectTooltip(e.currentTarget.value)}
                    >
                        Менеджер по продажам
                    </TooltipButton>
                    <TooltipButton
                        value={'UI/UX дизайнер'}
                        onClick={(e) => onSelectTooltip(e.currentTarget.value)}
                    >
                        UI/UX дизайнер
                    </TooltipButton>
                </div>
            )}
        </div>
    );
};
