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
import { getLoadingMessagesReducer } from '@/entities/messages/model/reducers';
import { SYSTEM_PROMPT } from '@/entities/messages/model/lib/prompt';

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
    const isLoading = useAppSelector(getLoadingMessagesReducer);
    const [sendMessageRequest] = useSendMessageMutation();

    const onChangeFiledValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setFieldValue(e.target.value);

    const onSelectTooltip = (value: string) => {
        if (fieldValue.length) {
            return setFieldValue(fieldValue + ` ${value}`);
        }
        setFieldValue(value);
    };

    // const onKeySendMessage = async (
    //     e: React.KeyboardEvent<HTMLTextAreaElement>,
    // ) => {
    //     if (e.key === 'Enter' && !isLoading) {
    //         if (fieldValue.length) {
    //             await sendMessage();
    //         }
    //     }
    // };

    const sendMessage = async () => {
        if (fieldValue.length) {
            const fieldObject: IMessage = {
                role: 'user',
                content: fieldValue,
            };

            // state actions
            dispatch(messagesActions.sendMessage(fieldObject));
            dispatch(messagesActions.setLoading(true));

            if (otherFunction) {
                otherFunction();
            }

            // request
            sendMessageRequest(
                messages
                    ? [...messages, fieldObject]
                    : [{ role: 'system', content: SYSTEM_PROMPT }, fieldObject],
            )
                .unwrap()
                .then((res) => {
                    dispatch(
                        messagesActions.sendMessage({
                            role: 'assistant',
                            content: res?.choices[0].message.content,
                        }),
                    );
                })
                .catch((err) => console.log(err))
                .finally(() => dispatch(messagesActions.setLoading(false)));

            setFieldValue('');
        }
        return;
    };

    return (
        <div className={styles.wrapper}>
            <TextField
                isLoading={isLoading}
                fieldValue={fieldValue}
                onChangeFieldValue={onChangeFiledValue}
                onClick={sendMessage}
                // onKeyHandler={onKeySendMessage}
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
