import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { IStateSchema } from '@/app/providers/store/types';
import { chatApi } from '@/app/api/api-list/chatApi';
import { messagesPersistedReducer, userPersistedReducer } from './persist';

const rootReducer = combineReducers({
    messages: messagesPersistedReducer,
    user: userPersistedReducer,
    [chatApi.reducerPath]: chatApi.reducer,
});

export const store = configureStore<IStateSchema>({
    reducer: rootReducer,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializableCheck for redux-persist
        }).concat(chatApi.middleware),
});

export const persistor = persistStore(store);
export { useAppDispatch, useAppSelector } from './hooks';
