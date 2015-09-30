var ctx, player;
function Game(canvas){

	console.log("hubabuba");
	ctx = canvas.getContext('2d');
	player = new Player(ctx);
}

Game.prototype.gameLoop = function(e){
	ctx.clearRect(0,0, 10000,10000);
	player.draw(ctx);
	player.update(e);
	//console.log("pfffffff");
	window.requestAnimationFrame(game.gameLoop);
}