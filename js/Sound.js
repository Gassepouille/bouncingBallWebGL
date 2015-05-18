/**
 * class Sound
 * @param {object} camera      camera THREEJS
 * @param {object} objectSound Object which the sound is attached to
 * @param {string} urlSound    url of the sound needed
 */
function Sound (camera,objectSound,urlSound){
	// set Listener to camera
	var listener = new THREE.AudioListener();
	camera.object3d.add( listener );

	// initialize the sound
	var sound = new THREE.Audio( listener );
	sound.load( urlSound );
	sound.setRefDistance( 200 );

	// add the sound to the object
	objectSound.object3d.add( sound );
}