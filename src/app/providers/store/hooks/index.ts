import { store } from '../';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
