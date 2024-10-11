import { IMessages } from '@/entities/messages';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { chatApi } from '@/app/api/api-list/chatApi';
import { IUser } from '@/entities/resume';

export interface IStateSchema {
    messages: IMessages & PersistPartial;
    user: IUser & PersistPartial;
    [chatApi.reducerPath]: ReturnType<typeof chatApi.reducer>;
}
