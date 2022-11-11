import io, { Socket } from 'socket.io-client'
import { setName } from '../redux/app/actions';
import { AppDispatch } from '../redux/app/store';
import { applicationInterface, player } from '../type';

class SocketClient {
    socket:Socket;
    // state:applicationInterface;
    constructor () {
        const socket = io();
        // this.state = state;
        socket.on("connect",() => this.connect());
        socket.on("playerList",(data) => this.listenUsers(data));
        socket.on("hello",data=> console.log(data));
        socket.on('ping',(ping)=> console.log("ping:", ping))
        this.socket = socket;
        console.log(this);
    }
    private connect() {
        console.log("connect");
    }

    private listenUsers(data: player[]){
        console.log(data);
    }

    public setName(name: string){
        console.log(name)
        this.socket.emit("changeNamePlayer", name);
    }
}

export default () => new SocketClient();