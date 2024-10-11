import { TextTemplate } from '@/shared/ui/resume/text-template';
import { useAppSelector } from '@/app/providers/store';
import { getUserExperience } from '@/entities/resume/model/reducers';
import styles from './workExperience.module.css';

export const WorkExperience = () => {
    const workExperience = useAppSelector(getUserExperience);
    if (!workExperience) return null;
    return (
        <TextTemplate title={'Опыт работы'}>
            <div className={styles.wrapper}>
                {workExperience.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <h4>{item.company}</h4>
                        <p>{item.position}</p>
                        <span>{item.period}</span>
                        <ul>
                            {item.responsibilities.map((responsibility) => (
                                <li key={responsibility}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </TextTemplate>
    );
};
