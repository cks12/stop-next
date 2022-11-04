import { Server, Socket } from 'socket.io';
import Game from './game';

class gameSocket extends Game {

    // Types
    private io?: Server;
    private Socket?: Socket;

    constructor(){
        super();
        this.io = undefined;
        this.Socket = undefined;
    }

   public MakeConnection(config:any): Server {
        this.io = new Server(config);
        this.io.on('connection', this.setSocket);
        this.io.on('disconnect', this.onPlayerDisconnect);
        this.onPlayerConnection();
        return this.io;
   }

   private onPlayerConnection(): void{
       console.log("> new connection");
       this.Socket?.emit("connect")
       this.Socket?.on("new-player", this.addPlayer);
       this.Socket?.on("disconnect",this.onPlayerDisconnect);
       return;
    }

    private onPlayerDisconnect(data:any){
        console.log(data);
    }

    private setSocket(Socket:Socket): void {
        this.Socket = Socket;
        return;
   }

}

export default gameSocket;