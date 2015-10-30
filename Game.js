
function Game(canvas){
	ctx = canvas.getContext('2d');
	player = new Player(ctx);
	goal = new Goal(ctx);
}

Game.prototype.gameLoop = function(e){
	ctx.clearRect(0,0, 10000,10000);
	if(player.ReturnBool == false){
		player.draw(ctx);
		player.update(e);
		player.checkCollision(goal);
		goal.draw(ctx);
		window.addEventListener("keypress", game.gameLoop);
		window.requestAnimationFrame(game.gameLoop);
	}
	if(player.ReturnBool == true){
		ctx.save();
		ctx.fillStyle="#000000";
		ctx.font = 'italic 40pt Calibri';
		ctx.textBaseline = "top";	
		ctx.fillText("Well Done!",150,150);
		ctx.restore();
	}
	
}