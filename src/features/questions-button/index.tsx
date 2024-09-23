import { IconButton } from '@/shared/ui/icon-button';
import QuestionIcon from '@/shared/assets/question.svg';

export const QuestionsButton = () => {
    return (
        <IconButton>
            <QuestionIcon />
            <span>Остались вопросы?</span>
        </IconButton>
    );
};
