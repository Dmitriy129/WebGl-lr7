import * as MYGLAPI from "./libs/opengl.module.js";

import { GUI } from "./libs/dat.gui.module.js";

import { OrbitControls } from "./controls/OrbitControls.js";
import { Geometry as Part1Geometry } from "./geometries/part1/Geometry.js";
import { Geometry as Part2Geometry } from "./geometries/part2/Geometry.js";

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
let mainUmbrella;

const diffuseColor = new MYGLAPI.Color();
const specularColor = new MYGLAPI.Color();
const textures = {
  part1Texs: [
    createTextureMaterial("p1_1.jpg"),
    createTextureMaterial("p1_2.jpg"),
    createTextureMaterial("p1_3.jpg"),
    createTextureMaterial("p1_4.jpg"),
    createTextureMaterial("p1_1.jpg"),
    createTextureMaterial("p1_2.jpg"),
    createTextureMaterial("p1_3.jpg"),
    createTextureMaterial("p1_4.jpg"),
  ],
  part2Tex: createTextureMaterial("wood1.jpeg"),
  part3Tex: createTextureMaterial("wood1.jpeg"),
  part4Tex: createTextureMaterial("gold1.jpeg"),
  part5Tex: createTextureMaterial("tex2.jpeg"),
  part6Tex: createTextureMaterial("wood2.jpeg"),
};

init();
render();

function init() {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  camera = new MYGLAPI.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    80000
  );
  camera.position.set(-600, 550, 1300);

  ambientLight = new MYGLAPI.AmbientLight(0x333333);

  light = new MYGLAPI.DirectionalLight(0xffffff, 1.0);

  renderer = new MYGLAPI.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasWidth, canvasHeight);
  renderer.outputEncoding = MYGLAPI.sRGBEncoding;
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);

  cameraControls = new OrbitControls(camera, renderer.domElement);
  cameraControls.addEventListener("change", render);

  const textureMap = new MYGLAPI.TextureLoader().load("src/textures/tex1.jpeg");
  textureMap.wrapS = textureMap.wrapT = MYGLAPI.RepeatWrapping;
  textureMap.anisotropy = 16;
  textureMap.encoding = MYGLAPI.sRGBEncoding;

  const materialColor = new MYGLAPI.Color();
  materialColor.setRGB(1.0, 1.0, 1.0);

  wireMaterial = new MYGLAPI.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  flatMaterial = new MYGLAPI.MeshPhongMaterial({
    color: materialColor,
    specular: 0x000000,
    flatShading: true,
    side: MYGLAPI.DoubleSide,
  });

  gouraudMaterial = new MYGLAPI.MeshLambertMaterial({
    color: materialColor,
    side: MYGLAPI.DoubleSide,
  });

  phongMaterial = new MYGLAPI.MeshPhongMaterial({
    color: materialColor,
    side: MYGLAPI.DoubleSide,
  });

  texturedMaterial = new MYGLAPI.MeshPhongMaterial({
    color: materialColor,
    map: textureMap,
    side: MYGLAPI.DoubleSide,
  });

  scene = new MYGLAPI.Scene();
  scene.background = new MYGLAPI.TextureLoader().load(
    "src/textures/back.jpeg",
    render
  );
  scene.add(ambientLight);
  scene.add(light);

  setupGui();
}

function createTextureMaterial(filename) {
  const materialColor = new MYGLAPI.Color();
  materialColor.setRGB(1.0, 1.0, 1.0);
  const textureMap = new MYGLAPI.TextureLoader().load(
    `src/textures/${filename}`,
    render
  );
  textureMap.wrapS = textureMap.wrapT = MYGLAPI.RepeatWrapping;
  textureMap.anisotropy = 16;
  textureMap.encoding = MYGLAPI.sRGBEncoding;
  return (texturedMaterial = new MYGLAPI.MeshPhongMaterial({
    color: materialColor,
    map: textureMap,
    side: MYGLAPI.DoubleSide,
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
    // newShading: "textured",
    newShading: "wireframe",
  };

  let h;

  const gui = new GUI();

  // h = gui.addFolder("Material control");

  // h.add(effectController, "shininess", 1.0, 400.0, 1.0)
  //   .name("shininess")
  //   .onChange(render);
  // h.add(effectController, "kd", 0.0, 1.0, 0.025)
  //   .name("diffuse strength")
  //   .onChange(render);
  // h.add(effectController, "ks", 0.0, 1.0, 0.025)
  //   .name("specular strength")
  //   .onChange(render);
  // h.add(effectController, "metallic").onChange(render);

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

  // h = gui.addFolder("Tessellation control");
  // h.add(effectController, "newTess", [2, 3, 4, 5, 6, 8, 10, 15, 20, 30, 40, 50])
  //   .name("Tessellation Level")
  //   .onChange(render);

  gui
    .add(effectController, "newShading", [
      "wireframe",
      // "flat",
      // "smooth",
      // "glossy",
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

  renderer.render(scene, camera);
}

function createNewTeapot() {
  if (mainUmbrella !== undefined) {
    // mainUmbrella.geometry.dispose();
    scene.remove(mainUmbrella);
  }

  // const part1Texs = [
  //   createTextureMaterial("p1_1.jpg"),
  //   createTextureMaterial("p1_2.jpg"),
  //   createTextureMaterial("p1_3.jpg"),
  //   createTextureMaterial("p1_4.jpg"),
  //   createTextureMaterial("p1_1.jpg"),
  //   createTextureMaterial("p1_2.jpg"),
  //   createTextureMaterial("p1_3.jpg"),
  //   createTextureMaterial("p1_4.jpg"),
  // ];
  // shading === "wireframe" ? wireMaterial : part5Tex;

  const part1 = new MYGLAPI.Group();

  const part1Geometry = new Part1Geometry(0);

  const part1_0 = new MYGLAPI.Mesh(
    part1Geometry,
    shading === "wireframe" ? wireMaterial : textures.part1Texs[0]
  );
  const part1_1 = new MYGLAPI.Mesh(
    new Part1Geometry(1),
    shading === "wireframe" ? wireMaterial : textures.part1Texs[1]
  );
  const part1_2 = new MYGLAPI.Mesh(
    new Part1Geometry(2),
    shading === "wireframe" ? wireMaterial : textures.part1Texs[2]
  );
  const part1_3 = new MYGLAPI.Mesh(
    new Part1Geometry(3),
    shading === "wireframe" ? wireMaterial : textures.part1Texs[3]
  );
  const part1_4 = new MYGLAPI.Mesh(
    new Part1Geometry(4),
    shading === "wireframe" ? wireMaterial : textures.part1Texs[4]
  );
  const part1_5 = new MYGLAPI.Mesh(
    new Part1Geometry(5),
    shading === "wireframe" ? wireMaterial : textures.part1Texs[5]
  );
  const part1_6 = new MYGLAPI.Mesh(
    new Part1Geometry(6),
    shading === "wireframe" ? wireMaterial : textures.part1Texs[6]
  );
  const part1_7 = new MYGLAPI.Mesh(
    new Part1Geometry(7),
    shading === "wireframe" ? wireMaterial : textures.part1Texs[7]
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
  // const part2Tex = createTextureMaterial("wood1.jpeg");

  const part2 = new MYGLAPI.Mesh(
    part2Geometry,
    shading === "wireframe" ? wireMaterial : textures.part2Tex
  );
  // const part3Tex = createTextureMaterial("wood1.jpeg");

  const part3Geometry = new MYGLAPI.CylinderGeometry(5, 5, 480, 30);
  const part3 = new MYGLAPI.Mesh(
    part3Geometry,
    shading === "wireframe" ? wireMaterial : textures.part3Tex
  );

  // part3.position.x = 10;
  part3.position.y = 185;
  // const part4Tex = createTextureMaterial("gold1.jpeg");

  const part4Geometry = new MYGLAPI.CylinderGeometry(7, 7, 40, 30);
  const part4 = new MYGLAPI.Mesh(
    part4Geometry,
    shading === "wireframe" ? wireMaterial : textures.part4Tex
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
  }
  // FIXME:
  const slices = 20;
  // FIXME:

  const stacks = 20;
  // const part5Tex = createTextureMaterial("tex2.jpeg");

  const part5Geometry = new MYGLAPI.ParametricGeometry(klein, slices, stacks);
  const part5 = new MYGLAPI.Mesh(
    part5Geometry,
    shading === "wireframe" ? wireMaterial : textures.part5Tex
  );

  part5.position.y = -90;
  part5.rotation.z = -Math.PI / 4;
  part5.rotation.x = -Math.PI / 2;

  const radius = 7;
  // FIXME:
  const widthSegments = 20;
  // FIXME:
  const heightSegments = 20;
  const part6Geometry = new MYGLAPI.SphereGeometry(
    radius,
    widthSegments,
    heightSegments
  );
  // const part6Tex = createTextureMaterial("wood2.jpeg");

  const part6 = new MYGLAPI.Mesh(
    part6Geometry,
    shading === "wireframe" ? wireMaterial : textures.part6Tex
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

  class CustomSinCurve extends MYGLAPI.Curve {
    constructor(scale) {
      super();
      this.scale = scale;
    }
    getPoint(t) {
      const tx = t * 10 - 1.5;
      const ty = Math.sin(2 * Math.PI * t);
      const tz = 0;
      return new MYGLAPI.Vector3(tx, ty, tz).multiplyScalar(this.scale);
    }
  }

  const part11Geometry = new MYGLAPI.TubeGeometry(
    new CustomSinCurve(10),
    30,
    2.0,
    // FIXME:
    10,
    false
  );
  const part11 = new MYGLAPI.Mesh(
    part11Geometry,
    shading === "wireframe" ? wireMaterial : flatMaterial
  );
  part11.position.y = 230;
  part11.position.x = -280;
  part11.rotation.z = Math.PI / 2;

  const umbrella = new MYGLAPI.Group();

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
  mainUmbrella = umbrella;
  scene.add(mainUmbrella);
}
