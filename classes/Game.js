module.exports = class Game {
    constructor(obj = null) {
        this.side = (obj && obj.side) ? obj.side : 12;
        this.speed = (obj && obj.speed) ? obj.speed : 300;
        this.mX = (obj && obj.mX) ? obj.mX : 10,
        this.mY = (obj && obj.mY) ? obj.mY : 10,
        this.grass = (obj && this.CheckArgs(obj.grass) ) ? obj.grass : 30,
        this.grasseater = (obj && this.CheckArgs(obj.grasseater) ) ? obj.grasseater : 10,
        this.predator = (obj && this.CheckArgs(obj.predator)) ? obj.predator : 10,

        this.matrix_saize = this.mX * this.mY;
        // this.
        this.canavas_size = {
            x: this.mX * this.side,
            y: this.mY * this.side,
        }
    }

    Start(){
            for (let i = 0; i < GrassArr.length ; ++i) GrassArr[i].mul();
            for (let i = 0; i < GrassEaterArr.length; ++i) GrassEaterArr[i].eat();
            for (let i = 0; i < PredatorArr.length; ++i) PredatorArr[i].eat();


            // if  (GrassArr.length == 0 && GrassEaterArr.length == 0 
            //     || GrassArr.length >= game.matrix_saize) {
            
            //     game.Reset();
            // }
    }
    Stop(interval) {
        if (interval) clearInterval(interval); 
    }
    Restart() {
        this.Clear();
        this.Init();
        this.Start()
    }
    Clear() {
        this.Stop()
        matrix = [];
        GrassArr = [];
        PredatorArr = [];
        GrassEaterArr = [];
    }
    Reset() {
        this.Clear();
        this.Init();
    }
    Init() {

        // if (this.matrix_saize <= (this.grass + this.grasseater + this.predator))  {
        //     alert("Matrix is small");
        //     return null;
        // }
        console.log("Init");
        let BusyCells = [];
        function CheckBC(x,y) {
            let result = true;
            for (let j = 0; j < BusyCells.length; ++j) {
                if (x == BusyCells[j].x && y == BusyCells[j].y) {
                    result = false;
                    break;
                }
            }
    
            return result;
        }
        for(let i = 0 ; i < this.mY; ++i) {
            matrix[i] = [];
            for (let j = 0; j < this.mX; ++j) {
                matrix[i][j] = 0;
            }
        }
        for (let i = 0; i < this.grass ; ++i) {
            let x = Math.floor(random(matrix[0].length));
            let y = Math.floor(random(matrix.length));
    
            matrix[y][x] = 1;
            GrassArr.push(new Grass(x,y));
            BusyCells.push({x: x,y: y});
        }
               
        for (let i = 0; i < this.predator ; ++i) {
            let x = Math.floor(random(matrix[0].length));
            let y = Math.floor(random(matrix.length));
            
    
            if (CheckBC(x,y)){
                matrix[y][x] = 3;
                PredatorArr.push(new Predator(x,y));
                BusyCells.push({x: x, y: y});
            }else {
                --i;
            }
        }
        
        for (let i = 0; i < this.grasseater ; ++i) {
            let x = Math.floor(random(matrix[0].length));
            let y = Math.floor(random(matrix.length));
            
    
            if (CheckBC(x,y)){
                matrix[y][x] = 2;
                GrassEaterArr.push(new GrassEater(x,y));
                BusyCells.push({x: x, y: y});
            }else {
                --i;
            }
        }
    }
    CreateBoard() {
        let body = document.getElementsByTagName("body")[0];
        let MainMenu = document.createElement("div");
        MainMenu.classList.add("main");
        body.appendChild(MainMenu);

        let StartButton = document.createElement("button"); 
        let StopButton = document.createElement("button");
        let RestartButton = document.createElement("button");
        let ResetButton = document.createElement("button");
        
        StartButton.classList.add("Start","btn");
        StopButton.classList.add("Stop","btn");
        RestartButton.classList.add("Restart","btn");
        ResetButton.classList.add("Reset","btn");

        StartButton.textContent = "Start";
        StopButton.textContent = "Stop";
        RestartButton.textContent = "Restart";
        ResetButton.textContent = "Reset";


        StartButton.onclick = this.Start.bind(this);
        StopButton.onclick = this.Stop.bind(this);
        RestartButton.onclick = this.Restart.bind(this);
        ResetButton.onclick = this.Reset.bind(this);

        MainMenu.appendChild(StartButton);
        MainMenu.appendChild(StopButton);
        MainMenu.appendChild(RestartButton);
        MainMenu.appendChild(ResetButton);
    }
    CheckArgs(arg){
        if (arg != null) {
            return (arg == 0) ? true : arg; 
        }
        return false;
    }
}
