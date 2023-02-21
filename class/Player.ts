import { Socket } from "socket.io";
import { fields } from "types";

class Player {
    id: string;
    name: string;
    isReady: boolean;
    fields: fields[];
    owner: boolean;
    constructor(id: string){
        this.id = id;
        this.name = '';
        this.isReady = false;
        this.owner = false;
        this.fields = [];
    }

    public get_owner(){
        return this.owner;
    }

    public set_fields(f: any[]){
        this.fields = f;
    }

    public set_Ready(){
        this.isReady = !this.isReady;
    }

    public set_name(name: string) {
        this.name = name;
    }

    public set_owner(){
        this.owner = true;
    }

    private onChangeName(name: string) {
        this.name = name;
    }
}

export default Player;