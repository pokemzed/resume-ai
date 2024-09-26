import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessages } from '@/entities/messages';

const initialState: IMessages = {
    messages: null,
};

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        sendMessage: (
            state,
            action: PayloadAction<{ role: 'user'; content: string }>,
        ) => {
            if (state.messages === null) {
                state.messages = [action.payload];
                return;
            }
            state.messages.push(action.payload);
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
