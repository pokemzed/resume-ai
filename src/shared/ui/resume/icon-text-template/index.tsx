import styles from './iconTextTemplate.module.css';
interface IProps {
    icon: React.ReactNode;
    text: string;
}
export const IconTextTemplate = (props: IProps) => {
    const { icon, text } = props;
    if (text === null) return;
    return (
        <div className={styles.wrapper}>
            {icon}
            <p>{text}</p>
        </div>
    );
};
