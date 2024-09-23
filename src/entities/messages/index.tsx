import { Messages } from './ui/messages';
export default Messages;

export type { IMessages, IMessage } from './model/types';
export {
    messagesActions,
    messagesReducer,
    messagesSliceName,
} from './model/slices/messagesSlice';
