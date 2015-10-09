var bx,by,colour,bheight,bwidth;
function Goal(ctx){
	this.draw(ctx);
	this.color = "#00FFFF";
	bx = 480;
	by = 670;
	bheight = 175;
	bwidth = 175;
}

Goal.prototype.draw = function(ctx){
		ctx.fillStyle=colour;
		ctx.strokeRect (bx,by,bheight,bwidth);

}