import { IMessages } from '@/entities/messages';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { chatApi } from '@/app/api/api-list/chatApi';

export interface IStateSchema {
    messages: IMessages & PersistPartial;
    [chatApi.reducerPath]: ReturnType<typeof chatApi.reducer>;
}
