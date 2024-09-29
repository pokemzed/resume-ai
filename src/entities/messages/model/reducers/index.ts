import { IStateSchema } from '@/app/providers/store/types';

export const getMessagesReducer = (state: IStateSchema) =>
    state.messages.messages;
export const getLoadingMessagesReducer = (state: IStateSchema) =>
    state.messages.isLoading;
