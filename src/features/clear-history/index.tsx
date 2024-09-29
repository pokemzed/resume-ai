import { IconButton } from '@/shared/ui/icon-button';
import RemoveHistoryIcon from '@/shared/assets/remove-cart.svg';
import { useAppDispatch } from '@/app/providers/store';
import { messagesActions } from '@/entities/messages';

export const ClearHistory = () => {
    const dispatch = useAppDispatch();
    const handleClearHistory = () => dispatch(messagesActions.clearHistory());
    return (
        <IconButton onClick={handleClearHistory} buttonType={'error'}>
            <RemoveHistoryIcon />
            <span>Очистить историю</span>
        </IconButton>
    );
};
