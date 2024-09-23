import { IconButton } from '@/shared/ui/icon-button';
import BackArrowIcon from '@/shared/assets/arrow-back.svg';

export const LeaveChat = () => {
    return (
        <IconButton>
            <BackArrowIcon />
            <span>Покинуть и удалить чат</span>
        </IconButton>
    );
};
