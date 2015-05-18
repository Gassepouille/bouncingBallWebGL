function Engine(){
	this.lastTimeMsec=0;
}
Engine.prototype.init = function(renderer,scene,camera,sceneContent){
	var _this = this;
	function animationLoop(nowMsec){
		requestAnimationFrame(animationLoop);
		
		var myDelta = _this.getDelta(nowMsec);

		_this.update(myDelta/1000,nowMsec/1000,sceneContent);

		renderer.render(scene,camera);
	};

	animationLoop(Date.now());
}
Engine.prototype.update = function(delta,now,sceneContent){
	sceneContent.forEach(function(object3D){

		if(object3D.update)object3D.update(delta,now);
		
	});
}

// -------- Delta Calculation
Engine.prototype.getDelta = function(nowMsec){
	this.lastTimeMsec	= this.lastTimeMsec || nowMsec-1000/60
	var deltaMsec	= Math.min(200, nowMsec - this.lastTimeMsec)
	this.lastTimeMsec	= nowMsec

	return deltaMsec;
}
