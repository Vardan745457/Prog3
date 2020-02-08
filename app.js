var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

//Game

/// Variables
var Game = require("./classes/Game");
var GameOpts = {
    speed: 400,
    side: 15,
    mX: 30,
    mY: 30,
    grass: 100,
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
io.on("connection", function(socket){

    var GameData = {
        "CanvasSize" : game.canavas_size,
        "matrix" : matrix,
    }

    socket.emit("Init", JSON.stringify(GameData));
})

setInterval(() => {
    game.Start();

    io.sockets.emit("matrix", matrix);
}, game.speed);  



//Express
app.use(express.static("./public"));

app.get("/", function(req,res){
    res.redirect("index.html");
});

//Server
server.listen(3000, function(){
    console.log("Ok");
});



