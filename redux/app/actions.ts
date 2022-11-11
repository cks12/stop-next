import { createSlice, PayloadAction,  } from '@reduxjs/toolkit';
import { applicationInterface, player, roomInformation } from '../../type';
import SocketClientClass from '../../utils/socket-client';
import { RootState } from './store';

let socket:any;

const selectedRoom: roomInformation = {
    name: "Room 01",
    id: "0",
    playerNumber: 0,
    limit: 8,
}

const initialState:applicationInterface = {
    name:"",
    host:true,
    isReady:false,
    players:[],
    selectedRoom:selectedRoom,
    gameStart:false,

}

function setNameFunc(state: applicationInterface, action: PayloadAction<string>){
    socket.setName(action.payload)
    state.name = action.payload;
}

function changeIsReadyFunc(state: applicationInterface, action: PayloadAction<undefined>): void{
    const { isReady,name } = state;
    if(!name)
        return;
    console.log("name",name)
    state.isReady = (!isReady);
}

function startGameFunc(state:applicationInterface, action: PayloadAction<undefined>){
    const { host, isReady } = state;
    if(host && isReady)
        state.gameStart = true;
}

function addPlayerFunc(state:applicationInterface, action: PayloadAction<player>){
    state.players.push(action.payload);
}

function SocketClientFunc(state: applicationInterface, action: PayloadAction<undefined>){
    fetch("/api/socket").then(() => {
        if(socket) 
            return;
        socket = SocketClientClass();
        state = state;
    })    
}

const reducers = {
    setName:setNameFunc,
    changeIsReady:changeIsReadyFunc,
    startGame: startGameFunc,
    addPlayer: addPlayerFunc,
    SocketClient: SocketClientFunc,
}

export const ApplicationSlice = createSlice({
    name:"application",
    initialState,
    reducers,
})

export const state = (state: RootState) => state.application;

export const { changeIsReady, setName, startGame, addPlayer, SocketClient } = ApplicationSlice.actions

export default ApplicationSlice.reducer