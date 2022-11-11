import { configureStore } from '@reduxjs/toolkit'
import actions from './actions';
import { ModalsSlice } from './modalsActions';

const store = configureStore({
    reducer:{
        application: actions,
        modals: ModalsSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store