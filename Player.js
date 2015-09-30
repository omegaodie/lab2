var x, y;
function Player(ctx){
	x = 20;
	y = 20;
	this.draw(ctx);
}

Player.prototype.draw = function(ctx){
	ctx.fillStyle="#FF0000";
	ctx.fillRect(x,y,75,75);
}

Player.prototype.update = function(e){
	var kode = e.keycode;
	console.log(kode);

	if(kode == 87){
		y += 50;
	}
	if(kode == 68){
		x += 50;
	}
	if(kode == 83){
		y -= 50;
	}
	if(kode == 65){
		x -= 50;
	}
}