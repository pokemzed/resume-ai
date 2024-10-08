'use client';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <ThemeProvider theme={theme}>
                    <AppRouterCacheProvider>
                        <Container
                            sx={{
                                // height: '100dvh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {children}
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                            />
                        </Container>
                    </AppRouterCacheProvider>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};
