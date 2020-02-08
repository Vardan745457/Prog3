// let matrix = [],
//     GrassArr = [],
//     PredatorArr = [],
//     GrassEaterArr = [];

// let opt = {
//     speed: 400,
//     // mX: 5,
//     // mY: 5,
//     // grass: 10,
//     // grasseater: 2,
//     // predator: 1,
// }

// let side = 12;
// let CANVAS_SIZE;

// let game = new Game(opt);

// function setup () {
//     game.Init();
    
//     createCanvas(CANVAS_SIZE.x,CANVAS_SIZE.y);
//     background("#222");
//     noLoop();

//     game.CreateBoard();
// }

// function draw() {
//    game.Start();
// }


var socket = io();
var GameData;

function setup() {
    socket.on("Init", function(data) { GameData = JSON.parse(data); });
    
    console.log(GameData);
    // createCanvas(GameData.CanvasSize[0].GameData.CanvasSize[1]);
    background("#222");
    noLoop();
}

function draw(){

}


