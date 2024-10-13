import { Button, ButtonProps } from '@mui/material';
import IconCopy from '@/shared/assets/copy.svg';
import styles from './copyButton.module.css';
import { useCallback } from 'react';
import { toast } from '@/shared/lib/helpers/toast';

interface IProps extends ButtonProps {
    textToCopy: string;
}

export const CopyButton = (props: IProps) => {
    const { textToCopy, ...rest } = props;

    const handleCopy = useCallback(() => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => toast('Текст успешно скопирован', 'success'));
    }, [textToCopy]);

    return (
        <Button
            onClick={handleCopy}
            {...rest}
            className={`${styles.button} ${props.className}`}
        >
            <IconCopy />
            <span>Cкопировать ответ</span>
        </Button>
    );
};
