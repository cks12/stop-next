import { playerFinished } from "types";
import Player from "./Player";

type PlayerType = Player;

class Game {
    private Players: PlayerType[];
    private limit_player: number;
    public in_gaming: boolean;
    public player_finished: playerFinished[];
    private letter;
    constructor(){
        this.Players = [];
        this.player_finished = [];
        this.limit_player = 8;
        this.in_gaming = false;
        this.letter = ""
    }

    public add_player(id:string){
        const _player = new Player(id);
        if(this.Players.length == 0) _player.set_owner();
        this.Players.push(_player);
        return _player;
    }

    public remove_player(id:string){
        const _player = this.Players.findIndex(item => item.id === id);
        if(_player == -1) return;
        this.Players.splice(_player, 1);
    }

    public set_new_owner(): Player | undefined  {
        if(!this.Players[0]) 
            return;
        this.Players[0].set_owner();
        return this.Players[0]
    }

    public start_game(){
        this.player_finished = []
        if (this.Players.length <= 1)
            return {err:"not_enough_players"};
        const _notStartedPlayer = this.Players.filter(p => p.isReady === false);
        if(_notStartedPlayer.length > 0)
            return {err:"not_started_player", response:_notStartedPlayer}
        this.in_gaming = true;
        const _letter =  this.set_new_letter();
        return { sucess:true, letter:_letter }
    }

    public add_player_finished(player: Player): playerFinished  | undefined{
        if(this.player_finished.findIndex(p => p.id === player.id) != -1) 
            return;
        const _player:playerFinished = {
            id: player.id,
            fields:player.fields,
            name:player.name,
        }
        this.player_finished.push(_player);
        this.in_gaming = (this.player_finished.length !== this.Players.length);
        return _player;
    }

    private new_game():void {
        this.Players=[];
        this.player_finished=[];
        this.letter="";
        this.in_gaming=false;
    }

    private set_new_letter():string{
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const randomIndexLetter = Math.floor(Math.random() * letters.length);
        const _letter = letters[randomIndexLetter]
        this.letter = _letter
        return _letter; 
    }

    public get_limit():  number {
        return this.limit_player;
    }

    public get_players_number(): number {
        return this.Players.length; 
    }

    public get_players(): Player[] {
        return this.Players;
    }

}

export default Game;