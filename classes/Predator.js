var Base = require("./Base");

module.exports = class Predator extends Base {
    constructor(x,y,e = null) {
        super(x,y);
        this.e = (e == null) ? 10 : e; 
    }

    mul(){
        let newCell = random(this.ChoosCell(0))

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
    
         matrix[y][x] = 3;
            PredatorArr.push(new Predator(x,y));
            this.e = 5;
        }
    }
    move(){
        let newCell = random(this.ChoosCell(0));

        if (newCell)  {
            let x = newCell[0];
            let y = newCell[1];

            this.e--;

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            PredatorArr.push(new Predator(x,y,this.e));

            for (let i = 0; i < PredatorArr.length; ++i) {
                if (PredatorArr[i].x == this.x && PredatorArr[i].y == this.y) {
                    PredatorArr.splice(i,1);
                    break;
                }
            }
            
            this.x = x;
            this.y = y;
            console.log(this.e);
            if (this.e <= 0){
                this.die();
            }
        }
    }
    eat(){
        console.log(this.e);
        let newCell = random(this.ChoosCell(2));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            this.e++;

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            PredatorArr.push(new Predator(x,y,this.e));
            
            for (let i = 0; i < GrassEaterArr.length; ++i) {
                if (GrassEaterArr[i].x == x && GrassEaterArr[i].y == y) {
                    GrassEaterArr.splice(i,1);
                    break;
                }
            }

            for (let i = 0; i < PredatorArr.length; ++i) {
                if (PredatorArr[i].x == this.x && PredatorArr[i].y == this.y) {
                    PredatorArr.splice(i,1);
                    break;
                }
            }

            this.x = x;
            this.y = y;

            if (this.e >= 15) {
                this.mul();
            }
        }else {
            this.move();
        }

    }
    die(){
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < PredatorArr.length; ++i) {
            if (PredatorArr[i].x == this.x && 
                PredatorArr[i].y == this.y) PredatorArr.splice(i,1);
                break;
        }
    }
}