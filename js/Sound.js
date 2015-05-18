function Sound (camera,objectSound,urlSound){
	var listener = new THREE.AudioListener();
	camera.object3d.add( listener );

	// init
	var sound = new THREE.Audio( listener );
	sound.load( urlSound );
	sound.setRefDistance( 200 );
	// sound.autoplay = true;
	objectSound.object3d.add( sound );
	console.log(objectSound.object3d.children)
}