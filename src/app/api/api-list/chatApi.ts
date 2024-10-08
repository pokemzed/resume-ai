import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMessage } from '@/entities/messages';
import { MessageResponse } from '@/entities/messages/model/types';

export const chatApi = createApi({
    reducerPath: 'chat-api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_OPEN_AI_API,
        prepareHeaders: (headers) => {
            headers.set(
                'Authorization',
                `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_SECRET}`,
            );
            headers.set('Content-Type', 'application/json');
        },
    }),
    endpoints: (build) => ({
        sendMessage: build.mutation<MessageResponse, IMessage[]>({
            query: (messages) => ({
                url: '',
                method: 'POST',
                body: {
                    model: 'gpt-4o-mini',
                    messages,
                },
            }),
        }),
    }),
});
