class Game {
    constructor(obj = null) {
        this.interval;
        this.speed = (obj && obj.speed) ? obj.speed : 300;
        this.mX = (obj && obj.mX) ? obj.mX : 10,
        this.mY = (obj && obj.mY) ? obj.mY : 10,
        this.grass = (obj && obj.grass) ? obj.grass : 30,
        this.grasseater = (obj && obj.grasseater) ? obj.grasseater : 10,
        this.predator = (obj && obj.predator) ? obj.predator : 10,

        this.MatrixSaize = this.mX * this.mY; 
    }

    Start(){
        this.interval = setInterval(() => {

            this.Draw();

            for (let i = 0; i < GrassArr.length ; ++i) GrassArr[i].mul();
            for (let i = 0; i < GrassEaterArr.length; ++i) GrassEaterArr[i].eat();
            for (let i = 0; i < PredatorArr.length; ++i) PredatorArr[i].eat();


            // if  (GrassArr.length == 0 && GrassEaterArr.length == 0 
            //     || GrassArr.length >= game.MatrixSaize) {
            
            //     game.Reset();
            // }

       }, this.speed);
    }
    Stop() {
        if (this.interval) clearInterval(this.interval); 
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
        this.Draw();
    }
    Init() {

        // if (this.MatrixSaize <= (this.grass + this.grasseater + this.predator))  {
        //     alert("Matrix is small");
        //     return null;
        // }
        let BusyCells = [];
        function CheckBC(x,y) {
            let result = true;
            for (let j = 0; j < BusyCells.length; ++j) {
                if (x == BusyCells[j].x && y == BusyCells[j].y) {
                    result = false;
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
            let x = Math.floor(random(0,matrix[0].length));
            let y = Math.floor(random(0,matrix.length));
    
            matrix[y][x] = 1;
            GrassArr.push(new Grass(x,y));
            BusyCells.push({x: x,y: y});
        }
        for (let i = 0; i < this.predator ; ++i) {
            let x = Math.floor(random(0,matrix[0].length));
            let y = Math.floor(random(0,matrix.length));
            
    
            if (CheckBC(x,y)){
                matrix[y][x] = 3;
                PredatorArr.push(new Predator(x,y));
                BusyCells.push({x: x, y: y});
            }else {
                --i;
            }
        }
        for (let i = 0; i < this.grasseater ; ++i) {
            let x = Math.floor(random(0,matrix[0].length));
            let y = Math.floor(random(0,matrix.length));
            
    
            if (CheckBC(x,y)){
                matrix[y][x] = 2;
                GrassEaterArr.push(new GrassEater(x,y));
                BusyCells.push({x: x, y: y});
            }else {
                --i;
            }
        }

        CANVAS_SIZE = {
            x: this.mX * side,
            y: this.mY * side,
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
        
        this.Draw();
    }
    Draw() {
        for (let i = 0; i < matrix.length; ++i) {
            for (let j = 0; j < matrix[i].length; ++j) {
                if (matrix[i][j] == 0) fill("#fff");
                if (matrix[i][j] == 1) fill("#0f0");
                if (matrix[i][j] == 2) fill("#ff0");
                if (matrix[i][j] == 3) fill("#f00");

                rect(j * side,i * side,side,side);
            }
        }
    }
}
