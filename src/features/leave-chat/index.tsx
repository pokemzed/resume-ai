'use client';
import { IconButton } from '@/shared/ui/icon-button';
import BackArrowIcon from '@/shared/assets/arrow-back.svg';
import { useAppDispatch } from '@/app/providers/store';
import { messagesActions } from '@/entities/messages';
import { useRouter } from 'next/navigation';
import { ConfirmModal } from '@/shared/ui/confirm-modal';
import { useCallback, useState } from 'react';

export const LeaveChat = () => {
    const [toggleConfirmModal, setToggleConfirmModal] =
        useState<boolean>(false);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleClearHistory = () => dispatch(messagesActions.clearHistory());

    const onCloseConfirmModal = useCallback(
        () => setToggleConfirmModal(false),
        [],
    );
    const onOpenConfirmModal = useCallback(
        () => setToggleConfirmModal(true),
        [],
    );

    const handleLeave = () => {
        handleClearHistory();
        router.push('/');
    };

    return (
        <>
            <IconButton onClick={onOpenConfirmModal}>
                <BackArrowIcon />
                <span>Покинуть и удалить чат</span>
            </IconButton>
            <ConfirmModal
                open={toggleConfirmModal}
                onClose={onCloseConfirmModal}
                onConfirm={handleLeave}
                text={
                    'Вы действительно хотите покинуть и удалить чат? После нажатия на кнопку "Подтвердить", Вы не сможете вернуть историю запросов.'
                }
            />
        </>
    );
};
