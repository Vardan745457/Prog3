var Base = require("./Base");

module.exports = class GrassEater extends Base{

    constructor(x,y,e = null) {
        super(x,y);
        this.e = (e == null) ? 5 : e;
    }

    mul(){
        let newCell = random(this.ChoosCell(0));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
    
         matrix[y][x] = 2;
            GrassEaterArr.push(new GrassEater(x,y));
            this.e = 5;
        }
    }
    move(){
        let newCell = random(this.ChoosCell(0));

        if (newCell)  {
            let x = newCell[0];
            let y = newCell[1];

            this.e--;

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            GrassEaterArr.push(new GrassEater(x,y,this.e));

            for (let i = 0; i < GrassEaterArr.length; ++i) {
                if (GrassEaterArr[i].x == this.x && GrassEaterArr[i].y == this.y) {
                    GrassEaterArr.splice(i,1);
                    break;
                }
            }
            
            this.x = x;
            this.y = y;
            
            if (this.e <= 0){
                this.die();
            }
        }
        // console.log("Move","E",this.e);
    }
    eat(){
        let newCell = random(this.ChoosCell(1));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            this.e++;

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            GrassEaterArr.push(new GrassEater(x,y,this.e));
            
            for (let i = 0; i < GrassArr.length; ++i) {
                if (GrassArr[i].x == x && GrassArr[i].y == y) {
                    GrassArr.splice(i,1);
                    break;
                }
            }

            for (let i = 0; i < GrassEaterArr.length; ++i) {
                if (GrassEaterArr[i].x == this.x && GrassEaterArr[i].y == this.y) {
                    GrassEaterArr.splice(i,1);
                    break;
                }
            }

            this.x = x;
            this.y = y;

            // console.log("Grass Eater: eat","E", this.e);
            if (this.e >= 10) {
                this.mul();
                // console.log("Grass Eater: mul", "E", this.e);
            }
    
        }else {
            this.move();
            // console.log("Grass Eater: move", "E", this.e);
        }

    }
    die(){
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < GrassEaterArr.length; ++i) {
            if (GrassEaterArr[i].x == this.x && 
                GrassEaterArr[i].y == this.y) GrassEaterArr.splice(i,1);
                break;
        }
    }
}
