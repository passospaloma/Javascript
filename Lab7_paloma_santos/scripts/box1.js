function createBox() {
  const box1 = BABYLON.MeshBuilder.CreateBox("box", {});
  const box1Material = new BABYLON.StandardMaterial('boxMaterial');
  box1Material.diffuseColor = BABYLON.Color3.Random();
  box1.position.y = 5;
  box1.physicsImpostor = new BABYLON.PhysicsImpostor(box1,
    BABYLON.PhysicsImpostor.BoxImpostor, {
      mass: 2,
      restitution: .6
    }
  );

  box1.material = box1Material;
  box1.actionManager = new BABYLON.ActionManager(scene);
  box1.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
      function (evt) {
        const sourceBox = evt.meshUnderPointer;
        sourceBox.position.x += 0.3;
        sourceBox.position.y += 0.3;

        box1Material.diffuseColor = BABYLON.Color3.Random();
      }));

  const box1 = BABYLON.MeshBuilder.CreateBox("box", {});
  const box1Material = new BABYLON.StandardMaterial('boxMaterial');
  box1Material.diffuseColor = BABYLON.Color3.Random();
  box1.position.y = 3;
  box1.material = box1Material;



  return box;
}