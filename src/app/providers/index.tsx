'use client';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './theme-provider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <AppRouterCacheProvider>
                <Container
                    sx={{
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {children}
                </Container>
            </AppRouterCacheProvider>
        </ThemeProvider>
    );
};
