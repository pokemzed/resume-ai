import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { messagesReducer } from '@/entities/messages';
import { IStateSchema } from '@/app/providers/store/types';
import { chatApi } from '@/app/api/api-list/chatApi';

const messagesPersistConfig = {
    key: 'root',
    storage: storageSession,
};

const messagesPersistedReducer = persistReducer(
    messagesPersistConfig,
    messagesReducer,
);

export const store = configureStore<IStateSchema>({
    reducer: {
        messages: messagesPersistedReducer,
        [chatApi.reducerPath]: chatApi.reducer,
    },
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializableCheck for redux-persist
        }).concat(chatApi.middleware),
});

export const persistor = persistStore(store);
export { useAppDispatch, useAppSelector } from './hooks';
