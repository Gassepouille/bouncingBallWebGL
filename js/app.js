var APP = {
	/**
	 * Initialize application
	 */
	init:function(){
		// array of objects in the scene
		var sceneContent = [];
		// setScene
		var scene = new THREE.Scene();
		// setRenderer
		var renderer = new Renderer();
		// setCamera
		var camera = new Camera();
		sceneContent.push(camera);
		// setLight
		var light = new Light();
		sceneContent.push(light);
		// setBall
		var ball = new Ball();
		sceneContent.push(ball);
		// set cylinder
		var cylinder = new Cylinder();
		sceneContent.push(cylinder);
		// set plane
		var plane = new Plane();
		sceneContent.push(plane);

		// set the focus of the camera toward the center of the scene
		camera.object3d.lookAt(scene.position);

		// add all objects stocked in the array to the scene
		sceneContent.forEach(function(objects){
			scene.add(objects.object3d);
		});


		// initialize the sound
		var sound = new Sound(camera,ball,'sounds/jump.mp3')

		//setEngine and initialize
		var engine = new Engine();
		engine.init(renderer,scene,camera.object3d,sceneContent);
	}
};