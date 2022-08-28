function createGround() {
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
    const groundMaterial = new BABYLON.StandardMaterial("groundMaterial");

  
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(
      ground,
      BABYLON.PhysicsImpostor.BoxImpostor, 
      { mass: 0, restitution: .6 }
    );
  
    ground.material = groundMaterial;

    groundMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.9, 0.8);
    groundMaterial.diffuseTexture = new BABYLON.Texture('https://source.unsplash.com/CWTaWrjd1c8/400X400'); 
    ground.position.y = -2;
    
  
    return ground;
  }