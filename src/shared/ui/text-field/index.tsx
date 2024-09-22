import styles from './textField.module.css';
import { Button, ButtonProps } from '@mui/material';
import ArrowIcon from '@/shared/assets/arrow.svg';

interface IProps extends ButtonProps {
    fieldValue: string;
    onChangeFieldValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    textFieldPlaceholder?: string;
}

export const TextField = ({
    fieldValue,
    onChangeFieldValue,
    textFieldPlaceholder,
    ...props
}: IProps) => {
    return (
        <section className={styles.wrapper}>
            <input
                placeholder={textFieldPlaceholder || 'Введите сообщение'}
                value={fieldValue}
                onChange={onChangeFieldValue}
            />
            <Button
                variant={props.variant || 'contained'}
                className={`${styles.button} ${props.className}`}
                {...props}
            >
                <ArrowIcon />
            </Button>
        </section>
    );
};
