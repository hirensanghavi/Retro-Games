var SNAKERADIUS = 15;
var gameEngine = new GameEngine();
var UPDATES = 15;
var ASSET_MANAGER = new AssetManager();
var GRID ;
var Score = 0;
ASSET_MANAGER.downloadAll(function(){
    //put function here of actually starting the game 
    //it will run post all downloads
    GRID = Array(20).fill().map(() => Array(20).fill(0));

    var canvas = document.getElementById("snakeCanvas");
    var ctx = canvas.getContext("2d");
    canvas.focus();
    gameEngine.init(ctx);
    //gameEngine.addEntity(new SceneManager(gameEngine));

    gameEngine.addEntity(new Head(gameEngine,2,0));
    gameEngine.addEntity(new Food(19*SNAKERADIUS,19*SNAKERADIUS,gameEngine));

    gameEngine.start();
    document.getElementById("score").innerHTML = Score.toString();
    document.getElementById("restart").addEventListener("click",restart);
})

function restart()
{
    Score = 0;
    gameEngine = new GameEngine();
    GRID = Array(20).fill().map(() => Array(20).fill(0));

    var canvas = document.getElementById("snakeCanvas");
    canvas.focus();
    var ctx = canvas.getContext("2d");
    gameEngine.init(ctx);
    //gameEngine.addEntity(new SceneManager(gameEngine));

    gameEngine.addEntity(new Head(gameEngine,2,0));
    gameEngine.addEntity(new Food(19*SNAKERADIUS,19*SNAKERADIUS,gameEngine));

    gameEngine.start();
}

