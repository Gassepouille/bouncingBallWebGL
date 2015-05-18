// class Cylinder
function Cylinder(){
	// Initialize cylinder
	this.object3d={};
	var geometry = new THREE.CylinderGeometry( 2, 2, 20, 32 );
	var material = new THREE.MeshLambertMaterial( {color: 0xff00ff} );
	this.object3d = new THREE.Mesh( geometry, material );
	this.object3d.position.set(0,1,0);

}