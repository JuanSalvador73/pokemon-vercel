import{
    Mesh,
    SphereGeometry,
    TextureLoader,
    BackSide,
    MeshPhongMaterial
  }from "three"


export default class Skybox{
    constructor(scene){
        const skygeometry = new SphereGeometry(360, 25, 25)
        const loader = new TextureLoader()
        const textura = loader.load("/custom-sky.png")
        const material2 = new MeshPhongMaterial({
          map: textura
        })
        const Skybox = new Mesh(skygeometry, material2)
        Skybox.material.side = BackSide
        scene.add(Skybox)
    }
}