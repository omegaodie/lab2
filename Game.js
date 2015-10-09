var ctx, player, goal, aboo;
function Game(canvas){

	console.log("hubabuba");
	ctx = canvas.getContext('2d');
	player = new Player(ctx);
	goal = new Goal(ctx);
	aboo = false;
}

Game.prototype.gameLoop = function(e){
	ctx.clearRect(0,0, 10000,10000);
	player.draw(ctx);
	player.update(e);
	player.checkCollision(goal);
	goal.draw(ctx);
	//console.log("pfffffff");
	window.addEventListener("keypress", game.gameLoop);
	window.requestAnimationFrame(game.gameLoop);

}