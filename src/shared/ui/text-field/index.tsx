import styles from './textField.module.css';
import { ButtonProps } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import ArrowIcon from '@/shared/assets/arrow.svg';

interface IProps extends ButtonProps {
    fieldValue: string;
    onChangeFieldValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    textFieldPlaceholder?: string;
    isLoading?: boolean;
    onKeyHandler?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export const TextField = ({
    fieldValue,
    onChangeFieldValue,
    textFieldPlaceholder,
    onKeyHandler,
    isLoading,
    ...props
}: IProps) => {
    return (
        <section className={styles.wrapper}>
            <textarea
                placeholder={textFieldPlaceholder || 'Введите сообщение'}
                value={fieldValue}
                onChange={onChangeFieldValue}
                onKeyDown={onKeyHandler}
            />
            <LoadingButton
                loading={isLoading}
                variant={props.variant || 'contained'}
                className={`${styles.button} ${props.className}`}
                {...props}
            >
                <ArrowIcon />
            </LoadingButton>
        </section>
    );
};
