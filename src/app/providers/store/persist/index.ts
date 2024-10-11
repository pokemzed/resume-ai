import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';
import { messagesReducer } from '@/entities/messages';
import { userReducer } from '@/entities/resume';

const persistConfig = {
    storage: storageSession,
};
export const messagesPersistedReducer = persistReducer(
    { ...persistConfig, key: 'messages' },
    messagesReducer,
);
export const userPersistedReducer = persistReducer(
    { ...persistConfig, key: 'user' },
    userReducer,
);
