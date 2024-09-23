import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#5661F6',
        },
    },
    typography: {
        fontFamily: 'Nunito Sans, Arial, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0.75rem',
                    fontSize: '14px',
                    textTransform: 'none',
                },
            },
        },
    },
});
