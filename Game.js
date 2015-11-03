
function Game(canvas){
	ctx = canvas.getContext('2d');
	scnManager = new SceneManager(ctx);
	currentScene = "MENU";
	scnManager.getScene(currentScene);
}

Game.prototype.gameLoop = function(e){
	scnManager.update(e, ctx);
	window.addEventListener("keypress", game.gameLoop);
	window.addEventListener ("mousedown", game.gameLoop);
	window.requestAnimationFrame(game.gameLoop);
}