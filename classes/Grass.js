var Base = require("./Base");

module.exports =  class Grass extends Base {

    constructor(x,y,e = null) {
        super(x,y);
        this.e = e == null ? 0 : e;
    }

    mul() {
        this.e++;

        let newCell = random(this.ChoosCell(0));

        if (newCell && this.e >= 8) {
            let x = newCell[0];
            let y = newCell[1];
            
            matrix[y][x] = 1;
            GrassArr.push(new Grass(x,y));
            this.e = 0;
        }
    }

}