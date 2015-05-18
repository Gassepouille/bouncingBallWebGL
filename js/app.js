var APP = {
	init:function(){
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

		var cylinder = new Cylinder();
		sceneContent.push(cylinder);

		var plane = new Plane();
		sceneContent.push(plane);

		camera.object3d.lookAt(scene.position);

		sceneContent.forEach(function(objects){
			scene.add(objects.object3d);
		});


		var sound = new Sound(camera,ball,'sounds/jump.mp3')




		//setEngine
		var engine = new Engine();
		engine.init(renderer,scene,camera.object3d,sceneContent);




	}
};