export interface IMessages {
    messages: IMessage[] | null;
    isLoading: boolean;
}
export interface IMessage {
    role: 'user' | 'system' | 'assistant';
    content: string;
}
