import Player from "./players";
import gameSocket from "./socket";

class Game extends Player{
    // types
    public inGaming: Boolean;
    players: Player[]

    constructor(){
        super();
        this.inGaming = false;
        this.players = []
    }

    addPlayer(name: string){
        const player = new Player();
        player.create(name)
        this.players.push(player);
    }
    removePlayer(name: string){
        const player = this.getPlayer(name);
        if(player)
            this.players.splice(this.players.indexOf(player), 1);
        return;
    }

    getPlayer(name: string) {
        return this.players.find(player => 
            player.getName() === name);
    }
}

export default Game;