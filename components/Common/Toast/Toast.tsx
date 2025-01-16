import toast from 'react-hot-toast';

export const ToastSuccess = (message: string | undefined): void => {
    if (message) {
        toast.error(message, {
            icon: null,
            style: {
                borderRadius: '9999px',
                background: 'var(--lightGreen)',
                color: 'var(--white)',
                fontFamily: '"Comic Neue", serif',
                fontSize: '14px',
                fontWeight: 700,
            },
        });
    }
};

export const ToastError = (message: string | undefined): void => {
    if (message) {
        toast.error(message, {
            icon: null,
            style: {
                borderRadius: '9999px',
                background: 'var(--lightPrimary)',
                color: 'var(--white)',
                fontFamily: '"Comic Neue", serif',
                fontSize: '14px',
                fontWeight: 700,
            },
        });
    }
};