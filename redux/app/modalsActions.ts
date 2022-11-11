import { createSlice, PayloadAction,  } from '@reduxjs/toolkit';
import { modalInformationInterface, player, roomInformation } from '../../type';
import { RootState } from './store';

const initialState: modalInformationInterface = {
    roomSelectVisible: false,
}

function selectRoomVisibleFunc(state:modalInformationInterface , action: PayloadAction<undefined>){
    state.roomSelectVisible = (!state.roomSelectVisible);
}

const reducers = {
    selectRoomVisible:selectRoomVisibleFunc
}

export const ModalsSlice = createSlice({
    name:"modals",
    initialState,
    reducers,
});

export const state = (state: RootState) => state.application;

export const { selectRoomVisible } = ModalsSlice.actions

export default ModalsSlice.reducer