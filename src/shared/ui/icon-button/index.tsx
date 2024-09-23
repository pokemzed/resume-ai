import { Button, ButtonProps } from '@mui/material';
import styles from './iconButton.module.css';

interface IProps extends ButtonProps {
    children?: React.ReactNode;
    buttonType?: 'primary' | 'error';
}

export const IconButton = ({
    children,
    buttonType = 'primary',
    ...props
}: IProps) => {
    return (
        <Button
            variant={'outlined'}
            className={`${styles.button} ${styles[buttonType]} ${props.className}`}
            {...props}
        >
            {children}
        </Button>
    );
};
