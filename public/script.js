let matrix = [],
    GrassArr = [],
    PredatorArr = [],
    GrassEaterArr = [];

let opt = {
    speed: 400,
    // mX: 5,
    // mY: 5,
    // grass: 10,
    // grasseater: 2,
    // predator: 1,
}

let side = 12;
let CANVAS_SIZE;

let game = new Game(opt);

function setup () {
    game.Init();
    
    createCanvas(CANVAS_SIZE.x,CANVAS_SIZE.y);
    background("#222");
    noLoop();

    game.CreateBoard();
}

function draw() {
   game.Start();
}
