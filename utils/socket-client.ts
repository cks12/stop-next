import io, { Socket } from 'socket.io-client'
import { applicationInterface, player } from '../type';

class SocketClient {
    socket:Socket;
    connected: boolean;
    // state:applicationInterface;
    constructor () {
        const socket = io();
        this.connected = false;
        // this.state = state;
        socket.on("connect",() => this.connect());
        socket.on("playerList",(data) => this.listenUsers(data));
        socket.on("hello",data=> console.log(data));
        socket.on('ping',(ping)=> console.log("ping:", ping))
        this.socket = socket;
    }
    private connect() {
        console.log("connect");
    }

    private listenUsers(data: player[]){
        console.log(data);
    }

    public setName(name: string){
        this.socket.emit("changeNamePlayer", name);
    }
}

export default () => new SocketClient();