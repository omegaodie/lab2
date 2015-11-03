function GameScene(ctx){
	 player = new Player(ctx);
	 goal = new Goal(ctx);
}


GameScene.prototype.update = function(e, ctx){
	console.log(ctx);
	ctx.clearRect(0,0, 10000,10000);
	if(player.ReturnBool == false){
		player.draw(ctx);
		player.update(e);
		player.checkCollision(goal);
		goal.draw(ctx);
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
