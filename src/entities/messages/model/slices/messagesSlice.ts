import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage, IMessages } from '@/entities/messages';

const initialState: IMessages = {
    messages: null,
    isLoading: false,
};

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<IMessage>) => {
            if (state.messages === null) {
                state.messages = [action.payload];
                return;
            }
            state.messages.push(action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        clearHistory: (state) => {
            state.messages = null;
        },
    },
});

export const {
    name: messagesSliceName,
    actions: messagesActions,
    reducer: messagesReducer,
} = messagesSlice;
