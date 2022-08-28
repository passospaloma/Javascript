function createCamera() {
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI/2, 1.3, 20, new BABYLON.Vector3(0, 1, 1));
   // This targets the camera to scene origin
   camera.setTarget(BABYLON.Vector3.Zero());

   // This attaches the camera to the canvas
    camera.heightOffset = 8;
    camera.radius = 5;
    camera.rotationOffset = 1;
    camera.cameraAcceleration = 0.005
    camera.maxCameraSpeed = 10
  	camera.applyGravity = true; 
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    return camera;
  }
  