import { Button, IconButton, Modal } from '@mui/material';
import styles from './confrimModal.module.css';

interface IProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    text?: string;
}

export const ConfirmModal = (props: IProps) => {
    const { onClose, onConfirm, text, open } = props;

    return (
        <Modal onClose={onClose} open={open}>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <h2>Подтвердите действие</h2>
                    <IconButton
                        size={'large'}
                        className={styles.close}
                        onClick={onClose}
                    >
                        x
                    </IconButton>
                </header>
                <section className={styles.content}>
                    {text && <p>{text}</p>}
                    <div className={styles.actions}>
                        <Button variant={'contained'} onClick={onConfirm}>
                            Подтвердить
                        </Button>
                        <Button
                            variant={'text'}
                            color={'error'}
                            onClick={onClose}
                        >
                            Отменить
                        </Button>
                    </div>
                </section>
            </div>
        </Modal>
    );
};
