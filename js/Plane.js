function Plane(){
	this.object3d = {};
	var geometry = new THREE.PlaneGeometry( 75, 75, 100,100 );
	var material = new THREE.MeshLambertMaterial( {color: 0x00ffff, side: THREE.DoubleSide} );
	this.object3d = new THREE.Mesh( geometry, material );
	this.object3d.position.set(0,0,0);
	this.object3d.rotation.set(Math.PI*0.5,0,0);
}