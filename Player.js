function Player(ctx){
	this.xPos = 20;
	this.yPos = 20;
	this.draw(ctx);
	this.myColour = "#7FFF00";
	this.ReturnBool = false;
	this.img = Image();
	this.img=document.getElementById("player_Sprite");
}

Player.prototype.draw = function(ctx){//sprite rects 32 x 32//
	this.cf = 0; // current frame//
	this.sx = this.cf * 32;
	this.sy = 0;
	this.sw = 32;
	this.sh = 32;
	this.dx = this.xPos;
	this.dy = this.yPos;
	this.dw = 32;
	this.dh = 32;
	ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);


	//ctx.fillStyle=this.myColour;
	//ctx.fillRect(this.xPos,this.yPos,75,75);
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