function Player(ctx){
	this.xPos = 20;
	this.yPos = 20;
	this.draw(ctx);
	this.myColour = "#7FFF00";
	this.ReturnBool = false;
}

Player.prototype.draw = function(ctx){
	ctx.fillStyle=this.myColour;
	ctx.fillRect(this.xPos,this.yPos,75,75);
}

Player.prototype.update = function(e){
	var kode = e.keyCode;
	if(kode == 97){
		this.xPos -= 25;
	}
	if(kode == 100){
		this.xPos += 25;
	}
	if(kode == 119){
		this.yPos -= 25;
	}
	if(kode == 115){
		this.yPos += 25;
	}
}

Player.prototype.checkCollision = function (goal){
        if ((this.xPos < goal.bx + goal.bheight)&&(this.xPos + 75 > goal.bx)&&(this.yPos + 75 > goal.by)&&(this.yPos < goal.by + goal.bheight))
        {                
            this.myColour = "#000000";
            this.ReturnBool = true;              
        }
}