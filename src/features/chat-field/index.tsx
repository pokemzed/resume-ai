'use client';
import styles from './chatField.module.css';
import { TextField } from '@/shared/ui/text-field';
import { TooltipButton } from '@/shared/ui/tooltip-button';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/providers/store';
import {
    getMessagesReducer,
    IMessage,
    messagesActions,
} from '@/entities/messages';
import { useSendMessageMutation } from '@/app/api';

export const ChatField = ({
    tooltips = false,
    otherFunction,
}: {
    tooltips?: boolean;
    otherFunction?: () => void;
}) => {
    const dispatch = useAppDispatch();
    const [fieldValue, setFieldValue] = useState<string>('');
    const messages = useAppSelector(getMessagesReducer);
    const [sendMessageRequest] = useSendMessageMutation();

    const onChangeFiledValue = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFieldValue(e.target.value);

    const onSelectTooltip = (value: string) => setFieldValue(value);

    const onKeySendMessage = async (
        e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (e.key === 'Enter') {
            await sendMessage();
        }
    };

    const sendMessage = async () => {
        if (fieldValue) {
            const fieldObject: IMessage = {
                role: 'user',
                content: fieldValue,
            };

            // state actions
            dispatch(messagesActions.sendMessage(fieldObject));
            dispatch(messagesActions.setLoading(true));

            // request
            sendMessageRequest(
                messages ? [...messages, fieldObject] : [fieldObject],
            )
                .unwrap()
                .then((res) => {
                    dispatch(
                        messagesActions.sendMessage({
                            role: 'assistant',
                            content: res?.choices[0].message.content,
                        }),
                    );
                    dispatch(messagesActions.setLoading(false));
                })
                .catch((err) => console.log(err));

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
                onKeyHandler={onKeySendMessage}
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
