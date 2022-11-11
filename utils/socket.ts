import { Server, Socket } from 'socket.io';
import Game from './game';
import Player from './players';
import Room from './room';


class gameSocket extends Game  {

    // Types
    private io?: Server;
    private Socket?: Socket;
    private roomLimit = 8;

    constructor(){
        super();
        this.io = undefined;
        this.Socket;
    }

   public MakeConnection(config:any): Server {
        this.io = new Server(config);
        this.io.on('connection', (s) => this.socketFunction(s));
        this.io.on('disconnect', this.onPlayerDisconnect);
        return this.io;
   }

   private checkLimitRoom(){
        return this.roomLimit < this.players.length;
   }

   private onPlayerConnection(Socket: Socket): void{
       if(this.checkLimitRoom()){
           Socket.emit("limit", true);
           return;
       } 
       const player = this.addPlayer("");
       console.log("> new connection");
       Socket.on("changeNamePlayer", (data: any) => 
                this.changeNamePlayer(data, player));
       Socket.emit("playerList",{players: this.players});
       Socket.broadcast.emit("playerList",{players: this.players})
       Socket.on("disconnect",(data) => this.onPlayerDisconnect(data, player));
       return;
    }

    private changeNamePlayer(data: string, player: Player): void {
        player.changeName(data);
    }
    
    private onPlayerDisconnect(data:any, player: Player){
        this.removePlayer(player);
    }

    private socketFunction(_Socket:Socket): void {
        this.Socket = _Socket;
        this.onPlayerConnection(_Socket);
   }

}

export default gameSocket;