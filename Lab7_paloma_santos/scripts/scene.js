function createScene() {
  const scene = new BABYLON.Scene(engine);
  scene.enablePhysics(null, new BABYLON.CannonJSPlugin());
  scene.clearColor = BABYLON.Color3.Black();

  scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
  scene.collisionsEnabled = true;
   new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
  var light = new BABYLON.PointLight("omni", new BABYLON.Vector3(0, 80, 0), scene);
  light.intensity = 0.9;
  const box = createBox();
  const camera = createCamera();
  createGround();

  move(scene, box)

  camera.lockedTarget = box;

  //beggining of ball
  var numberBalls = 20;
  for (var i = 0; i < numberBalls; i++) {

    var ball = BABYLON.Mesh.CreateSphere('Ball ' + i, 1, 1, scene);
    var offset = i * 2;
    ball.position = new BABYLON.Vector3(-70 + offset, 0, 0);
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.diffuseColor = new BABYLON.Color3.Teal();
    ball.material = myMaterial;

    var animationX = new BABYLON.Animation("movingball", "position.x", 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    var keys = [];
    keys.push({
      frame: 0,
      value: -20 + offset
    });
    keys.push({
      frame: 10 + offset * 10,
      value: 10
    });
    keys.push({
      frame: 20,
      value: 20
    });
    animationX.setKeys(keys);

    var animationY = new BABYLON.Animation("movingball", "position.y", 16, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    var keys = [];
    keys.push({
      frame: 0,
      value: 0
    });
    keys.push({
      frame: 15,
      value: 0
    });
    keys.push({
      frame: 30,
      value: 10
    });
    animationY.setKeys(keys);

    scene.beginDirectAnimation(ball, [animationX, animationY], 0, 80, true);
  };
  //end of ball
  
  //torus
  let torus = new BABYLON.MeshBuilder.CreateTorus('torus');
  torus.position.x = 0;
  torus.position.y = 0;
  torus.__isSlow = true; // Add isSlow as property to torus

var materialTorus = new BABYLON.StandardMaterial("texture", scene);
materialTorus.diffuseColor = new BABYLON.Color3(0, 1, 0);
torus.material = materialTorus;

function myUpdates(){
torus.rotation.y += (torus.__isSlow ? 0.015 : 0.05);

  // Keep rotation value to an acceptable low.
  if(torus.rotation.y < Math.PI) torus.rotation.y -= Math.PI*2;
}


scene.registerBeforeRender(myUpdates);

scene.getEngine().getRenderingCanvas().addEventListener("click", function() {
  torus.__isSlow = !torus.__isSlow;
});
  // end of torus

  
  return scene;
}

function move(scene, box) {
  const keyMove = {};

  scene.actionManager = new BABYLON.ActionManager(scene);

  scene.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {
      keyMove[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    })
  );

  scene.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {
      keyMove[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    })
  );

  scene.onBeforeRenderObservable.add(() => {
    if (keyMove["w"] || keyMove["ArrowUp"]) {
      box.position.z += 0.1;
    }
    if (keyMove["a"] || keyMove["ArrowLeft"]) {
      box.position.x -= 0.1;
    }
    if (keyMove["s"] || keyMove["ArrowDown"]) {
      box.position.z -= 0.1;
    }
    if (keyMove["d"] || keyMove["ArrowRight"]) {
      box.position.x += 0.1;
    }
  })
}