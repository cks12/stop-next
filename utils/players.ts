class Player {    
    private name: string;
    private score: number;
    private atributes: any;
    
    constructor() {
    this.name = "";
    this.score = 0;
    }

    changeName(name: string) {
        this.name = name;
    }

    setScore(score: number) {
        this.score = score;
    }

    getScore(){
        return this.score;
    }
}

export default Player;