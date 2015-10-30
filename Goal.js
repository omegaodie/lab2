
function Goal(ctx){
	this.draw(ctx);
	this.color = "#00FFFF";
	this.bx = 480;
	this.by = 670;
	this.bheight = 175;
	this.bwidth = 175;
}

Goal.prototype.draw = function(ctx){
		ctx.fillStyle=this.colour;
		ctx.strokeRect (this.bx,this.by,this.bheight,this.bwidth);

}


Goal.prototype.delete = function(ctx){
	this.bx = 6000;
	this.by = 6000;
}