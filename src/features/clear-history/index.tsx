import { IconButton } from '@/shared/ui/icon-button';
import RemoveHistoryIcon from '@/shared/assets/remove-cart.svg';

export const ClearHistory = () => {
    return (
        <IconButton buttonType={'error'}>
            <RemoveHistoryIcon />
            <span>Очистить историю</span>
        </IconButton>
    );
};
