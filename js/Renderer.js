function Renderer(){
	this.renderer = {};
	this.renderer = new THREE.WebGLRenderer({antialias:true});
	this.renderer.physicallyBasedShading = true;
	this.renderer.setClearColor(0xffffff);
	this.renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(this.renderer.domElement);

	window.addEventListener("resize", function(event){
		this.renderer.setSize(window.innerWidth,window.innerHeight);
	}.bind(this));

	return this.renderer;
}