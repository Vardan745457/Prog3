class Game {
    constructor () {}
    Start(){}
    Stop(){}
    Restart(){}
    Reset(){}
    Draw(obj) {
        for (let i = 0; i < obj.matrix.length; ++i) {
            for (let j = 0; j < obj.matrix[i].length; ++j) {
                if (obj.matrix[i][j] == 0) fill("#fff");
                if (obj.matrix[i][j] == 1) fill("#0f0");
                if (obj.matrix[i][j] == 2) fill("#ff0");
                if (obj.matrix[i][j] == 3) fill("#f00");

                rect(j * obj.side,i * obj.side,obj.side,obj.side);
            }
        }
    }
}