import { TextTemplate } from '@/shared/ui/resume/text-template';
import { useAppSelector } from '@/app/providers/store';
import { getUserProfessionalGoals } from '@/entities/resume/model/reducers';

export const ProfessionalGoals = () => {
    const professionalGoals = useAppSelector(getUserProfessionalGoals);
    if (!professionalGoals) return null;
    return (
        <TextTemplate
            title={'Краткое описание профессиональных целей и желаемой позиции'}
        >
            {professionalGoals}
        </TextTemplate>
    );
};
