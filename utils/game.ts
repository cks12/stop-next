import { roomInformation } from "../type";
import Player from "./players";
import Room from "./room";

class Game{
    // types
    public inGaming: Boolean;
    players: Player[];
    rooms: Room[];
    config: {
        limit:number;
    }
    constructor(){
        this.inGaming = false;
        this.players = [];
        this.rooms=[];
        this.config = {
            limit: 8
        }
    }

    createRoom(name?: string){
        const room = new Room(name?name:"Room 01", this.config.limit);
        this.rooms.push(room);
    }
    
    addPlayer(name: string){
        const player = new Player();
        player.changeName(name)
        this.players.push(player);
        return player;
    }

    removePlayer(player: Player) {
        this.players.splice(this.players.indexOf(player), 1);
    }
}

export default Game;