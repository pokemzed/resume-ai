import { TextTemplate } from '@/shared/ui/resume/text-template';
import { IconTextTemplate } from '@/shared/ui/resume/icon-text-template';
import PhoneIcon from '@/shared/assets/phone.svg';
import MailIcon from '@/shared/assets/mail.svg';
import styles from './contactInformation.module.css';
import { useAppSelector } from '@/app/providers/store';
import { getUserContactInfo } from '@/entities/resume/model/reducers';

export const ContactInformation = () => {
    const contactInformation = useAppSelector(getUserContactInfo);
    if (!contactInformation) return null;
    return (
        <TextTemplate title={'Контактная информация'}>
            <div className={styles.wrapper}>
                <IconTextTemplate
                    icon={<PhoneIcon />}
                    text={contactInformation.phone}
                />
                <IconTextTemplate
                    icon={<MailIcon />}
                    text={contactInformation.email}
                />
            </div>
        </TextTemplate>
    );
};
