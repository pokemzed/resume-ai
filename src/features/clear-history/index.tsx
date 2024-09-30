'use client';
import { IconButton } from '@/shared/ui/icon-button';
import RemoveHistoryIcon from '@/shared/assets/remove-cart.svg';
import { useAppDispatch } from '@/app/providers/store';
import { messagesActions } from '@/entities/messages';
import { useCallback, useState } from 'react';
import { ConfirmModal } from '@/shared/ui/confirm-modal';

export const ClearHistory = () => {
    const [toggleConfirmModal, setToggleConfirmModal] =
        useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleClearHistory = () => {
        dispatch(messagesActions.clearHistory());
        onCloseConfirmModal();
    };

    const onCloseConfirmModal = useCallback(
        () => setToggleConfirmModal(false),
        [],
    );
    const onOpenConfirmModal = useCallback(
        () => setToggleConfirmModal(true),
        [],
    );

    // TODO: Confirm modal
    return (
        <>
            <IconButton onClick={onOpenConfirmModal} buttonType={'error'}>
                <RemoveHistoryIcon />
                <span>Очистить историю</span>
            </IconButton>
            <ConfirmModal
                open={toggleConfirmModal}
                onClose={onCloseConfirmModal}
                onConfirm={handleClearHistory}
                text={
                    'Вы действительно хотите очистить историю? После нажатия на кнопку "Подтвердить", Вы не сможете вернуть историю запросов.'
                }
            />
        </>
    );
};
