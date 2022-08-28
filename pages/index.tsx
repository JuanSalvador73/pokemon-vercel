import{useEffect}from "react"
import{
  Scene, 
  WebGL1Renderer, 
  PerspectiveCamera,
  Mesh,
  MeshBasicMaterial,
  BoxGeometry,
  SphereGeometry,
  TextureLoader,
  BackSide,
  MeshPhongMaterial, 
  DirectionalLight,
  HemisphereLight,
  AmbientLight
}from "three"
//import "../styles/main.css"

function HomePage() {
    useEffect(()=>{
      //console.log(window);
      const scene = new Scene()
      const renderer = new WebGL1Renderer({
        antialias: true,
        canvas: document.getElementById("bg")
      })
      const camara = new PerspectiveCamera(
        50, 
        window.innerWidth/window.innerHeight,
         0.1,
          1000
          )

          //Mover Camara
          camara.position.z = 6

          //Crear Cubo
          const geometria = new BoxGeometry(1,1,1)
          const material = new MeshBasicMaterial({color: 0xFFFFFF})
          const cubo = new Mesh(geometria, material)
          scene. add(cubo)

          //Crear Skybox
          const skygeometry = new SphereGeometry(360, 25, 25)
          const loader = new TextureLoader()
          const textura = loader.load("/custom-sky.png")
          const material2 = new MeshPhongMaterial({
            map: textura
          })
          const Skybox = new Mesh(skygeometry, material2)
          scene.add(Skybox)
          Skybox.material.side = BackSide

          //Crear Iluminación
          scene.add(new AmbientLight(0xFFFFFF, 0.8))
          scene.add(new HemisphereLight(0xFFFFFF, 0.8))


          renderer.setSize(window.innerWidth, window.innerHeight)

          function animate(){
            //cubo.position.x += 0.001
            cubo.rotation.x += 0.01
            cubo.rotation.y += 0.01

            renderer.render(scene, camara)
            requestAnimationFrame(animate)
          }
          animate()
    },[])

    return <canvas id="bg" />
  }
  
  export default HomePage