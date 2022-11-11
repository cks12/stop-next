import { v1 as uuidv1 } from 'uuid';
class Room  {
    name: string;
    id: string;
    playerNumber: number;
    limit: number;
    constructor (name: string, limit: number) {
        this.name = name;
        this.id = uuidv1();
        this.playerNumber = 0;
        this.limit = limit;
    }
}

export default Room;