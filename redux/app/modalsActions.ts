import { createSlice, PayloadAction,  } from '@reduxjs/toolkit';
import { applicationInterface, player, roomInformation } from '../../type';
import SocketClientClass from '../../utils/socket-client';
import { RootState } from './store';

const initialState = {

}

const reducers = {

}

export const ModalsSlice = createSlice({
    name:"modals",
    initialState,
    reducers,
});

export const state = (state: RootState) => state.application;

export const {  } = ModalsSlice.actions

export default ModalsSlice.reducer