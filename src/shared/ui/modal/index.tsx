import { IconButton, Modal } from '@mui/material';
import styles from './modalTemplate.module.css';

interface IProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

export const ModalTemplate = (props: IProps) => {
    const { onClose, title, open, children } = props;

    return (
        <Modal className={styles.overlay} onClose={onClose} open={open}>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    {title && <h2>{title}</h2>}
                    <IconButton
                        size={'large'}
                        className={styles.close}
                        onClick={onClose}
                    >
                        x
                    </IconButton>
                </header>
                <div className={styles.content}>{children}</div>
            </div>
        </Modal>
    );
};
