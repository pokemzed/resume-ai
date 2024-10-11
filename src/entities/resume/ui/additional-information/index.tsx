import { TextTemplate } from '@/shared/ui/resume/text-template';
import { useAppSelector } from '@/app/providers/store';
import { getUserAdditionalInformation } from '@/entities/resume/model/reducers';
import styles from './additionalInformation.module.css';

export const AdditionalInformation = () => {
    const additionalInformation = useAppSelector(getUserAdditionalInformation);
    if (!additionalInformation) return null;
    return (
        <TextTemplate
            title={
                'Дополнительная информация (сертификаты, курсы, владение иностранными языками)'
            }
        >
            <ul className={styles.list}>
                {additionalInformation.map((item, index) => (
                    <li key={index}>– {item}</li>
                ))}
            </ul>
        </TextTemplate>
    );
};
