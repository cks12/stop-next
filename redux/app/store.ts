import { configureStore } from '@reduxjs/toolkit'
import actions from './actions';
import modals from './modalsActions';

const store = configureStore({
    reducer:{
        modals: modals,
        application: actions,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store