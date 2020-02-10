

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

let game = new Game();
let socket = io();
let GameData;

function setup() {
    // socket.on("connection",function(socket){

    //     socket.on("Init", function(data) { GameData = JSON.parse(data); });
    
    // });
    
    setTimeout(() => {
        console.log(GameData);
        createCanvas(GameData.CanvasSize.x, GameData.CanvasSize.y);
        background("#222");
        noLoop();
    }, 500)
    
}

// socket.on("data", game.Draw);


