class Player {    
    private name: string;
    private score: number;
    
    constructor() {
    this.name = "";
    this.score = 0;
    }

    create(name: string) {
        this.name = name;
    }

    setScore(score: number) {
        this.score = score;
    }

    getName(){
        return this.name;
    }

    getScore(){
        return this.score;
    }
}

export default Player;