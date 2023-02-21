import { Socket, Server } from "socket.io";
import Game from "./Game";
import Player from "./Player";
import Utils from "./utils";

interface customSocket extends Socket {
    player: Player;
}

class SocketService extends Game {
    io?:Server;
    player?: Player;
    utils: Utils;
    rooms?: [] 
    constructor() { 
        super();
        this.utils = new Utils();
    }

    public create_server(server: any){
        const io = new Server(server);
        io.on('connection',(socket: any) => this.on_connection(socket));
        this.io = io;
        return io;     
    }

    private on_disconnect(socket: customSocket): void {
        this.remove_player(socket.id);
        if(socket.player.get_owner()){
            const _player = this.set_new_owner();
            this.io?.to(`${ _player?.id }`).emit('application',['player',socket.player]);
        }
        this.io?.emit('msg_pop', `O player ${ socket.player.name} Saiu`);
        console.log(`> Disconnect ${socket.id}`);
        this.on_change_player(socket);
    }

    private on_connection(socket: customSocket){
        if(this.in_gaming) return socket.emit('alert',"SALA EM JOGO");
        this.io?.emit('msg_pop', `Um novo player entrou`);
        console.log(`New connection ${socket.id}`);
        socket.player = this.add_player(socket.id);
        
        socket.on('onChangeName',(name) => this.on_player_change_name(socket, name));
        socket.on('onChangeReady', () => this.on_player_ready(socket));
        socket.on('onStartGame', () => this.on_start_game(socket));
        socket.on('OnPlayerFinished', (fields:any)=> this.on_player_finished(socket,fields));
        socket.on('disconnect',() => this.on_disconnect(socket));

        this.on_change_player(socket);
    }

    private on_start_game(socket: customSocket){
        console.log("> Game started")
        if(!socket.player.owner) 
            return;
        const _response = this.start_game();
        console.log(_response);
        if(_response.sucess)
            this.io?.sockets.emit("start_game",_response.letter);
        socket.emit('application', ['msg',_response.err]);
    }

    private on_player_finished(socket: customSocket, fields:any){
        socket.player.set_fields(fields);
        const _player = this.add_player_finished(socket.player);
        this.io?.emit('msg_pop', `O ${socket.player.name} finalizou`);
        this.io?.emit("player_finshed", this.player_finished);
    }

    private on_player_change_name(socket: customSocket, name: string){
        socket.player.set_name(name);
        this.on_change_player(socket);
    }

    private on_player_ready (socket: customSocket){
        socket.player.set_Ready();
        const _start_game = this.start_game();
        if(_start_game.err)
            socket.emit(_start_game.err, )
        this.io?.emit('msg_pop', `O ${socket.player.name} esta pronto`);
        this.on_change_player(socket);
    }

    private on_change_player(socket: customSocket) {
        const player_num = this.get_players_number();
        const limit = this.get_limit();
        let _players = this.get_players();
        this.io?.sockets.emit('application',['limit',limit]);
        this.io?.sockets.emit('application',['players',player_num])
        socket.emit('application', ['player',socket.player]);
        this.io?.sockets.emit('application',['listPlayer', _players]);
    }
}

export default SocketService;