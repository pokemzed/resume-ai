import { IconButton } from '@/shared/ui/icon-button';
import BackArrowIcon from '@/shared/assets/arrow-back.svg';
import { useAppDispatch } from '@/app/providers/store';
import { messagesActions } from '@/entities/messages';
import { useRouter } from 'next/navigation';

export const LeaveChat = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleClearHistory = () => dispatch(messagesActions.clearHistory());
    const handleLeave = () => {
        handleClearHistory();
        router.push('/');
    };
    return (
        <IconButton onClick={handleLeave}>
            <BackArrowIcon />
            <span>Покинуть и удалить чат</span>
        </IconButton>
    );
};
