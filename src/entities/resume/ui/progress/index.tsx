import { TextTemplate } from '@/shared/ui/resume/text-template';
import { useAppSelector } from '@/app/providers/store';
import { getUserAchievements } from '@/entities/resume/model/reducers';
import styles from './progress.module.css';

export const Progress = () => {
    const achievements = useAppSelector(getUserAchievements);
    if (!achievements) return null;
    return (
        <TextTemplate title={'Достижения'}>
            <ul className={styles.list}>
                {achievements.map((achievement, index) => (
                    <li key={index}>– {achievement}</li>
                ))}
            </ul>
        </TextTemplate>
    );
};
