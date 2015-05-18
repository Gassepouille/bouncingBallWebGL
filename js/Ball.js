function Ball (){
	this.object3d = {};
	this.prevBounceAngle = null;
	var geometry = new THREE.SphereGeometry(1,32,32);
	var material = new THREE.MeshLambertMaterial({color:0xff0000});
	this.object3d = new THREE.Mesh(geometry,material);
	this.object3d.position.set(0,0,10);
}
Ball.prototype.update = function(delta,now){
	var angle = now*Math.PI*2 *0.5;
	this.object3d.position.x=15*Math.cos(angle);
	this.object3d.position.z=15*Math.sin(angle);

	var bounceAngle = now*Math.PI*2*1.5;
	bounceAngle = bounceAngle%(2*Math.PI)  - Math.PI;
	
	if (this.prevBounceAngle) {
		if (bounceAngle>=0 && this.prevBounceAngle<0) {
			console.log('bounce')
		}
	};
	this.prevBounceAngle = bounceAngle;


	this.object3d.position.y=8*Math.abs(Math.sin(bounceAngle))+this.object3d.geometry.parameters.radius;

	// if(this.object3d.children.length>0) this.playSound(this.object3d.children);

}
Ball.prototype.playSound = function(children){
	for (var i = 0; i < children.length; i++) {
		if(this.object3d.children[i].type == 'audio'){
			
			if(this.object3d.position.y<=0.1){

			}else{
	
			}
		}
	};
	
}