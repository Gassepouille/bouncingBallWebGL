// Class Ball
function Ball (){
	// Initialize Ball
	this.object3d = {};
	this.prevBounceAngle = null;
	var geometry = new THREE.SphereGeometry(1,32,32);
	var material = new THREE.MeshLambertMaterial({color:0xff0000});
	this.object3d = new THREE.Mesh(geometry,material);
	this.object3d.position.set(0,0,10);
}

/**
 * update the ball
 * @param  {Number} delta - seconds between 2 iterations
 * @param  {Number} now   - present time in seconds
 */
Ball.prototype.update = function(delta,now){
	// set horizontal position
	var angle = now*Math.PI*2 *0.5;
	var radiusHorizontal = 15
	this.object3d.position.x=radiusHorizontal*Math.cos(angle);
	this.object3d.position.z=radiusHorizontal*Math.sin(angle);


	// set vertical position
	var bounceAngle = now*Math.PI*2*1.5;
	bounceAngle = bounceAngle%(2*Math.PI) - Math.PI;
	this.object3d.position.y = 8*Math.abs(Math.sin(bounceAngle))+this.object3d.geometry.parameters.radius;

	// play sound if needed
	if (this.prevBounceAngle !== null ) {
		if (bounceAngle>=0 && this.prevBounceAngle<0) {
			this.playSound();
		}
		if (bounceAngle<=0 && this.prevBounceAngle>0) {
			this.playSound();
		}
	};
	this.prevBounceAngle = bounceAngle;
}

/**
 * Play the sound when the ball hit the ground
 */
Ball.prototype.playSound = function(){

	// get children of object (ball here)
	var children = this.object3d.children;

	// traverse children 
	for (var i = 0; i < children.length; i++) {
		var child = children[i];

		// check if children are audio type
		if(child.type !== 'Audio') continue; 

		// stop audio if already playing
		if(child.isPlaying){
			child.stop();
			child.onEnded();
		}
		// play audio
		child.play();				
		
	};
	
}