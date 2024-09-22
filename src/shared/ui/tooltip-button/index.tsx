import { Button, ButtonProps } from '@mui/material';
import styles from './tooltipButton.module.css';

interface IProps extends ButtonProps {
    children: React.ReactNode;
}

export const TooltipButton = ({ children, ...props }: IProps) => {
    return (
        <Button
            variant={props.variant || 'outlined'}
            className={`${styles.button} ${props.className}`}
            {...props}
        >
            {children}
        </Button>
    );
};
