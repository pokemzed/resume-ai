export interface IMessages {
    messages: IMessage[] | null;
    isLoading: boolean;
}
export interface IMessage {
    role: 'user' | 'system' | 'assistant';
    content: string;
}

// openAi response
export interface MessageResponse {
    choices: Choice[];
    created: number;
    id: string;
    model: string;
    object: string;
    usage: Usage;
}

export interface Choice {
    finish_reason: string;
    index: number;
    message: Message;
    logprobs: null;
}

interface Message {
    content: string;
    role: string;
}

interface Usage {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
    completion_tokens_details: CompletionTokensDetails;
}

interface CompletionTokensDetails {
    reasoning_tokens: number;
}
