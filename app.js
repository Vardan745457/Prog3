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
    grass: 0,
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

// game.Init();

//Server

app.use(express.static("./public"));

app.get("/", function(req,res){
    res.redirect("./index.html");
});

app.listen(3000, function(){
    console.log("Ok");
});

//io

