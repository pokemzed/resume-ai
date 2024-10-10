import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserInfo } from '@/entities/resume/model/types';

const initialState: IUser = {
    userInfo: null,
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<IUserInfo | null>) => {
            state.userInfo = action.payload;
            state.isLoading = false;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const {
    name: userSliceName,
    actions: userActions,
    reducer: userReducer,
} = userSlice;
