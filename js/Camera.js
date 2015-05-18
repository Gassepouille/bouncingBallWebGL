function Camera(){
	this.object3d = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1,1000);
	this.object3d.position.set(30,25,30);
	var controls = new THREE.OrbitControls(this.object3d)
	
	window.addEventListener("resize", function(event){
		this.object3d.aspect	= window.innerWidth / window.innerHeight;
		this.object3d.updateProjectionMatrix();
	}.bind(this));
}