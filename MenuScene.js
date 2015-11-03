function MenuScene(currentScene){
	currentScene = "MENU";
}


MenuScene.prototype.update = function(e, ctx){
	ctx.clearRect(0,0, 10000,10000);
   	var img=document.getElementById("spkHouse");
    ctx.drawImage(img,10,10);
}
