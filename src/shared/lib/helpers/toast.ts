import toastLibrary from 'react-hot-toast';

const darkOptions: { duration: number; style: React.CSSProperties } = {
    duration: 2000,
    style: {
        background: 'var(--background-secondary)',
        border: '1px solid var(--border-color)',
        color: 'var(--text)',
        maxWidth: '500px',
    },
};

export const toast = (
    message: string,
    type: 'error' | 'success' | 'loading',
) => {
    if (type === 'success') return toastLibrary.success(message, darkOptions);
    if (type === 'error') return toastLibrary.error(message, darkOptions);
    if (type === 'loading') return toastLibrary.loading(message, darkOptions);
};
