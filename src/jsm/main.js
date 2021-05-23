import * as THREE from "./libs/opengl.module.js";

import { GUI } from "./libs/dat.gui.module.js";

import { OrbitControls } from "./controls/OrbitControls.js";
import { TeapotGeometry } from "./geometries/UmbrellaGeometry.js";
import { Geometry as Part1Geometry } from "./geometries/part1/Geometry.js";
import { Geometry as Part2Geometry } from "./geometries/part2/Geometry.js";
import { Geometry as Part3Geometry } from "./geometries/part3/Geometry.js";

let camera, scene, renderer;
let cameraControls;
let effectController;
const defaultSize = 50;
let ambientLight, light;

let tess = -1;
let bBottom;
let bLid;
let bBody;
let bFitLid;
let bNonBlinn;
let shading;
let wireMaterial,
  flatMaterial,
  gouraudMaterial,
  phongMaterial,
  texturedMaterial;

let teapot, textureCube;

const diffuseColor = new THREE.Color();
const specularColor = new THREE.Color();

init();
render();

function init() {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    80000
  );
  camera.position.set(-600, 550, 1300);

  ambientLight = new THREE.AmbientLight(0x333333);

  light = new THREE.DirectionalLight(0xffffff, 1.0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasWidth, canvasHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);

  cameraControls = new OrbitControls(camera, renderer.domElement);
  cameraControls.addEventListener("change", render);

  const textureMap = new THREE.TextureLoader().load("src/textures/tex1.jpeg");
  textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping;
  textureMap.anisotropy = 16;
  textureMap.encoding = THREE.sRGBEncoding;

  const materialColor = new THREE.Color();
  materialColor.setRGB(1.0, 1.0, 1.0);

  wireMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  flatMaterial = new THREE.MeshPhongMaterial({
    color: materialColor,
    specular: 0x000000,
    flatShading: true,
    side: THREE.DoubleSide,
  });

  gouraudMaterial = new THREE.MeshLambertMaterial({
    color: materialColor,
    side: THREE.DoubleSide,
  });

  phongMaterial = new THREE.MeshPhongMaterial({
    color: materialColor,
    side: THREE.DoubleSide,
  });

  texturedMaterial = new THREE.MeshPhongMaterial({
    color: materialColor,
    map: textureMap,
    side: THREE.DoubleSide,
  });

  scene = new THREE.Scene();
  // const backTex = new THREE.TextureLoader().load("src/textures/back.jpeg");

  scene.background = new THREE.TextureLoader().load("src/textures/back.jpeg");
  // scene.background = new THREE.Color(0xaaaaaa);
  // const loader = new THREE.TextureLoader();
  // loader.load(
  //   "https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg",
  //   function (texture) {
  //     scene.background = texture;
  //   }
  // );

  scene.add(ambientLight);
  scene.add(light);

  setupGui();
}

function createTextureMaterial(filename) {
  const materialColor = new THREE.Color();
  materialColor.setRGB(1.0, 1.0, 1.0);
  const textureMap = new THREE.TextureLoader().load(`src/textures/${filename}`);
  // const textureMap = new THREE.TextureLoader().load("src/textures/tex1.jpeg");
  textureMap.wrapS = textureMap.wrapT = THREE.RepeatWrapping;
  textureMap.anisotropy = 16;
  textureMap.encoding = THREE.sRGBEncoding;
  return (texturedMaterial = new THREE.MeshPhongMaterial({
    color: materialColor,
    map: textureMap,
    side: THREE.DoubleSide,
  }));
}

function onWindowResize() {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  renderer.setSize(canvasWidth, canvasHeight);

  camera.aspect = canvasWidth / canvasHeight;
  camera.updateProjectionMatrix();

  render();
}

function setupGui() {
  effectController = {
    shininess: 40.0,
    ka: 0.17,
    kd: 0.51,
    ks: 0.2,
    metallic: true,

    hue: 0.121,
    saturation: 0.73,
    lightness: 0.66,

    lhue: 0.04,
    lsaturation: 0.01,
    llightness: 1.0,

    lx: 0.32,
    ly: 0.39,
    lz: 0.7,
    newTess: 20,
    bottom: true,
    lid: true,
    body: true,
    fitLid: false,
    nonblinn: false,
    newShading: "flat",
  };

  let h;

  const gui = new GUI();

  h = gui.addFolder("Material control");

  h.add(effectController, "shininess", 1.0, 400.0, 1.0)
    .name("shininess")
    .onChange(render);
  h.add(effectController, "kd", 0.0, 1.0, 0.025)
    .name("diffuse strength")
    .onChange(render);
  h.add(effectController, "ks", 0.0, 1.0, 0.025)
    .name("specular strength")
    .onChange(render);
  h.add(effectController, "metallic").onChange(render);

  h = gui.addFolder("Material color");

  h.add(effectController, "hue", 0.0, 1.0, 0.025).name("hue").onChange(render);
  h.add(effectController, "saturation", 0.0, 1.0, 0.025)
    .name("saturation")
    .onChange(render);
  h.add(effectController, "lightness", 0.0, 1.0, 0.025)
    .name("lightness")
    .onChange(render);

  h = gui.addFolder("Lighting");

  h.add(effectController, "lhue", 0.0, 1.0, 0.025).name("hue").onChange(render);
  h.add(effectController, "lsaturation", 0.0, 1.0, 0.025)
    .name("saturation")
    .onChange(render);
  h.add(effectController, "llightness", 0.0, 1.0, 0.025)
    .name("lightness")
    .onChange(render);
  h.add(effectController, "ka", 0.0, 1.0, 0.025)
    .name("ambient")
    .onChange(render);

  h = gui.addFolder("Light direction");

  h.add(effectController, "lx", -1.0, 1.0, 0.025).name("x").onChange(render);
  h.add(effectController, "ly", -1.0, 1.0, 0.025).name("y").onChange(render);
  h.add(effectController, "lz", -1.0, 1.0, 0.025).name("z").onChange(render);

  h = gui.addFolder("Tessellation control");
  h.add(effectController, "newTess", [2, 3, 4, 5, 6, 8, 10, 15, 20, 30, 40, 50])
    .name("Tessellation Level")
    .onChange(render);

  gui
    .add(effectController, "newShading", [
      "wireframe",
      "flat",
      "smooth",
      "glossy",
      "textured",
    ])
    .name("Shading")
    .onChange(render);
}

function render() {
  if (
    effectController.newTess !== tess ||
    effectController.bottom !== bBottom ||
    effectController.lid !== bLid ||
    effectController.body !== bBody ||
    effectController.fitLid !== bFitLid ||
    effectController.nonblinn !== bNonBlinn ||
    effectController.newShading !== shading
  ) {
    tess = effectController.newTess;
    bBottom = effectController.bottom;
    bLid = effectController.lid;
    bBody = effectController.body;
    bFitLid = effectController.fitLid;
    bNonBlinn = effectController.nonblinn;
    shading = effectController.newShading;

    createNewTeapot();
  }

  phongMaterial.shininess = effectController.shininess;
  texturedMaterial.shininess = effectController.shininess;

  diffuseColor.setHSL(
    effectController.hue,
    effectController.saturation,
    effectController.lightness
  );
  if (effectController.metallic) {
    specularColor.copy(diffuseColor);
  } else {
    specularColor.setRGB(1, 1, 1);
  }

  diffuseColor.multiplyScalar(effectController.kd);
  flatMaterial.color.copy(diffuseColor);
  gouraudMaterial.color.copy(diffuseColor);
  phongMaterial.color.copy(diffuseColor);
  texturedMaterial.color.copy(diffuseColor);

  specularColor.multiplyScalar(effectController.ks);
  phongMaterial.specular.copy(specularColor);
  texturedMaterial.specular.copy(specularColor);

  ambientLight.color.setHSL(
    effectController.hue,
    effectController.saturation,
    effectController.lightness * effectController.ka
  );

  light.position.set(
    effectController.lx,
    effectController.ly,
    effectController.lz
  );
  light.color.setHSL(
    effectController.lhue,
    effectController.lsaturation,
    effectController.llightness
  );
  // scene.background = null;

  renderer.render(scene, camera);
}

function createNewTeapot() {
  if (teapot !== undefined) {
    teapot.geometry.dispose();
    scene.remove(teapot);
  }

  // const teapotGeometry = new TeapotGeometry(
  //   defaultSize,
  //   tess,
  //   effectController.bottom,
  //   effectController.lid,
  //   effectController.body,
  //   effectController.fitLid,
  //   !effectController.nonblinn
  // );

  // teapot = new THREE.Mesh(
  //   teapotGeometry,
  //   shading === "wireframe"
  //     ? wireMaterial
  //     : shading === "flat"
  //     ? flatMaterial
  //     : shading === "smooth"
  //     ? gouraudMaterial
  //     : shading === "glossy"
  //     ? phongMaterial
  //     : texturedMaterial
  // );

  // scene.add(teapot);

  const part1 = new THREE.Group();

  const part1Geometry = new Part1Geometry(0);

  const part1_0 = new THREE.Mesh(
    part1Geometry,
    createTextureMaterial("p1_1.jpg")
    // shading === "wireframe"
    //   ? wireMaterial
    //   : shading === "flat"
    //   ? flatMaterial
    //   : shading === "smooth"
    //   ? gouraudMaterial
    //   : shading === "glossy"
    //   ? phongMaterial
    //   : texturedMaterial
  );
  const part1_1 = new THREE.Mesh(
    new Part1Geometry(1),
    createTextureMaterial("p1_2.jpg")
    // new THREE.MeshBasicMaterial({ color: "purple", side: THREE.DoubleSide })
  );
  const part1_2 = new THREE.Mesh(
    new Part1Geometry(2),
    // new THREE.MeshBasicMaterial({ color: "purple", side: THREE.DoubleSide })
    createTextureMaterial("p1_3.jpg")
  );
  const part1_3 = new THREE.Mesh(
    new Part1Geometry(3),
    // new THREE.MeshBasicMaterial({ color: "purple", side: THREE.DoubleSide })
    createTextureMaterial("p1_4.jpg")
  );
  const part1_4 = new THREE.Mesh(
    new Part1Geometry(4),
    // new THREE.MeshBasicMaterial({ color: "purple", side: THREE.DoubleSide })
    createTextureMaterial("p1_1.jpg")
  );
  const part1_5 = new THREE.Mesh(
    new Part1Geometry(5),
    // new THREE.MeshBasicMaterial({ color: "purple", side: THREE.DoubleSide })
    createTextureMaterial("p1_2.jpg")
  );
  const part1_6 = new THREE.Mesh(
    new Part1Geometry(6),
    // new THREE.MeshBasicMaterial({ color: "purple", side: THREE.DoubleSide })
    createTextureMaterial("p1_3.jpg")
  );
  const part1_7 = new THREE.Mesh(
    new Part1Geometry(7),
    // new THREE.MeshBasicMaterial({ color: "#12A3EE", side: THREE.DoubleSide })
    createTextureMaterial("p1_4.jpg")
  );
  part1.add(part1_0);
  part1.add(part1_1);
  part1.add(part1_2);
  part1.add(part1_3);
  part1.add(part1_4);
  part1.add(part1_5);
  part1.add(part1_6);
  part1.add(part1_7);

  const part2Geometry = new Part2Geometry(
    defaultSize,
    tess,
    effectController.bottom,
    effectController.lid,
    effectController.body,
    effectController.fitLid,
    !effectController.nonblinn
  );

  const part2 = new THREE.Mesh(
    part2Geometry,
    createTextureMaterial("wood1.jpeg")
  );

  const part3Geometry = new THREE.CylinderGeometry(5, 5, 480, 3200);
  const part3 = new THREE.Mesh(
    part3Geometry,
    createTextureMaterial("wood1.jpeg")
  );

  // part3.position.x = 10;
  part3.position.y = 185;

  const part4Geometry = new THREE.CylinderGeometry(7, 7, 40, 3200);
  const part4 = new THREE.Mesh(
    part4Geometry,
    createTextureMaterial("gold1.jpeg")
  );

  // part4.position.x = 10;
  part4.position.y = -40;

  function klein(v, u, target) {
    u *= Math.PI;
    v *= 2 * Math.PI;
    u = u * 2;

    let x;
    let z;

    if (u < Math.PI) {
      x =
        3 * Math.cos(u) * (1 + Math.sin(u)) +
        2 * (1 - Math.cos(u) / 2) * Math.cos(u) * Math.cos(v);
      z =
        -8 * Math.sin(u) -
        2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
    } else {
      x =
        3 * Math.cos(u) * (1 + Math.sin(u)) +
        2 * (1 - Math.cos(u) / 2) * Math.cos(v + Math.PI);
      z = -8 * Math.sin(u);
    }

    const y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);

    target.set(x, y, z).multiplyScalar(3.75);
    // target.set(x, y, z).multiplyScalar(0.75);
  }
  // FIXME:
  const slices = 20;
  // FIXME:

  const stacks = 20;

  const part5Geometry = new THREE.ParametricGeometry(klein, slices, stacks);
  const part5 = new THREE.Mesh(
    part5Geometry,
    createTextureMaterial("tex2.jpeg")
  );

  // part5.position.x = 10;
  part5.position.y = -90;
  part5.rotation.z = -Math.PI / 4;
  part5.rotation.x = -Math.PI / 2;

  const radius = 7;
  // FIXME:
  const widthSegments = 20;
  // FIXME:
  const heightSegments = 20;
  const part6Geometry = new THREE.SphereGeometry(
    radius,
    widthSegments,
    heightSegments
  );

  const part6 = new THREE.Mesh(
    part6Geometry,
    createTextureMaterial("wood2.jpeg")
  );
  part6.position.y = -20;
  const part7 = part6.clone();
  part7.position.y = -12;
  const part8 = part6.clone();
  part8.position.y = -4;
  const part9 = part6.clone();
  part9.position.y = 4;
  const part10 = part6.clone();
  part10.position.y = 430;

  class CustomSinCurve extends THREE.Curve {
    constructor(scale) {
      super();
      this.scale = scale;
    }
    getPoint(t) {
      const tx = t * 10 - 1.5;
      const ty = Math.sin(2 * Math.PI * t);
      const tz = 0;
      return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
    }
  }

  const part11Geometry = new THREE.TubeGeometry(
    new CustomSinCurve(10),
    30,
    2.0,
    // FIXME:
    10,
    false
  );
  const part11 = new THREE.Mesh(
    part11Geometry,
    shading === "wireframe"
      ? wireMaterial
      : shading === "flat"
      ? flatMaterial
      : shading === "smooth"
      ? gouraudMaterial
      : shading === "glossy"
      ? phongMaterial
      : texturedMaterial
  );
  part11.position.y = 230;
  part11.position.x = -280;
  part11.rotation.z = Math.PI / 2;

  const umbrella = new THREE.Group();
  scene.add(umbrella);

  umbrella.add(part1);
  // umbrella.add(part2);
  umbrella.add(part3);
  umbrella.add(part4);
  umbrella.add(part5);
  umbrella.add(part6);
  umbrella.add(part7);
  umbrella.add(part8);
  umbrella.add(part9);
  umbrella.add(part10);
  umbrella.add(part11);

  umbrella.rotation.z += Math.PI / 5;
  umbrella.rotation.y += -Math.PI / 4;
  umbrella.rotation.x += -Math.PI / 8;

  // scene.add(part1);
  // // scene.add(part2);
  // scene.add(part3);
  // scene.add(part4);
  // scene.add(part5);
  // scene.add(part6);
  // scene.add(part7);
  // scene.add(part8);
  // scene.add(part9);
  // scene.add(part10);
  // scene.add(part11);
}
