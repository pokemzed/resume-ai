import styles from './textField.module.css';
import { ButtonProps } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import ArrowIcon from '@/shared/assets/arrow.svg';
import { useAppSelector } from '@/app/providers/store';
import { getLoadingMessagesReducer } from '@/entities/messages/model/reducers';

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
    const isLoading = useAppSelector(getLoadingMessagesReducer);

    return (
        <section className={styles.wrapper}>
            <input
                placeholder={textFieldPlaceholder || 'Введите сообщение'}
                value={fieldValue}
                onChange={onChangeFieldValue}
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
