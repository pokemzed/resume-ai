import styles from './textTemplate.module.css';

interface IProps {
    title: string;
    children: string | React.ReactNode;
}

export const TextTemplate = (props: IProps) => {
    const { title, children } = props;

    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
            {typeof children === 'string' ? <p>{children}</p> : children}
        </div>
    );
};
