import { TextTemplate } from '@/shared/ui/resume/text-template';
import { useAppSelector } from '@/app/providers/store';
import { getUserEducation } from '@/entities/resume/model/reducers';
import styles from './education.module.css';

export const Education = () => {
    const education = useAppSelector(getUserEducation);
    if (!education) return null;
    return (
        <TextTemplate title={'Образование'}>
            <div className={styles.wrapper}>
                {education.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <h4>{item.institution}</h4>
                        <p>{item.degree}</p>
                        <span>{item.years}</span>
                    </div>
                ))}
            </div>
        </TextTemplate>
    );
};
