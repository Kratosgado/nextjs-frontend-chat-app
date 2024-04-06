import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './feature/appState';

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

// Infer tyhe type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];