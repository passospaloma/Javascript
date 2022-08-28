function createBox() {
  const box = BABYLON.MeshBuilder.CreateBox("box", {});
  const boxMaterial = new BABYLON.StandardMaterial('boxMaterial');
  boxMaterial.diffuseColor = BABYLON.Color3.Random();
  box.position.y = 3;
  box.physicsImpostor = new BABYLON.PhysicsImpostor(box,
    BABYLON.PhysicsImpostor.BoxImpostor, {
      mass: 2,
      restitution: .6
    }
  );

  box.material = boxMaterial;
  box.actionManager = new BABYLON.ActionManager(scene);
  box.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
      function (evt) {
        const sourceBox = evt.meshUnderPointer;
        sourceBox.position.x += 0.1;
        sourceBox.position.y += 0.1;

        boxMaterial.diffuseColor = BABYLON.Color3.Random();
      }));
  const box1 = BABYLON.MeshBuilder.CreateBox("box", {});
  const box1Material = new BABYLON.StandardMaterial('boxMaterial');
  box1Material.diffuseColor = BABYLON.Color3.Random();
  box1.position.y = 3;
  box1.material = box1Material;
  return box;
}