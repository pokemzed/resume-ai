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
    console.log(props.className);
    return (
        <Button
            variant={'outlined'}
            {...props}
            className={`${styles.button} ${styles[buttonType]} ${props.className}`}
        >
            {children}
        </Button>
    );
};
