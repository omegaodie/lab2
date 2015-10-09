var xPos, yPos, myColour;
function Player(ctx){
	xPos = 20;
	yPos = 20;
	this.draw(ctx);
	myColour = "#7FFF00";
}

Player.prototype.draw = function(ctx){
	ctx.fillStyle=myColour;
	ctx.fillRect(xPos,yPos,75,75);
	//console.log("pfffffff");
}

Player.prototype.update = function(e){
	var kode = e.keyCode;
	if(kode == 97){
		xPos -= 25;
	}
	if(kode == 100){
		xPos += 25;
	}
	if(kode == 119){
		yPos -= 25;
	}
	if(kode == 115){
		yPos += 25;
	}
}

Player.prototype.checkCollision = function (e){
        if ((xPos < 480 + 175)&&(xPos + 75 > 480)&&(yPos + 475 > 670)&&(yPos < 670 + 175))
        {                
            myColour = "#000000";              
        }
}