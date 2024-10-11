import { useAppSelector } from '@/app/providers/store';
import { getUserInfo } from '@/entities/resume/model/reducers';
import styles from './resumeProgress.module.css';

export const ResumeProgress = () => {
    const userInfo = useAppSelector(getUserInfo);
    if (!userInfo) return null;

    const userInfoValues = Object.values(userInfo);

    const successSteps = userInfoValues.reduce((acc, cur) => {
        if (cur) {
            acc += 1;
        }
        return acc;
    }, 0);
    const progressPercent = Math.round(
        (successSteps / userInfoValues.length) * 100,
    );
    console.log(successSteps, progressPercent);

    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <h2>Готовность резюме</h2>
                <span>{progressPercent}%</span>
            </div>
            <div className={styles.progress}>
                <div
                    className={styles.progressBar}
                    style={{
                        width: `${progressPercent}%`,
                    }}
                />
            </div>
        </div>
    );
};
