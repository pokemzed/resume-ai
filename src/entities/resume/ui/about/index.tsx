import { useAppSelector } from '@/app/providers/store';
import { getUserAbout } from '@/entities/resume/model/reducers';
import { TextTemplate } from '@/shared/ui/resume/text-template';

export const About = () => {
    const about = useAppSelector(getUserAbout);
    if (!about) return null;
    return <TextTemplate title={'Обо мне'}>{about}</TextTemplate>;
};
