export interface IMessages {
    messages: IMessage[] | null;
}
export interface IMessage {
    role: 'user' | 'system' | 'assistant';
    content: string;
}
