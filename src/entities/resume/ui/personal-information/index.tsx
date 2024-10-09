'use client';
import styles from './personalInformation.module.css';
import UserIcon from '@/shared/assets/user.svg';
import LocationIcon from '@/shared/assets/location.svg';
import { TextTemplate } from '@/shared/ui/resume/text-template';
import { IconTextTemplate } from '@/shared/ui/resume/icon-text-template';
import { useAppSelector } from '@/app/providers/store';
import { getUserPersonalInfo } from '@/entities/resume/model/reducers';

export const PersonalInformation = () => {
    const personalInformation = useAppSelector(getUserPersonalInfo);

    if (!personalInformation) return null;

    return (
        <TextTemplate title={'Личная информация'}>
            <div className={styles.wrapper}>
                <IconTextTemplate
                    icon={<UserIcon />}
                    text={personalInformation.name}
                />
                <IconTextTemplate
                    icon={<LocationIcon />}
                    text={personalInformation.location}
                />
            </div>
        </TextTemplate>
    );
};
