function SceneManager(ctx){
	gmScn = new GameScene(ctx);
	mnuScene = new MenuScene(ctx);
	state = "";
}


SceneManager.prototype.update = function(e, ctx){
	if(state == "GAME"){
		gmScn.update(e,ctx);
	}
	if(state == "MENU"){
		mnuScene.update(e,ctx);
		var cv = document.getElementById('myCanvas');
  		var rect = cv.getBoundingClientRect();
   		var x = e.clientX - rect.left;
    	var y = e.clientY - rect.top;
    	if(x > 0 && y > 0){
    		this.getScene("GAME");
    		
    	}
	}else{
		console.log("NO SCENE SELECTED");
	}
}


SceneManager.prototype.getScene = function(scene){
	state = scene;
}