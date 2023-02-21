export interface Player {
  name: string,
  id: string,
  isReady: boolean;
  owner: boolean;
  score: number;
  fields: []
}

export interface fields {
  name: string;
  value: string;
}

export interface playerFinished{
  name: string;
  id: string;
  fields:fields[]
}

export interface ModalProps {
    isOpen: boolean;
    setClose: (bool: boolean) => void;
    players: Player[] ;
    player?: Player;
    startGameFunc: () => void;
  }
  
export interface PlayerProps {
    player: Player, 
}

export interface GameProps {
  fields: string[];
  finishedPlayers: string[];
}
  
export interface ApplicationStateProps{
    limit: string | number;
    players: string | number;
    player: Player | undefined;
    listPlayer: Player[];
    playerFinished:playerFinished[]
    game?: Game,
    msg: string;
}

export interface Application {
  ApplicationState: ApplicationStateProps,
  finish_player:(fields: fields[]) => void;
  owner_start_game: () => void,
  changePlayerName: (string: ChangeEvent<HTMLInputElement>) => void,
  changeReady: () => void,
  useGameFields:any;
}

export interface ApplicationProps {
  Application: Application,
}

export interface field {
  name: string;
  value: string;
}

export interface Game {
  letter: string;
  fields: field[];
  score: number[];
  isGaming: boolean;
}

export interface animations{
  count_down: () => void
}