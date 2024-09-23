import { createSlice } from '@reduxjs/toolkit';
import { IMessages } from '@/entities/messages';

const initialState: IMessages = {
    messages: null,
};

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
});

export const {
    name: messagesSliceName,
    actions: messagesActions,
    reducer: messagesReducer,
} = messagesSlice;
