export interface applicationInterface {
    name: string;
    isReady:boolean;
    players:player[];
    rooms: roomInformation[],
    selectedRoom: roomInformation,
    gameStart:boolean,
    host:boolean
}

export interface modalInformationInterface {
    roomSelectVisible: boolean;
}

export interface roomInformation {
    name: string;
    id: string;
    playerNumber: number;
    limit: number;
}

export interface player {
    ready: boolean,
    name: string,
    isReady: boolean,
    gameStart: boolean,
}