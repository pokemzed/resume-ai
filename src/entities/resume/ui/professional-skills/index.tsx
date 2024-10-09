import { TextTemplate } from '@/shared/ui/resume/text-template';
import { useAppSelector } from '@/app/providers/store';
import { getUserSkills } from '@/entities/resume/model/reducers';
import styles from './professionalSkills.module.css';

export const ProfessionalSkills = () => {
    const skills = useAppSelector(getUserSkills);
    if (!skills) return null;
    return (
        <TextTemplate title={'Профессиональные навыки'}>
            <ul className={styles.list}>
                {skills.map((skill, index) => (
                    <li key={index}>– {skill}</li>
                ))}
            </ul>
        </TextTemplate>
    );
};
