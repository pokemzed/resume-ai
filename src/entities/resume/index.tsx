import { Resume } from './ui/resume';
export default Resume;

export type { IUser, IUserInfo } from './model/types/index';
export {
    userSliceName,
    userActions,
    userReducer,
} from './model/slices/userSlice';
