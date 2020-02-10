var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);


//Express
app.use(express.static("./public"));

app.get("/", function(req,res){
    res.redirect("index.html");
});

//Server
server.listen(3000, function(){
    console.log("Ok");
});

//Game

/// Variables
var Game = require("./classes/Game");
var GameOpts = {
    speed: 400,
    side: 15,
    mX: 10,
    mY: 10,
    grass: 10,
    predator: 30,
    grasseater: 40,
}

Grass = require("./classes/Grass");
Predator = require("./classes/Predator");
GrassEater = require("./classes/GrassEater");
random = require("./modules/random")

matrix = [];
GrassArr = [];
PredatorArr = [];
GrassEaterArr = [];

let game = new Game(GameOpts);

game.Init();

//io
// io.on("connection", function(socket){

    // var InitData = {
    //     "CanvasSize" : game.canavas_size,
    // }

    // io.sockets.emit("Init", JSON.stringify(InitData));

//     socket.emit("Init", JSON.stringify(InitData));
// })

setInterval(() => {
    game.Start();

    var Data = {
        "matrix": matrix,
        "side": game.side,
    }
    io.sockets.emit("data", Data);
}, game.speed);
