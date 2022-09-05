import {Component} from "react"
import Renderer from "./Renderer"


export default class Background extends Component {
    componentDidMount = ()=> new Renderer()
      
    render = ()=> <canvas id="bg" />
    
}


/*

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

*/