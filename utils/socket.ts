import { Server } from 'socket.io';
import Game from './game';

class gameSocket extends Game {

    // Types
    private io?: Server;

    constructor(){
        super();
        this.io = undefined;
    }

   public MakeConnection() {
        const io = new Server();
        io.on('connection', () => this.onPlayerConnection);
        this.io = io;
        return io
   }

   private onPlayerConnection(io:any){

    io.emit("connect")
   }
}

export default gameSocket;