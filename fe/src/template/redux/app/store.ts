import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import coreSliceApiReducer, { coreSliceApi } from 'template/redux/slice/posts';

export const store = configureStore({
    reducer: {
        [coreSliceApi.reducerPath]: coreSliceApiReducer,
    },
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
        getDefaultMiddleware().concat(coreSliceApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
