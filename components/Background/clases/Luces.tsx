import{
    DirectionalLight,
    HemisphereLight,
    AmbientLight
  }from "three"
  

export default class Luces {
    constructor(scene){
        scene.add(new AmbientLight(0xFFFFFF, 0.8))
        scene.add(new HemisphereLight(0xFFFFFF, 0.8))
    }
}