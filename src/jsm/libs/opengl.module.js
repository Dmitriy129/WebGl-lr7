const REVISION = "129dev",
  MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  CullFaceNone = 0,
  CullFaceBack = 1,
  CullFaceFront = 2,
  CullFaceFrontBack = 3,
  BasicShadowMap = 0,
  PCFShadowMap = 1,
  PCFSoftShadowMap = 2,
  VSMShadowMap = 3,
  FrontSide = 0,
  BackSide = 1,
  DoubleSide = 2,
  FlatShading = 1,
  SmoothShading = 2,
  NoBlending = 0,
  NormalBlending = 1,
  AdditiveBlending = 2,
  SubtractiveBlending = 3,
  MultiplyBlending = 4,
  CustomBlending = 5,
  AddEquation = 100,
  SubtractEquation = 101,
  ReverseSubtractEquation = 102,
  MinEquation = 103,
  MaxEquation = 104,
  ZeroFactor = 200,
  OneFactor = 201,
  SrcColorFactor = 202,
  OneMinusSrcColorFactor = 203,
  SrcAlphaFactor = 204,
  OneMinusSrcAlphaFactor = 205,
  DstAlphaFactor = 206,
  OneMinusDstAlphaFactor = 207,
  DstColorFactor = 208,
  OneMinusDstColorFactor = 209,
  SrcAlphaSaturateFactor = 210,
  NeverDepth = 0,
  AlwaysDepth = 1,
  LessDepth = 2,
  LessEqualDepth = 3,
  EqualDepth = 4,
  GreaterEqualDepth = 5,
  GreaterDepth = 6,
  NotEqualDepth = 7,
  MultiplyOperation = 0,
  MixOperation = 1,
  AddOperation = 2,
  NoToneMapping = 0,
  LinearToneMapping = 1,
  ReinhardToneMapping = 2,
  CineonToneMapping = 3,
  ACESFilmicToneMapping = 4,
  CustomToneMapping = 5,
  UVMapping = 300,
  CubeReflectionMapping = 301,
  CubeRefractionMapping = 302,
  EquirectangularReflectionMapping = 303,
  EquirectangularRefractionMapping = 304,
  CubeUVReflectionMapping = 306,
  CubeUVRefractionMapping = 307,
  RepeatWrapping = 1e3,
  ClampToEdgeWrapping = 1001,
  MirroredRepeatWrapping = 1002,
  NearestFilter = 1003,
  NearestMipmapNearestFilter = 1004,
  NearestMipMapNearestFilter = 1004,
  NearestMipmapLinearFilter = 1005,
  NearestMipMapLinearFilter = 1005,
  LinearFilter = 1006,
  LinearMipmapNearestFilter = 1007,
  LinearMipMapNearestFilter = 1007,
  LinearMipmapLinearFilter = 1008,
  LinearMipMapLinearFilter = 1008,
  UnsignedByteType = 1009,
  ByteType = 1010,
  ShortType = 1011,
  UnsignedShortType = 1012,
  IntType = 1013,
  UnsignedIntType = 1014,
  FloatType = 1015,
  HalfFloatType = 1016,
  UnsignedShort4444Type = 1017,
  UnsignedShort5551Type = 1018,
  UnsignedShort565Type = 1019,
  UnsignedInt248Type = 1020,
  AlphaFormat = 1021,
  RGBFormat = 1022,
  RGBAFormat = 1023,
  LuminanceFormat = 1024,
  LuminanceAlphaFormat = 1025,
  RGBEFormat = RGBAFormat,
  DepthFormat = 1026,
  DepthStencilFormat = 1027,
  RedFormat = 1028,
  RedIntegerFormat = 1029,
  RGFormat = 1030,
  RGIntegerFormat = 1031,
  RGBIntegerFormat = 1032,
  RGBAIntegerFormat = 1033,
  RGB_S3TC_DXT1_Format = 33776,
  RGBA_S3TC_DXT1_Format = 33777,
  RGBA_S3TC_DXT3_Format = 33778,
  RGBA_S3TC_DXT5_Format = 33779,
  RGB_PVRTC_4BPPV1_Format = 35840,
  RGB_PVRTC_2BPPV1_Format = 35841,
  RGBA_PVRTC_4BPPV1_Format = 35842,
  RGBA_PVRTC_2BPPV1_Format = 35843,
  RGB_ETC1_Format = 36196,
  RGB_ETC2_Format = 37492,
  RGBA_ETC2_EAC_Format = 37496,
  RGBA_ASTC_4x4_Format = 37808,
  RGBA_ASTC_5x4_Format = 37809,
  RGBA_ASTC_5x5_Format = 37810,
  RGBA_ASTC_6x5_Format = 37811,
  RGBA_ASTC_6x6_Format = 37812,
  RGBA_ASTC_8x5_Format = 37813,
  RGBA_ASTC_8x6_Format = 37814,
  RGBA_ASTC_8x8_Format = 37815,
  RGBA_ASTC_10x5_Format = 37816,
  RGBA_ASTC_10x6_Format = 37817,
  RGBA_ASTC_10x8_Format = 37818,
  RGBA_ASTC_10x10_Format = 37819,
  RGBA_ASTC_12x10_Format = 37820,
  RGBA_ASTC_12x12_Format = 37821,
  RGBA_BPTC_Format = 36492,
  SRGB8_ALPHA8_ASTC_4x4_Format = 37840,
  SRGB8_ALPHA8_ASTC_5x4_Format = 37841,
  SRGB8_ALPHA8_ASTC_5x5_Format = 37842,
  SRGB8_ALPHA8_ASTC_6x5_Format = 37843,
  SRGB8_ALPHA8_ASTC_6x6_Format = 37844,
  SRGB8_ALPHA8_ASTC_8x5_Format = 37845,
  SRGB8_ALPHA8_ASTC_8x6_Format = 37846,
  SRGB8_ALPHA8_ASTC_8x8_Format = 37847,
  SRGB8_ALPHA8_ASTC_10x5_Format = 37848,
  SRGB8_ALPHA8_ASTC_10x6_Format = 37849,
  SRGB8_ALPHA8_ASTC_10x8_Format = 37850,
  SRGB8_ALPHA8_ASTC_10x10_Format = 37851,
  SRGB8_ALPHA8_ASTC_12x10_Format = 37852,
  SRGB8_ALPHA8_ASTC_12x12_Format = 37853,
  LoopOnce = 2200,
  LoopRepeat = 2201,
  LoopPingPong = 2202,
  InterpolateDiscrete = 2300,
  InterpolateLinear = 2301,
  InterpolateSmooth = 2302,
  ZeroCurvatureEnding = 2400,
  ZeroSlopeEnding = 2401,
  WrapAroundEnding = 2402,
  NormalAnimationBlendMode = 2500,
  AdditiveAnimationBlendMode = 2501,
  TrianglesDrawMode = 0,
  TriangleStripDrawMode = 1,
  TriangleFanDrawMode = 2,
  LinearEncoding = 3e3,
  sRGBEncoding = 3001,
  GammaEncoding = 3007,
  RGBEEncoding = 3002,
  LogLuvEncoding = 3003,
  RGBM7Encoding = 3004,
  RGBM16Encoding = 3005,
  RGBDEncoding = 3006,
  BasicDepthPacking = 3200,
  RGBADepthPacking = 3201,
  TangentSpaceNormalMap = 0,
  ObjectSpaceNormalMap = 1,
  ZeroStencilOp = 0,
  KeepStencilOp = 7680,
  ReplaceStencilOp = 7681,
  IncrementStencilOp = 7682,
  DecrementStencilOp = 7683,
  IncrementWrapStencilOp = 34055,
  DecrementWrapStencilOp = 34056,
  InvertStencilOp = 5386,
  NeverStencilFunc = 512,
  LessStencilFunc = 513,
  EqualStencilFunc = 514,
  LessEqualStencilFunc = 515,
  GreaterStencilFunc = 516,
  NotEqualStencilFunc = 517,
  GreaterEqualStencilFunc = 518,
  AlwaysStencilFunc = 519,
  StaticDrawUsage = 35044,
  DynamicDrawUsage = 35048,
  StreamDrawUsage = 35040,
  StaticReadUsage = 35045,
  DynamicReadUsage = 35049,
  StreamReadUsage = 35041,
  StaticCopyUsage = 35046,
  DynamicCopyUsage = 35050,
  StreamCopyUsage = 35042,
  GLSL1 = "100",
  GLSL3 = "300 es";
class EventDispatcher {
  addEventListener(e, t) {
    void 0 === this._listeners && (this._listeners = {});
    const r = this._listeners;
    void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t);
  }
  hasEventListener(e, t) {
    if (void 0 === this._listeners) return !1;
    const r = this._listeners;
    return void 0 !== r[e] && -1 !== r[e].indexOf(t);
  }
  removeEventListener(e, t) {
    if (void 0 === this._listeners) return;
    const r = this._listeners[e];
    if (void 0 !== r) {
      const e = r.indexOf(t);
      -1 !== e && r.splice(e, 1);
    }
  }
  dispatchEvent(e) {
    if (void 0 === this._listeners) return;
    const t = this._listeners[e.type];
    if (void 0 !== t) {
      e.target = this;
      const r = t.slice(0);
      for (let t = 0, n = r.length; t < n; t++) r[t].call(this, e);
      e.target = null;
    }
  }
}
const _lut = [];
for (let e = 0; e < 256; e++) _lut[e] = (e < 16 ? "0" : "") + e.toString(16);
let _seed = 1234567;
const DEG2RAD = Math.PI / 180,
  RAD2DEG = 180 / Math.PI;
function generateUUID() {
  const e = (4294967295 * Math.random()) | 0,
    t = (4294967295 * Math.random()) | 0,
    r = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0;
  return (
    _lut[255 & e] +
    _lut[(e >> 8) & 255] +
    _lut[(e >> 16) & 255] +
    _lut[(e >> 24) & 255] +
    "-" +
    _lut[255 & t] +
    _lut[(t >> 8) & 255] +
    "-" +
    _lut[((t >> 16) & 15) | 64] +
    _lut[(t >> 24) & 255] +
    "-" +
    _lut[(63 & r) | 128] +
    _lut[(r >> 8) & 255] +
    "-" +
    _lut[(r >> 16) & 255] +
    _lut[(r >> 24) & 255] +
    _lut[255 & n] +
    _lut[(n >> 8) & 255] +
    _lut[(n >> 16) & 255] +
    _lut[(n >> 24) & 255]
  ).toUpperCase();
}
function clamp(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function euclideanModulo(e, t) {
  return ((e % t) + t) % t;
}
function mapLinear(e, t, r, n, i) {
  return n + ((e - t) * (i - n)) / (r - t);
}
function inverseLerp(e, t, r) {
  return e !== t ? (r - e) / (t - e) : 0;
}
function lerp(e, t, r) {
  return (1 - r) * e + r * t;
}
function damp(e, t, r, n) {
  return lerp(e, t, 1 - Math.exp(-r * n));
}
function pingpong(e, t = 1) {
  return t - Math.abs(euclideanModulo(e, 2 * t) - t);
}
function smoothstep(e, t, r) {
  return e <= t ? 0 : e >= r ? 1 : (e = (e - t) / (r - t)) * e * (3 - 2 * e);
}
function smootherstep(e, t, r) {
  return e <= t
    ? 0
    : e >= r
    ? 1
    : (e = (e - t) / (r - t)) * e * e * (e * (6 * e - 15) + 10);
}
function randInt(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function randFloat(e, t) {
  return e + Math.random() * (t - e);
}
function randFloatSpread(e) {
  return e * (0.5 - Math.random());
}
function seededRandom(e) {
  return (
    void 0 !== e && (_seed = e % 2147483647),
    ((_seed = (16807 * _seed) % 2147483647) - 1) / 2147483646
  );
}
function degToRad(e) {
  return e * DEG2RAD;
}
function radToDeg(e) {
  return e * RAD2DEG;
}
function isPowerOfTwo(e) {
  return 0 == (e & (e - 1)) && 0 !== e;
}
function ceilPowerOfTwo(e) {
  return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
}
function floorPowerOfTwo(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}
function setQuaternionFromProperEuler(e, t, r, n, i) {
  const a = Math.cos,
    o = Math.sin,
    s = a(r / 2),
    l = o(r / 2),
    c = a((t + n) / 2),
    h = o((t + n) / 2),
    u = a((t - n) / 2),
    d = o((t - n) / 2),
    p = a((n - t) / 2),
    m = o((n - t) / 2);
  switch (i) {
    case "XYX":
      e.set(s * h, l * u, l * d, s * c);
      break;
    case "YZY":
      e.set(l * d, s * h, l * u, s * c);
      break;
    case "ZXZ":
      e.set(l * u, l * d, s * h, s * c);
      break;
    case "XZX":
      e.set(s * h, l * m, l * p, s * c);
      break;
    case "YXY":
      e.set(l * p, s * h, l * m, s * c);
      break;
    case "ZYZ":
      e.set(l * m, l * p, s * h, s * c);
      break;
    default:
      console.warn(
        "MYGLAPI.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
var MathUtils = Object.freeze({
  __proto__: null,
  DEG2RAD: DEG2RAD,
  RAD2DEG: RAD2DEG,
  generateUUID: generateUUID,
  clamp: clamp,
  euclideanModulo: euclideanModulo,
  mapLinear: mapLinear,
  inverseLerp: inverseLerp,
  lerp: lerp,
  damp: damp,
  pingpong: pingpong,
  smoothstep: smoothstep,
  smootherstep: smootherstep,
  randInt: randInt,
  randFloat: randFloat,
  randFloatSpread: randFloatSpread,
  seededRandom: seededRandom,
  degToRad: degToRad,
  radToDeg: radToDeg,
  isPowerOfTwo: isPowerOfTwo,
  ceilPowerOfTwo: ceilPowerOfTwo,
  floorPowerOfTwo: floorPowerOfTwo,
  setQuaternionFromProperEuler: setQuaternionFromProperEuler,
});
class Vector2 {
  constructor(e = 0, t = 0) {
    (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      r = this.y,
      n = e.elements;
    return (
      (this.x = n[0] * t + n[3] * r + n[6]),
      (this.y = n[1] * t + n[4] * r + n[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const r = this.length();
    return this.divideScalar(r || 1).multiplyScalar(
      Math.max(e, Math.min(t, r))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      r = this.y - e.y;
    return t * t + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, r) {
    return (
      (this.x = e.x + (t.x - e.x) * r), (this.y = e.y + (t.y - e.y) * r), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t, r) {
    return (
      void 0 !== r &&
        console.warn(
          "MYGLAPI.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      this
    );
  }
  rotateAround(e, t) {
    const r = Math.cos(t),
      n = Math.sin(t),
      i = this.x - e.x,
      a = this.y - e.y;
    return (this.x = i * r - a * n + e.x), (this.y = i * n + a * r + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
}
Vector2.prototype.isVector2 = !0;
class Matrix3 {
  constructor() {
    (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "MYGLAPI.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, r, n, i, a, o, s, l) {
    const c = this.elements;
    return (
      (c[0] = e),
      (c[1] = n),
      (c[2] = o),
      (c[3] = t),
      (c[4] = i),
      (c[5] = s),
      (c[6] = r),
      (c[7] = a),
      (c[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      r = e.elements;
    return (
      (t[0] = r[0]),
      (t[1] = r[1]),
      (t[2] = r[2]),
      (t[3] = r[3]),
      (t[4] = r[4]),
      (t[5] = r[5]),
      (t[6] = r[6]),
      (t[7] = r[7]),
      (t[8] = r[8]),
      this
    );
  }
  extractBasis(e, t, r) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      r.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const r = e.elements,
      n = t.elements,
      i = this.elements,
      a = r[0],
      o = r[3],
      s = r[6],
      l = r[1],
      c = r[4],
      h = r[7],
      u = r[2],
      d = r[5],
      p = r[8],
      m = n[0],
      f = n[3],
      g = n[6],
      _ = n[1],
      v = n[4],
      y = n[7],
      x = n[2],
      b = n[5],
      M = n[8];
    return (
      (i[0] = a * m + o * _ + s * x),
      (i[3] = a * f + o * v + s * b),
      (i[6] = a * g + o * y + s * M),
      (i[1] = l * m + c * _ + h * x),
      (i[4] = l * f + c * v + h * b),
      (i[7] = l * g + c * y + h * M),
      (i[2] = u * m + d * _ + p * x),
      (i[5] = u * f + d * v + p * b),
      (i[8] = u * g + d * y + p * M),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      r = e[1],
      n = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      l = e[7],
      c = e[8];
    return (
      t * a * c - t * o * l - r * i * c + r * o * s + n * i * l - n * a * s
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      r = e[1],
      n = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      l = e[7],
      c = e[8],
      h = c * a - o * l,
      u = o * s - c * i,
      d = l * i - a * s,
      p = t * h + r * u + n * d;
    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / p;
    return (
      (e[0] = h * m),
      (e[1] = (n * l - c * r) * m),
      (e[2] = (o * r - n * a) * m),
      (e[3] = u * m),
      (e[4] = (c * t - n * s) * m),
      (e[5] = (n * i - o * t) * m),
      (e[6] = d * m),
      (e[7] = (r * s - l * t) * m),
      (e[8] = (a * t - r * i) * m),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, r, n, i, a, o) {
    const s = Math.cos(i),
      l = Math.sin(i);
    return (
      this.set(
        r * s,
        r * l,
        -r * (s * a + l * o) + a + e,
        -n * l,
        n * s,
        -n * (-l * a + s * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const r = this.elements;
    return (
      (r[0] *= e),
      (r[3] *= e),
      (r[6] *= e),
      (r[1] *= t),
      (r[4] *= t),
      (r[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      r = Math.sin(e),
      n = this.elements,
      i = n[0],
      a = n[3],
      o = n[6],
      s = n[1],
      l = n[4],
      c = n[7];
    return (
      (n[0] = t * i + r * s),
      (n[3] = t * a + r * l),
      (n[6] = t * o + r * c),
      (n[1] = -r * i + t * s),
      (n[4] = -r * a + t * l),
      (n[7] = -r * o + t * c),
      this
    );
  }
  translate(e, t) {
    const r = this.elements;
    return (
      (r[0] += e * r[2]),
      (r[3] += e * r[5]),
      (r[6] += e * r[8]),
      (r[1] += t * r[2]),
      (r[4] += t * r[5]),
      (r[7] += t * r[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      r = e.elements;
    for (let e = 0; e < 9; e++) if (t[e] !== r[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let r = 0; r < 9; r++) this.elements[r] = e[r + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const r = this.elements;
    return (
      (e[t] = r[0]),
      (e[t + 1] = r[1]),
      (e[t + 2] = r[2]),
      (e[t + 3] = r[3]),
      (e[t + 4] = r[4]),
      (e[t + 5] = r[5]),
      (e[t + 6] = r[6]),
      (e[t + 7] = r[7]),
      (e[t + 8] = r[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
let _canvas;
Matrix3.prototype.isMatrix3 = !0;
class ImageUtils {
  static getDataURL(e) {
    if (/^data:/i.test(e.src)) return e.src;
    if ("undefined" == typeof HTMLCanvasElement) return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      void 0 === _canvas &&
        (_canvas = document.createElementNS(
          "http://www.w3.org/1999/xhtml",
          "canvas"
        )),
        (_canvas.width = e.width),
        (_canvas.height = e.height);
      const r = _canvas.getContext("2d");
      e instanceof ImageData
        ? r.putImageData(e, 0, 0)
        : r.drawImage(e, 0, 0, e.width, e.height),
        (t = _canvas);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "MYGLAPI.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
}
let textureId = 0;
class Texture extends EventDispatcher {
  constructor(
    e = Texture.DEFAULT_IMAGE,
    t = Texture.DEFAULT_MAPPING,
    r = ClampToEdgeWrapping,
    n = ClampToEdgeWrapping,
    i = LinearFilter,
    a = LinearMipmapLinearFilter,
    o = RGBAFormat,
    s = UnsignedByteType,
    l = 1,
    c = LinearEncoding
  ) {
    super(),
      Object.defineProperty(this, "id", { value: textureId++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.image = e),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = r),
      (this.wrapT = n),
      (this.magFilter = i),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = s),
      (this.offset = new Vector2(0, 0)),
      (this.repeat = new Vector2(1, 1)),
      (this.center = new Vector2(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Matrix3()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = c),
      (this.version = 0),
      (this.onUpdate = null);
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.image = e.image),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      this
    );
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
    const r = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    if (void 0 !== this.image) {
      const n = this.image;
      if (
        (void 0 === n.uuid && (n.uuid = generateUUID()),
        !t && void 0 === e.images[n.uuid])
      ) {
        let t;
        if (Array.isArray(n)) {
          t = [];
          for (let e = 0, r = n.length; e < r; e++)
            n[e].isDataTexture
              ? t.push(serializeImage(n[e].image))
              : t.push(serializeImage(n[e]));
        } else t = serializeImage(n);
        e.images[n.uuid] = { uuid: n.uuid, url: t };
      }
      r.image = n.uuid;
    }
    return t || (e.textures[this.uuid] = r), r;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== UVMapping) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case RepeatWrapping:
          e.x = e.x - Math.floor(e.x);
          break;
        case ClampToEdgeWrapping:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          1 === Math.abs(Math.floor(e.x) % 2)
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case RepeatWrapping:
          e.y = e.y - Math.floor(e.y);
          break;
        case ClampToEdgeWrapping:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          1 === Math.abs(Math.floor(e.y) % 2)
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
}
function serializeImage(e) {
  return ("undefined" != typeof HTMLImageElement &&
    e instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      e instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ? ImageUtils.getDataURL(e)
    : e.data
    ? {
        data: Array.prototype.slice.call(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name,
      }
    : (console.warn("MYGLAPI.Texture: Unable to serialize Texture."), {});
}
(Texture.DEFAULT_IMAGE = void 0),
  (Texture.DEFAULT_MAPPING = UVMapping),
  (Texture.prototype.isTexture = !0);
class Vector4 {
  constructor(e = 0, t = 0, r = 0, n = 1) {
    (this.x = e), (this.y = t), (this.z = r), (this.w = n);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, r, n) {
    return (this.x = e), (this.y = t), (this.z = r), (this.w = n), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = void 0 !== e.w ? e.w : 1),
      this
    );
  }
  add(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      r = this.y,
      n = this.z,
      i = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * r + a[8] * n + a[12] * i),
      (this.y = a[1] * t + a[5] * r + a[9] * n + a[13] * i),
      (this.z = a[2] * t + a[6] * r + a[10] * n + a[14] * i),
      (this.w = a[3] * t + a[7] * r + a[11] * n + a[15] * i),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, r, n, i;
    const a = e.elements,
      o = a[0],
      s = a[4],
      l = a[8],
      c = a[1],
      h = a[5],
      u = a[9],
      d = a[2],
      p = a[6],
      m = a[10];
    if (
      Math.abs(s - c) < 0.01 &&
      Math.abs(l - d) < 0.01 &&
      Math.abs(u - p) < 0.01
    ) {
      if (
        Math.abs(s + c) < 0.1 &&
        Math.abs(l + d) < 0.1 &&
        Math.abs(u + p) < 0.1 &&
        Math.abs(o + h + m - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const e = (o + 1) / 2,
        a = (h + 1) / 2,
        f = (m + 1) / 2,
        g = (s + c) / 4,
        _ = (l + d) / 4,
        v = (u + p) / 4;
      return (
        e > a && e > f
          ? e < 0.01
            ? ((r = 0), (n = 0.707106781), (i = 0.707106781))
            : ((n = g / (r = Math.sqrt(e))), (i = _ / r))
          : a > f
          ? a < 0.01
            ? ((r = 0.707106781), (n = 0), (i = 0.707106781))
            : ((r = g / (n = Math.sqrt(a))), (i = v / n))
          : f < 0.01
          ? ((r = 0.707106781), (n = 0.707106781), (i = 0))
          : ((r = _ / (i = Math.sqrt(f))), (n = v / i)),
        this.set(r, n, i, t),
        this
      );
    }
    let f = Math.sqrt(
      (p - u) * (p - u) + (l - d) * (l - d) + (c - s) * (c - s)
    );
    return (
      Math.abs(f) < 0.001 && (f = 1),
      (this.x = (p - u) / f),
      (this.y = (l - d) / f),
      (this.z = (c - s) / f),
      (this.w = Math.acos((o + h + m - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const r = this.length();
    return this.divideScalar(r || 1).multiplyScalar(
      Math.max(e, Math.min(t, r))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, r) {
    return (
      (this.x = e.x + (t.x - e.x) * r),
      (this.y = e.y + (t.y - e.y) * r),
      (this.z = e.z + (t.z - e.z) * r),
      (this.w = e.w + (t.w - e.w) * r),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t, r) {
    return (
      void 0 !== r &&
        console.warn(
          "MYGLAPI.Vector4: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
}
Vector4.prototype.isVector4 = !0;
class WebGLRenderTarget extends EventDispatcher {
  constructor(e, t, r) {
    super(),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Vector4(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Vector4(0, 0, e, t)),
      (r = r || {}),
      (this.texture = new Texture(
        void 0,
        r.mapping,
        r.wrapS,
        r.wrapT,
        r.magFilter,
        r.minFilter,
        r.format,
        r.type,
        r.anisotropy,
        r.encoding
      )),
      (this.texture.image = {}),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = 1),
      (this.texture.generateMipmaps =
        void 0 !== r.generateMipmaps && r.generateMipmaps),
      (this.texture.minFilter =
        void 0 !== r.minFilter ? r.minFilter : LinearFilter),
      (this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer),
      (this.stencilBuffer = void 0 !== r.stencilBuffer && r.stencilBuffer),
      (this.depthTexture = void 0 !== r.depthTexture ? r.depthTexture : null);
  }
  setTexture(e) {
    (e.image = { width: this.width, height: this.height, depth: this.depth }),
      (this.texture = e);
  }
  setSize(e, t, r = 1) {
    (this.width === e && this.height === t && this.depth === r) ||
      ((this.width = e),
      (this.height = t),
      (this.depth = r),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = r),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.image = { ...this.texture.image }),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.depthTexture = e.depthTexture),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
WebGLRenderTarget.prototype.isWebGLRenderTarget = !0;
class WebGLMultipleRenderTargets extends WebGLRenderTarget {
  constructor(e, t, r) {
    super(e, t);
    const n = this.texture;
    this.texture = [];
    for (let e = 0; e < r; e++) this.texture[e] = n.clone();
  }
  setSize(e, t, r = 1) {
    if (this.width !== e || this.height !== t || this.depth !== r) {
      (this.width = e), (this.height = t), (this.depth = r);
      for (let n = 0, i = this.texture.length; n < i; n++)
        (this.texture[n].image.width = e),
          (this.texture[n].image.height = t),
          (this.texture[n].image.depth = r);
      this.dispose();
    }
    return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this;
  }
  copy(e) {
    this.dispose(),
      (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.set(0, 0, this.width, this.height),
      this.scissor.set(0, 0, this.width, this.height),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.depthTexture = e.depthTexture),
      (this.texture.length = 0);
    for (let t = 0, r = e.texture.length; t < r; t++)
      this.texture[t] = e.texture[t].clone();
    return this;
  }
}
WebGLMultipleRenderTargets.prototype.isWebGLMultipleRenderTargets = !0;
class WebGLMultisampleRenderTarget extends WebGLRenderTarget {
  constructor(e, t, r) {
    super(e, t, r), (this.samples = 4);
  }
  copy(e) {
    return super.copy.call(this, e), (this.samples = e.samples), this;
  }
}
WebGLMultisampleRenderTarget.prototype.isWebGLMultisampleRenderTarget = !0;
class Quaternion {
  constructor(e = 0, t = 0, r = 0, n = 1) {
    (this._x = e), (this._y = t), (this._z = r), (this._w = n);
  }
  static slerp(e, t, r, n) {
    return (
      console.warn(
        "MYGLAPI.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
      ),
      r.slerpQuaternions(e, t, n)
    );
  }
  static slerpFlat(e, t, r, n, i, a, o) {
    let s = r[n + 0],
      l = r[n + 1],
      c = r[n + 2],
      h = r[n + 3];
    const u = i[a + 0],
      d = i[a + 1],
      p = i[a + 2],
      m = i[a + 3];
    if (0 === o)
      return (
        (e[t + 0] = s), (e[t + 1] = l), (e[t + 2] = c), void (e[t + 3] = h)
      );
    if (1 === o)
      return (
        (e[t + 0] = u), (e[t + 1] = d), (e[t + 2] = p), void (e[t + 3] = m)
      );
    if (h !== m || s !== u || l !== d || c !== p) {
      let e = 1 - o;
      const t = s * u + l * d + c * p + h * m,
        r = t >= 0 ? 1 : -1,
        n = 1 - t * t;
      if (n > Number.EPSILON) {
        const i = Math.sqrt(n),
          a = Math.atan2(i, t * r);
        (e = Math.sin(e * a) / i), (o = Math.sin(o * a) / i);
      }
      const i = o * r;
      if (
        ((s = s * e + u * i),
        (l = l * e + d * i),
        (c = c * e + p * i),
        (h = h * e + m * i),
        e === 1 - o)
      ) {
        const e = 1 / Math.sqrt(s * s + l * l + c * c + h * h);
        (s *= e), (l *= e), (c *= e), (h *= e);
      }
    }
    (e[t] = s), (e[t + 1] = l), (e[t + 2] = c), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, r, n, i, a) {
    const o = r[n],
      s = r[n + 1],
      l = r[n + 2],
      c = r[n + 3],
      h = i[a],
      u = i[a + 1],
      d = i[a + 2],
      p = i[a + 3];
    return (
      (e[t] = o * p + c * h + s * d - l * u),
      (e[t + 1] = s * p + c * u + l * h - o * d),
      (e[t + 2] = l * p + c * d + o * u - s * h),
      (e[t + 3] = c * p - o * h - s * u - l * d),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, r, n) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = r),
      (this._w = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    if (!e || !e.isEuler)
      throw new Error(
        "MYGLAPI.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    const r = e._x,
      n = e._y,
      i = e._z,
      a = e._order,
      o = Math.cos,
      s = Math.sin,
      l = o(r / 2),
      c = o(n / 2),
      h = o(i / 2),
      u = s(r / 2),
      d = s(n / 2),
      p = s(i / 2);
    switch (a) {
      case "XYZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "YXZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "ZXY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "ZYX":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "YZX":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "XZY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      default:
        console.warn(
          "MYGLAPI.Quaternion: .setFromEuler() encountered an unknown order: " +
            a
        );
    }
    return !1 !== t && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const r = t / 2,
      n = Math.sin(r);
    return (
      (this._x = e.x * n),
      (this._y = e.y * n),
      (this._z = e.z * n),
      (this._w = Math.cos(r)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      r = t[0],
      n = t[4],
      i = t[8],
      a = t[1],
      o = t[5],
      s = t[9],
      l = t[2],
      c = t[6],
      h = t[10],
      u = r + o + h;
    if (u > 0) {
      const e = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / e),
        (this._x = (c - s) * e),
        (this._y = (i - l) * e),
        (this._z = (a - n) * e);
    } else if (r > o && r > h) {
      const e = 2 * Math.sqrt(1 + r - o - h);
      (this._w = (c - s) / e),
        (this._x = 0.25 * e),
        (this._y = (n + a) / e),
        (this._z = (i + l) / e);
    } else if (o > h) {
      const e = 2 * Math.sqrt(1 + o - r - h);
      (this._w = (i - l) / e),
        (this._x = (n + a) / e),
        (this._y = 0.25 * e),
        (this._z = (s + c) / e);
    } else {
      const e = 2 * Math.sqrt(1 + h - r - o);
      (this._w = (a - n) / e),
        (this._x = (i + l) / e),
        (this._y = (s + c) / e),
        (this._z = 0.25 * e);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let r = e.dot(t) + 1;
    return (
      r < Number.EPSILON
        ? ((r = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = r))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = r)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = r)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(clamp(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const r = this.angleTo(e);
    if (0 === r) return this;
    const n = Math.min(1, t / r);
    return this.slerp(e, n), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      0 === e
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(e, t))
      : this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const r = e._x,
      n = e._y,
      i = e._z,
      a = e._w,
      o = t._x,
      s = t._y,
      l = t._z,
      c = t._w;
    return (
      (this._x = r * c + a * o + n * l - i * s),
      (this._y = n * c + a * s + i * o - r * l),
      (this._z = i * c + a * l + r * s - n * o),
      (this._w = a * c - r * o - n * s - i * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (0 === t) return this;
    if (1 === t) return this.copy(e);
    const r = this._x,
      n = this._y,
      i = this._z,
      a = this._w;
    let o = a * e._w + r * e._x + n * e._y + i * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = r), (this._y = n), (this._z = i), this;
    const s = 1 - o * o;
    if (s <= Number.EPSILON) {
      const e = 1 - t;
      return (
        (this._w = e * a + t * this._w),
        (this._x = e * r + t * this._x),
        (this._y = e * n + t * this._y),
        (this._z = e * i + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const l = Math.sqrt(s),
      c = Math.atan2(l, o),
      h = Math.sin((1 - t) * c) / l,
      u = Math.sin(t * c) / l;
    return (
      (this._w = a * h + this._w * u),
      (this._x = r * h + this._x * u),
      (this._y = n * h + this._y * u),
      (this._z = i * h + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, r) {
    this.copy(e).slerp(t, r);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
}
Quaternion.prototype.isQuaternion = !0;
class Vector3 {
  constructor(e = 0, t = 0, r = 0) {
    (this.x = e), (this.y = t), (this.z = r);
  }
  set(e, t, r) {
    return (
      void 0 === r && (r = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = r),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(e, t))
      : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return (
      (e && e.isEuler) ||
        console.error(
          "MYGLAPI.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
        ),
      this.applyQuaternion(_quaternion$4.setFromEuler(e))
    );
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      r = this.y,
      n = this.z,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * r + i[6] * n),
      (this.y = i[1] * t + i[4] * r + i[7] * n),
      (this.z = i[2] * t + i[5] * r + i[8] * n),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      r = this.y,
      n = this.z,
      i = e.elements,
      a = 1 / (i[3] * t + i[7] * r + i[11] * n + i[15]);
    return (
      (this.x = (i[0] * t + i[4] * r + i[8] * n + i[12]) * a),
      (this.y = (i[1] * t + i[5] * r + i[9] * n + i[13]) * a),
      (this.z = (i[2] * t + i[6] * r + i[10] * n + i[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      r = this.y,
      n = this.z,
      i = e.x,
      a = e.y,
      o = e.z,
      s = e.w,
      l = s * t + a * n - o * r,
      c = s * r + o * t - i * n,
      h = s * n + i * r - a * t,
      u = -i * t - a * r - o * n;
    return (
      (this.x = l * s + u * -i + c * -o - h * -a),
      (this.y = c * s + u * -a + h * -i - l * -o),
      (this.z = h * s + u * -o + l * -a - c * -i),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      r = this.y,
      n = this.z,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[4] * r + i[8] * n),
      (this.y = i[1] * t + i[5] * r + i[9] * n),
      (this.z = i[2] * t + i[6] * r + i[10] * n),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const r = this.length();
    return this.divideScalar(r || 1).multiplyScalar(
      Math.max(e, Math.min(t, r))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, r) {
    return (
      (this.x = e.x + (t.x - e.x) * r),
      (this.y = e.y + (t.y - e.y) * r),
      (this.z = e.z + (t.z - e.z) * r),
      this
    );
  }
  cross(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(e, t))
      : this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const r = e.x,
      n = e.y,
      i = e.z,
      a = t.x,
      o = t.y,
      s = t.z;
    return (
      (this.x = n * s - i * o),
      (this.y = i * a - r * s),
      (this.z = r * o - n * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (0 === t) return this.set(0, 0, 0);
    const r = e.dot(this) / t;
    return this.copy(e).multiplyScalar(r);
  }
  projectOnPlane(e) {
    return _vector$c.copy(this).projectOnVector(e), this.sub(_vector$c);
  }
  reflect(e) {
    return this.sub(_vector$c.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (0 === t) return Math.PI / 2;
    const r = this.dot(e) / t;
    return Math.acos(clamp(r, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      r = this.y - e.y,
      n = this.z - e.z;
    return t * t + r * r + n * n;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, r) {
    const n = Math.sin(t) * e;
    return (
      (this.x = n * Math.sin(r)),
      (this.y = Math.cos(t) * e),
      (this.z = n * Math.cos(r)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, r) {
    return (
      (this.x = e * Math.sin(t)), (this.y = r), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      r = this.setFromMatrixColumn(e, 1).length(),
      n = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = r), (this.z = n), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, 4 * t);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, 3 * t);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t, r) {
    return (
      void 0 !== r &&
        console.warn(
          "MYGLAPI.Vector3: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
}
Vector3.prototype.isVector3 = !0;
const _vector$c = new Vector3(),
  _quaternion$4 = new Quaternion();
class Box3 {
  constructor(
    e = new Vector3(1 / 0, 1 / 0, 1 / 0),
    t = new Vector3(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      r = 1 / 0,
      n = 1 / 0,
      i = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let s = 0, l = e.length; s < l; s += 3) {
      const l = e[s],
        c = e[s + 1],
        h = e[s + 2];
      l < t && (t = l),
        c < r && (r = c),
        h < n && (n = h),
        l > i && (i = l),
        c > a && (a = c),
        h > o && (o = h);
    }
    return this.min.set(t, r, n), this.max.set(i, a, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      r = 1 / 0,
      n = 1 / 0,
      i = -1 / 0,
      a = -1 / 0,
      o = -1 / 0;
    for (let s = 0, l = e.count; s < l; s++) {
      const l = e.getX(s),
        c = e.getY(s),
        h = e.getZ(s);
      l < t && (t = l),
        c < r && (r = c),
        h < n && (n = h),
        l > i && (i = l),
        c > a && (a = c),
        h > o && (o = h);
    }
    return this.min.set(t, r, n), this.max.set(i, a, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, r = e.length; t < r; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const r = _vector$b.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(r), this.max.copy(e).add(r), this;
  }
  setFromObject(e) {
    return this.makeEmpty(), this.expandByObject(e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return (
      void 0 === e &&
        (console.warn("MYGLAPI.Box3: .getCenter() target is now required"),
        (e = new Vector3())),
      this.isEmpty()
        ? e.set(0, 0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5)
    );
  }
  getSize(e) {
    return (
      void 0 === e &&
        (console.warn("MYGLAPI.Box3: .getSize() target is now required"),
        (e = new Vector3())),
      this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    );
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e) {
    e.updateWorldMatrix(!1, !1);
    const t = e.geometry;
    void 0 !== t &&
      (null === t.boundingBox && t.computeBoundingBox(),
      _box$3.copy(t.boundingBox),
      _box$3.applyMatrix4(e.matrixWorld),
      this.union(_box$3));
    const r = e.children;
    for (let e = 0, t = r.length; e < t; e++) this.expandByObject(r[e]);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return (
      void 0 === t &&
        (console.warn("MYGLAPI.Box3: .getParameter() target is now required"),
        (t = new Vector3())),
      t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z)
      )
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, _vector$b),
      _vector$b.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, r;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (r = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (r = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (r += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (r += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (r += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (r += e.normal.z * this.min.z)),
      t <= -e.constant && r >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(_center),
      _extents.subVectors(this.max, _center),
      _v0$2.subVectors(e.a, _center),
      _v1$7.subVectors(e.b, _center),
      _v2$3.subVectors(e.c, _center),
      _f0.subVectors(_v1$7, _v0$2),
      _f1.subVectors(_v2$3, _v1$7),
      _f2.subVectors(_v0$2, _v2$3);
    let t = [
      0,
      -_f0.z,
      _f0.y,
      0,
      -_f1.z,
      _f1.y,
      0,
      -_f2.z,
      _f2.y,
      _f0.z,
      0,
      -_f0.x,
      _f1.z,
      0,
      -_f1.x,
      _f2.z,
      0,
      -_f2.x,
      -_f0.y,
      _f0.x,
      0,
      -_f1.y,
      _f1.x,
      0,
      -_f2.y,
      _f2.x,
      0,
    ];
    return (
      !!satForAxes(t, _v0$2, _v1$7, _v2$3, _extents) &&
      !!satForAxes(
        (t = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        _v0$2,
        _v1$7,
        _v2$3,
        _extents
      ) &&
      (_triangleNormal.crossVectors(_f0, _f1),
      satForAxes(
        (t = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z]),
        _v0$2,
        _v1$7,
        _v2$3,
        _extents
      ))
    );
  }
  clampPoint(e, t) {
    return (
      void 0 === t &&
        (console.warn("MYGLAPI.Box3: .clampPoint() target is now required"),
        (t = new Vector3())),
      t.copy(e).clamp(this.min, this.max)
    );
  }
  distanceToPoint(e) {
    return _vector$b.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      void 0 === e &&
        console.error(
          "MYGLAPI.Box3: .getBoundingSphere() target is now required"
        ),
      this.getCenter(e.center),
      (e.radius = 0.5 * this.getSize(_vector$b).length()),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(_points),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
Box3.prototype.isBox3 = !0;
const _points = [
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
  ],
  _vector$b = new Vector3(),
  _box$3 = new Box3(),
  _v0$2 = new Vector3(),
  _v1$7 = new Vector3(),
  _v2$3 = new Vector3(),
  _f0 = new Vector3(),
  _f1 = new Vector3(),
  _f2 = new Vector3(),
  _center = new Vector3(),
  _extents = new Vector3(),
  _triangleNormal = new Vector3(),
  _testAxis = new Vector3();
function satForAxes(e, t, r, n, i) {
  for (let a = 0, o = e.length - 3; a <= o; a += 3) {
    _testAxis.fromArray(e, a);
    const o =
        i.x * Math.abs(_testAxis.x) +
        i.y * Math.abs(_testAxis.y) +
        i.z * Math.abs(_testAxis.z),
      s = t.dot(_testAxis),
      l = r.dot(_testAxis),
      c = n.dot(_testAxis);
    if (Math.max(-Math.max(s, l, c), Math.min(s, l, c)) > o) return !1;
  }
  return !0;
}
const _box$2 = new Box3(),
  _v1$6 = new Vector3(),
  _toFarthestPoint = new Vector3(),
  _toPoint = new Vector3();
class Sphere {
  constructor(e = new Vector3(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const r = this.center;
    void 0 !== t ? r.copy(t) : _box$2.setFromPoints(e).getCenter(r);
    let n = 0;
    for (let t = 0, i = e.length; t < i; t++)
      n = Math.max(n, r.distanceToSquared(e[t]));
    return (this.radius = Math.sqrt(n)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const r = this.center.distanceToSquared(e);
    return (
      void 0 === t &&
        (console.warn("MYGLAPI.Sphere: .clampPoint() target is now required"),
        (t = new Vector3())),
      t.copy(e),
      r > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return (
      void 0 === e &&
        (console.warn(
          "MYGLAPI.Sphere: .getBoundingBox() target is now required"
        ),
        (e = new Box3())),
      this.isEmpty()
        ? (e.makeEmpty(), e)
        : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
    );
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    _toPoint.subVectors(e, this.center);
    const t = _toPoint.lengthSq();
    if (t > this.radius * this.radius) {
      const e = Math.sqrt(t),
        r = 0.5 * (e - this.radius);
      this.center.add(_toPoint.multiplyScalar(r / e)), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return (
      _toFarthestPoint
        .subVectors(e.center, this.center)
        .normalize()
        .multiplyScalar(e.radius),
      this.expandByPoint(_v1$6.copy(e.center).add(_toFarthestPoint)),
      this.expandByPoint(_v1$6.copy(e.center).sub(_toFarthestPoint)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _vector$a = new Vector3(),
  _segCenter = new Vector3(),
  _segDir = new Vector3(),
  _diff = new Vector3(),
  _edge1 = new Vector3(),
  _edge2 = new Vector3(),
  _normal$1 = new Vector3();
class Ray {
  constructor(e = new Vector3(), t = new Vector3(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return (
      void 0 === t &&
        (console.warn("MYGLAPI.Ray: .at() target is now required"),
        (t = new Vector3())),
      t.copy(this.direction).multiplyScalar(e).add(this.origin)
    );
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, _vector$a)), this;
  }
  closestPointToPoint(e, t) {
    void 0 === t &&
      (console.warn(
        "MYGLAPI.Ray: .closestPointToPoint() target is now required"
      ),
      (t = new Vector3())),
      t.subVectors(e, this.origin);
    const r = t.dot(this.direction);
    return r < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(r).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = _vector$a.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (_vector$a.copy(this.direction).multiplyScalar(t).add(this.origin),
        _vector$a.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, r, n) {
    _segCenter.copy(e).add(t).multiplyScalar(0.5),
      _segDir.copy(t).sub(e).normalize(),
      _diff.copy(this.origin).sub(_segCenter);
    const i = 0.5 * e.distanceTo(t),
      a = -this.direction.dot(_segDir),
      o = _diff.dot(this.direction),
      s = -_diff.dot(_segDir),
      l = _diff.lengthSq(),
      c = Math.abs(1 - a * a);
    let h, u, d, p;
    if (c > 0)
      if (((u = a * o - s), (p = i * c), (h = a * s - o) >= 0))
        if (u >= -p)
          if (u <= p) {
            const e = 1 / c;
            d =
              (h *= e) * (h + a * (u *= e) + 2 * o) +
              u * (a * h + u + 2 * s) +
              l;
          } else
            (u = i),
              (d = -(h = Math.max(0, -(a * u + o))) * h + u * (u + 2 * s) + l);
        else
          (u = -i),
            (d = -(h = Math.max(0, -(a * u + o))) * h + u * (u + 2 * s) + l);
      else
        u <= -p
          ? (d =
              -(h = Math.max(0, -(-a * i + o))) * h +
              (u = h > 0 ? -i : Math.min(Math.max(-i, -s), i)) * (u + 2 * s) +
              l)
          : u <= p
          ? ((h = 0),
            (d = (u = Math.min(Math.max(-i, -s), i)) * (u + 2 * s) + l))
          : (d =
              -(h = Math.max(0, -(a * i + o))) * h +
              (u = h > 0 ? i : Math.min(Math.max(-i, -s), i)) * (u + 2 * s) +
              l);
    else
      (u = a > 0 ? -i : i),
        (d = -(h = Math.max(0, -(a * u + o))) * h + u * (u + 2 * s) + l);
    return (
      r && r.copy(this.direction).multiplyScalar(h).add(this.origin),
      n && n.copy(_segDir).multiplyScalar(u).add(_segCenter),
      d
    );
  }
  intersectSphere(e, t) {
    _vector$a.subVectors(e.center, this.origin);
    const r = _vector$a.dot(this.direction),
      n = _vector$a.dot(_vector$a) - r * r,
      i = e.radius * e.radius;
    if (n > i) return null;
    const a = Math.sqrt(i - n),
      o = r - a,
      s = r + a;
    return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
    const r = -(this.origin.dot(e.normal) + e.constant) / t;
    return r >= 0 ? r : null;
  }
  intersectPlane(e, t) {
    const r = this.distanceToPlane(e);
    return null === r ? null : this.at(r, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return 0 === t || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let r, n, i, a, o, s;
    const l = 1 / this.direction.x,
      c = 1 / this.direction.y,
      h = 1 / this.direction.z,
      u = this.origin;
    return (
      l >= 0
        ? ((r = (e.min.x - u.x) * l), (n = (e.max.x - u.x) * l))
        : ((r = (e.max.x - u.x) * l), (n = (e.min.x - u.x) * l)),
      c >= 0
        ? ((i = (e.min.y - u.y) * c), (a = (e.max.y - u.y) * c))
        : ((i = (e.max.y - u.y) * c), (a = (e.min.y - u.y) * c)),
      r > a || i > n
        ? null
        : ((i > r || r != r) && (r = i),
          (a < n || n != n) && (n = a),
          h >= 0
            ? ((o = (e.min.z - u.z) * h), (s = (e.max.z - u.z) * h))
            : ((o = (e.max.z - u.z) * h), (s = (e.min.z - u.z) * h)),
          r > s || o > n
            ? null
            : ((o > r || r != r) && (r = o),
              (s < n || n != n) && (n = s),
              n < 0 ? null : this.at(r >= 0 ? r : n, t)))
    );
  }
  intersectsBox(e) {
    return null !== this.intersectBox(e, _vector$a);
  }
  intersectTriangle(e, t, r, n, i) {
    _edge1.subVectors(t, e),
      _edge2.subVectors(r, e),
      _normal$1.crossVectors(_edge1, _edge2);
    let a,
      o = this.direction.dot(_normal$1);
    if (o > 0) {
      if (n) return null;
      a = 1;
    } else {
      if (!(o < 0)) return null;
      (a = -1), (o = -o);
    }
    _diff.subVectors(this.origin, e);
    const s = a * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
    if (s < 0) return null;
    const l = a * this.direction.dot(_edge1.cross(_diff));
    if (l < 0) return null;
    if (s + l > o) return null;
    const c = -a * _diff.dot(_normal$1);
    return c < 0 ? null : this.at(c / o, i);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Matrix4 {
  constructor() {
    (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "MYGLAPI.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, r, n, i, a, o, s, l, c, h, u, d, p, m, f) {
    const g = this.elements;
    return (
      (g[0] = e),
      (g[4] = t),
      (g[8] = r),
      (g[12] = n),
      (g[1] = i),
      (g[5] = a),
      (g[9] = o),
      (g[13] = s),
      (g[2] = l),
      (g[6] = c),
      (g[10] = h),
      (g[14] = u),
      (g[3] = d),
      (g[7] = p),
      (g[11] = m),
      (g[15] = f),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Matrix4().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      r = e.elements;
    return (
      (t[0] = r[0]),
      (t[1] = r[1]),
      (t[2] = r[2]),
      (t[3] = r[3]),
      (t[4] = r[4]),
      (t[5] = r[5]),
      (t[6] = r[6]),
      (t[7] = r[7]),
      (t[8] = r[8]),
      (t[9] = r[9]),
      (t[10] = r[10]),
      (t[11] = r[11]),
      (t[12] = r[12]),
      (t[13] = r[13]),
      (t[14] = r[14]),
      (t[15] = r[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      r = e.elements;
    return (t[12] = r[12]), (t[13] = r[13]), (t[14] = r[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, r) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      r.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, r) {
    return (
      this.set(
        e.x,
        t.x,
        r.x,
        0,
        e.y,
        t.y,
        r.y,
        0,
        e.z,
        t.z,
        r.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      r = e.elements,
      n = 1 / _v1$5.setFromMatrixColumn(e, 0).length(),
      i = 1 / _v1$5.setFromMatrixColumn(e, 1).length(),
      a = 1 / _v1$5.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = r[0] * n),
      (t[1] = r[1] * n),
      (t[2] = r[2] * n),
      (t[3] = 0),
      (t[4] = r[4] * i),
      (t[5] = r[5] * i),
      (t[6] = r[6] * i),
      (t[7] = 0),
      (t[8] = r[8] * a),
      (t[9] = r[9] * a),
      (t[10] = r[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    (e && e.isEuler) ||
      console.error(
        "MYGLAPI.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    const t = this.elements,
      r = e.x,
      n = e.y,
      i = e.z,
      a = Math.cos(r),
      o = Math.sin(r),
      s = Math.cos(n),
      l = Math.sin(n),
      c = Math.cos(i),
      h = Math.sin(i);
    if ("XYZ" === e.order) {
      const e = a * c,
        r = a * h,
        n = o * c,
        i = o * h;
      (t[0] = s * c),
        (t[4] = -s * h),
        (t[8] = l),
        (t[1] = r + n * l),
        (t[5] = e - i * l),
        (t[9] = -o * s),
        (t[2] = i - e * l),
        (t[6] = n + r * l),
        (t[10] = a * s);
    } else if ("YXZ" === e.order) {
      const e = s * c,
        r = s * h,
        n = l * c,
        i = l * h;
      (t[0] = e + i * o),
        (t[4] = n * o - r),
        (t[8] = a * l),
        (t[1] = a * h),
        (t[5] = a * c),
        (t[9] = -o),
        (t[2] = r * o - n),
        (t[6] = i + e * o),
        (t[10] = a * s);
    } else if ("ZXY" === e.order) {
      const e = s * c,
        r = s * h,
        n = l * c,
        i = l * h;
      (t[0] = e - i * o),
        (t[4] = -a * h),
        (t[8] = n + r * o),
        (t[1] = r + n * o),
        (t[5] = a * c),
        (t[9] = i - e * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * s);
    } else if ("ZYX" === e.order) {
      const e = a * c,
        r = a * h,
        n = o * c,
        i = o * h;
      (t[0] = s * c),
        (t[4] = n * l - r),
        (t[8] = e * l + i),
        (t[1] = s * h),
        (t[5] = i * l + e),
        (t[9] = r * l - n),
        (t[2] = -l),
        (t[6] = o * s),
        (t[10] = a * s);
    } else if ("YZX" === e.order) {
      const e = a * s,
        r = a * l,
        n = o * s,
        i = o * l;
      (t[0] = s * c),
        (t[4] = i - e * h),
        (t[8] = n * h + r),
        (t[1] = h),
        (t[5] = a * c),
        (t[9] = -o * c),
        (t[2] = -l * c),
        (t[6] = r * h + n),
        (t[10] = e - i * h);
    } else if ("XZY" === e.order) {
      const e = a * s,
        r = a * l,
        n = o * s,
        i = o * l;
      (t[0] = s * c),
        (t[4] = -h),
        (t[8] = l * c),
        (t[1] = e * h + i),
        (t[5] = a * c),
        (t[9] = r * h - n),
        (t[2] = n * h - r),
        (t[6] = o * c),
        (t[10] = i * h + e);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(_zero, e, _one);
  }
  lookAt(e, t, r) {
    const n = this.elements;
    return (
      _z.subVectors(e, t),
      0 === _z.lengthSq() && (_z.z = 1),
      _z.normalize(),
      _x.crossVectors(r, _z),
      0 === _x.lengthSq() &&
        (1 === Math.abs(r.z) ? (_z.x += 1e-4) : (_z.z += 1e-4),
        _z.normalize(),
        _x.crossVectors(r, _z)),
      _x.normalize(),
      _y.crossVectors(_z, _x),
      (n[0] = _x.x),
      (n[4] = _y.x),
      (n[8] = _z.x),
      (n[1] = _x.y),
      (n[5] = _y.y),
      (n[9] = _z.y),
      (n[2] = _x.z),
      (n[6] = _y.z),
      (n[10] = _z.z),
      this
    );
  }
  multiply(e, t) {
    return void 0 !== t
      ? (console.warn(
          "MYGLAPI.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(e, t))
      : this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const r = e.elements,
      n = t.elements,
      i = this.elements,
      a = r[0],
      o = r[4],
      s = r[8],
      l = r[12],
      c = r[1],
      h = r[5],
      u = r[9],
      d = r[13],
      p = r[2],
      m = r[6],
      f = r[10],
      g = r[14],
      _ = r[3],
      v = r[7],
      y = r[11],
      x = r[15],
      b = n[0],
      M = n[4],
      w = n[8],
      S = n[12],
      T = n[1],
      E = n[5],
      A = n[9],
      L = n[13],
      C = n[2],
      R = n[6],
      P = n[10],
      B = n[14],
      D = n[3],
      I = n[7],
      G = n[11],
      F = n[15];
    return (
      (i[0] = a * b + o * T + s * C + l * D),
      (i[4] = a * M + o * E + s * R + l * I),
      (i[8] = a * w + o * A + s * P + l * G),
      (i[12] = a * S + o * L + s * B + l * F),
      (i[1] = c * b + h * T + u * C + d * D),
      (i[5] = c * M + h * E + u * R + d * I),
      (i[9] = c * w + h * A + u * P + d * G),
      (i[13] = c * S + h * L + u * B + d * F),
      (i[2] = p * b + m * T + f * C + g * D),
      (i[6] = p * M + m * E + f * R + g * I),
      (i[10] = p * w + m * A + f * P + g * G),
      (i[14] = p * S + m * L + f * B + g * F),
      (i[3] = _ * b + v * T + y * C + x * D),
      (i[7] = _ * M + v * E + y * R + x * I),
      (i[11] = _ * w + v * A + y * P + x * G),
      (i[15] = _ * S + v * L + y * B + x * F),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      r = e[4],
      n = e[8],
      i = e[12],
      a = e[1],
      o = e[5],
      s = e[9],
      l = e[13],
      c = e[2],
      h = e[6],
      u = e[10],
      d = e[14];
    return (
      e[3] *
        (+i * s * h -
          n * l * h -
          i * o * u +
          r * l * u +
          n * o * d -
          r * s * d) +
      e[7] *
        (+t * s * d -
          t * l * u +
          i * a * u -
          n * a * d +
          n * l * c -
          i * s * c) +
      e[11] *
        (+t * l * h -
          t * o * d -
          i * a * h +
          r * a * d +
          i * o * c -
          r * l * c) +
      e[15] *
        (-n * o * c - t * s * h + t * o * u + n * a * h - r * a * u + r * s * c)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, r) {
    const n = this.elements;
    return (
      e.isVector3
        ? ((n[12] = e.x), (n[13] = e.y), (n[14] = e.z))
        : ((n[12] = e), (n[13] = t), (n[14] = r)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      r = e[1],
      n = e[2],
      i = e[3],
      a = e[4],
      o = e[5],
      s = e[6],
      l = e[7],
      c = e[8],
      h = e[9],
      u = e[10],
      d = e[11],
      p = e[12],
      m = e[13],
      f = e[14],
      g = e[15],
      _ = h * f * l - m * u * l + m * s * d - o * f * d - h * s * g + o * u * g,
      v = p * u * l - c * f * l - p * s * d + a * f * d + c * s * g - a * u * g,
      y = c * m * l - p * h * l + p * o * d - a * m * d - c * o * g + a * h * g,
      x = p * h * s - c * m * s - p * o * u + a * m * u + c * o * f - a * h * f,
      b = t * _ + r * v + n * y + i * x;
    if (0 === b)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / b;
    return (
      (e[0] = _ * M),
      (e[1] =
        (m * u * i -
          h * f * i -
          m * n * d +
          r * f * d +
          h * n * g -
          r * u * g) *
        M),
      (e[2] =
        (o * f * i -
          m * s * i +
          m * n * l -
          r * f * l -
          o * n * g +
          r * s * g) *
        M),
      (e[3] =
        (h * s * i -
          o * u * i -
          h * n * l +
          r * u * l +
          o * n * d -
          r * s * d) *
        M),
      (e[4] = v * M),
      (e[5] =
        (c * f * i -
          p * u * i +
          p * n * d -
          t * f * d -
          c * n * g +
          t * u * g) *
        M),
      (e[6] =
        (p * s * i -
          a * f * i -
          p * n * l +
          t * f * l +
          a * n * g -
          t * s * g) *
        M),
      (e[7] =
        (a * u * i -
          c * s * i +
          c * n * l -
          t * u * l -
          a * n * d +
          t * s * d) *
        M),
      (e[8] = y * M),
      (e[9] =
        (p * h * i -
          c * m * i -
          p * r * d +
          t * m * d +
          c * r * g -
          t * h * g) *
        M),
      (e[10] =
        (a * m * i -
          p * o * i +
          p * r * l -
          t * m * l -
          a * r * g +
          t * o * g) *
        M),
      (e[11] =
        (c * o * i -
          a * h * i -
          c * r * l +
          t * h * l +
          a * r * d -
          t * o * d) *
        M),
      (e[12] = x * M),
      (e[13] =
        (c * m * n -
          p * h * n +
          p * r * u -
          t * m * u -
          c * r * f +
          t * h * f) *
        M),
      (e[14] =
        (p * o * n -
          a * m * n -
          p * r * s +
          t * m * s +
          a * r * f -
          t * o * f) *
        M),
      (e[15] =
        (a * h * n -
          c * o * n +
          c * r * s -
          t * h * s -
          a * r * u +
          t * o * u) *
        M),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      r = e.x,
      n = e.y,
      i = e.z;
    return (
      (t[0] *= r),
      (t[4] *= n),
      (t[8] *= i),
      (t[1] *= r),
      (t[5] *= n),
      (t[9] *= i),
      (t[2] *= r),
      (t[6] *= n),
      (t[10] *= i),
      (t[3] *= r),
      (t[7] *= n),
      (t[11] *= i),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, r, n));
  }
  makeTranslation(e, t, r) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      r = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      r = Math.sin(e);
    return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      r = Math.sin(e);
    return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const r = Math.cos(t),
      n = Math.sin(t),
      i = 1 - r,
      a = e.x,
      o = e.y,
      s = e.z,
      l = i * a,
      c = i * o;
    return (
      this.set(
        l * a + r,
        l * o - n * s,
        l * s + n * o,
        0,
        l * o + n * s,
        c * o + r,
        c * s - n * a,
        0,
        l * s - n * o,
        c * s + n * a,
        i * s * s + r,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, r) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, r, n, i, a) {
    return this.set(1, r, i, 0, e, 1, a, 0, t, n, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, r) {
    const n = this.elements,
      i = t._x,
      a = t._y,
      o = t._z,
      s = t._w,
      l = i + i,
      c = a + a,
      h = o + o,
      u = i * l,
      d = i * c,
      p = i * h,
      m = a * c,
      f = a * h,
      g = o * h,
      _ = s * l,
      v = s * c,
      y = s * h,
      x = r.x,
      b = r.y,
      M = r.z;
    return (
      (n[0] = (1 - (m + g)) * x),
      (n[1] = (d + y) * x),
      (n[2] = (p - v) * x),
      (n[3] = 0),
      (n[4] = (d - y) * b),
      (n[5] = (1 - (u + g)) * b),
      (n[6] = (f + _) * b),
      (n[7] = 0),
      (n[8] = (p + v) * M),
      (n[9] = (f - _) * M),
      (n[10] = (1 - (u + m)) * M),
      (n[11] = 0),
      (n[12] = e.x),
      (n[13] = e.y),
      (n[14] = e.z),
      (n[15] = 1),
      this
    );
  }
  decompose(e, t, r) {
    const n = this.elements;
    let i = _v1$5.set(n[0], n[1], n[2]).length();
    const a = _v1$5.set(n[4], n[5], n[6]).length(),
      o = _v1$5.set(n[8], n[9], n[10]).length();
    this.determinant() < 0 && (i = -i),
      (e.x = n[12]),
      (e.y = n[13]),
      (e.z = n[14]),
      _m1$2.copy(this);
    const s = 1 / i,
      l = 1 / a,
      c = 1 / o;
    return (
      (_m1$2.elements[0] *= s),
      (_m1$2.elements[1] *= s),
      (_m1$2.elements[2] *= s),
      (_m1$2.elements[4] *= l),
      (_m1$2.elements[5] *= l),
      (_m1$2.elements[6] *= l),
      (_m1$2.elements[8] *= c),
      (_m1$2.elements[9] *= c),
      (_m1$2.elements[10] *= c),
      t.setFromRotationMatrix(_m1$2),
      (r.x = i),
      (r.y = a),
      (r.z = o),
      this
    );
  }
  makePerspective(e, t, r, n, i, a) {
    void 0 === a &&
      console.warn(
        "MYGLAPI.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    const o = this.elements,
      s = (2 * i) / (t - e),
      l = (2 * i) / (r - n),
      c = (t + e) / (t - e),
      h = (r + n) / (r - n),
      u = -(a + i) / (a - i),
      d = (-2 * a * i) / (a - i);
    return (
      (o[0] = s),
      (o[4] = 0),
      (o[8] = c),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = l),
      (o[9] = h),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = u),
      (o[14] = d),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, r, n, i, a) {
    const o = this.elements,
      s = 1 / (t - e),
      l = 1 / (r - n),
      c = 1 / (a - i),
      h = (t + e) * s,
      u = (r + n) * l,
      d = (a + i) * c;
    return (
      (o[0] = 2 * s),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -h),
      (o[1] = 0),
      (o[5] = 2 * l),
      (o[9] = 0),
      (o[13] = -u),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = -2 * c),
      (o[14] = -d),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      r = e.elements;
    for (let e = 0; e < 16; e++) if (t[e] !== r[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let r = 0; r < 16; r++) this.elements[r] = e[r + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const r = this.elements;
    return (
      (e[t] = r[0]),
      (e[t + 1] = r[1]),
      (e[t + 2] = r[2]),
      (e[t + 3] = r[3]),
      (e[t + 4] = r[4]),
      (e[t + 5] = r[5]),
      (e[t + 6] = r[6]),
      (e[t + 7] = r[7]),
      (e[t + 8] = r[8]),
      (e[t + 9] = r[9]),
      (e[t + 10] = r[10]),
      (e[t + 11] = r[11]),
      (e[t + 12] = r[12]),
      (e[t + 13] = r[13]),
      (e[t + 14] = r[14]),
      (e[t + 15] = r[15]),
      e
    );
  }
}
Matrix4.prototype.isMatrix4 = !0;
const _v1$5 = new Vector3(),
  _m1$2 = new Matrix4(),
  _zero = new Vector3(0, 0, 0),
  _one = new Vector3(1, 1, 1),
  _x = new Vector3(),
  _y = new Vector3(),
  _z = new Vector3(),
  _matrix$1 = new Matrix4(),
  _quaternion$3 = new Quaternion();
class Euler {
  constructor(e = 0, t = 0, r = 0, n = Euler.DefaultOrder) {
    (this._x = e), (this._y = t), (this._z = r), (this._order = n);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, r, n) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = r),
      (this._order = n || this._order),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t, r) {
    const n = e.elements,
      i = n[0],
      a = n[4],
      o = n[8],
      s = n[1],
      l = n[5],
      c = n[9],
      h = n[2],
      u = n[6],
      d = n[10];
    switch ((t = t || this._order)) {
      case "XYZ":
        (this._y = Math.asin(clamp(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-a, i)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-clamp(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._y = Math.atan2(o, d)), (this._z = Math.atan2(s, l)))
            : ((this._y = Math.atan2(-h, i)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(clamp(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(s, i)));
        break;
      case "ZYX":
        (this._y = Math.asin(-clamp(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(s, i)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(clamp(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, i)))
            : ((this._x = 0), (this._y = Math.atan2(o, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-clamp(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(o, i)))
            : ((this._x = Math.atan2(-c, d)), (this._y = 0));
        break;
      default:
        console.warn(
          "MYGLAPI.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), !1 !== r && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, r) {
    return (
      _matrix$1.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(_matrix$1, t, r)
    );
  }
  setFromVector3(e, t) {
    return this.set(e.x, e.y, e.z, t || this._order);
  }
  reorder(e) {
    return (
      _quaternion$3.setFromEuler(this), this.setFromQuaternion(_quaternion$3, e)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      void 0 !== e[3] && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  toVector3(e) {
    return e
      ? e.set(this._x, this._y, this._z)
      : new Vector3(this._x, this._y, this._z);
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
}
(Euler.prototype.isEuler = !0),
  (Euler.DefaultOrder = "XYZ"),
  (Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
class Layers {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e) | 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return 0 != (this.mask & e.mask);
  }
}
let _object3DId = 0;
const _v1$4 = new Vector3(),
  _q1 = new Quaternion(),
  _m1$1 = new Matrix4(),
  _target = new Vector3(),
  _position$3 = new Vector3(),
  _scale$2 = new Vector3(),
  _quaternion$2 = new Quaternion(),
  _xAxis = new Vector3(1, 0, 0),
  _yAxis = new Vector3(0, 1, 0),
  _zAxis = new Vector3(0, 0, 1),
  _addedEvent = { type: "added" },
  _removedEvent = { type: "removed" };
class Object3D extends EventDispatcher {
  constructor() {
    super(),
      Object.defineProperty(this, "id", { value: _object3DId++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Object3D.DefaultUp.clone());
    const e = new Vector3(),
      t = new Euler(),
      r = new Quaternion(),
      n = new Vector3(1, 1, 1);
    t._onChange(function () {
      r.setFromEuler(t, !1);
    }),
      r._onChange(function () {
        t.setFromQuaternion(r, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: r },
        scale: { configurable: !0, enumerable: !0, value: n },
        modelViewMatrix: { value: new Matrix4() },
        normalMatrix: { value: new Matrix3() },
      }),
      (this.matrix = new Matrix4()),
      (this.matrixWorld = new Matrix4()),
      (this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Layers()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return _q1.setFromAxisAngle(e, t), this.quaternion.multiply(_q1), this;
  }
  rotateOnWorldAxis(e, t) {
    return _q1.setFromAxisAngle(e, t), this.quaternion.premultiply(_q1), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(_xAxis, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(_yAxis, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(_zAxis, e);
  }
  translateOnAxis(e, t) {
    return (
      _v1$4.copy(e).applyQuaternion(this.quaternion),
      this.position.add(_v1$4.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(_xAxis, e);
  }
  translateY(e) {
    return this.translateOnAxis(_yAxis, e);
  }
  translateZ(e) {
    return this.translateOnAxis(_zAxis, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, r) {
    e.isVector3 ? _target.copy(e) : _target.set(e, t, r);
    const n = this.parent;
    this.updateWorldMatrix(!0, !1),
      _position$3.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? _m1$1.lookAt(_position$3, _target, this.up)
        : _m1$1.lookAt(_target, _position$3, this.up),
      this.quaternion.setFromRotationMatrix(_m1$1),
      n &&
        (_m1$1.extractRotation(n.matrixWorld),
        _q1.setFromRotationMatrix(_m1$1),
        this.quaternion.premultiply(_q1.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return e === this
      ? (console.error(
          "MYGLAPI.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (null !== e.parent && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(_addedEvent))
          : console.error(
              "MYGLAPI.Object3D.add: object not an instance of MYGLAPI.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      -1 !== t &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(_removedEvent)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return null !== e && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(_removedEvent);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      _m1$1.copy(this.matrixWorld).invert(),
      null !== e.parent &&
        (e.parent.updateWorldMatrix(!0, !1),
        _m1$1.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(_m1$1),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let r = 0, n = this.children.length; r < n; r++) {
      const n = this.children[r].getObjectByProperty(e, t);
      if (void 0 !== n) return n;
    }
  }
  getWorldPosition(e) {
    return (
      void 0 === e &&
        (console.warn(
          "MYGLAPI.Object3D: .getWorldPosition() target is now required"
        ),
        (e = new Vector3())),
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      void 0 === e &&
        (console.warn(
          "MYGLAPI.Object3D: .getWorldQuaternion() target is now required"
        ),
        (e = new Quaternion())),
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(_position$3, e, _scale$2),
      e
    );
  }
  getWorldScale(e) {
    return (
      void 0 === e &&
        (console.warn(
          "MYGLAPI.Object3D: .getWorldScale() target is now required"
        ),
        (e = new Vector3())),
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(_position$3, _quaternion$2, e),
      e
    );
  }
  getWorldDirection(e) {
    void 0 === e &&
      (console.warn(
        "MYGLAPI.Object3D: .getWorldDirection() target is now required"
      ),
      (e = new Vector3())),
      this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let r = 0, n = t.length; r < n; r++) t[r].traverse(e);
  }
  traverseVisible(e) {
    if (!1 === this.visible) return;
    e(this);
    const t = this.children;
    for (let r = 0, n = t.length; r < n; r++) t[r].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    null !== t && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let r = 0, n = t.length; r < n; r++) t[r].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const r = this.parent;
    if (
      (!0 === e && null !== r && r.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      null === this.parent
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      !0 === t)
    ) {
      const e = this.children;
      for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e,
      r = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
      }),
      (r.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const n = {};
    function i(t, r) {
      return void 0 === t[r.uuid] && (t[r.uuid] = r.toJSON(e)), r.uuid;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      !0 === this.castShadow && (n.castShadow = !0),
      !0 === this.receiveShadow && (n.receiveShadow = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.frustumCulled && (n.frustumCulled = !1),
      0 !== this.renderOrder && (n.renderOrder = this.renderOrder),
      "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
      (n.layers = this.layers.mask),
      (n.matrix = this.matrix.toArray()),
      !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((n.type = "InstancedMesh"),
        (n.count = this.count),
        (n.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (n.instanceColor = this.instanceColor.toJSON())),
      this.isMesh || this.isLine || this.isPoints)
    ) {
      n.geometry = i(e.geometries, this.geometry);
      const t = this.geometry.parameters;
      if (void 0 !== t && void 0 !== t.shapes) {
        const r = t.shapes;
        if (Array.isArray(r))
          for (let t = 0, n = r.length; t < n; t++) {
            const n = r[t];
            i(e.shapes, n);
          }
        else i(e.shapes, r);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((n.bindMode = this.bindMode),
        (n.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (i(e.skeletons, this.skeleton), (n.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    )
      if (Array.isArray(this.material)) {
        const t = [];
        for (let r = 0, n = this.material.length; r < n; r++)
          t.push(i(e.materials, this.material[r]));
        n.material = t;
      } else n.material = i(e.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let t = 0; t < this.children.length; t++)
        n.children.push(this.children[t].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        const r = this.animations[t];
        n.animations.push(i(e.animations, r));
      }
    }
    if (t) {
      const t = a(e.geometries),
        n = a(e.materials),
        i = a(e.textures),
        o = a(e.images),
        s = a(e.shapes),
        l = a(e.skeletons),
        c = a(e.animations);
      t.length > 0 && (r.geometries = t),
        n.length > 0 && (r.materials = n),
        i.length > 0 && (r.textures = i),
        o.length > 0 && (r.images = o),
        s.length > 0 && (r.shapes = s),
        l.length > 0 && (r.skeletons = l),
        c.length > 0 && (r.animations = c);
    }
    return (r.object = n), r;
    function a(e) {
      const t = [];
      for (const r in e) {
        const n = e[r];
        delete n.metadata, t.push(n);
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      !0 === t)
    )
      for (let t = 0; t < e.children.length; t++) {
        const r = e.children[t];
        this.add(r.clone());
      }
    return this;
  }
}
(Object3D.DefaultUp = new Vector3(0, 1, 0)),
  (Object3D.DefaultMatrixAutoUpdate = !0),
  (Object3D.prototype.isObject3D = !0);
const _vector1 = new Vector3(),
  _vector2$1 = new Vector3(),
  _normalMatrix = new Matrix3();
class Plane {
  constructor(e = new Vector3(1, 0, 0), t = 0) {
    (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, r, n) {
    return this.normal.set(e, t, r), (this.constant = n), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, r) {
    const n = _vector1
      .subVectors(r, t)
      .cross(_vector2$1.subVectors(e, t))
      .normalize();
    return this.setFromNormalAndCoplanarPoint(n, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return (
      void 0 === t &&
        (console.warn("MYGLAPI.Plane: .projectPoint() target is now required"),
        (t = new Vector3())),
      t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
    );
  }
  intersectLine(e, t) {
    void 0 === t &&
      (console.warn("MYGLAPI.Plane: .intersectLine() target is now required"),
      (t = new Vector3()));
    const r = e.delta(_vector1),
      n = this.normal.dot(r);
    if (0 === n)
      return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
    const i = -(e.start.dot(this.normal) + this.constant) / n;
    return i < 0 || i > 1 ? null : t.copy(r).multiplyScalar(i).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      r = this.distanceToPoint(e.end);
    return (t < 0 && r > 0) || (r < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return (
      void 0 === e &&
        (console.warn("MYGLAPI.Plane: .coplanarPoint() target is now required"),
        (e = new Vector3())),
      e.copy(this.normal).multiplyScalar(-this.constant)
    );
  }
  applyMatrix4(e, t) {
    const r = t || _normalMatrix.getNormalMatrix(e),
      n = this.coplanarPoint(_vector1).applyMatrix4(e),
      i = this.normal.applyMatrix3(r).normalize();
    return (this.constant = -n.dot(i)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Plane.prototype.isPlane = !0;
const _v0$1 = new Vector3(),
  _v1$3 = new Vector3(),
  _v2$2 = new Vector3(),
  _v3$1 = new Vector3(),
  _vab = new Vector3(),
  _vac = new Vector3(),
  _vbc = new Vector3(),
  _vap = new Vector3(),
  _vbp = new Vector3(),
  _vcp = new Vector3();
class Triangle {
  constructor(e = new Vector3(), t = new Vector3(), r = new Vector3()) {
    (this.a = e), (this.b = t), (this.c = r);
  }
  static getNormal(e, t, r, n) {
    void 0 === n &&
      (console.warn("MYGLAPI.Triangle: .getNormal() target is now required"),
      (n = new Vector3())),
      n.subVectors(r, t),
      _v0$1.subVectors(e, t),
      n.cross(_v0$1);
    const i = n.lengthSq();
    return i > 0 ? n.multiplyScalar(1 / Math.sqrt(i)) : n.set(0, 0, 0);
  }
  static getBarycoord(e, t, r, n, i) {
    _v0$1.subVectors(n, t), _v1$3.subVectors(r, t), _v2$2.subVectors(e, t);
    const a = _v0$1.dot(_v0$1),
      o = _v0$1.dot(_v1$3),
      s = _v0$1.dot(_v2$2),
      l = _v1$3.dot(_v1$3),
      c = _v1$3.dot(_v2$2),
      h = a * l - o * o;
    if (
      (void 0 === i &&
        (console.warn(
          "MYGLAPI.Triangle: .getBarycoord() target is now required"
        ),
        (i = new Vector3())),
      0 === h)
    )
      return i.set(-2, -1, -1);
    const u = 1 / h,
      d = (l * s - o * c) * u,
      p = (a * c - o * s) * u;
    return i.set(1 - d - p, p, d);
  }
  static containsPoint(e, t, r, n) {
    return (
      this.getBarycoord(e, t, r, n, _v3$1),
      _v3$1.x >= 0 && _v3$1.y >= 0 && _v3$1.x + _v3$1.y <= 1
    );
  }
  static getUV(e, t, r, n, i, a, o, s) {
    return (
      this.getBarycoord(e, t, r, n, _v3$1),
      s.set(0, 0),
      s.addScaledVector(i, _v3$1.x),
      s.addScaledVector(a, _v3$1.y),
      s.addScaledVector(o, _v3$1.z),
      s
    );
  }
  static isFrontFacing(e, t, r, n) {
    return (
      _v0$1.subVectors(r, t),
      _v1$3.subVectors(e, t),
      _v0$1.cross(_v1$3).dot(n) < 0
    );
  }
  set(e, t, r) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(r), this;
  }
  setFromPointsAndIndices(e, t, r, n) {
    return this.a.copy(e[t]), this.b.copy(e[r]), this.c.copy(e[n]), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      _v0$1.subVectors(this.c, this.b),
      _v1$3.subVectors(this.a, this.b),
      0.5 * _v0$1.cross(_v1$3).length()
    );
  }
  getMidpoint(e) {
    return (
      void 0 === e &&
        (console.warn(
          "MYGLAPI.Triangle: .getMidpoint() target is now required"
        ),
        (e = new Vector3())),
      e
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3)
    );
  }
  getNormal(e) {
    return Triangle.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return (
      void 0 === e &&
        (console.warn("MYGLAPI.Triangle: .getPlane() target is now required"),
        (e = new Plane())),
      e.setFromCoplanarPoints(this.a, this.b, this.c)
    );
  }
  getBarycoord(e, t) {
    return Triangle.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, r, n, i) {
    return Triangle.getUV(e, this.a, this.b, this.c, t, r, n, i);
  }
  containsPoint(e) {
    return Triangle.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Triangle.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    void 0 === t &&
      (console.warn(
        "MYGLAPI.Triangle: .closestPointToPoint() target is now required"
      ),
      (t = new Vector3()));
    const r = this.a,
      n = this.b,
      i = this.c;
    let a, o;
    _vab.subVectors(n, r), _vac.subVectors(i, r), _vap.subVectors(e, r);
    const s = _vab.dot(_vap),
      l = _vac.dot(_vap);
    if (s <= 0 && l <= 0) return t.copy(r);
    _vbp.subVectors(e, n);
    const c = _vab.dot(_vbp),
      h = _vac.dot(_vbp);
    if (c >= 0 && h <= c) return t.copy(n);
    const u = s * h - c * l;
    if (u <= 0 && s >= 0 && c <= 0)
      return (a = s / (s - c)), t.copy(r).addScaledVector(_vab, a);
    _vcp.subVectors(e, i);
    const d = _vab.dot(_vcp),
      p = _vac.dot(_vcp);
    if (p >= 0 && d <= p) return t.copy(i);
    const m = d * l - s * p;
    if (m <= 0 && l >= 0 && p <= 0)
      return (o = l / (l - p)), t.copy(r).addScaledVector(_vac, o);
    const f = c * p - d * h;
    if (f <= 0 && h - c >= 0 && d - p >= 0)
      return (
        _vbc.subVectors(i, n),
        (o = (h - c) / (h - c + (d - p))),
        t.copy(n).addScaledVector(_vbc, o)
      );
    const g = 1 / (f + m + u);
    return (
      (a = m * g),
      (o = u * g),
      t.copy(r).addScaledVector(_vab, a).addScaledVector(_vac, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let materialId = 0;
class Material extends EventDispatcher {
  constructor() {
    super(),
      Object.defineProperty(this, "id", { value: materialId++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.type = "Material"),
      (this.fog = !0),
      (this.blending = NormalBlending),
      (this.side = FrontSide),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = SrcAlphaFactor),
      (this.blendDst = OneMinusSrcAlphaFactor),
      (this.blendEquation = AddEquation),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = LessEqualDepth),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = AlwaysStencilFunc),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = KeepStencilOp),
      (this.stencilZFail = KeepStencilOp),
      (this.stencilZPass = KeepStencilOp),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaTest = 0),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0);
  }
  onBuild() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (void 0 !== e)
      for (const t in e) {
        const r = e[t];
        if (void 0 === r) {
          console.warn("MYGLAPI.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if ("shading" === t) {
          console.warn(
            "MYGLAPI." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = r === FlatShading);
          continue;
        }
        const n = this[t];
        void 0 !== n
          ? n && n.isColor
            ? n.set(r)
            : n && n.isVector3 && r && r.isVector3
            ? n.copy(r)
            : (this[t] = r)
          : console.warn(
              "MYGLAPI." +
                this.type +
                ": '" +
                t +
                "' is not a property of this material."
            );
      }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    t && (e = { textures: {}, images: {} });
    const r = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function n(e) {
      const t = [];
      for (const r in e) {
        const n = e[r];
        delete n.metadata, t.push(n);
      }
      return t;
    }
    if (
      ((r.uuid = this.uuid),
      (r.type = this.type),
      "" !== this.name && (r.name = this.name),
      this.color && this.color.isColor && (r.color = this.color.getHex()),
      void 0 !== this.roughness && (r.roughness = this.roughness),
      void 0 !== this.metalness && (r.metalness = this.metalness),
      this.sheen && this.sheen.isColor && (r.sheen = this.sheen.getHex()),
      this.emissive &&
        this.emissive.isColor &&
        (r.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (r.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (r.specular = this.specular.getHex()),
      void 0 !== this.shininess && (r.shininess = this.shininess),
      void 0 !== this.clearcoat && (r.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (r.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (r.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (r.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((r.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (r.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.map && this.map.isTexture && (r.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (r.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (r.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((r.lightMap = this.lightMap.toJSON(e).uuid),
        (r.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((r.aoMap = this.aoMap.toJSON(e).uuid),
        (r.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((r.bumpMap = this.bumpMap.toJSON(e).uuid),
        (r.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((r.normalMap = this.normalMap.toJSON(e).uuid),
        (r.normalMapType = this.normalMapType),
        (r.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((r.displacementMap = this.displacementMap.toJSON(e).uuid),
        (r.displacementScale = this.displacementScale),
        (r.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (r.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (r.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (r.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (r.specularMap = this.specularMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((r.envMap = this.envMap.toJSON(e).uuid),
        void 0 !== this.combine && (r.combine = this.combine)),
      void 0 !== this.envMapIntensity &&
        (r.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (r.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (r.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (r.gradientMap = this.gradientMap.toJSON(e).uuid),
      void 0 !== this.size && (r.size = this.size),
      null !== this.shadowSide && (r.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (r.sizeAttenuation = this.sizeAttenuation),
      this.blending !== NormalBlending && (r.blending = this.blending),
      this.side !== FrontSide && (r.side = this.side),
      this.vertexColors && (r.vertexColors = !0),
      this.opacity < 1 && (r.opacity = this.opacity),
      !0 === this.transparent && (r.transparent = this.transparent),
      (r.depthFunc = this.depthFunc),
      (r.depthTest = this.depthTest),
      (r.depthWrite = this.depthWrite),
      (r.colorWrite = this.colorWrite),
      (r.stencilWrite = this.stencilWrite),
      (r.stencilWriteMask = this.stencilWriteMask),
      (r.stencilFunc = this.stencilFunc),
      (r.stencilRef = this.stencilRef),
      (r.stencilFuncMask = this.stencilFuncMask),
      (r.stencilFail = this.stencilFail),
      (r.stencilZFail = this.stencilZFail),
      (r.stencilZPass = this.stencilZPass),
      this.rotation && 0 !== this.rotation && (r.rotation = this.rotation),
      !0 === this.polygonOffset && (r.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (r.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (r.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth && 1 !== this.linewidth && (r.linewidth = this.linewidth),
      void 0 !== this.dashSize && (r.dashSize = this.dashSize),
      void 0 !== this.gapSize && (r.gapSize = this.gapSize),
      void 0 !== this.scale && (r.scale = this.scale),
      !0 === this.dithering && (r.dithering = !0),
      this.alphaTest > 0 && (r.alphaTest = this.alphaTest),
      !0 === this.alphaToCoverage && (r.alphaToCoverage = this.alphaToCoverage),
      !0 === this.premultipliedAlpha &&
        (r.premultipliedAlpha = this.premultipliedAlpha),
      !0 === this.wireframe && (r.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (r.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (r.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (r.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.morphTargets && (r.morphTargets = !0),
      !0 === this.morphNormals && (r.morphNormals = !0),
      !0 === this.flatShading && (r.flatShading = this.flatShading),
      !1 === this.visible && (r.visible = !1),
      !1 === this.toneMapped && (r.toneMapped = !1),
      "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData),
      t)
    ) {
      const t = n(e.textures),
        i = n(e.images);
      t.length > 0 && (r.textures = t), i.length > 0 && (r.images = i);
    }
    return r;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.fog = e.fog),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let r = null;
    if (null !== t) {
      const e = t.length;
      r = new Array(e);
      for (let n = 0; n !== e; ++n) r[n] = t[n].clone();
    }
    return (
      (this.clippingPlanes = r),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
}
Material.prototype.isMaterial = !0;
const _colorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  _hslA = { h: 0, s: 0, l: 0 },
  _hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + 6 * (t - e) * r
      : r < 0.5
      ? t
      : r < 2 / 3
      ? e + 6 * (t - e) * (2 / 3 - r)
      : e
  );
}
function SRGBToLinear(e) {
  return e < 0.04045
    ? 0.0773993808 * e
    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
}
function LinearToSRGB(e) {
  return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
class Color {
  constructor(e, t, r) {
    return void 0 === t && void 0 === r ? this.set(e) : this.setRGB(e, t, r);
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : "number" == typeof e
        ? this.setHex(e)
        : "string" == typeof e && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (255 & e) / 255),
      this
    );
  }
  setRGB(e, t, r) {
    return (this.r = e), (this.g = t), (this.b = r), this;
  }
  setHSL(e, t, r) {
    if (
      ((e = euclideanModulo(e, 1)),
      (t = clamp(t, 0, 1)),
      (r = clamp(r, 0, 1)),
      0 === t)
    )
      this.r = this.g = this.b = r;
    else {
      const n = r <= 0.5 ? r * (1 + t) : r + t - r * t,
        i = 2 * r - n;
      (this.r = hue2rgb(i, n, e + 1 / 3)),
        (this.g = hue2rgb(i, n, e)),
        (this.b = hue2rgb(i, n, e - 1 / 3));
    }
    return this;
  }
  setStyle(e) {
    function t(t) {
      void 0 !== t &&
        parseFloat(t) < 1 &&
        console.warn(
          "MYGLAPI.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let r;
    if ((r = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let e;
      const n = r[1],
        i = r[2];
      switch (n) {
        case "rgb":
        case "rgba":
          if (
            (e =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                i
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(e[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(e[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(e[3], 10)) / 255),
              t(e[4]),
              this
            );
          if (
            (e =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                i
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(e[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(e[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(e[3], 10)) / 100),
              t(e[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (e =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                i
              ))
          ) {
            const r = parseFloat(e[1]) / 360,
              n = parseInt(e[2], 10) / 100,
              i = parseInt(e[3], 10) / 100;
            return t(e[4]), this.setHSL(r, n, i);
          }
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const e = r[1],
        t = e.length;
      if (3 === t)
        return (
          (this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255),
          (this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255),
          (this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255),
          this
        );
      if (6 === t)
        return (
          (this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255),
          (this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255),
          (this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e) : this;
  }
  setColorName(e) {
    const t = _colorKeywords[e.toLowerCase()];
    return (
      void 0 !== t
        ? this.setHex(t)
        : console.warn("MYGLAPI.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copyGammaToLinear(e, t = 2) {
    return (
      (this.r = Math.pow(e.r, t)),
      (this.g = Math.pow(e.g, t)),
      (this.b = Math.pow(e.b, t)),
      this
    );
  }
  copyLinearToGamma(e, t = 2) {
    const r = t > 0 ? 1 / t : 1;
    return (
      (this.r = Math.pow(e.r, r)),
      (this.g = Math.pow(e.g, r)),
      (this.b = Math.pow(e.b, r)),
      this
    );
  }
  convertGammaToLinear(e) {
    return this.copyGammaToLinear(this, e), this;
  }
  convertLinearToGamma(e) {
    return this.copyLinearToGamma(this, e), this;
  }
  copySRGBToLinear(e) {
    return (
      (this.r = SRGBToLinear(e.r)),
      (this.g = SRGBToLinear(e.g)),
      (this.b = SRGBToLinear(e.b)),
      this
    );
  }
  copyLinearToSRGB(e) {
    return (
      (this.r = LinearToSRGB(e.r)),
      (this.g = LinearToSRGB(e.g)),
      (this.b = LinearToSRGB(e.b)),
      this
    );
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex() {
    return (
      ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
    );
  }
  getHexString() {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  }
  getHSL(e) {
    void 0 === e &&
      (console.warn("MYGLAPI.Color: .getHSL() target is now required"),
      (e = { h: 0, s: 0, l: 0 }));
    const t = this.r,
      r = this.g,
      n = this.b,
      i = Math.max(t, r, n),
      a = Math.min(t, r, n);
    let o, s;
    const l = (a + i) / 2;
    if (a === i) (o = 0), (s = 0);
    else {
      const e = i - a;
      switch (((s = l <= 0.5 ? e / (i + a) : e / (2 - i - a)), i)) {
        case t:
          o = (r - n) / e + (r < n ? 6 : 0);
          break;
        case r:
          o = (n - t) / e + 2;
          break;
        case n:
          o = (t - r) / e + 4;
      }
      o /= 6;
    }
    return (e.h = o), (e.s = s), (e.l = l), e;
  }
  getStyle() {
    return (
      "rgb(" +
      ((255 * this.r) | 0) +
      "," +
      ((255 * this.g) | 0) +
      "," +
      ((255 * this.b) | 0) +
      ")"
    );
  }
  offsetHSL(e, t, r) {
    return (
      this.getHSL(_hslA),
      (_hslA.h += e),
      (_hslA.s += t),
      (_hslA.l += r),
      this.setHSL(_hslA.h, _hslA.s, _hslA.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, r) {
    return (
      (this.r = e.r + (t.r - e.r) * r),
      (this.g = e.g + (t.g - e.g) * r),
      (this.b = e.b + (t.b - e.b) * r),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(_hslA), e.getHSL(_hslB);
    const r = lerp(_hslA.h, _hslB.h, t),
      n = lerp(_hslA.s, _hslB.s, t),
      i = lerp(_hslA.l, _hslB.l, t);
    return this.setHSL(r, n, i), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      !0 === e.normalized &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
}
(Color.NAMES = _colorKeywords),
  (Color.prototype.isColor = !0),
  (Color.prototype.r = 1),
  (Color.prototype.g = 1),
  (Color.prototype.b = 1);
class MeshBasicMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = MultiplyOperation),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.morphTargets = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.morphTargets = e.morphTargets),
      this
    );
  }
}
MeshBasicMaterial.prototype.isMeshBasicMaterial = !0;
const _vector$9 = new Vector3(),
  _vector2 = new Vector2();
class BufferAttribute {
  constructor(e, t, r) {
    if (Array.isArray(e))
      throw new TypeError(
        "MYGLAPI.BufferAttribute: array should be a Typed Array."
      );
    (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.normalized = !0 === r),
      (this.usage = StaticDrawUsage),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, r) {
    (e *= this.itemSize), (r *= t.itemSize);
    for (let n = 0, i = this.itemSize; n < i; n++)
      this.array[e + n] = t.array[r + n];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    const t = this.array;
    let r = 0;
    for (let n = 0, i = e.length; n < i; n++) {
      let i = e[n];
      void 0 === i &&
        (console.warn(
          "MYGLAPI.BufferAttribute.copyColorsArray(): color is undefined",
          n
        ),
        (i = new Color())),
        (t[r++] = i.r),
        (t[r++] = i.g),
        (t[r++] = i.b);
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let r = 0;
    for (let n = 0, i = e.length; n < i; n++) {
      let i = e[n];
      void 0 === i &&
        (console.warn(
          "MYGLAPI.BufferAttribute.copyVector2sArray(): vector is undefined",
          n
        ),
        (i = new Vector2())),
        (t[r++] = i.x),
        (t[r++] = i.y);
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let r = 0;
    for (let n = 0, i = e.length; n < i; n++) {
      let i = e[n];
      void 0 === i &&
        (console.warn(
          "MYGLAPI.BufferAttribute.copyVector3sArray(): vector is undefined",
          n
        ),
        (i = new Vector3())),
        (t[r++] = i.x),
        (t[r++] = i.y),
        (t[r++] = i.z);
    }
    return this;
  }
  copyVector4sArray(e) {
    const t = this.array;
    let r = 0;
    for (let n = 0, i = e.length; n < i; n++) {
      let i = e[n];
      void 0 === i &&
        (console.warn(
          "MYGLAPI.BufferAttribute.copyVector4sArray(): vector is undefined",
          n
        ),
        (i = new Vector4())),
        (t[r++] = i.x),
        (t[r++] = i.y),
        (t[r++] = i.z),
        (t[r++] = i.w);
    }
    return this;
  }
  applyMatrix3(e) {
    if (2 === this.itemSize)
      for (let t = 0, r = this.count; t < r; t++)
        _vector2.fromBufferAttribute(this, t),
          _vector2.applyMatrix3(e),
          this.setXY(t, _vector2.x, _vector2.y);
    else if (3 === this.itemSize)
      for (let t = 0, r = this.count; t < r; t++)
        _vector$9.fromBufferAttribute(this, t),
          _vector$9.applyMatrix3(e),
          this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, r = this.count; t < r; t++)
      (_vector$9.x = this.getX(t)),
        (_vector$9.y = this.getY(t)),
        (_vector$9.z = this.getZ(t)),
        _vector$9.applyMatrix4(e),
        this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, r = this.count; t < r; t++)
      (_vector$9.x = this.getX(t)),
        (_vector$9.y = this.getY(t)),
        (_vector$9.z = this.getZ(t)),
        _vector$9.applyNormalMatrix(e),
        this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, r = this.count; t < r; t++)
      (_vector$9.x = this.getX(t)),
        (_vector$9.y = this.getY(t)),
        (_vector$9.z = this.getZ(t)),
        _vector$9.transformDirection(e),
        this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, r) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = r),
      this
    );
  }
  setXYZ(e, t, r, n) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = r),
      (this.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, r, n, i) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = r),
      (this.array[e + 2] = n),
      (this.array[e + 3] = i),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized,
    };
    return (
      "" !== this.name && (e.name = this.name),
      this.usage !== StaticDrawUsage && (e.usage = this.usage),
      (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
        (e.updateRange = this.updateRange),
      e
    );
  }
}
BufferAttribute.prototype.isBufferAttribute = !0;
class Int8BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Int8Array(e), t, r);
  }
}
class Uint8BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint8Array(e), t, r);
  }
}
class Uint8ClampedBufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint8ClampedArray(e), t, r);
  }
}
class Int16BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Int16Array(e), t, r);
  }
}
class Uint16BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint16Array(e), t, r);
  }
}
class Int32BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Int32Array(e), t, r);
  }
}
class Uint32BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint32Array(e), t, r);
  }
}
class Float16BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint16Array(e), t, r);
  }
}
Float16BufferAttribute.prototype.isFloat16BufferAttribute = !0;
class Float32BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Float32Array(e), t, r);
  }
}
class Float64BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Float64Array(e), t, r);
  }
}
function arrayMax(e) {
  if (0 === e.length) return -1 / 0;
  let t = e[0];
  for (let r = 1, n = e.length; r < n; ++r) e[r] > t && (t = e[r]);
  return t;
}
const TYPED_ARRAYS = {
  Int8Array: Int8Array,
  Uint8Array: Uint8Array,
  Uint8ClampedArray: Uint8ClampedArray,
  Int16Array: Int16Array,
  Uint16Array: Uint16Array,
  Int32Array: Int32Array,
  Uint32Array: Uint32Array,
  Float32Array: Float32Array,
  Float64Array: Float64Array,
};
function getTypedArray(e, t) {
  return new TYPED_ARRAYS[e](t);
}
let _id = 0;
const _m1 = new Matrix4(),
  _obj = new Object3D(),
  _offset = new Vector3(),
  _box$1 = new Box3(),
  _boxMorphTargets = new Box3(),
  _vector$8 = new Vector3();
class BufferGeometry extends EventDispatcher {
  constructor() {
    super(),
      Object.defineProperty(this, "id", { value: _id++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (
            arrayMax(e) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute
          )(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return void 0 !== this.attributes[e];
  }
  addGroup(e, t, r = 0) {
    this.groups.push({ start: e, count: t, materialIndex: r });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const r = this.attributes.normal;
    if (void 0 !== r) {
      const t = new Matrix3().getNormalMatrix(e);
      r.applyNormalMatrix(t), (r.needsUpdate = !0);
    }
    const n = this.attributes.tangent;
    return (
      void 0 !== n && (n.transformDirection(e), (n.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  rotateX(e) {
    return _m1.makeRotationX(e), this.applyMatrix4(_m1), this;
  }
  rotateY(e) {
    return _m1.makeRotationY(e), this.applyMatrix4(_m1), this;
  }
  rotateZ(e) {
    return _m1.makeRotationZ(e), this.applyMatrix4(_m1), this;
  }
  translate(e, t, r) {
    return _m1.makeTranslation(e, t, r), this.applyMatrix4(_m1), this;
  }
  scale(e, t, r) {
    return _m1.makeScale(e, t, r), this.applyMatrix4(_m1), this;
  }
  lookAt(e) {
    return (
      _obj.lookAt(e), _obj.updateMatrix(), this.applyMatrix4(_obj.matrix), this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(_offset).negate(),
      this.translate(_offset.x, _offset.y, _offset.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let r = 0, n = e.length; r < n; r++) {
      const n = e[r];
      t.push(n.x, n.y, n.z || 0);
    }
    return (
      this.setAttribute("position", new Float32BufferAttribute(t, 3)), this
    );
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Box3());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute)
      return (
        console.error(
          'MYGLAPI.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
        void this.boundingBox.set(
          new Vector3(-1 / 0, -1 / 0, -1 / 0),
          new Vector3(1 / 0, 1 / 0, 1 / 0)
        )
      );
    if (void 0 !== e) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let e = 0, r = t.length; e < r; e++) {
          const r = t[e];
          _box$1.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (_vector$8.addVectors(this.boundingBox.min, _box$1.min),
                this.boundingBox.expandByPoint(_vector$8),
                _vector$8.addVectors(this.boundingBox.max, _box$1.max),
                this.boundingBox.expandByPoint(_vector$8))
              : (this.boundingBox.expandByPoint(_box$1.min),
                this.boundingBox.expandByPoint(_box$1.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'MYGLAPI.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new Sphere());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute)
      return (
        console.error(
          'MYGLAPI.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
        void this.boundingSphere.set(new Vector3(), 1 / 0)
      );
    if (e) {
      const r = this.boundingSphere.center;
      if ((_box$1.setFromBufferAttribute(e), t))
        for (let e = 0, r = t.length; e < r; e++) {
          const r = t[e];
          _boxMorphTargets.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (_vector$8.addVectors(_box$1.min, _boxMorphTargets.min),
                _box$1.expandByPoint(_vector$8),
                _vector$8.addVectors(_box$1.max, _boxMorphTargets.max),
                _box$1.expandByPoint(_vector$8))
              : (_box$1.expandByPoint(_boxMorphTargets.min),
                _box$1.expandByPoint(_boxMorphTargets.max));
        }
      _box$1.getCenter(r);
      let n = 0;
      for (let t = 0, i = e.count; t < i; t++)
        _vector$8.fromBufferAttribute(e, t),
          (n = Math.max(n, r.distanceToSquared(_vector$8)));
      if (t)
        for (let i = 0, a = t.length; i < a; i++) {
          const a = t[i],
            o = this.morphTargetsRelative;
          for (let t = 0, i = a.count; t < i; t++)
            _vector$8.fromBufferAttribute(a, t),
              o && (_offset.fromBufferAttribute(e, t), _vector$8.add(_offset)),
              (n = Math.max(n, r.distanceToSquared(_vector$8)));
        }
      (this.boundingSphere.radius = Math.sqrt(n)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'MYGLAPI.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeFaceNormals() {}
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      null === e ||
      void 0 === t.position ||
      void 0 === t.normal ||
      void 0 === t.uv
    )
      return void console.error(
        "MYGLAPI.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
    const r = e.array,
      n = t.position.array,
      i = t.normal.array,
      a = t.uv.array,
      o = n.length / 3;
    void 0 === t.tangent &&
      this.setAttribute(
        "tangent",
        new BufferAttribute(new Float32Array(4 * o), 4)
      );
    const s = t.tangent.array,
      l = [],
      c = [];
    for (let e = 0; e < o; e++) (l[e] = new Vector3()), (c[e] = new Vector3());
    const h = new Vector3(),
      u = new Vector3(),
      d = new Vector3(),
      p = new Vector2(),
      m = new Vector2(),
      f = new Vector2(),
      g = new Vector3(),
      _ = new Vector3();
    function v(e, t, r) {
      h.fromArray(n, 3 * e),
        u.fromArray(n, 3 * t),
        d.fromArray(n, 3 * r),
        p.fromArray(a, 2 * e),
        m.fromArray(a, 2 * t),
        f.fromArray(a, 2 * r),
        u.sub(h),
        d.sub(h),
        m.sub(p),
        f.sub(p);
      const i = 1 / (m.x * f.y - f.x * m.y);
      isFinite(i) &&
        (g
          .copy(u)
          .multiplyScalar(f.y)
          .addScaledVector(d, -m.y)
          .multiplyScalar(i),
        _.copy(d)
          .multiplyScalar(m.x)
          .addScaledVector(u, -f.x)
          .multiplyScalar(i),
        l[e].add(g),
        l[t].add(g),
        l[r].add(g),
        c[e].add(_),
        c[t].add(_),
        c[r].add(_));
    }
    let y = this.groups;
    0 === y.length && (y = [{ start: 0, count: r.length }]);
    for (let e = 0, t = y.length; e < t; ++e) {
      const t = y[e],
        n = t.start;
      for (let e = n, i = n + t.count; e < i; e += 3)
        v(r[e + 0], r[e + 1], r[e + 2]);
    }
    const x = new Vector3(),
      b = new Vector3(),
      M = new Vector3(),
      w = new Vector3();
    function S(e) {
      M.fromArray(i, 3 * e), w.copy(M);
      const t = l[e];
      x.copy(t),
        x.sub(M.multiplyScalar(M.dot(t))).normalize(),
        b.crossVectors(w, t);
      const r = b.dot(c[e]) < 0 ? -1 : 1;
      (s[4 * e] = x.x),
        (s[4 * e + 1] = x.y),
        (s[4 * e + 2] = x.z),
        (s[4 * e + 3] = r);
    }
    for (let e = 0, t = y.length; e < t; ++e) {
      const t = y[e],
        n = t.start;
      for (let e = n, i = n + t.count; e < i; e += 3)
        S(r[e + 0]), S(r[e + 1]), S(r[e + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (void 0 !== t) {
      let r = this.getAttribute("normal");
      if (void 0 === r)
        (r = new BufferAttribute(new Float32Array(3 * t.count), 3)),
          this.setAttribute("normal", r);
      else for (let e = 0, t = r.count; e < t; e++) r.setXYZ(e, 0, 0, 0);
      const n = new Vector3(),
        i = new Vector3(),
        a = new Vector3(),
        o = new Vector3(),
        s = new Vector3(),
        l = new Vector3(),
        c = new Vector3(),
        h = new Vector3();
      if (e)
        for (let u = 0, d = e.count; u < d; u += 3) {
          const d = e.getX(u + 0),
            p = e.getX(u + 1),
            m = e.getX(u + 2);
          n.fromBufferAttribute(t, d),
            i.fromBufferAttribute(t, p),
            a.fromBufferAttribute(t, m),
            c.subVectors(a, i),
            h.subVectors(n, i),
            c.cross(h),
            o.fromBufferAttribute(r, d),
            s.fromBufferAttribute(r, p),
            l.fromBufferAttribute(r, m),
            o.add(c),
            s.add(c),
            l.add(c),
            r.setXYZ(d, o.x, o.y, o.z),
            r.setXYZ(p, s.x, s.y, s.z),
            r.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let e = 0, o = t.count; e < o; e += 3)
          n.fromBufferAttribute(t, e + 0),
            i.fromBufferAttribute(t, e + 1),
            a.fromBufferAttribute(t, e + 2),
            c.subVectors(a, i),
            h.subVectors(n, i),
            c.cross(h),
            r.setXYZ(e + 0, c.x, c.y, c.z),
            r.setXYZ(e + 1, c.x, c.y, c.z),
            r.setXYZ(e + 2, c.x, c.y, c.z);
      this.normalizeNormals(), (r.needsUpdate = !0);
    }
  }
  merge(e, t) {
    if (!e || !e.isBufferGeometry)
      return void console.error(
        "MYGLAPI.BufferGeometry.merge(): geometry not an instance of MYGLAPI.BufferGeometry.",
        e
      );
    void 0 === t &&
      ((t = 0),
      console.warn(
        "MYGLAPI.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      ));
    const r = this.attributes;
    for (const n in r) {
      if (void 0 === e.attributes[n]) continue;
      const i = r[n].array,
        a = e.attributes[n],
        o = a.array,
        s = a.itemSize * t,
        l = Math.min(o.length, i.length - s);
      for (let e = 0, t = s; e < l; e++, t++) i[t] = o[e];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, r = e.count; t < r; t++)
      _vector$8.fromBufferAttribute(e, t),
        _vector$8.normalize(),
        e.setXYZ(t, _vector$8.x, _vector$8.y, _vector$8.z);
  }
  toNonIndexed() {
    function e(e, t) {
      const r = e.array,
        n = e.itemSize,
        i = e.normalized,
        a = new r.constructor(t.length * n);
      let o = 0,
        s = 0;
      for (let e = 0, i = t.length; e < i; e++) {
        o = t[e] * n;
        for (let e = 0; e < n; e++) a[s++] = r[o++];
      }
      return new BufferAttribute(a, n, i);
    }
    if (null === this.index)
      return (
        console.warn(
          "MYGLAPI.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new BufferGeometry(),
      r = this.index.array,
      n = this.attributes;
    for (const i in n) {
      const a = e(n[i], r);
      t.setAttribute(i, a);
    }
    const i = this.morphAttributes;
    for (const n in i) {
      const a = [],
        o = i[n];
      for (let t = 0, n = o.length; t < n; t++) {
        const n = e(o[t], r);
        a.push(n);
      }
      t.morphAttributes[n] = a;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let e = 0, r = a.length; e < r; e++) {
      const r = a[e];
      t.addGroup(r.start, r.count, r.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      "" !== this.name && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      const t = this.parameters;
      for (const r in t) void 0 !== t[r] && (e[r] = t[r]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    null !== t &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const r = this.attributes;
    for (const t in r) {
      const n = r[t];
      e.data.attributes[t] = n.toJSON(e.data);
    }
    const n = {};
    let i = !1;
    for (const t in this.morphAttributes) {
      const r = this.morphAttributes[t],
        a = [];
      for (let t = 0, n = r.length; t < n; t++) {
        const n = r[t];
        a.push(n.toJSON(e.data));
      }
      a.length > 0 && ((n[t] = a), (i = !0));
    }
    i &&
      ((e.data.morphAttributes = n),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      null !== o &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new BufferGeometry().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const r = e.index;
    null !== r && this.setIndex(r.clone(t));
    const n = e.attributes;
    for (const e in n) {
      const r = n[e];
      this.setAttribute(e, r.clone(t));
    }
    const i = e.morphAttributes;
    for (const e in i) {
      const r = [],
        n = i[e];
      for (let e = 0, i = n.length; e < i; e++) r.push(n[e].clone(t));
      this.morphAttributes[e] = r;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let e = 0, t = a.length; e < t; e++) {
      const t = a[e];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    const o = e.boundingBox;
    null !== o && (this.boundingBox = o.clone());
    const s = e.boundingSphere;
    return (
      null !== s && (this.boundingSphere = s.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
BufferGeometry.prototype.isBufferGeometry = !0;
const _inverseMatrix$2 = new Matrix4(),
  _ray$2 = new Ray(),
  _sphere$3 = new Sphere(),
  _vA$1 = new Vector3(),
  _vB$1 = new Vector3(),
  _vC$1 = new Vector3(),
  _tempA = new Vector3(),
  _tempB = new Vector3(),
  _tempC = new Vector3(),
  _morphA = new Vector3(),
  _morphB = new Vector3(),
  _morphC = new Vector3(),
  _uvA$1 = new Vector2(),
  _uvB$1 = new Vector2(),
  _uvC$1 = new Vector2(),
  _intersectionPoint = new Vector3(),
  _intersectionPointWorld = new Vector3();
class Mesh extends Object3D {
  constructor(e = new BufferGeometry(), t = new MeshBasicMaterial()) {
    super(),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      void 0 !== e.morphTargetInfluences &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      void 0 !== e.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes,
        r = Object.keys(t);
      if (r.length > 0) {
        const e = t[r[0]];
        if (void 0 !== e) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let t = 0, r = e.length; t < r; t++) {
            const r = e[t].name || String(t);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[r] = t);
          }
        }
      }
    } else {
      const t = e.morphTargets;
      void 0 !== t &&
        t.length > 0 &&
        console.error(
          "MYGLAPI.Mesh.updateMorphTargets() no longer supports MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
        );
    }
  }
  raycast(e, t) {
    const r = this.geometry,
      n = this.material,
      i = this.matrixWorld;
    if (void 0 === n) return;
    if (
      (null === r.boundingSphere && r.computeBoundingSphere(),
      _sphere$3.copy(r.boundingSphere),
      _sphere$3.applyMatrix4(i),
      !1 === e.ray.intersectsSphere(_sphere$3))
    )
      return;
    if (
      (_inverseMatrix$2.copy(i).invert(),
      _ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2),
      null !== r.boundingBox && !1 === _ray$2.intersectsBox(r.boundingBox))
    )
      return;
    let a;
    if (r.isBufferGeometry) {
      const i = r.index,
        o = r.attributes.position,
        s = r.morphAttributes.position,
        l = r.morphTargetsRelative,
        c = r.attributes.uv,
        h = r.attributes.uv2,
        u = r.groups,
        d = r.drawRange;
      if (null !== i)
        if (Array.isArray(n))
          for (let r = 0, p = u.length; r < p; r++) {
            const p = u[r],
              m = n[p.materialIndex];
            for (
              let r = Math.max(p.start, d.start),
                n = Math.min(p.start + p.count, d.start + d.count);
              r < n;
              r += 3
            ) {
              const n = i.getX(r),
                u = i.getX(r + 1),
                d = i.getX(r + 2);
              (a = checkBufferGeometryIntersection(
                this,
                m,
                e,
                _ray$2,
                o,
                s,
                l,
                c,
                h,
                n,
                u,
                d
              )) &&
                ((a.faceIndex = Math.floor(r / 3)),
                (a.face.materialIndex = p.materialIndex),
                t.push(a));
            }
          }
        else {
          for (
            let r = Math.max(0, d.start),
              u = Math.min(i.count, d.start + d.count);
            r < u;
            r += 3
          ) {
            const u = i.getX(r),
              d = i.getX(r + 1),
              p = i.getX(r + 2);
            (a = checkBufferGeometryIntersection(
              this,
              n,
              e,
              _ray$2,
              o,
              s,
              l,
              c,
              h,
              u,
              d,
              p
            )) && ((a.faceIndex = Math.floor(r / 3)), t.push(a));
          }
        }
      else if (void 0 !== o)
        if (Array.isArray(n))
          for (let r = 0, i = u.length; r < i; r++) {
            const i = u[r],
              p = n[i.materialIndex];
            for (
              let r = Math.max(i.start, d.start),
                n = Math.min(i.start + i.count, d.start + d.count);
              r < n;
              r += 3
            ) {
              (a = checkBufferGeometryIntersection(
                this,
                p,
                e,
                _ray$2,
                o,
                s,
                l,
                c,
                h,
                r,
                r + 1,
                r + 2
              )) &&
                ((a.faceIndex = Math.floor(r / 3)),
                (a.face.materialIndex = i.materialIndex),
                t.push(a));
            }
          }
        else {
          for (
            let r = Math.max(0, d.start),
              i = Math.min(o.count, d.start + d.count);
            r < i;
            r += 3
          ) {
            (a = checkBufferGeometryIntersection(
              this,
              n,
              e,
              _ray$2,
              o,
              s,
              l,
              c,
              h,
              r,
              r + 1,
              r + 2
            )) && ((a.faceIndex = Math.floor(r / 3)), t.push(a));
          }
        }
    } else
      r.isGeometry &&
        console.error(
          "MYGLAPI.Mesh.raycast() no longer supports MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
        );
  }
}
function checkIntersection(e, t, r, n, i, a, o, s) {
  let l;
  if (
    null ===
    (l =
      t.side === BackSide
        ? n.intersectTriangle(o, a, i, !0, s)
        : n.intersectTriangle(i, a, o, t.side !== DoubleSide, s))
  )
    return null;
  _intersectionPointWorld.copy(s),
    _intersectionPointWorld.applyMatrix4(e.matrixWorld);
  const c = r.ray.origin.distanceTo(_intersectionPointWorld);
  return c < r.near || c > r.far
    ? null
    : { distance: c, point: _intersectionPointWorld.clone(), object: e };
}
function checkBufferGeometryIntersection(e, t, r, n, i, a, o, s, l, c, h, u) {
  _vA$1.fromBufferAttribute(i, c),
    _vB$1.fromBufferAttribute(i, h),
    _vC$1.fromBufferAttribute(i, u);
  const d = e.morphTargetInfluences;
  if (t.morphTargets && a && d) {
    _morphA.set(0, 0, 0), _morphB.set(0, 0, 0), _morphC.set(0, 0, 0);
    for (let e = 0, t = a.length; e < t; e++) {
      const t = d[e],
        r = a[e];
      0 !== t &&
        (_tempA.fromBufferAttribute(r, c),
        _tempB.fromBufferAttribute(r, h),
        _tempC.fromBufferAttribute(r, u),
        o
          ? (_morphA.addScaledVector(_tempA, t),
            _morphB.addScaledVector(_tempB, t),
            _morphC.addScaledVector(_tempC, t))
          : (_morphA.addScaledVector(_tempA.sub(_vA$1), t),
            _morphB.addScaledVector(_tempB.sub(_vB$1), t),
            _morphC.addScaledVector(_tempC.sub(_vC$1), t)));
    }
    _vA$1.add(_morphA), _vB$1.add(_morphB), _vC$1.add(_morphC);
  }
  e.isSkinnedMesh &&
    (e.boneTransform(c, _vA$1),
    e.boneTransform(h, _vB$1),
    e.boneTransform(u, _vC$1));
  const p = checkIntersection(
    e,
    t,
    r,
    n,
    _vA$1,
    _vB$1,
    _vC$1,
    _intersectionPoint
  );
  if (p) {
    s &&
      (_uvA$1.fromBufferAttribute(s, c),
      _uvB$1.fromBufferAttribute(s, h),
      _uvC$1.fromBufferAttribute(s, u),
      (p.uv = Triangle.getUV(
        _intersectionPoint,
        _vA$1,
        _vB$1,
        _vC$1,
        _uvA$1,
        _uvB$1,
        _uvC$1,
        new Vector2()
      ))),
      l &&
        (_uvA$1.fromBufferAttribute(l, c),
        _uvB$1.fromBufferAttribute(l, h),
        _uvC$1.fromBufferAttribute(l, u),
        (p.uv2 = Triangle.getUV(
          _intersectionPoint,
          _vA$1,
          _vB$1,
          _vC$1,
          _uvA$1,
          _uvB$1,
          _uvC$1,
          new Vector2()
        )));
    const e = { a: c, b: h, c: u, normal: new Vector3(), materialIndex: 0 };
    Triangle.getNormal(_vA$1, _vB$1, _vC$1, e.normal), (p.face = e);
  }
  return p;
}
Mesh.prototype.isMesh = !0;
class BoxGeometry extends BufferGeometry {
  constructor(e = 1, t = 1, r = 1, n = 1, i = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: r,
        widthSegments: n,
        heightSegments: i,
        depthSegments: a,
      });
    const o = this;
    (n = Math.floor(n)), (i = Math.floor(i)), (a = Math.floor(a));
    const s = [],
      l = [],
      c = [],
      h = [];
    let u = 0,
      d = 0;
    function p(e, t, r, n, i, a, p, m, f, g, _) {
      const v = a / f,
        y = p / g,
        x = a / 2,
        b = p / 2,
        M = m / 2,
        w = f + 1,
        S = g + 1;
      let T = 0,
        E = 0;
      const A = new Vector3();
      for (let a = 0; a < S; a++) {
        const o = a * y - b;
        for (let s = 0; s < w; s++) {
          const u = s * v - x;
          (A[e] = u * n),
            (A[t] = o * i),
            (A[r] = M),
            l.push(A.x, A.y, A.z),
            (A[e] = 0),
            (A[t] = 0),
            (A[r] = m > 0 ? 1 : -1),
            c.push(A.x, A.y, A.z),
            h.push(s / f),
            h.push(1 - a / g),
            (T += 1);
        }
      }
      for (let e = 0; e < g; e++)
        for (let t = 0; t < f; t++) {
          const r = u + t + w * e,
            n = u + t + w * (e + 1),
            i = u + (t + 1) + w * (e + 1),
            a = u + (t + 1) + w * e;
          s.push(r, n, a), s.push(n, i, a), (E += 6);
        }
      o.addGroup(d, E, _), (d += E), (u += T);
    }
    p("z", "y", "x", -1, -1, r, t, e, a, i, 0),
      p("z", "y", "x", 1, -1, r, t, -e, a, i, 1),
      p("x", "z", "y", 1, 1, e, r, t, n, a, 2),
      p("x", "z", "y", 1, -1, e, r, -t, n, a, 3),
      p("x", "y", "z", 1, -1, e, t, r, n, i, 4),
      p("x", "y", "z", -1, -1, e, t, -r, n, i, 5),
      this.setIndex(s),
      this.setAttribute("position", new Float32BufferAttribute(l, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(c, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(h, 2));
  }
}
function cloneUniforms(e) {
  const t = {};
  for (const r in e) {
    t[r] = {};
    for (const n in e[r]) {
      const i = e[r][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (t[r][n] = i.clone())
        : Array.isArray(i)
        ? (t[r][n] = i.slice())
        : (t[r][n] = i);
    }
  }
  return t;
}
function mergeUniforms(e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = cloneUniforms(e[r]);
    for (const e in n) t[e] = n[e];
  }
  return t;
}
const UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };
var default_vertex =
    "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
  default_fragment =
    "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
class ShaderMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader = default_vertex),
      (this.fragmentShader = default_fragment),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      void 0 !== e &&
        (void 0 !== e.attributes &&
          console.error(
            "MYGLAPI.ShaderMaterial: attributes should now be defined in MYGLAPI.BufferGeometry instead."
          ),
        this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = cloneUniforms(e.uniforms)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const n = this.uniforms[r].value;
      n && n.isTexture
        ? (t.uniforms[r] = { type: "t", value: n.toJSON(e).uuid })
        : n && n.isColor
        ? (t.uniforms[r] = { type: "c", value: n.getHex() })
        : n && n.isVector2
        ? (t.uniforms[r] = { type: "v2", value: n.toArray() })
        : n && n.isVector3
        ? (t.uniforms[r] = { type: "v3", value: n.toArray() })
        : n && n.isVector4
        ? (t.uniforms[r] = { type: "v4", value: n.toArray() })
        : n && n.isMatrix3
        ? (t.uniforms[r] = { type: "m3", value: n.toArray() })
        : n && n.isMatrix4
        ? (t.uniforms[r] = { type: "m4", value: n.toArray() })
        : (t.uniforms[r] = { value: n });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const r = {};
    for (const e in this.extensions) !0 === this.extensions[e] && (r[e] = !0);
    return Object.keys(r).length > 0 && (t.extensions = r), t;
  }
}
ShaderMaterial.prototype.isShaderMaterial = !0;
class Camera extends Object3D {
  constructor() {
    super(),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Matrix4()),
      (this.projectionMatrix = new Matrix4()),
      (this.projectionMatrixInverse = new Matrix4());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    void 0 === e &&
      (console.warn(
        "MYGLAPI.Camera: .getWorldDirection() target is now required"
      ),
      (e = new Vector3())),
      this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Camera.prototype.isCamera = !0;
class PerspectiveCamera extends Camera {
  constructor(e = 50, t = 1, r = 0.1, n = 2e3) {
    super(),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = r),
      (this.far = n),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = 2 * RAD2DEG * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(0.5 * DEG2RAD * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return (
      2 * RAD2DEG * Math.atan(Math.tan(0.5 * DEG2RAD * this.fov) / this.zoom)
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, r, n, i, a) {
    (this.aspect = e / t),
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = r),
      (this.view.offsetY = n),
      (this.view.width = i),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(0.5 * DEG2RAD * this.fov)) / this.zoom,
      r = 2 * t,
      n = this.aspect * r,
      i = -0.5 * n;
    const a = this.view;
    if (null !== this.view && this.view.enabled) {
      const e = a.fullWidth,
        o = a.fullHeight;
      (i += (a.offsetX * n) / e),
        (t -= (a.offsetY * r) / o),
        (n *= a.width / e),
        (r *= a.height / o);
    }
    const o = this.filmOffset;
    0 !== o && (i += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(i, i + n, t, t - r, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
PerspectiveCamera.prototype.isPerspectiveCamera = !0;
const fov = 90,
  aspect = 1;
class CubeCamera extends Object3D {
  constructor(e, t, r) {
    if ((super(), (this.type = "CubeCamera"), !0 !== r.isWebGLCubeRenderTarget))
      return void console.error(
        "MYGLAPI.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
    this.renderTarget = r;
    const n = new PerspectiveCamera(fov, aspect, e, t);
    (n.layers = this.layers),
      n.up.set(0, -1, 0),
      n.lookAt(new Vector3(1, 0, 0)),
      this.add(n);
    const i = new PerspectiveCamera(fov, aspect, e, t);
    (i.layers = this.layers),
      i.up.set(0, -1, 0),
      i.lookAt(new Vector3(-1, 0, 0)),
      this.add(i);
    const a = new PerspectiveCamera(fov, aspect, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, 1),
      a.lookAt(new Vector3(0, 1, 0)),
      this.add(a);
    const o = new PerspectiveCamera(fov, aspect, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, -1),
      o.lookAt(new Vector3(0, -1, 0)),
      this.add(o);
    const s = new PerspectiveCamera(fov, aspect, e, t);
    (s.layers = this.layers),
      s.up.set(0, -1, 0),
      s.lookAt(new Vector3(0, 0, 1)),
      this.add(s);
    const l = new PerspectiveCamera(fov, aspect, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new Vector3(0, 0, -1)),
      this.add(l);
  }
  update(e, t) {
    null === this.parent && this.updateMatrixWorld();
    const r = this.renderTarget,
      [n, i, a, o, s, l] = this.children,
      c = e.xr.enabled,
      h = e.getRenderTarget();
    e.xr.enabled = !1;
    const u = r.texture.generateMipmaps;
    (r.texture.generateMipmaps = !1),
      e.setRenderTarget(r, 0),
      e.render(t, n),
      e.setRenderTarget(r, 1),
      e.render(t, i),
      e.setRenderTarget(r, 2),
      e.render(t, a),
      e.setRenderTarget(r, 3),
      e.render(t, o),
      e.setRenderTarget(r, 4),
      e.render(t, s),
      (r.texture.generateMipmaps = u),
      e.setRenderTarget(r, 5),
      e.render(t, l),
      e.setRenderTarget(h),
      (e.xr.enabled = c);
  }
}
class CubeTexture extends Texture {
  constructor(e, t, r, n, i, a, o, s, l, c) {
    super(
      (e = void 0 !== e ? e : []),
      (t = void 0 !== t ? t : CubeReflectionMapping),
      r,
      n,
      i,
      a,
      (o = void 0 !== o ? o : RGBFormat),
      s,
      l,
      c
    ),
      (this._needsFlipEnvMap = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
CubeTexture.prototype.isCubeTexture = !0;
class WebGLCubeRenderTarget extends WebGLRenderTarget {
  constructor(e, t, r) {
    Number.isInteger(t) &&
      (console.warn(
        "MYGLAPI.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"
      ),
      (t = r)),
      super(e, e, t),
      (t = t || {}),
      (this.texture = new CubeTexture(
        void 0,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.encoding
      )),
      (this.texture.generateMipmaps =
        void 0 !== t.generateMipmaps && t.generateMipmaps),
      (this.texture.minFilter =
        void 0 !== t.minFilter ? t.minFilter : LinearFilter),
      (this.texture._needsFlipEnvMap = !1);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.format = RGBAFormat),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const r = {
        uniforms: { tEquirect: { value: null } },
        vertexShader:
          "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
        fragmentShader:
          "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
      },
      n = new BoxGeometry(5, 5, 5),
      i = new ShaderMaterial({
        name: "CubemapFromEquirect",
        uniforms: cloneUniforms(r.uniforms),
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader,
        side: BackSide,
        blending: NoBlending,
      });
    i.uniforms.tEquirect.value = t;
    const a = new Mesh(n, i),
      o = t.minFilter;
    return (
      t.minFilter === LinearMipmapLinearFilter && (t.minFilter = LinearFilter),
      new CubeCamera(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, r, n) {
    const i = e.getRenderTarget();
    for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, r, n);
    e.setRenderTarget(i);
  }
}
WebGLCubeRenderTarget.prototype.isWebGLCubeRenderTarget = !0;
class DataTexture extends Texture {
  constructor(e, t, r, n, i, a, o, s, l, c, h, u) {
    super(null, a, o, s, l, c, n, i, h, u),
      (this.image = { data: e || null, width: t || 1, height: r || 1 }),
      (this.magFilter = void 0 !== l ? l : NearestFilter),
      (this.minFilter = void 0 !== c ? c : NearestFilter),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0);
  }
}
DataTexture.prototype.isDataTexture = !0;
const _sphere$2 = new Sphere(),
  _vector$7 = new Vector3();
class Frustum {
  constructor(
    e = new Plane(),
    t = new Plane(),
    r = new Plane(),
    n = new Plane(),
    i = new Plane(),
    a = new Plane()
  ) {
    this.planes = [e, t, r, n, i, a];
  }
  set(e, t, r, n, i, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(r),
      o[3].copy(n),
      o[4].copy(i),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let r = 0; r < 6; r++) t[r].copy(e.planes[r]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      r = e.elements,
      n = r[0],
      i = r[1],
      a = r[2],
      o = r[3],
      s = r[4],
      l = r[5],
      c = r[6],
      h = r[7],
      u = r[8],
      d = r[9],
      p = r[10],
      m = r[11],
      f = r[12],
      g = r[13],
      _ = r[14],
      v = r[15];
    return (
      t[0].setComponents(o - n, h - s, m - u, v - f).normalize(),
      t[1].setComponents(o + n, h + s, m + u, v + f).normalize(),
      t[2].setComponents(o + i, h + l, m + d, v + g).normalize(),
      t[3].setComponents(o - i, h - l, m - d, v - g).normalize(),
      t[4].setComponents(o - a, h - c, m - p, v - _).normalize(),
      t[5].setComponents(o + a, h + c, m + p, v + _).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      null === t.boundingSphere && t.computeBoundingSphere(),
      _sphere$2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(_sphere$2)
    );
  }
  intersectsSprite(e) {
    return (
      _sphere$2.center.set(0, 0, 0),
      (_sphere$2.radius = 0.7071067811865476),
      _sphere$2.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(_sphere$2)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      r = e.center,
      n = -e.radius;
    for (let e = 0; e < 6; e++) {
      if (t[e].distanceToPoint(r) < n) return !1;
    }
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let r = 0; r < 6; r++) {
      const n = t[r];
      if (
        ((_vector$7.x = n.normal.x > 0 ? e.max.x : e.min.x),
        (_vector$7.y = n.normal.y > 0 ? e.max.y : e.min.y),
        (_vector$7.z = n.normal.z > 0 ? e.max.z : e.min.z),
        n.distanceToPoint(_vector$7) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function WebGLAnimation() {
  let e = null,
    t = !1,
    r = null,
    n = null;
  function i(t, a) {
    r(t, a), (n = e.requestAnimationFrame(i));
  }
  return {
    start: function () {
      !0 !== t && null !== r && ((n = e.requestAnimationFrame(i)), (t = !0));
    },
    stop: function () {
      e.cancelAnimationFrame(n), (t = !1);
    },
    setAnimationLoop: function (e) {
      r = e;
    },
    setContext: function (t) {
      e = t;
    },
  };
}
function WebGLAttributes(e, t) {
  const r = t.isWebGL2,
    n = new WeakMap();
  return {
    get: function (e) {
      return e.isInterleavedBufferAttribute && (e = e.data), n.get(e);
    },
    remove: function (t) {
      t.isInterleavedBufferAttribute && (t = t.data);
      const r = n.get(t);
      r && (e.deleteBuffer(r.buffer), n.delete(t));
    },
    update: function (t, i) {
      if (t.isGLBufferAttribute) {
        const e = n.get(t);
        return void (
          (!e || e.version < t.version) &&
          n.set(t, {
            buffer: t.buffer,
            type: t.type,
            bytesPerElement: t.elementSize,
            version: t.version,
          })
        );
      }
      t.isInterleavedBufferAttribute && (t = t.data);
      const a = n.get(t);
      void 0 === a
        ? n.set(
            t,
            (function (t, n) {
              const i = t.array,
                a = t.usage,
                o = e.createBuffer();
              e.bindBuffer(n, o), e.bufferData(n, i, a), t.onUploadCallback();
              let s = 5126;
              return (
                i instanceof Float32Array
                  ? (s = 5126)
                  : i instanceof Float64Array
                  ? console.warn(
                      "MYGLAPI.WebGLAttributes: Unsupported data buffer format: Float64Array."
                    )
                  : i instanceof Uint16Array
                  ? t.isFloat16BufferAttribute
                    ? r
                      ? (s = 5131)
                      : console.warn(
                          "MYGLAPI.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                        )
                    : (s = 5123)
                  : i instanceof Int16Array
                  ? (s = 5122)
                  : i instanceof Uint32Array
                  ? (s = 5125)
                  : i instanceof Int32Array
                  ? (s = 5124)
                  : i instanceof Int8Array
                  ? (s = 5120)
                  : i instanceof Uint8Array && (s = 5121),
                {
                  buffer: o,
                  type: s,
                  bytesPerElement: i.BYTES_PER_ELEMENT,
                  version: t.version,
                }
              );
            })(t, i)
          )
        : a.version < t.version &&
          ((function (t, n, i) {
            const a = n.array,
              o = n.updateRange;
            e.bindBuffer(i, t),
              -1 === o.count
                ? e.bufferSubData(i, 0, a)
                : (r
                    ? e.bufferSubData(
                        i,
                        o.offset * a.BYTES_PER_ELEMENT,
                        a,
                        o.offset,
                        o.count
                      )
                    : e.bufferSubData(
                        i,
                        o.offset * a.BYTES_PER_ELEMENT,
                        a.subarray(o.offset, o.offset + o.count)
                      ),
                  (o.count = -1));
          })(a.buffer, t, i),
          (a.version = t.version));
    },
  };
}
class PlaneGeometry extends BufferGeometry {
  constructor(e = 1, t = 1, r = 1, n = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: r,
        heightSegments: n,
      });
    const i = e / 2,
      a = t / 2,
      o = Math.floor(r),
      s = Math.floor(n),
      l = o + 1,
      c = s + 1,
      h = e / o,
      u = t / s,
      d = [],
      p = [],
      m = [],
      f = [];
    for (let e = 0; e < c; e++) {
      const t = e * u - a;
      for (let r = 0; r < l; r++) {
        const n = r * h - i;
        p.push(n, -t, 0), m.push(0, 0, 1), f.push(r / o), f.push(1 - e / s);
      }
    }
    for (let e = 0; e < s; e++)
      for (let t = 0; t < o; t++) {
        const r = t + l * e,
          n = t + l * (e + 1),
          i = t + 1 + l * (e + 1),
          a = t + 1 + l * e;
        d.push(r, n, a), d.push(n, i, a);
      }
    this.setIndex(d),
      this.setAttribute("position", new Float32BufferAttribute(p, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(m, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(f, 2));
  }
}
var alphamap_fragment =
    "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
  alphamap_pars_fragment =
    "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
  alphatest_fragment =
    "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
  aomap_fragment =
    "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
  aomap_pars_fragment =
    "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
  begin_vertex = "vec3 transformed = vec3( position );",
  beginnormal_vertex =
    "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
  bsdfs =
    "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
  bumpmap_pars_fragment =
    "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
  clipping_planes_fragment =
    "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
  clipping_planes_pars_fragment =
    "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
  clipping_planes_pars_vertex =
    "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
  clipping_planes_vertex =
    "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
  color_fragment =
    "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
  color_pars_fragment =
    "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
  color_pars_vertex =
    "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
  color_vertex =
    "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
  common =
    "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
  cube_uv_reflection_fragment =
    "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
  defaultnormal_vertex =
    "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
  displacementmap_pars_vertex =
    "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
  displacementmap_vertex =
    "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
  emissivemap_fragment =
    "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
  emissivemap_pars_fragment =
    "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
  encodings_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  encodings_pars_fragment =
    "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
  envmap_fragment =
    "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
  envmap_common_pars_fragment =
    "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
  envmap_pars_fragment =
    "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
  envmap_pars_vertex =
    "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
  envmap_vertex =
    "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
  fog_vertex = "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
  fog_pars_vertex = "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
  fog_fragment =
    "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
  fog_pars_fragment =
    "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
  gradientmap_pars_fragment =
    "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
  lightmap_fragment =
    "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
  lightmap_pars_fragment =
    "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
  lights_lambert_vertex =
    "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
  lights_pars_begin =
    "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
  envmap_physical_pars_fragment =
    "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
  lights_toon_fragment =
    "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
  lights_toon_pars_fragment =
    "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
  lights_phong_fragment =
    "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
  lights_phong_pars_fragment =
    "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
  lights_physical_fragment =
    "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
  lights_physical_pars_fragment =
    "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
  lights_fragment_begin =
    "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
  lights_fragment_maps =
    "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
  lights_fragment_end =
    "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
  logdepthbuf_fragment =
    "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
  logdepthbuf_pars_fragment =
    "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
  logdepthbuf_pars_vertex =
    "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
  logdepthbuf_vertex =
    "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
  map_fragment =
    "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
  map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
  map_particle_fragment =
    "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
  map_particle_pars_fragment =
    "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
  metalnessmap_fragment =
    "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
  metalnessmap_pars_fragment =
    "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
  morphnormal_vertex =
    "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
  morphtarget_pars_vertex =
    "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
  morphtarget_vertex =
    "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
  normal_fragment_begin =
    "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
  normal_fragment_maps =
    "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
  normalmap_pars_fragment =
    "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
  clearcoat_normal_fragment_begin =
    "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
  clearcoat_normal_fragment_maps =
    "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
  clearcoat_pars_fragment =
    "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
  packing =
    "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
  premultiplied_alpha_fragment =
    "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
  project_vertex =
    "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
  dithering_fragment =
    "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
  dithering_pars_fragment =
    "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
  roughnessmap_fragment =
    "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
  roughnessmap_pars_fragment =
    "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
  shadowmap_pars_fragment =
    "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
  shadowmap_pars_vertex =
    "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
  shadowmap_vertex =
    "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
  shadowmask_pars_fragment =
    "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
  skinbase_vertex =
    "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
  skinning_pars_vertex =
    "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
  skinning_vertex =
    "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
  skinnormal_vertex =
    "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
  specularmap_fragment =
    "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
  specularmap_pars_fragment =
    "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
  tonemapping_fragment =
    "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
  tonemapping_pars_fragment =
    "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
  transmissionmap_fragment =
    "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
  transmissionmap_pars_fragment =
    "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
  uv_pars_fragment =
    "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
  uv_pars_vertex =
    "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
  uv_vertex =
    "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
  uv2_pars_fragment =
    "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
  uv2_pars_vertex =
    "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
  uv2_vertex =
    "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
  worldpos_vertex =
    "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
  background_frag =
    "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
  background_vert =
    "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
  cube_frag =
    "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
  cube_vert =
    "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
  depth_frag =
    "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
  depth_vert =
    "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
  distanceRGBA_frag =
    "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
  distanceRGBA_vert =
    "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
  equirect_frag =
    "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
  equirect_vert =
    "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
  linedashed_frag =
    "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
  linedashed_vert =
    "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
  meshbasic_frag =
    "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshbasic_vert =
    "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
  meshlambert_frag =
    "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshlambert_vert =
    "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshmatcap_frag =
    "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshmatcap_vert =
    "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
  meshtoon_frag =
    "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshtoon_vert =
    "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshphong_frag =
    "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshphong_vert =
    "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshphysical_frag =
    "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshphysical_vert =
    "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  normal_frag =
    "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
  normal_vert =
    "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
  points_frag =
    "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
  points_vert =
    "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
  shadow_frag =
    "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  shadow_vert =
    "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  sprite_frag =
    "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  sprite_vert =
    "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}";
const ShaderChunk = {
    alphamap_fragment: alphamap_fragment,
    alphamap_pars_fragment: alphamap_pars_fragment,
    alphatest_fragment: alphatest_fragment,
    aomap_fragment: aomap_fragment,
    aomap_pars_fragment: aomap_pars_fragment,
    begin_vertex: begin_vertex,
    beginnormal_vertex: beginnormal_vertex,
    bsdfs: bsdfs,
    bumpmap_pars_fragment: bumpmap_pars_fragment,
    clipping_planes_fragment: clipping_planes_fragment,
    clipping_planes_pars_fragment: clipping_planes_pars_fragment,
    clipping_planes_pars_vertex: clipping_planes_pars_vertex,
    clipping_planes_vertex: clipping_planes_vertex,
    color_fragment: color_fragment,
    color_pars_fragment: color_pars_fragment,
    color_pars_vertex: color_pars_vertex,
    color_vertex: color_vertex,
    common: common,
    cube_uv_reflection_fragment: cube_uv_reflection_fragment,
    defaultnormal_vertex: defaultnormal_vertex,
    displacementmap_pars_vertex: displacementmap_pars_vertex,
    displacementmap_vertex: displacementmap_vertex,
    emissivemap_fragment: emissivemap_fragment,
    emissivemap_pars_fragment: emissivemap_pars_fragment,
    encodings_fragment: encodings_fragment,
    encodings_pars_fragment: encodings_pars_fragment,
    envmap_fragment: envmap_fragment,
    envmap_common_pars_fragment: envmap_common_pars_fragment,
    envmap_pars_fragment: envmap_pars_fragment,
    envmap_pars_vertex: envmap_pars_vertex,
    envmap_physical_pars_fragment: envmap_physical_pars_fragment,
    envmap_vertex: envmap_vertex,
    fog_vertex: fog_vertex,
    fog_pars_vertex: fog_pars_vertex,
    fog_fragment: fog_fragment,
    fog_pars_fragment: fog_pars_fragment,
    gradientmap_pars_fragment: gradientmap_pars_fragment,
    lightmap_fragment: lightmap_fragment,
    lightmap_pars_fragment: lightmap_pars_fragment,
    lights_lambert_vertex: lights_lambert_vertex,
    lights_pars_begin: lights_pars_begin,
    lights_toon_fragment: lights_toon_fragment,
    lights_toon_pars_fragment: lights_toon_pars_fragment,
    lights_phong_fragment: lights_phong_fragment,
    lights_phong_pars_fragment: lights_phong_pars_fragment,
    lights_physical_fragment: lights_physical_fragment,
    lights_physical_pars_fragment: lights_physical_pars_fragment,
    lights_fragment_begin: lights_fragment_begin,
    lights_fragment_maps: lights_fragment_maps,
    lights_fragment_end: lights_fragment_end,
    logdepthbuf_fragment: logdepthbuf_fragment,
    logdepthbuf_pars_fragment: logdepthbuf_pars_fragment,
    logdepthbuf_pars_vertex: logdepthbuf_pars_vertex,
    logdepthbuf_vertex: logdepthbuf_vertex,
    map_fragment: map_fragment,
    map_pars_fragment: map_pars_fragment,
    map_particle_fragment: map_particle_fragment,
    map_particle_pars_fragment: map_particle_pars_fragment,
    metalnessmap_fragment: metalnessmap_fragment,
    metalnessmap_pars_fragment: metalnessmap_pars_fragment,
    morphnormal_vertex: morphnormal_vertex,
    morphtarget_pars_vertex: morphtarget_pars_vertex,
    morphtarget_vertex: morphtarget_vertex,
    normal_fragment_begin: normal_fragment_begin,
    normal_fragment_maps: normal_fragment_maps,
    normalmap_pars_fragment: normalmap_pars_fragment,
    clearcoat_normal_fragment_begin: clearcoat_normal_fragment_begin,
    clearcoat_normal_fragment_maps: clearcoat_normal_fragment_maps,
    clearcoat_pars_fragment: clearcoat_pars_fragment,
    packing: packing,
    premultiplied_alpha_fragment: premultiplied_alpha_fragment,
    project_vertex: project_vertex,
    dithering_fragment: dithering_fragment,
    dithering_pars_fragment: dithering_pars_fragment,
    roughnessmap_fragment: roughnessmap_fragment,
    roughnessmap_pars_fragment: roughnessmap_pars_fragment,
    shadowmap_pars_fragment: shadowmap_pars_fragment,
    shadowmap_pars_vertex: shadowmap_pars_vertex,
    shadowmap_vertex: shadowmap_vertex,
    shadowmask_pars_fragment: shadowmask_pars_fragment,
    skinbase_vertex: skinbase_vertex,
    skinning_pars_vertex: skinning_pars_vertex,
    skinning_vertex: skinning_vertex,
    skinnormal_vertex: skinnormal_vertex,
    specularmap_fragment: specularmap_fragment,
    specularmap_pars_fragment: specularmap_pars_fragment,
    tonemapping_fragment: tonemapping_fragment,
    tonemapping_pars_fragment: tonemapping_pars_fragment,
    transmissionmap_fragment: transmissionmap_fragment,
    transmissionmap_pars_fragment: transmissionmap_pars_fragment,
    uv_pars_fragment: uv_pars_fragment,
    uv_pars_vertex: uv_pars_vertex,
    uv_vertex: uv_vertex,
    uv2_pars_fragment: uv2_pars_fragment,
    uv2_pars_vertex: uv2_pars_vertex,
    uv2_vertex: uv2_vertex,
    worldpos_vertex: worldpos_vertex,
    background_frag: background_frag,
    background_vert: background_vert,
    cube_frag: cube_frag,
    cube_vert: cube_vert,
    depth_frag: depth_frag,
    depth_vert: depth_vert,
    distanceRGBA_frag: distanceRGBA_frag,
    distanceRGBA_vert: distanceRGBA_vert,
    equirect_frag: equirect_frag,
    equirect_vert: equirect_vert,
    linedashed_frag: linedashed_frag,
    linedashed_vert: linedashed_vert,
    meshbasic_frag: meshbasic_frag,
    meshbasic_vert: meshbasic_vert,
    meshlambert_frag: meshlambert_frag,
    meshlambert_vert: meshlambert_vert,
    meshmatcap_frag: meshmatcap_frag,
    meshmatcap_vert: meshmatcap_vert,
    meshtoon_frag: meshtoon_frag,
    meshtoon_vert: meshtoon_vert,
    meshphong_frag: meshphong_frag,
    meshphong_vert: meshphong_vert,
    meshphysical_frag: meshphysical_frag,
    meshphysical_vert: meshphysical_vert,
    normal_frag: normal_frag,
    normal_vert: normal_vert,
    points_frag: points_frag,
    points_vert: points_vert,
    shadow_frag: shadow_frag,
    shadow_vert: shadow_vert,
    sprite_frag: sprite_frag,
    sprite_vert: sprite_vert,
  },
  UniformsLib = {
    common: {
      diffuse: { value: new Color(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new Matrix3() },
      uv2Transform: { value: new Matrix3() },
      alphaMap: { value: null },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      refractionRatio: { value: 0.98 },
      maxMipLevel: { value: 0 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new Vector2(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Color(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Color(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      uvTransform: { value: new Matrix3() },
    },
    sprite: {
      diffuse: { value: new Color(16777215) },
      opacity: { value: 1 },
      center: { value: new Vector2(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      uvTransform: { value: new Matrix3() },
    },
  },
  ShaderLib = {
    basic: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.specularmap,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.fog,
      ]),
      vertexShader: ShaderChunk.meshbasic_vert,
      fragmentShader: ShaderChunk.meshbasic_frag,
    },
    lambert: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.specularmap,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.fog,
        UniformsLib.lights,
        { emissive: { value: new Color(0) } },
      ]),
      vertexShader: ShaderChunk.meshlambert_vert,
      fragmentShader: ShaderChunk.meshlambert_frag,
    },
    phong: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.specularmap,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.fog,
        UniformsLib.lights,
        {
          emissive: { value: new Color(0) },
          specular: { value: new Color(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: ShaderChunk.meshphong_vert,
      fragmentShader: ShaderChunk.meshphong_frag,
    },
    standard: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.roughnessmap,
        UniformsLib.metalnessmap,
        UniformsLib.fog,
        UniformsLib.lights,
        {
          emissive: { value: new Color(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: ShaderChunk.meshphysical_vert,
      fragmentShader: ShaderChunk.meshphysical_frag,
    },
    toon: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.gradientmap,
        UniformsLib.fog,
        UniformsLib.lights,
        { emissive: { value: new Color(0) } },
      ]),
      vertexShader: ShaderChunk.meshtoon_vert,
      fragmentShader: ShaderChunk.meshtoon_frag,
    },
    matcap: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: ShaderChunk.meshmatcap_vert,
      fragmentShader: ShaderChunk.meshmatcap_frag,
    },
    points: {
      uniforms: mergeUniforms([UniformsLib.points, UniformsLib.fog]),
      vertexShader: ShaderChunk.points_vert,
      fragmentShader: ShaderChunk.points_frag,
    },
    dashed: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: ShaderChunk.linedashed_vert,
      fragmentShader: ShaderChunk.linedashed_frag,
    },
    depth: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.displacementmap,
      ]),
      vertexShader: ShaderChunk.depth_vert,
      fragmentShader: ShaderChunk.depth_frag,
    },
    normal: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: ShaderChunk.normal_vert,
      fragmentShader: ShaderChunk.normal_frag,
    },
    sprite: {
      uniforms: mergeUniforms([UniformsLib.sprite, UniformsLib.fog]),
      vertexShader: ShaderChunk.sprite_vert,
      fragmentShader: ShaderChunk.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new Matrix3() }, t2D: { value: null } },
      vertexShader: ShaderChunk.background_vert,
      fragmentShader: ShaderChunk.background_frag,
    },
    cube: {
      uniforms: mergeUniforms([UniformsLib.envmap, { opacity: { value: 1 } }]),
      vertexShader: ShaderChunk.cube_vert,
      fragmentShader: ShaderChunk.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: ShaderChunk.equirect_vert,
      fragmentShader: ShaderChunk.equirect_frag,
    },
    distanceRGBA: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.displacementmap,
        {
          referencePosition: { value: new Vector3() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: ShaderChunk.distanceRGBA_vert,
      fragmentShader: ShaderChunk.distanceRGBA_frag,
    },
    shadow: {
      uniforms: mergeUniforms([
        UniformsLib.lights,
        UniformsLib.fog,
        { color: { value: new Color(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: ShaderChunk.shadow_vert,
      fragmentShader: ShaderChunk.shadow_frag,
    },
  };
function WebGLBackground(e, t, r, n, i) {
  const a = new Color(0);
  let o,
    s,
    l = 0,
    c = null,
    h = 0,
    u = null;
  function d(e, t) {
    r.buffers.color.setClear(e.r, e.g, e.b, t, i);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (e, t = 1) {
      a.set(e), d(a, (l = t));
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (e) {
      d(a, (l = e));
    },
    render: function (r, i) {
      let p = !1,
        m = !0 === i.isScene ? i.background : null;
      m && m.isTexture && (m = t.get(m));
      const f = e.xr,
        g = f.getSession && f.getSession();
      g && "additive" === g.environmentBlendMode && (m = null),
        null === m ? d(a, l) : m && m.isColor && (d(m, 1), (p = !0)),
        (e.autoClear || p) &&
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        m && (m.isCubeTexture || m.mapping === CubeUVReflectionMapping)
          ? (void 0 === s &&
              ((s = new Mesh(
                new BoxGeometry(1, 1, 1),
                new ShaderMaterial({
                  name: "BackgroundCubeMaterial",
                  uniforms: cloneUniforms(ShaderLib.cube.uniforms),
                  vertexShader: ShaderLib.cube.vertexShader,
                  fragmentShader: ShaderLib.cube.fragmentShader,
                  side: BackSide,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )).geometry.deleteAttribute("normal"),
              s.geometry.deleteAttribute("uv"),
              (s.onBeforeRender = function (e, t, r) {
                this.matrixWorld.copyPosition(r.matrixWorld);
              }),
              Object.defineProperty(s.material, "envMap", {
                get: function () {
                  return this.uniforms.envMap.value;
                },
              }),
              n.update(s)),
            (s.material.uniforms.envMap.value = m),
            (s.material.uniforms.flipEnvMap.value =
              m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1),
            (c === m && h === m.version && u === e.toneMapping) ||
              ((s.material.needsUpdate = !0),
              (c = m),
              (h = m.version),
              (u = e.toneMapping)),
            r.unshift(s, s.geometry, s.material, 0, 0, null))
          : m &&
            m.isTexture &&
            (void 0 === o &&
              ((o = new Mesh(
                new PlaneGeometry(2, 2),
                new ShaderMaterial({
                  name: "BackgroundMaterial",
                  uniforms: cloneUniforms(ShaderLib.background.uniforms),
                  vertexShader: ShaderLib.background.vertexShader,
                  fragmentShader: ShaderLib.background.fragmentShader,
                  side: FrontSide,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )).geometry.deleteAttribute("normal"),
              Object.defineProperty(o.material, "map", {
                get: function () {
                  return this.uniforms.t2D.value;
                },
              }),
              n.update(o)),
            (o.material.uniforms.t2D.value = m),
            !0 === m.matrixAutoUpdate && m.updateMatrix(),
            o.material.uniforms.uvTransform.value.copy(m.matrix),
            (c === m && h === m.version && u === e.toneMapping) ||
              ((o.material.needsUpdate = !0),
              (c = m),
              (h = m.version),
              (u = e.toneMapping)),
            r.unshift(o, o.geometry, o.material, 0, 0, null));
    },
  };
}
function WebGLBindingStates(e, t, r, n) {
  const i = e.getParameter(34921),
    a = n.isWebGL2 ? null : t.get("OES_vertex_array_object"),
    o = n.isWebGL2 || null !== a,
    s = {},
    l = d(null);
  let c = l;
  function h(t) {
    return n.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t);
  }
  function u(t) {
    return n.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t);
  }
  function d(e) {
    const t = [],
      r = [],
      n = [];
    for (let e = 0; e < i; e++) (t[e] = 0), (r[e] = 0), (n[e] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: r,
      attributeDivisors: n,
      object: e,
      attributes: {},
      index: null,
    };
  }
  function p() {
    const e = c.newAttributes;
    for (let t = 0, r = e.length; t < r; t++) e[t] = 0;
  }
  function m(e) {
    f(e, 0);
  }
  function f(r, i) {
    const a = c.newAttributes,
      o = c.enabledAttributes,
      s = c.attributeDivisors;
    if (
      ((a[r] = 1),
      0 === o[r] && (e.enableVertexAttribArray(r), (o[r] = 1)),
      s[r] !== i)
    ) {
      (n.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[
        n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
      ](r, i),
        (s[r] = i);
    }
  }
  function g() {
    const t = c.newAttributes,
      r = c.enabledAttributes;
    for (let n = 0, i = r.length; n < i; n++)
      r[n] !== t[n] && (e.disableVertexAttribArray(n), (r[n] = 0));
  }
  function _(t, r, i, a, o, s) {
    !0 !== n.isWebGL2 || (5124 !== i && 5125 !== i)
      ? e.vertexAttribPointer(t, r, i, a, o, s)
      : e.vertexAttribIPointer(t, r, i, o, s);
  }
  function v() {
    y(), c !== l && h((c = l).object);
  }
  function y() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: function (i, l, u, v, y) {
      let x = !1;
      if (o) {
        const t = (function (t, r, i) {
          const o = !0 === i.wireframe;
          let l = s[t.id];
          void 0 === l && ((l = {}), (s[t.id] = l));
          let c = l[r.id];
          void 0 === c && ((c = {}), (l[r.id] = c));
          let h = c[o];
          return (
            void 0 === h &&
              ((h = d(
                n.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()
              )),
              (c[o] = h)),
            h
          );
        })(v, u, l);
        c !== t && h((c = t).object),
          (x = (function (e, t) {
            const r = c.attributes,
              n = e.attributes;
            let i = 0;
            for (const e in n) {
              const t = r[e],
                a = n[e];
              if (void 0 === t) return !0;
              if (t.attribute !== a) return !0;
              if (t.data !== a.data) return !0;
              i++;
            }
            return c.attributesNum !== i || c.index !== t;
          })(v, y)) &&
            (function (e, t) {
              const r = {},
                n = e.attributes;
              let i = 0;
              for (const e in n) {
                const t = n[e],
                  a = {};
                (a.attribute = t), t.data && (a.data = t.data), (r[e] = a), i++;
              }
              (c.attributes = r), (c.attributesNum = i), (c.index = t);
            })(v, y);
      } else {
        const e = !0 === l.wireframe;
        (c.geometry === v.id && c.program === u.id && c.wireframe === e) ||
          ((c.geometry = v.id),
          (c.program = u.id),
          (c.wireframe = e),
          (x = !0));
      }
      !0 === i.isInstancedMesh && (x = !0),
        null !== y && r.update(y, 34963),
        x &&
          ((function (i, a, o, s) {
            if (
              !1 === n.isWebGL2 &&
              (i.isInstancedMesh || s.isInstancedBufferGeometry) &&
              null === t.get("ANGLE_instanced_arrays")
            )
              return;
            p();
            const l = s.attributes,
              c = o.getAttributes(),
              h = a.defaultAttributeValues;
            for (const t in c) {
              const n = c[t];
              if (n >= 0) {
                const a = l[t];
                if (void 0 !== a) {
                  const t = a.normalized,
                    i = a.itemSize,
                    o = r.get(a);
                  if (void 0 === o) continue;
                  const l = o.buffer,
                    c = o.type,
                    h = o.bytesPerElement;
                  if (a.isInterleavedBufferAttribute) {
                    const r = a.data,
                      o = r.stride,
                      u = a.offset;
                    r && r.isInstancedInterleavedBuffer
                      ? (f(n, r.meshPerAttribute),
                        void 0 === s._maxInstanceCount &&
                          (s._maxInstanceCount = r.meshPerAttribute * r.count))
                      : m(n),
                      e.bindBuffer(34962, l),
                      _(n, i, c, t, o * h, u * h);
                  } else
                    a.isInstancedBufferAttribute
                      ? (f(n, a.meshPerAttribute),
                        void 0 === s._maxInstanceCount &&
                          (s._maxInstanceCount = a.meshPerAttribute * a.count))
                      : m(n),
                      e.bindBuffer(34962, l),
                      _(n, i, c, t, 0, 0);
                } else if ("instanceMatrix" === t) {
                  const t = r.get(i.instanceMatrix);
                  if (void 0 === t) continue;
                  const a = t.buffer,
                    o = t.type;
                  f(n + 0, 1),
                    f(n + 1, 1),
                    f(n + 2, 1),
                    f(n + 3, 1),
                    e.bindBuffer(34962, a),
                    e.vertexAttribPointer(n + 0, 4, o, !1, 64, 0),
                    e.vertexAttribPointer(n + 1, 4, o, !1, 64, 16),
                    e.vertexAttribPointer(n + 2, 4, o, !1, 64, 32),
                    e.vertexAttribPointer(n + 3, 4, o, !1, 64, 48);
                } else if ("instanceColor" === t) {
                  const t = r.get(i.instanceColor);
                  if (void 0 === t) continue;
                  const a = t.buffer,
                    o = t.type;
                  f(n, 1),
                    e.bindBuffer(34962, a),
                    e.vertexAttribPointer(n, 3, o, !1, 12, 0);
                } else if (void 0 !== h) {
                  const r = h[t];
                  if (void 0 !== r)
                    switch (r.length) {
                      case 2:
                        e.vertexAttrib2fv(n, r);
                        break;
                      case 3:
                        e.vertexAttrib3fv(n, r);
                        break;
                      case 4:
                        e.vertexAttrib4fv(n, r);
                        break;
                      default:
                        e.vertexAttrib1fv(n, r);
                    }
                }
              }
            }
            g();
          })(i, l, u, v),
          null !== y && e.bindBuffer(34963, r.get(y).buffer));
    },
    reset: v,
    resetDefaultState: y,
    dispose: function () {
      v();
      for (const e in s) {
        const t = s[e];
        for (const e in t) {
          const r = t[e];
          for (const e in r) u(r[e].object), delete r[e];
          delete t[e];
        }
        delete s[e];
      }
    },
    releaseStatesOfGeometry: function (e) {
      if (void 0 === s[e.id]) return;
      const t = s[e.id];
      for (const e in t) {
        const r = t[e];
        for (const e in r) u(r[e].object), delete r[e];
        delete t[e];
      }
      delete s[e.id];
    },
    releaseStatesOfProgram: function (e) {
      for (const t in s) {
        const r = s[t];
        if (void 0 === r[e.id]) continue;
        const n = r[e.id];
        for (const e in n) u(n[e].object), delete n[e];
        delete r[e.id];
      }
    },
    initAttributes: p,
    enableAttribute: m,
    disableUnusedAttributes: g,
  };
}
function WebGLBufferRenderer(e, t, r, n) {
  const i = n.isWebGL2;
  let a;
  (this.setMode = function (e) {
    a = e;
  }),
    (this.render = function (t, n) {
      e.drawArrays(a, t, n), r.update(n, a, 1);
    }),
    (this.renderInstances = function (n, o, s) {
      if (0 === s) return;
      let l, c;
      if (i) (l = e), (c = "drawArraysInstanced");
      else if (
        ((c = "drawArraysInstancedANGLE"),
        null === (l = t.get("ANGLE_instanced_arrays")))
      )
        return void console.error(
          "MYGLAPI.WebGLBufferRenderer: using MYGLAPI.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
      l[c](a, n, o, s), r.update(o, a, s);
    });
}
function WebGLCapabilities(e, t, r) {
  let n;
  function i(t) {
    if ("highp" === t) {
      if (
        e.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        e.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      t = "mediump";
    }
    return "mediump" === t &&
      e.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      e.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const a =
    ("undefined" != typeof WebGL2RenderingContext &&
      e instanceof WebGL2RenderingContext) ||
    ("undefined" != typeof WebGL2ComputeRenderingContext &&
      e instanceof WebGL2ComputeRenderingContext);
  let o = void 0 !== r.precision ? r.precision : "highp";
  const s = i(o);
  s !== o &&
    (console.warn(
      "MYGLAPI.WebGLRenderer:",
      o,
      "not supported, using",
      s,
      "instead."
    ),
    (o = s));
  const l = a || t.has("WEBGL_draw_buffers"),
    c = !0 === r.logarithmicDepthBuffer,
    h = e.getParameter(34930),
    u = e.getParameter(35660),
    d = e.getParameter(3379),
    p = e.getParameter(34076),
    m = e.getParameter(34921),
    f = e.getParameter(36347),
    g = e.getParameter(36348),
    _ = e.getParameter(36349),
    v = u > 0,
    y = a || t.has("OES_texture_float");
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: function () {
      if (void 0 !== n) return n;
      if (!0 === t.has("EXT_texture_filter_anisotropic")) {
        const r = t.get("EXT_texture_filter_anisotropic");
        n = e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else n = 0;
      return n;
    },
    getMaxPrecision: i,
    precision: o,
    logarithmicDepthBuffer: c,
    maxTextures: h,
    maxVertexTextures: u,
    maxTextureSize: d,
    maxCubemapSize: p,
    maxAttributes: m,
    maxVertexUniforms: f,
    maxVaryings: g,
    maxFragmentUniforms: _,
    vertexTextures: v,
    floatFragmentTextures: y,
    floatVertexTextures: v && y,
    maxSamples: a ? e.getParameter(36183) : 0,
  };
}
function WebGLClipping(e) {
  const t = this;
  let r = null,
    n = 0,
    i = !1,
    a = !1;
  const o = new Plane(),
    s = new Matrix3(),
    l = { value: null, needsUpdate: !1 };
  function c() {
    l.value !== r && ((l.value = r), (l.needsUpdate = n > 0)),
      (t.numPlanes = n),
      (t.numIntersection = 0);
  }
  function h(e, r, n, i) {
    const a = null !== e ? e.length : 0;
    let c = null;
    if (0 !== a) {
      if (((c = l.value), !0 !== i || null === c)) {
        const t = n + 4 * a,
          i = r.matrixWorldInverse;
        s.getNormalMatrix(i),
          (null === c || c.length < t) && (c = new Float32Array(t));
        for (let t = 0, r = n; t !== a; ++t, r += 4)
          o.copy(e[t]).applyMatrix4(i, s),
            o.normal.toArray(c, r),
            (c[r + 3] = o.constant);
      }
      (l.value = c), (l.needsUpdate = !0);
    }
    return (t.numPlanes = a), (t.numIntersection = 0), c;
  }
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (e, t, a) {
      const o = 0 !== e.length || t || 0 !== n || i;
      return (i = t), (r = h(e, a, 0)), (n = e.length), o;
    }),
    (this.beginShadows = function () {
      (a = !0), h(null);
    }),
    (this.endShadows = function () {
      (a = !1), c();
    }),
    (this.setState = function (t, o, s) {
      const u = t.clippingPlanes,
        d = t.clipIntersection,
        p = t.clipShadows,
        m = e.get(t);
      if (!i || null === u || 0 === u.length || (a && !p)) a ? h(null) : c();
      else {
        const e = a ? 0 : n,
          t = 4 * e;
        let i = m.clippingState || null;
        (l.value = i), (i = h(u, o, t, s));
        for (let e = 0; e !== t; ++e) i[e] = r[e];
        (m.clippingState = i),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += e);
      }
    });
}
function WebGLCubeMaps(e) {
  let t = new WeakMap();
  function r(e, t) {
    return (
      t === EquirectangularReflectionMapping
        ? (e.mapping = CubeReflectionMapping)
        : t === EquirectangularRefractionMapping &&
          (e.mapping = CubeRefractionMapping),
      e
    );
  }
  function n(e) {
    const r = e.target;
    r.removeEventListener("dispose", n);
    const i = t.get(r);
    void 0 !== i && (t.delete(r), i.dispose());
  }
  return {
    get: function (i) {
      if (i && i.isTexture) {
        const a = i.mapping;
        if (
          a === EquirectangularReflectionMapping ||
          a === EquirectangularRefractionMapping
        ) {
          if (t.has(i)) return r(t.get(i).texture, i.mapping);
          {
            const a = i.image;
            if (a && a.height > 0) {
              const o = e.getRenderTarget(),
                s = new WebGLCubeRenderTarget(a.height / 2);
              return (
                s.fromEquirectangularTexture(e, i),
                t.set(i, s),
                e.setRenderTarget(o),
                i.addEventListener("dispose", n),
                r(s.texture, i.mapping)
              );
            }
            return null;
          }
        }
      }
      return i;
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
function WebGLExtensions(e) {
  const t = {};
  function r(r) {
    if (void 0 !== t[r]) return t[r];
    let n;
    switch (r) {
      case "WEBGL_depth_texture":
        n =
          e.getExtension("WEBGL_depth_texture") ||
          e.getExtension("MOZ_WEBGL_depth_texture") ||
          e.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        n =
          e.getExtension("EXT_texture_filter_anisotropic") ||
          e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        n =
          e.getExtension("WEBGL_compressed_texture_s3tc") ||
          e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        n =
          e.getExtension("WEBGL_compressed_texture_pvrtc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        n = e.getExtension(r);
    }
    return (t[r] = n), n;
  }
  return {
    has: function (e) {
      return null !== r(e);
    },
    init: function (e) {
      e.isWebGL2
        ? r("EXT_color_buffer_float")
        : (r("WEBGL_depth_texture"),
          r("OES_texture_float"),
          r("OES_texture_half_float"),
          r("OES_texture_half_float_linear"),
          r("OES_standard_derivatives"),
          r("OES_element_index_uint"),
          r("OES_vertex_array_object"),
          r("ANGLE_instanced_arrays")),
        r("OES_texture_float_linear"),
        r("EXT_color_buffer_half_float");
    },
    get: function (e) {
      const t = r(e);
      return (
        null === t &&
          console.warn(
            "MYGLAPI.WebGLRenderer: " + e + " extension not supported."
          ),
        t
      );
    },
  };
}
function WebGLGeometries(e, t, r, n) {
  const i = {},
    a = new WeakMap();
  function o(e) {
    const s = e.target;
    null !== s.index && t.remove(s.index);
    for (const e in s.attributes) t.remove(s.attributes[e]);
    s.removeEventListener("dispose", o), delete i[s.id];
    const l = a.get(s);
    l && (t.remove(l), a.delete(s)),
      n.releaseStatesOfGeometry(s),
      !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount,
      r.memory.geometries--;
  }
  function s(e) {
    const r = [],
      n = e.index,
      i = e.attributes.position;
    let o = 0;
    if (null !== n) {
      const e = n.array;
      o = n.version;
      for (let t = 0, n = e.length; t < n; t += 3) {
        const n = e[t + 0],
          i = e[t + 1],
          a = e[t + 2];
        r.push(n, i, i, a, a, n);
      }
    } else {
      const e = i.array;
      o = i.version;
      for (let t = 0, n = e.length / 3 - 1; t < n; t += 3) {
        const e = t + 0,
          n = t + 1,
          i = t + 2;
        r.push(e, n, n, i, i, e);
      }
    }
    const s = new (
      arrayMax(r) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute
    )(r, 1);
    s.version = o;
    const l = a.get(e);
    l && t.remove(l), a.set(e, s);
  }
  return {
    get: function (e, t) {
      return !0 === i[t.id]
        ? t
        : (t.addEventListener("dispose", o),
          (i[t.id] = !0),
          r.memory.geometries++,
          t);
    },
    update: function (e) {
      const r = e.attributes;
      for (const e in r) t.update(r[e], 34962);
      const n = e.morphAttributes;
      for (const e in n) {
        const r = n[e];
        for (let e = 0, n = r.length; e < n; e++) t.update(r[e], 34962);
      }
    },
    getWireframeAttribute: function (e) {
      const t = a.get(e);
      if (t) {
        const r = e.index;
        null !== r && t.version < r.version && s(e);
      } else s(e);
      return a.get(e);
    },
  };
}
function WebGLIndexedBufferRenderer(e, t, r, n) {
  const i = n.isWebGL2;
  let a, o, s;
  (this.setMode = function (e) {
    a = e;
  }),
    (this.setIndex = function (e) {
      (o = e.type), (s = e.bytesPerElement);
    }),
    (this.render = function (t, n) {
      e.drawElements(a, n, o, t * s), r.update(n, a, 1);
    }),
    (this.renderInstances = function (n, l, c) {
      if (0 === c) return;
      let h, u;
      if (i) (h = e), (u = "drawElementsInstanced");
      else if (
        ((u = "drawElementsInstancedANGLE"),
        null === (h = t.get("ANGLE_instanced_arrays")))
      )
        return void console.error(
          "MYGLAPI.WebGLIndexedBufferRenderer: using MYGLAPI.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
      h[u](a, l, o, n * s, c), r.update(l, a, c);
    });
}
function WebGLInfo(e) {
  const t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return {
    memory: { geometries: 0, textures: 0 },
    render: t,
    programs: null,
    autoReset: !0,
    reset: function () {
      t.frame++,
        (t.calls = 0),
        (t.triangles = 0),
        (t.points = 0),
        (t.lines = 0);
    },
    update: function (e, r, n) {
      switch ((t.calls++, r)) {
        case 4:
          t.triangles += n * (e / 3);
          break;
        case 1:
          t.lines += n * (e / 2);
          break;
        case 3:
          t.lines += n * (e - 1);
          break;
        case 2:
          t.lines += n * e;
          break;
        case 0:
          t.points += n * e;
          break;
        default:
          console.error("MYGLAPI.WebGLInfo: Unknown draw mode:", r);
      }
    },
  };
}
function numericalSort(e, t) {
  return e[0] - t[0];
}
function absNumericalSort(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1]);
}
function WebGLMorphtargets(e) {
  const t = {},
    r = new Float32Array(8),
    n = [];
  for (let e = 0; e < 8; e++) n[e] = [e, 0];
  return {
    update: function (i, a, o, s) {
      const l = i.morphTargetInfluences,
        c = void 0 === l ? 0 : l.length;
      let h = t[a.id];
      if (void 0 === h) {
        h = [];
        for (let e = 0; e < c; e++) h[e] = [e, 0];
        t[a.id] = h;
      }
      for (let e = 0; e < c; e++) {
        const t = h[e];
        (t[0] = e), (t[1] = l[e]);
      }
      h.sort(absNumericalSort);
      for (let e = 0; e < 8; e++)
        e < c && h[e][1]
          ? ((n[e][0] = h[e][0]), (n[e][1] = h[e][1]))
          : ((n[e][0] = Number.MAX_SAFE_INTEGER), (n[e][1] = 0));
      n.sort(numericalSort);
      const u = o.morphTargets && a.morphAttributes.position,
        d = o.morphNormals && a.morphAttributes.normal;
      let p = 0;
      for (let e = 0; e < 8; e++) {
        const t = n[e],
          i = t[0],
          o = t[1];
        i !== Number.MAX_SAFE_INTEGER && o
          ? (u &&
              a.getAttribute("morphTarget" + e) !== u[i] &&
              a.setAttribute("morphTarget" + e, u[i]),
            d &&
              a.getAttribute("morphNormal" + e) !== d[i] &&
              a.setAttribute("morphNormal" + e, d[i]),
            (r[e] = o),
            (p += o))
          : (u &&
              !0 === a.hasAttribute("morphTarget" + e) &&
              a.deleteAttribute("morphTarget" + e),
            d &&
              !0 === a.hasAttribute("morphNormal" + e) &&
              a.deleteAttribute("morphNormal" + e),
            (r[e] = 0));
      }
      const m = a.morphTargetsRelative ? 1 : 1 - p;
      s.getUniforms().setValue(e, "morphTargetBaseInfluence", m),
        s.getUniforms().setValue(e, "morphTargetInfluences", r);
    },
  };
}
function WebGLObjects(e, t, r, n) {
  let i = new WeakMap();
  function a(e) {
    const t = e.target;
    t.removeEventListener("dispose", a),
      r.remove(t.instanceMatrix),
      null !== t.instanceColor && r.remove(t.instanceColor);
  }
  return {
    update: function (e) {
      const o = n.render.frame,
        s = e.geometry,
        l = t.get(e, s);
      return (
        i.get(l) !== o && (t.update(l), i.set(l, o)),
        e.isInstancedMesh &&
          (!1 === e.hasEventListener("dispose", a) &&
            e.addEventListener("dispose", a),
          r.update(e.instanceMatrix, 34962),
          null !== e.instanceColor && r.update(e.instanceColor, 34962)),
        l
      );
    },
    dispose: function () {
      i = new WeakMap();
    },
  };
}
ShaderLib.physical = {
  uniforms: mergeUniforms([
    ShaderLib.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Vector2(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: new Color(0) },
      transmission: { value: 0 },
      transmissionMap: { value: null },
    },
  ]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag,
};
class DataTexture2DArray extends Texture {
  constructor(e = null, t = 1, r = 1, n = 1) {
    super(null),
      (this.image = { data: e, width: t, height: r, depth: n }),
      (this.magFilter = NearestFilter),
      (this.minFilter = NearestFilter),
      (this.wrapR = ClampToEdgeWrapping),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0);
  }
}
DataTexture2DArray.prototype.isDataTexture2DArray = !0;
class DataTexture3D extends Texture {
  constructor(e = null, t = 1, r = 1, n = 1) {
    super(null),
      (this.image = { data: e, width: t, height: r, depth: n }),
      (this.magFilter = NearestFilter),
      (this.minFilter = NearestFilter),
      (this.wrapR = ClampToEdgeWrapping),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.needsUpdate = !0);
  }
}
DataTexture3D.prototype.isDataTexture3D = !0;
const emptyTexture = new Texture(),
  emptyTexture2dArray = new DataTexture2DArray(),
  emptyTexture3d = new DataTexture3D(),
  emptyCubeTexture = new CubeTexture(),
  arrayCacheF32 = [],
  arrayCacheI32 = [],
  mat4array = new Float32Array(16),
  mat3array = new Float32Array(9),
  mat2array = new Float32Array(4);
function flatten(e, t, r) {
  const n = e[0];
  if (n <= 0 || n > 0) return e;
  const i = t * r;
  let a = arrayCacheF32[i];
  if (
    (void 0 === a && ((a = new Float32Array(i)), (arrayCacheF32[i] = a)),
    0 !== t)
  ) {
    n.toArray(a, 0);
    for (let n = 1, i = 0; n !== t; ++n) (i += r), e[n].toArray(a, i);
  }
  return a;
}
function arraysEqual(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0, n = e.length; r < n; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function copyArray(e, t) {
  for (let r = 0, n = t.length; r < n; r++) e[r] = t[r];
}
function allocTexUnits(e, t) {
  let r = arrayCacheI32[t];
  void 0 === r && ((r = new Int32Array(t)), (arrayCacheI32[t] = r));
  for (let n = 0; n !== t; ++n) r[n] = e.allocateTextureUnit();
  return r;
}
function setValueV1f(e, t) {
  const r = this.cache;
  r[0] !== t && (e.uniform1f(this.addr, t), (r[0] = t));
}
function setValueV2f(e, t) {
  const r = this.cache;
  if (void 0 !== t.x)
    (r[0] === t.x && r[1] === t.y) ||
      (e.uniform2f(this.addr, t.x, t.y), (r[0] = t.x), (r[1] = t.y));
  else {
    if (arraysEqual(r, t)) return;
    e.uniform2fv(this.addr, t), copyArray(r, t);
  }
}
function setValueV3f(e, t) {
  const r = this.cache;
  if (void 0 !== t.x)
    (r[0] === t.x && r[1] === t.y && r[2] === t.z) ||
      (e.uniform3f(this.addr, t.x, t.y, t.z),
      (r[0] = t.x),
      (r[1] = t.y),
      (r[2] = t.z));
  else if (void 0 !== t.r)
    (r[0] === t.r && r[1] === t.g && r[2] === t.b) ||
      (e.uniform3f(this.addr, t.r, t.g, t.b),
      (r[0] = t.r),
      (r[1] = t.g),
      (r[2] = t.b));
  else {
    if (arraysEqual(r, t)) return;
    e.uniform3fv(this.addr, t), copyArray(r, t);
  }
}
function setValueV4f(e, t) {
  const r = this.cache;
  if (void 0 !== t.x)
    (r[0] === t.x && r[1] === t.y && r[2] === t.z && r[3] === t.w) ||
      (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (r[0] = t.x),
      (r[1] = t.y),
      (r[2] = t.z),
      (r[3] = t.w));
  else {
    if (arraysEqual(r, t)) return;
    e.uniform4fv(this.addr, t), copyArray(r, t);
  }
}
function setValueM2(e, t) {
  const r = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (arraysEqual(r, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), copyArray(r, t);
  } else {
    if (arraysEqual(r, n)) return;
    mat2array.set(n),
      e.uniformMatrix2fv(this.addr, !1, mat2array),
      copyArray(r, n);
  }
}
function setValueM3(e, t) {
  const r = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (arraysEqual(r, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), copyArray(r, t);
  } else {
    if (arraysEqual(r, n)) return;
    mat3array.set(n),
      e.uniformMatrix3fv(this.addr, !1, mat3array),
      copyArray(r, n);
  }
}
function setValueM4(e, t) {
  const r = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (arraysEqual(r, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), copyArray(r, t);
  } else {
    if (arraysEqual(r, n)) return;
    mat4array.set(n),
      e.uniformMatrix4fv(this.addr, !1, mat4array),
      copyArray(r, n);
  }
}
function setValueV1i(e, t) {
  const r = this.cache;
  r[0] !== t && (e.uniform1i(this.addr, t), (r[0] = t));
}
function setValueV2i(e, t) {
  const r = this.cache;
  arraysEqual(r, t) || (e.uniform2iv(this.addr, t), copyArray(r, t));
}
function setValueV3i(e, t) {
  const r = this.cache;
  arraysEqual(r, t) || (e.uniform3iv(this.addr, t), copyArray(r, t));
}
function setValueV4i(e, t) {
  const r = this.cache;
  arraysEqual(r, t) || (e.uniform4iv(this.addr, t), copyArray(r, t));
}
function setValueV1ui(e, t) {
  const r = this.cache;
  r[0] !== t && (e.uniform1ui(this.addr, t), (r[0] = t));
}
function setValueV2ui(e, t) {
  const r = this.cache;
  arraysEqual(r, t) || (e.uniform2uiv(this.addr, t), copyArray(r, t));
}
function setValueV3ui(e, t) {
  const r = this.cache;
  arraysEqual(r, t) || (e.uniform3uiv(this.addr, t), copyArray(r, t));
}
function setValueV4ui(e, t) {
  const r = this.cache;
  arraysEqual(r, t) || (e.uniform4uiv(this.addr, t), copyArray(r, t));
}
function setValueT1(e, t, r) {
  const n = this.cache,
    i = r.allocateTextureUnit();
  n[0] !== i && (e.uniform1i(this.addr, i), (n[0] = i)),
    r.safeSetTexture2D(t || emptyTexture, i);
}
function setValueT3D1(e, t, r) {
  const n = this.cache,
    i = r.allocateTextureUnit();
  n[0] !== i && (e.uniform1i(this.addr, i), (n[0] = i)),
    r.setTexture3D(t || emptyTexture3d, i);
}
function setValueT6(e, t, r) {
  const n = this.cache,
    i = r.allocateTextureUnit();
  n[0] !== i && (e.uniform1i(this.addr, i), (n[0] = i)),
    r.safeSetTextureCube(t || emptyCubeTexture, i);
}
function setValueT2DArray1(e, t, r) {
  const n = this.cache,
    i = r.allocateTextureUnit();
  n[0] !== i && (e.uniform1i(this.addr, i), (n[0] = i)),
    r.setTexture2DArray(t || emptyTexture2dArray, i);
}
function getSingularSetter(e) {
  switch (e) {
    case 5126:
      return setValueV1f;
    case 35664:
      return setValueV2f;
    case 35665:
      return setValueV3f;
    case 35666:
      return setValueV4f;
    case 35674:
      return setValueM2;
    case 35675:
      return setValueM3;
    case 35676:
      return setValueM4;
    case 5124:
    case 35670:
      return setValueV1i;
    case 35667:
    case 35671:
      return setValueV2i;
    case 35668:
    case 35672:
      return setValueV3i;
    case 35669:
    case 35673:
      return setValueV4i;
    case 5125:
      return setValueV1ui;
    case 36294:
      return setValueV2ui;
    case 36295:
      return setValueV3ui;
    case 36296:
      return setValueV4ui;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3D1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArray1;
  }
}
function setValueV1fArray(e, t) {
  e.uniform1fv(this.addr, t);
}
function setValueV2fArray(e, t) {
  const r = flatten(t, this.size, 2);
  e.uniform2fv(this.addr, r);
}
function setValueV3fArray(e, t) {
  const r = flatten(t, this.size, 3);
  e.uniform3fv(this.addr, r);
}
function setValueV4fArray(e, t) {
  const r = flatten(t, this.size, 4);
  e.uniform4fv(this.addr, r);
}
function setValueM2Array(e, t) {
  const r = flatten(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, r);
}
function setValueM3Array(e, t) {
  const r = flatten(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, r);
}
function setValueM4Array(e, t) {
  const r = flatten(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, r);
}
function setValueV1iArray(e, t) {
  e.uniform1iv(this.addr, t);
}
function setValueV2iArray(e, t) {
  e.uniform2iv(this.addr, t);
}
function setValueV3iArray(e, t) {
  e.uniform3iv(this.addr, t);
}
function setValueV4iArray(e, t) {
  e.uniform4iv(this.addr, t);
}
function setValueV1uiArray(e, t) {
  e.uniform1uiv(this.addr, t);
}
function setValueV2uiArray(e, t) {
  e.uniform2uiv(this.addr, t);
}
function setValueV3uiArray(e, t) {
  e.uniform3uiv(this.addr, t);
}
function setValueV4uiArray(e, t) {
  e.uniform4uiv(this.addr, t);
}
function setValueT1Array(e, t, r) {
  const n = t.length,
    i = allocTexUnits(r, n);
  e.uniform1iv(this.addr, i);
  for (let e = 0; e !== n; ++e) r.safeSetTexture2D(t[e] || emptyTexture, i[e]);
}
function setValueT6Array(e, t, r) {
  const n = t.length,
    i = allocTexUnits(r, n);
  e.uniform1iv(this.addr, i);
  for (let e = 0; e !== n; ++e)
    r.safeSetTextureCube(t[e] || emptyCubeTexture, i[e]);
}
function getPureArraySetter(e) {
  switch (e) {
    case 5126:
      return setValueV1fArray;
    case 35664:
      return setValueV2fArray;
    case 35665:
      return setValueV3fArray;
    case 35666:
      return setValueV4fArray;
    case 35674:
      return setValueM2Array;
    case 35675:
      return setValueM3Array;
    case 35676:
      return setValueM4Array;
    case 5124:
    case 35670:
      return setValueV1iArray;
    case 35667:
    case 35671:
      return setValueV2iArray;
    case 35668:
    case 35672:
      return setValueV3iArray;
    case 35669:
    case 35673:
      return setValueV4iArray;
    case 5125:
      return setValueV1uiArray;
    case 36294:
      return setValueV2uiArray;
    case 36295:
      return setValueV3uiArray;
    case 36296:
      return setValueV4uiArray;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1Array;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6Array;
  }
}
function SingleUniform(e, t, r) {
  (this.id = e),
    (this.addr = r),
    (this.cache = []),
    (this.setValue = getSingularSetter(t.type));
}
function PureArrayUniform(e, t, r) {
  (this.id = e),
    (this.addr = r),
    (this.cache = []),
    (this.size = t.size),
    (this.setValue = getPureArraySetter(t.type));
}
function StructuredUniform(e) {
  (this.id = e), (this.seq = []), (this.map = {});
}
(PureArrayUniform.prototype.updateCache = function (e) {
  const t = this.cache;
  e instanceof Float32Array &&
    t.length !== e.length &&
    (this.cache = new Float32Array(e.length)),
    copyArray(t, e);
}),
  (StructuredUniform.prototype.setValue = function (e, t, r) {
    const n = this.seq;
    for (let i = 0, a = n.length; i !== a; ++i) {
      const a = n[i];
      a.setValue(e, t[a.id], r);
    }
  });
const RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(e, t) {
  e.seq.push(t), (e.map[t.id] = t);
}
function parseUniform(e, t, r) {
  const n = e.name,
    i = n.length;
  for (RePathPart.lastIndex = 0; ; ) {
    const a = RePathPart.exec(n),
      o = RePathPart.lastIndex;
    let s = a[1];
    const l = "]" === a[2],
      c = a[3];
    if ((l && (s |= 0), void 0 === c || ("[" === c && o + 2 === i))) {
      addUniform(
        r,
        void 0 === c
          ? new SingleUniform(s, e, t)
          : new PureArrayUniform(s, e, t)
      );
      break;
    }
    {
      let e = r.map[s];
      void 0 === e && addUniform(r, (e = new StructuredUniform(s))), (r = e);
    }
  }
}
function WebGLUniforms(e, t) {
  (this.seq = []), (this.map = {});
  const r = e.getProgramParameter(t, 35718);
  for (let n = 0; n < r; ++n) {
    const r = e.getActiveUniform(t, n);
    parseUniform(r, e.getUniformLocation(t, r.name), this);
  }
}
function WebGLShader(e, t, r) {
  const n = e.createShader(t);
  return e.shaderSource(n, r), e.compileShader(n), n;
}
(WebGLUniforms.prototype.setValue = function (e, t, r, n) {
  const i = this.map[t];
  void 0 !== i && i.setValue(e, r, n);
}),
  (WebGLUniforms.prototype.setOptional = function (e, t, r) {
    const n = t[r];
    void 0 !== n && this.setValue(e, r, n);
  }),
  (WebGLUniforms.upload = function (e, t, r, n) {
    for (let i = 0, a = t.length; i !== a; ++i) {
      const a = t[i],
        o = r[a.id];
      !1 !== o.needsUpdate && a.setValue(e, o.value, n);
    }
  }),
  (WebGLUniforms.seqWithValue = function (e, t) {
    const r = [];
    for (let n = 0, i = e.length; n !== i; ++n) {
      const i = e[n];
      i.id in t && r.push(i);
    }
    return r;
  });
let programIdCount = 0;
function addLineNumbers(e) {
  const t = e.split("\n");
  for (let e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
  return t.join("\n");
}
function getEncodingComponents(e) {
  switch (e) {
    case LinearEncoding:
      return ["Linear", "( value )"];
    case sRGBEncoding:
      return ["sRGB", "( value )"];
    case RGBEEncoding:
      return ["RGBE", "( value )"];
    case RGBM7Encoding:
      return ["RGBM", "( value, 7.0 )"];
    case RGBM16Encoding:
      return ["RGBM", "( value, 16.0 )"];
    case RGBDEncoding:
      return ["RGBD", "( value, 256.0 )"];
    case GammaEncoding:
      return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case LogLuvEncoding:
      return ["LogLuv", "( value )"];
    default:
      return (
        console.warn("MYGLAPI.WebGLProgram: Unsupported encoding:", e),
        ["Linear", "( value )"]
      );
  }
}
function getShaderErrors(e, t, r) {
  const n = e.getShaderParameter(t, 35713),
    i = e.getShaderInfoLog(t).trim();
  return n && "" === i
    ? ""
    : "MYGLAPI.WebGLShader: gl.getShaderInfoLog() " +
        r +
        "\n" +
        i +
        addLineNumbers(e.getShaderSource(t));
}
function getTexelDecodingFunction(e, t) {
  const r = getEncodingComponents(t);
  return (
    "vec4 " + e + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }"
  );
}
function getTexelEncodingFunction(e, t) {
  const r = getEncodingComponents(t);
  return "vec4 " + e + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }";
}
function getToneMappingFunction(e, t) {
  let r;
  switch (t) {
    case LinearToneMapping:
      r = "Linear";
      break;
    case ReinhardToneMapping:
      r = "Reinhard";
      break;
    case CineonToneMapping:
      r = "OptimizedCineon";
      break;
    case ACESFilmicToneMapping:
      r = "ACESFilmic";
      break;
    case CustomToneMapping:
      r = "Custom";
      break;
    default:
      console.warn("MYGLAPI.WebGLProgram: Unsupported toneMapping:", t),
        (r = "Linear");
  }
  return (
    "vec3 " + e + "( vec3 color ) { return " + r + "ToneMapping( color ); }"
  );
}
function generateExtensions(e) {
  return [
    e.extensionDerivatives ||
    e.envMapCubeUV ||
    e.bumpMap ||
    e.tangentSpaceNormalMap ||
    e.clearcoatNormalMap ||
    e.flatShading ||
    "physical" === e.shaderID
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (e.extensionFragDepth || e.logarithmicDepthBuffer) &&
    e.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    e.extensionDrawBuffers && e.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (e.extensionShaderTextureLOD || e.envMap) &&
    e.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ]
    .filter(filterEmptyLine)
    .join("\n");
}
function generateDefines(e) {
  const t = [];
  for (const r in e) {
    const n = e[r];
    !1 !== n && t.push("#define " + r + " " + n);
  }
  return t.join("\n");
}
function fetchAttributeLocations(e, t) {
  const r = {},
    n = e.getProgramParameter(t, 35721);
  for (let i = 0; i < n; i++) {
    const n = e.getActiveAttrib(t, i).name;
    r[n] = e.getAttribLocation(t, n);
  }
  return r;
}
function filterEmptyLine(e) {
  return "" !== e;
}
function replaceLightNums(e, t) {
  return e
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function replaceClippingPlaneNums(e, t) {
  return e
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection
    );
}
const includePattern = /^[ \t]*#include +<([\w\d.\/]+)>/gm;
function resolveIncludes(e) {
  return e.replace(includePattern, includeReplacer);
}
function includeReplacer(e, t) {
  const r = ShaderChunk[t];
  if (void 0 === r) throw new Error("Can not resolve #include <" + t + ">");
  return resolveIncludes(r);
}
const deprecatedUnrollLoopPattern =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  unrollLoopPattern =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(e) {
  return e
    .replace(unrollLoopPattern, loopReplacer)
    .replace(deprecatedUnrollLoopPattern, deprecatedLoopReplacer);
}
function deprecatedLoopReplacer(e, t, r, n) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    ),
    loopReplacer(e, t, r, n)
  );
}
function loopReplacer(e, t, r, n) {
  let i = "";
  for (let e = parseInt(t); e < parseInt(r); e++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + e + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, e);
  return i;
}
function generatePrecision(e) {
  let t =
    "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
  return (
    "highp" === e.precision
      ? (t += "\n#define HIGH_PRECISION")
      : "mediump" === e.precision
      ? (t += "\n#define MEDIUM_PRECISION")
      : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
    t
  );
}
function generateShadowMapTypeDefine(e) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return (
    e.shadowMapType === PCFShadowMap
      ? (t = "SHADOWMAP_TYPE_PCF")
      : e.shadowMapType === PCFSoftShadowMap
      ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
      : e.shadowMapType === VSMShadowMap && (t = "SHADOWMAP_TYPE_VSM"),
    t
  );
}
function generateEnvMapTypeDefine(e) {
  let t = "ENVMAP_TYPE_CUBE";
  if (e.envMap)
    switch (e.envMapMode) {
      case CubeReflectionMapping:
      case CubeRefractionMapping:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case CubeUVReflectionMapping:
      case CubeUVRefractionMapping:
        t = "ENVMAP_TYPE_CUBE_UV";
    }
  return t;
}
function generateEnvMapModeDefine(e) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (e.envMap)
    switch (e.envMapMode) {
      case CubeRefractionMapping:
      case CubeUVRefractionMapping:
        t = "ENVMAP_MODE_REFRACTION";
    }
  return t;
}
function generateEnvMapBlendingDefine(e) {
  let t = "ENVMAP_BLENDING_NONE";
  if (e.envMap)
    switch (e.combine) {
      case MultiplyOperation:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case MixOperation:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case AddOperation:
        t = "ENVMAP_BLENDING_ADD";
    }
  return t;
}
function WebGLProgram(e, t, r, n) {
  const i = e.getContext(),
    a = r.defines;
  let o = r.vertexShader,
    s = r.fragmentShader;
  const l = generateShadowMapTypeDefine(r),
    c = generateEnvMapTypeDefine(r),
    h = generateEnvMapModeDefine(r),
    u = generateEnvMapBlendingDefine(r),
    d = e.gammaFactor > 0 ? e.gammaFactor : 1,
    p = r.isWebGL2 ? "" : generateExtensions(r),
    m = generateDefines(a),
    f = i.createProgram();
  let g,
    _,
    v = r.glslVersion ? "#version " + r.glslVersion + "\n" : "";
  r.isRawShaderMaterial
    ? ((g = [m].filter(filterEmptyLine).join("\n")).length > 0 && (g += "\n"),
      (_ = [p, m].filter(filterEmptyLine).join("\n")).length > 0 && (_ += "\n"))
    : ((g = [
        generatePrecision(r),
        "#define SHADER_NAME " + r.shaderName,
        m,
        r.instancing ? "#define USE_INSTANCING" : "",
        r.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        r.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        "#define GAMMA_FACTOR " + d,
        "#define MAX_BONES " + r.maxBones,
        r.useFog && r.fog ? "#define USE_FOG" : "",
        r.useFog && r.fogExp2 ? "#define FOG_EXP2" : "",
        r.map ? "#define USE_MAP" : "",
        r.envMap ? "#define USE_ENVMAP" : "",
        r.envMap ? "#define " + h : "",
        r.lightMap ? "#define USE_LIGHTMAP" : "",
        r.aoMap ? "#define USE_AOMAP" : "",
        r.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        r.bumpMap ? "#define USE_BUMPMAP" : "",
        r.normalMap ? "#define USE_NORMALMAP" : "",
        r.normalMap && r.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        r.normalMap && r.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        r.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        r.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        r.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        r.displacementMap && r.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        r.specularMap ? "#define USE_SPECULARMAP" : "",
        r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        r.metalnessMap ? "#define USE_METALNESSMAP" : "",
        r.alphaMap ? "#define USE_ALPHAMAP" : "",
        r.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        r.vertexTangents ? "#define USE_TANGENT" : "",
        r.vertexColors ? "#define USE_COLOR" : "",
        r.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        r.vertexUvs ? "#define USE_UV" : "",
        r.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        r.flatShading ? "#define FLAT_SHADED" : "",
        r.skinning ? "#define USE_SKINNING" : "",
        r.useVertexTexture ? "#define BONE_TEXTURE" : "",
        r.morphTargets ? "#define USE_MORPHTARGETS" : "",
        r.morphNormals && !1 === r.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        r.doubleSided ? "#define DOUBLE_SIDED" : "",
        r.flipSided ? "#define FLIP_SIDED" : "",
        r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        r.shadowMapEnabled ? "#define " + l : "",
        r.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        r.logarithmicDepthBuffer && r.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "\tattribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "\tattribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "\tattribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "\tattribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "\tattribute vec3 color;",
        "#endif",
        "#ifdef USE_MORPHTARGETS",
        "\tattribute vec3 morphTarget0;",
        "\tattribute vec3 morphTarget1;",
        "\tattribute vec3 morphTarget2;",
        "\tattribute vec3 morphTarget3;",
        "\t#ifdef USE_MORPHNORMALS",
        "\t\tattribute vec3 morphNormal0;",
        "\t\tattribute vec3 morphNormal1;",
        "\t\tattribute vec3 morphNormal2;",
        "\t\tattribute vec3 morphNormal3;",
        "\t#else",
        "\t\tattribute vec3 morphTarget4;",
        "\t\tattribute vec3 morphTarget5;",
        "\t\tattribute vec3 morphTarget6;",
        "\t\tattribute vec3 morphTarget7;",
        "\t#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "\tattribute vec4 skinIndex;",
        "\tattribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(filterEmptyLine)
        .join("\n")),
      (_ = [
        p,
        generatePrecision(r),
        "#define SHADER_NAME " + r.shaderName,
        m,
        r.alphaTest
          ? "#define ALPHATEST " + r.alphaTest + (r.alphaTest % 1 ? "" : ".0")
          : "",
        "#define GAMMA_FACTOR " + d,
        r.useFog && r.fog ? "#define USE_FOG" : "",
        r.useFog && r.fogExp2 ? "#define FOG_EXP2" : "",
        r.map ? "#define USE_MAP" : "",
        r.matcap ? "#define USE_MATCAP" : "",
        r.envMap ? "#define USE_ENVMAP" : "",
        r.envMap ? "#define " + c : "",
        r.envMap ? "#define " + h : "",
        r.envMap ? "#define " + u : "",
        r.lightMap ? "#define USE_LIGHTMAP" : "",
        r.aoMap ? "#define USE_AOMAP" : "",
        r.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        r.bumpMap ? "#define USE_BUMPMAP" : "",
        r.normalMap ? "#define USE_NORMALMAP" : "",
        r.normalMap && r.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        r.normalMap && r.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        r.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        r.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        r.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        r.specularMap ? "#define USE_SPECULARMAP" : "",
        r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        r.metalnessMap ? "#define USE_METALNESSMAP" : "",
        r.alphaMap ? "#define USE_ALPHAMAP" : "",
        r.sheen ? "#define USE_SHEEN" : "",
        r.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        r.vertexTangents ? "#define USE_TANGENT" : "",
        r.vertexColors || r.instancingColor ? "#define USE_COLOR" : "",
        r.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        r.vertexUvs ? "#define USE_UV" : "",
        r.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        r.gradientMap ? "#define USE_GRADIENTMAP" : "",
        r.flatShading ? "#define FLAT_SHADED" : "",
        r.doubleSided ? "#define DOUBLE_SIDED" : "",
        r.flipSided ? "#define FLIP_SIDED" : "",
        r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        r.shadowMapEnabled ? "#define " + l : "",
        r.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        r.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        r.logarithmicDepthBuffer && r.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        (r.extensionShaderTextureLOD || r.envMap) &&
        r.rendererExtensionShaderTextureLod
          ? "#define TEXTURE_LOD_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        r.toneMapping !== NoToneMapping ? "#define TONE_MAPPING" : "",
        r.toneMapping !== NoToneMapping
          ? ShaderChunk.tonemapping_pars_fragment
          : "",
        r.toneMapping !== NoToneMapping
          ? getToneMappingFunction("toneMapping", r.toneMapping)
          : "",
        r.dithering ? "#define DITHERING" : "",
        ShaderChunk.encodings_pars_fragment,
        r.map
          ? getTexelDecodingFunction("mapTexelToLinear", r.mapEncoding)
          : "",
        r.matcap
          ? getTexelDecodingFunction("matcapTexelToLinear", r.matcapEncoding)
          : "",
        r.envMap
          ? getTexelDecodingFunction("envMapTexelToLinear", r.envMapEncoding)
          : "",
        r.emissiveMap
          ? getTexelDecodingFunction(
              "emissiveMapTexelToLinear",
              r.emissiveMapEncoding
            )
          : "",
        r.lightMap
          ? getTexelDecodingFunction(
              "lightMapTexelToLinear",
              r.lightMapEncoding
            )
          : "",
        getTexelEncodingFunction("linearToOutputTexel", r.outputEncoding),
        r.depthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "",
        "\n",
      ]
        .filter(filterEmptyLine)
        .join("\n"))),
    (o = replaceClippingPlaneNums(
      (o = replaceLightNums((o = resolveIncludes(o)), r)),
      r
    )),
    (s = replaceClippingPlaneNums(
      (s = replaceLightNums((s = resolveIncludes(s)), r)),
      r
    )),
    (o = unrollLoops(o)),
    (s = unrollLoops(s)),
    r.isWebGL2 &&
      !0 !== r.isRawShaderMaterial &&
      ((v = "#version 300 es\n"),
      (g =
        [
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join("\n") +
        "\n" +
        g),
      (_ =
        [
          "#define varying in",
          r.glslVersion === GLSL3 ? "" : "out highp vec4 pc_fragColor;",
          r.glslVersion === GLSL3 ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        _));
  const y = v + _ + s,
    x = WebGLShader(i, 35633, v + g + o),
    b = WebGLShader(i, 35632, y);
  if (
    (i.attachShader(f, x),
    i.attachShader(f, b),
    void 0 !== r.index0AttributeName
      ? i.bindAttribLocation(f, 0, r.index0AttributeName)
      : !0 === r.morphTargets && i.bindAttribLocation(f, 0, "position"),
    i.linkProgram(f),
    e.debug.checkShaderErrors)
  ) {
    const e = i.getProgramInfoLog(f).trim(),
      t = i.getShaderInfoLog(x).trim(),
      r = i.getShaderInfoLog(b).trim();
    let n = !0,
      a = !0;
    if (!1 === i.getProgramParameter(f, 35714)) {
      n = !1;
      const t = getShaderErrors(i, x, "vertex"),
        r = getShaderErrors(i, b, "fragment");
      console.error(
        "MYGLAPI.WebGLProgram: shader error: ",
        i.getError(),
        "35715",
        i.getProgramParameter(f, 35715),
        "gl.getProgramInfoLog",
        e,
        t,
        r
      );
    } else
      "" !== e
        ? console.warn("MYGLAPI.WebGLProgram: gl.getProgramInfoLog()", e)
        : ("" !== t && "" !== r) || (a = !1);
    a &&
      (this.diagnostics = {
        runnable: n,
        programLog: e,
        vertexShader: { log: t, prefix: g },
        fragmentShader: { log: r, prefix: _ },
      });
  }
  let M, w;
  return (
    i.deleteShader(x),
    i.deleteShader(b),
    (this.getUniforms = function () {
      return void 0 === M && (M = new WebGLUniforms(i, f)), M;
    }),
    (this.getAttributes = function () {
      return void 0 === w && (w = fetchAttributeLocations(i, f)), w;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(f),
        (this.program = void 0);
    }),
    (this.name = r.shaderName),
    (this.id = programIdCount++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = f),
    (this.vertexShader = x),
    (this.fragmentShader = b),
    this
  );
}
function WebGLPrograms(e, t, r, n, i, a) {
  const o = [],
    s = n.isWebGL2,
    l = n.logarithmicDepthBuffer,
    c = n.floatVertexTextures,
    h = n.maxVertexUniforms,
    u = n.vertexTextures;
  let d = n.precision;
  const p = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    },
    m = [
      "precision",
      "isWebGL2",
      "supportsVertexTextures",
      "outputEncoding",
      "instancing",
      "instancingColor",
      "map",
      "mapEncoding",
      "matcap",
      "matcapEncoding",
      "envMap",
      "envMapMode",
      "envMapEncoding",
      "envMapCubeUV",
      "lightMap",
      "lightMapEncoding",
      "aoMap",
      "emissiveMap",
      "emissiveMapEncoding",
      "bumpMap",
      "normalMap",
      "objectSpaceNormalMap",
      "tangentSpaceNormalMap",
      "clearcoatMap",
      "clearcoatRoughnessMap",
      "clearcoatNormalMap",
      "displacementMap",
      "specularMap",
      "roughnessMap",
      "metalnessMap",
      "gradientMap",
      "alphaMap",
      "combine",
      "vertexColors",
      "vertexAlphas",
      "vertexTangents",
      "vertexUvs",
      "uvsVertexOnly",
      "fog",
      "useFog",
      "fogExp2",
      "flatShading",
      "sizeAttenuation",
      "logarithmicDepthBuffer",
      "skinning",
      "maxBones",
      "useVertexTexture",
      "morphTargets",
      "morphNormals",
      "premultipliedAlpha",
      "numDirLights",
      "numPointLights",
      "numSpotLights",
      "numHemiLights",
      "numRectAreaLights",
      "numDirLightShadows",
      "numPointLightShadows",
      "numSpotLightShadows",
      "shadowMapEnabled",
      "shadowMapType",
      "toneMapping",
      "physicallyCorrectLights",
      "alphaTest",
      "doubleSided",
      "flipSided",
      "numClippingPlanes",
      "numClipIntersection",
      "depthPacking",
      "dithering",
      "sheen",
      "transmissionMap",
    ];
  function f(e) {
    let t;
    return (
      e && e.isTexture
        ? (t = e.encoding)
        : e && e.isWebGLRenderTarget
        ? (console.warn(
            "MYGLAPI.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
          ),
          (t = e.texture.encoding))
        : (t = LinearEncoding),
      t
    );
  }
  return {
    getParameters: function (i, o, m, g, _) {
      const v = g.fog,
        y = i.isMeshStandardMaterial ? g.environment : null,
        x = t.get(i.envMap || y),
        b = p[i.type],
        M = _.isSkinnedMesh
          ? (function (e) {
              const t = e.skeleton.bones;
              if (c) return 1024;
              {
                const e = h,
                  r = Math.floor((e - 20) / 4),
                  n = Math.min(r, t.length);
                return n < t.length
                  ? (console.warn(
                      "MYGLAPI.WebGLRenderer: Skeleton has " +
                        t.length +
                        " bones. This GPU supports " +
                        n +
                        "."
                    ),
                    0)
                  : n;
              }
            })(_)
          : 0;
      let w, S;
      if (
        (null !== i.precision &&
          (d = n.getMaxPrecision(i.precision)) !== i.precision &&
          console.warn(
            "MYGLAPI.WebGLProgram.getParameters:",
            i.precision,
            "not supported, using",
            d,
            "instead."
          ),
        b)
      ) {
        const e = ShaderLib[b];
        (w = e.vertexShader), (S = e.fragmentShader);
      } else (w = i.vertexShader), (S = i.fragmentShader);
      const T = e.getRenderTarget();
      return {
        isWebGL2: s,
        shaderID: b,
        shaderName: i.type,
        vertexShader: w,
        fragmentShader: S,
        defines: i.defines,
        isRawShaderMaterial: !0 === i.isRawShaderMaterial,
        glslVersion: i.glslVersion,
        precision: d,
        instancing: !0 === _.isInstancedMesh,
        instancingColor: !0 === _.isInstancedMesh && null !== _.instanceColor,
        supportsVertexTextures: u,
        outputEncoding: null !== T ? f(T.texture) : e.outputEncoding,
        map: !!i.map,
        mapEncoding: f(i.map),
        matcap: !!i.matcap,
        matcapEncoding: f(i.matcap),
        envMap: !!x,
        envMapMode: x && x.mapping,
        envMapEncoding: f(x),
        envMapCubeUV:
          !!x &&
          (x.mapping === CubeUVReflectionMapping ||
            x.mapping === CubeUVRefractionMapping),
        lightMap: !!i.lightMap,
        lightMapEncoding: f(i.lightMap),
        aoMap: !!i.aoMap,
        emissiveMap: !!i.emissiveMap,
        emissiveMapEncoding: f(i.emissiveMap),
        bumpMap: !!i.bumpMap,
        normalMap: !!i.normalMap,
        objectSpaceNormalMap: i.normalMapType === ObjectSpaceNormalMap,
        tangentSpaceNormalMap: i.normalMapType === TangentSpaceNormalMap,
        clearcoatMap: !!i.clearcoatMap,
        clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
        clearcoatNormalMap: !!i.clearcoatNormalMap,
        displacementMap: !!i.displacementMap,
        roughnessMap: !!i.roughnessMap,
        metalnessMap: !!i.metalnessMap,
        specularMap: !!i.specularMap,
        alphaMap: !!i.alphaMap,
        gradientMap: !!i.gradientMap,
        sheen: !!i.sheen,
        transmissionMap: !!i.transmissionMap,
        combine: i.combine,
        vertexTangents: i.normalMap && i.vertexTangents,
        vertexColors: i.vertexColors,
        vertexAlphas:
          !0 === i.vertexColors &&
          _.geometry &&
          _.geometry.attributes.color &&
          4 === _.geometry.attributes.color.itemSize,
        vertexUvs: !!(
          i.map ||
          i.bumpMap ||
          i.normalMap ||
          i.specularMap ||
          i.alphaMap ||
          i.emissiveMap ||
          i.roughnessMap ||
          i.metalnessMap ||
          i.clearcoatMap ||
          i.clearcoatRoughnessMap ||
          i.clearcoatNormalMap ||
          i.displacementMap ||
          i.transmissionMap
        ),
        uvsVertexOnly: !(
          i.map ||
          i.bumpMap ||
          i.normalMap ||
          i.specularMap ||
          i.alphaMap ||
          i.emissiveMap ||
          i.roughnessMap ||
          i.metalnessMap ||
          i.clearcoatNormalMap ||
          i.transmissionMap ||
          !i.displacementMap
        ),
        fog: !!v,
        useFog: i.fog,
        fogExp2: v && v.isFogExp2,
        flatShading: !!i.flatShading,
        sizeAttenuation: i.sizeAttenuation,
        logarithmicDepthBuffer: l,
        skinning: !0 === _.isSkinnedMesh && M > 0,
        maxBones: M,
        useVertexTexture: c,
        morphTargets: i.morphTargets,
        morphNormals: i.morphNormals,
        numDirLights: o.directional.length,
        numPointLights: o.point.length,
        numSpotLights: o.spot.length,
        numRectAreaLights: o.rectArea.length,
        numHemiLights: o.hemi.length,
        numDirLightShadows: o.directionalShadowMap.length,
        numPointLightShadows: o.pointShadowMap.length,
        numSpotLightShadows: o.spotShadowMap.length,
        numClippingPlanes: a.numPlanes,
        numClipIntersection: a.numIntersection,
        dithering: i.dithering,
        shadowMapEnabled: e.shadowMap.enabled && m.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: i.toneMapped ? e.toneMapping : NoToneMapping,
        physicallyCorrectLights: e.physicallyCorrectLights,
        premultipliedAlpha: i.premultipliedAlpha,
        alphaTest: i.alphaTest,
        doubleSided: i.side === DoubleSide,
        flipSided: i.side === BackSide,
        depthPacking: void 0 !== i.depthPacking && i.depthPacking,
        index0AttributeName: i.index0AttributeName,
        extensionDerivatives: i.extensions && i.extensions.derivatives,
        extensionFragDepth: i.extensions && i.extensions.fragDepth,
        extensionDrawBuffers: i.extensions && i.extensions.drawBuffers,
        extensionShaderTextureLOD:
          i.extensions && i.extensions.shaderTextureLOD,
        rendererExtensionFragDepth: s || r.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: s || r.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: s || r.has("EXT_shader_texture_lod"),
        customProgramCacheKey: i.customProgramCacheKey(),
      };
    },
    getProgramCacheKey: function (t) {
      const r = [];
      if (
        (t.shaderID
          ? r.push(t.shaderID)
          : (r.push(t.fragmentShader), r.push(t.vertexShader)),
        void 0 !== t.defines)
      )
        for (const e in t.defines) r.push(e), r.push(t.defines[e]);
      if (!1 === t.isRawShaderMaterial) {
        for (let e = 0; e < m.length; e++) r.push(t[m[e]]);
        r.push(e.outputEncoding), r.push(e.gammaFactor);
      }
      return r.push(t.customProgramCacheKey), r.join();
    },
    getUniforms: function (e) {
      const t = p[e.type];
      let r;
      if (t) {
        const e = ShaderLib[t];
        r = UniformsUtils.clone(e.uniforms);
      } else r = e.uniforms;
      return r;
    },
    acquireProgram: function (t, r) {
      let n;
      for (let e = 0, t = o.length; e < t; e++) {
        const t = o[e];
        if (t.cacheKey === r) {
          ++(n = t).usedTimes;
          break;
        }
      }
      return void 0 === n && ((n = new WebGLProgram(e, r, t, i)), o.push(n)), n;
    },
    releaseProgram: function (e) {
      if (0 == --e.usedTimes) {
        const t = o.indexOf(e);
        (o[t] = o[o.length - 1]), o.pop(), e.destroy();
      }
    },
    programs: o,
  };
}
function WebGLProperties() {
  let e = new WeakMap();
  return {
    get: function (t) {
      let r = e.get(t);
      return void 0 === r && ((r = {}), e.set(t, r)), r;
    },
    remove: function (t) {
      e.delete(t);
    },
    update: function (t, r, n) {
      e.get(t)[r] = n;
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function painterSortStable(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.program !== t.program
    ? e.program.id - t.program.id
    : e.material.id !== t.material.id
    ? e.material.id - t.material.id
    : e.z !== t.z
    ? e.z - t.z
    : e.id - t.id;
}
function reversePainterSortStable(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.z !== t.z
    ? t.z - e.z
    : e.id - t.id;
}
function WebGLRenderList(e) {
  const t = [];
  let r = 0;
  const n = [],
    i = [],
    a = { id: -1 };
  function o(n, i, o, s, l, c) {
    let h = t[r];
    const u = e.get(o);
    return (
      void 0 === h
        ? ((h = {
            id: n.id,
            object: n,
            geometry: i,
            material: o,
            program: u.program || a,
            groupOrder: s,
            renderOrder: n.renderOrder,
            z: l,
            group: c,
          }),
          (t[r] = h))
        : ((h.id = n.id),
          (h.object = n),
          (h.geometry = i),
          (h.material = o),
          (h.program = u.program || a),
          (h.groupOrder = s),
          (h.renderOrder = n.renderOrder),
          (h.z = l),
          (h.group = c)),
      r++,
      h
    );
  }
  return {
    opaque: n,
    transparent: i,
    init: function () {
      (r = 0), (n.length = 0), (i.length = 0);
    },
    push: function (e, t, r, a, s, l) {
      const c = o(e, t, r, a, s, l);
      (!0 === r.transparent ? i : n).push(c);
    },
    unshift: function (e, t, r, a, s, l) {
      const c = o(e, t, r, a, s, l);
      (!0 === r.transparent ? i : n).unshift(c);
    },
    finish: function () {
      for (let e = r, n = t.length; e < n; e++) {
        const r = t[e];
        if (null === r.id) break;
        (r.id = null),
          (r.object = null),
          (r.geometry = null),
          (r.material = null),
          (r.program = null),
          (r.group = null);
      }
    },
    sort: function (e, t) {
      n.length > 1 && n.sort(e || painterSortStable),
        i.length > 1 && i.sort(t || reversePainterSortStable);
    },
  };
}
function WebGLRenderLists(e) {
  let t = new WeakMap();
  return {
    get: function (r, n) {
      let i;
      return (
        !1 === t.has(r)
          ? ((i = new WebGLRenderList(e)), t.set(r, [i]))
          : n >= t.get(r).length
          ? ((i = new WebGLRenderList(e)), t.get(r).push(i))
          : (i = t.get(r)[n]),
        i
      );
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
function UniformsCache() {
  const e = {};
  return {
    get: function (t) {
      if (void 0 !== e[t.id]) return e[t.id];
      let r;
      switch (t.type) {
        case "DirectionalLight":
          r = { direction: new Vector3(), color: new Color() };
          break;
        case "SpotLight":
          r = {
            position: new Vector3(),
            direction: new Vector3(),
            color: new Color(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          r = {
            position: new Vector3(),
            color: new Color(),
            distance: 0,
            decay: 0,
          };
          break;
        case "HemisphereLight":
          r = {
            direction: new Vector3(),
            skyColor: new Color(),
            groundColor: new Color(),
          };
          break;
        case "RectAreaLight":
          r = {
            color: new Color(),
            position: new Vector3(),
            halfWidth: new Vector3(),
            halfHeight: new Vector3(),
          };
      }
      return (e[t.id] = r), r;
    },
  };
}
function ShadowUniformsCache() {
  const e = {};
  return {
    get: function (t) {
      if (void 0 !== e[t.id]) return e[t.id];
      let r;
      switch (t.type) {
        case "DirectionalLight":
        case "SpotLight":
          r = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
          };
          break;
        case "PointLight":
          r = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
      }
      return (e[t.id] = r), r;
    },
  };
}
let nextVersion = 0;
function shadowCastingLightsFirst(e, t) {
  return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
}
function WebGLLights(e, t) {
  const r = new UniformsCache(),
    n = ShadowUniformsCache(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let e = 0; e < 9; e++) i.probe.push(new Vector3());
  const a = new Vector3(),
    o = new Matrix4(),
    s = new Matrix4();
  return {
    setup: function (a) {
      let o = 0,
        s = 0,
        l = 0;
      for (let e = 0; e < 9; e++) i.probe[e].set(0, 0, 0);
      let c = 0,
        h = 0,
        u = 0,
        d = 0,
        p = 0,
        m = 0,
        f = 0,
        g = 0;
      a.sort(shadowCastingLightsFirst);
      for (let e = 0, t = a.length; e < t; e++) {
        const t = a[e],
          _ = t.color,
          v = t.intensity,
          y = t.distance,
          x = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
        if (t.isAmbientLight) (o += _.r * v), (s += _.g * v), (l += _.b * v);
        else if (t.isLightProbe)
          for (let e = 0; e < 9; e++)
            i.probe[e].addScaledVector(t.sh.coefficients[e], v);
        else if (t.isDirectionalLight) {
          const e = r.get(t);
          if (
            (e.color.copy(t.color).multiplyScalar(t.intensity), t.castShadow)
          ) {
            const e = t.shadow,
              r = n.get(t);
            (r.shadowBias = e.bias),
              (r.shadowNormalBias = e.normalBias),
              (r.shadowRadius = e.radius),
              (r.shadowMapSize = e.mapSize),
              (i.directionalShadow[c] = r),
              (i.directionalShadowMap[c] = x),
              (i.directionalShadowMatrix[c] = t.shadow.matrix),
              m++;
          }
          (i.directional[c] = e), c++;
        } else if (t.isSpotLight) {
          const e = r.get(t);
          if (
            (e.position.setFromMatrixPosition(t.matrixWorld),
            e.color.copy(_).multiplyScalar(v),
            (e.distance = y),
            (e.coneCos = Math.cos(t.angle)),
            (e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra))),
            (e.decay = t.decay),
            t.castShadow)
          ) {
            const e = t.shadow,
              r = n.get(t);
            (r.shadowBias = e.bias),
              (r.shadowNormalBias = e.normalBias),
              (r.shadowRadius = e.radius),
              (r.shadowMapSize = e.mapSize),
              (i.spotShadow[u] = r),
              (i.spotShadowMap[u] = x),
              (i.spotShadowMatrix[u] = t.shadow.matrix),
              g++;
          }
          (i.spot[u] = e), u++;
        } else if (t.isRectAreaLight) {
          const e = r.get(t);
          e.color.copy(_).multiplyScalar(v),
            e.halfWidth.set(0.5 * t.width, 0, 0),
            e.halfHeight.set(0, 0.5 * t.height, 0),
            (i.rectArea[d] = e),
            d++;
        } else if (t.isPointLight) {
          const e = r.get(t);
          if (
            (e.color.copy(t.color).multiplyScalar(t.intensity),
            (e.distance = t.distance),
            (e.decay = t.decay),
            t.castShadow)
          ) {
            const e = t.shadow,
              r = n.get(t);
            (r.shadowBias = e.bias),
              (r.shadowNormalBias = e.normalBias),
              (r.shadowRadius = e.radius),
              (r.shadowMapSize = e.mapSize),
              (r.shadowCameraNear = e.camera.near),
              (r.shadowCameraFar = e.camera.far),
              (i.pointShadow[h] = r),
              (i.pointShadowMap[h] = x),
              (i.pointShadowMatrix[h] = t.shadow.matrix),
              f++;
          }
          (i.point[h] = e), h++;
        } else if (t.isHemisphereLight) {
          const e = r.get(t);
          e.skyColor.copy(t.color).multiplyScalar(v),
            e.groundColor.copy(t.groundColor).multiplyScalar(v),
            (i.hemi[p] = e),
            p++;
        }
      }
      d > 0 &&
        (t.isWebGL2
          ? ((i.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1),
            (i.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2))
          : !0 === e.has("OES_texture_float_linear")
          ? ((i.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1),
            (i.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2))
          : !0 === e.has("OES_texture_half_float_linear")
          ? ((i.rectAreaLTC1 = UniformsLib.LTC_HALF_1),
            (i.rectAreaLTC2 = UniformsLib.LTC_HALF_2))
          : console.error(
              "MYGLAPI.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
            )),
        (i.ambient[0] = o),
        (i.ambient[1] = s),
        (i.ambient[2] = l);
      const _ = i.hash;
      (_.directionalLength === c &&
        _.pointLength === h &&
        _.spotLength === u &&
        _.rectAreaLength === d &&
        _.hemiLength === p &&
        _.numDirectionalShadows === m &&
        _.numPointShadows === f &&
        _.numSpotShadows === g) ||
        ((i.directional.length = c),
        (i.spot.length = u),
        (i.rectArea.length = d),
        (i.point.length = h),
        (i.hemi.length = p),
        (i.directionalShadow.length = m),
        (i.directionalShadowMap.length = m),
        (i.pointShadow.length = f),
        (i.pointShadowMap.length = f),
        (i.spotShadow.length = g),
        (i.spotShadowMap.length = g),
        (i.directionalShadowMatrix.length = m),
        (i.pointShadowMatrix.length = f),
        (i.spotShadowMatrix.length = g),
        (_.directionalLength = c),
        (_.pointLength = h),
        (_.spotLength = u),
        (_.rectAreaLength = d),
        (_.hemiLength = p),
        (_.numDirectionalShadows = m),
        (_.numPointShadows = f),
        (_.numSpotShadows = g),
        (i.version = nextVersion++));
    },
    setupView: function (e, t) {
      let r = 0,
        n = 0,
        l = 0,
        c = 0,
        h = 0;
      const u = t.matrixWorldInverse;
      for (let t = 0, d = e.length; t < d; t++) {
        const d = e[t];
        if (d.isDirectionalLight) {
          const e = i.directional[r];
          e.direction.setFromMatrixPosition(d.matrixWorld),
            a.setFromMatrixPosition(d.target.matrixWorld),
            e.direction.sub(a),
            e.direction.transformDirection(u),
            r++;
        } else if (d.isSpotLight) {
          const e = i.spot[l];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            e.direction.setFromMatrixPosition(d.matrixWorld),
            a.setFromMatrixPosition(d.target.matrixWorld),
            e.direction.sub(a),
            e.direction.transformDirection(u),
            l++;
        } else if (d.isRectAreaLight) {
          const e = i.rectArea[c];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            s.identity(),
            o.copy(d.matrixWorld),
            o.premultiply(u),
            s.extractRotation(o),
            e.halfWidth.set(0.5 * d.width, 0, 0),
            e.halfHeight.set(0, 0.5 * d.height, 0),
            e.halfWidth.applyMatrix4(s),
            e.halfHeight.applyMatrix4(s),
            c++;
        } else if (d.isPointLight) {
          const e = i.point[n];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            n++;
        } else if (d.isHemisphereLight) {
          const e = i.hemi[h];
          e.direction.setFromMatrixPosition(d.matrixWorld),
            e.direction.transformDirection(u),
            e.direction.normalize(),
            h++;
        }
      }
    },
    state: i,
  };
}
function WebGLRenderState(e, t) {
  const r = new WebGLLights(e, t),
    n = [],
    i = [];
  return {
    init: function () {
      (n.length = 0), (i.length = 0);
    },
    state: { lightsArray: n, shadowsArray: i, lights: r },
    setupLights: function () {
      r.setup(n);
    },
    setupLightsView: function (e) {
      r.setupView(n, e);
    },
    pushLight: function (e) {
      n.push(e);
    },
    pushShadow: function (e) {
      i.push(e);
    },
  };
}
function WebGLRenderStates(e, t) {
  let r = new WeakMap();
  return {
    get: function (n, i = 0) {
      let a;
      return (
        !1 === r.has(n)
          ? ((a = new WebGLRenderState(e, t)), r.set(n, [a]))
          : i >= r.get(n).length
          ? ((a = new WebGLRenderState(e, t)), r.get(n).push(a))
          : (a = r.get(n)[i]),
        a
      );
    },
    dispose: function () {
      r = new WeakMap();
    },
  };
}
class MeshDepthMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = BasicDepthPacking),
      (this.morphTargets = !1),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.morphTargets = e.morphTargets),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
MeshDepthMaterial.prototype.isMeshDepthMaterial = !0;
class MeshDistanceMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new Vector3()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.morphTargets = !1),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.fog = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.morphTargets = e.morphTargets),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
MeshDistanceMaterial.prototype.isMeshDistanceMaterial = !0;
var vsm_frag =
    "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
  vsm_vert = "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}";
function WebGLShadowMap(e, t, r) {
  let n = new Frustum();
  const i = new Vector2(),
    a = new Vector2(),
    o = new Vector4(),
    s = [],
    l = [],
    c = {},
    h = r.maxTextureSize,
    u = { 0: BackSide, 1: FrontSide, 2: DoubleSide },
    d = new ShaderMaterial({
      defines: { SAMPLE_RATE: 0.25, HALF_SAMPLE_RATE: 1 / 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Vector2() },
        radius: { value: 4 },
      },
      vertexShader: vsm_vert,
      fragmentShader: vsm_frag,
    }),
    p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const m = new BufferGeometry();
  m.setAttribute(
    "position",
    new BufferAttribute(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const f = new Mesh(m, d),
    g = this;
  function _(r, n) {
    const i = t.update(f);
    (d.uniforms.shadow_pass.value = r.map.texture),
      (d.uniforms.resolution.value = r.mapSize),
      (d.uniforms.radius.value = r.radius),
      e.setRenderTarget(r.mapPass),
      e.clear(),
      e.renderBufferDirect(n, null, i, d, f, null),
      (p.uniforms.shadow_pass.value = r.mapPass.texture),
      (p.uniforms.resolution.value = r.mapSize),
      (p.uniforms.radius.value = r.radius),
      e.setRenderTarget(r.map),
      e.clear(),
      e.renderBufferDirect(n, null, i, p, f, null);
  }
  function v(e) {
    const t = e << 0;
    let r = s[t];
    return (
      void 0 === r &&
        ((r = new MeshDepthMaterial({
          depthPacking: RGBADepthPacking,
          morphTargets: e,
        })),
        (s[t] = r)),
      r
    );
  }
  function y(e) {
    const t = e << 0;
    let r = l[t];
    return (
      void 0 === r &&
        ((r = new MeshDistanceMaterial({ morphTargets: e })), (l[t] = r)),
      r
    );
  }
  function x(t, r, n, i, a, o, s) {
    let l = null,
      h = v,
      d = t.customDepthMaterial;
    if (
      (!0 === i.isPointLight && ((h = y), (d = t.customDistanceMaterial)),
      void 0 === d)
    ) {
      let e = !1;
      !0 === n.morphTargets &&
        (e =
          r.morphAttributes &&
          r.morphAttributes.position &&
          r.morphAttributes.position.length > 0),
        (l = h(e));
    } else l = d;
    if (
      e.localClippingEnabled &&
      !0 === n.clipShadows &&
      0 !== n.clippingPlanes.length
    ) {
      const e = l.uuid,
        t = n.uuid;
      let r = c[e];
      void 0 === r && ((r = {}), (c[e] = r));
      let i = r[t];
      void 0 === i && ((i = l.clone()), (r[t] = i)), (l = i);
    }
    return (
      (l.visible = n.visible),
      (l.wireframe = n.wireframe),
      (l.side =
        s === VSMShadowMap
          ? null !== n.shadowSide
            ? n.shadowSide
            : n.side
          : null !== n.shadowSide
          ? n.shadowSide
          : u[n.side]),
      (l.clipShadows = n.clipShadows),
      (l.clippingPlanes = n.clippingPlanes),
      (l.clipIntersection = n.clipIntersection),
      (l.wireframeLinewidth = n.wireframeLinewidth),
      (l.linewidth = n.linewidth),
      !0 === i.isPointLight &&
        !0 === l.isMeshDistanceMaterial &&
        (l.referencePosition.setFromMatrixPosition(i.matrixWorld),
        (l.nearDistance = a),
        (l.farDistance = o)),
      l
    );
  }
  function b(r, i, a, o, s) {
    if (!1 === r.visible) return;
    if (
      r.layers.test(i.layers) &&
      (r.isMesh || r.isLine || r.isPoints) &&
      (r.castShadow || (r.receiveShadow && s === VSMShadowMap)) &&
      (!r.frustumCulled || n.intersectsObject(r))
    ) {
      r.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, r.matrixWorld);
      const n = t.update(r),
        i = r.material;
      if (Array.isArray(i)) {
        const t = n.groups;
        for (let l = 0, c = t.length; l < c; l++) {
          const c = t[l],
            h = i[c.materialIndex];
          if (h && h.visible) {
            const t = x(r, n, h, o, a.near, a.far, s);
            e.renderBufferDirect(a, null, n, t, r, c);
          }
        }
      } else if (i.visible) {
        const t = x(r, n, i, o, a.near, a.far, s);
        e.renderBufferDirect(a, null, n, t, r, null);
      }
    }
    const l = r.children;
    for (let e = 0, t = l.length; e < t; e++) b(l[e], i, a, o, s);
  }
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = PCFShadowMap),
    (this.render = function (t, r, s) {
      if (!1 === g.enabled) return;
      if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
      if (0 === t.length) return;
      const l = e.getRenderTarget(),
        c = e.getActiveCubeFace(),
        u = e.getActiveMipmapLevel(),
        d = e.state;
      d.setBlending(NoBlending),
        d.buffers.color.setClear(1, 1, 1, 1),
        d.buffers.depth.setTest(!0),
        d.setScissorTest(!1);
      for (let l = 0, c = t.length; l < c; l++) {
        const c = t[l],
          u = c.shadow;
        if (void 0 === u) {
          console.warn("MYGLAPI.WebGLShadowMap:", c, "has no shadow.");
          continue;
        }
        if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
        i.copy(u.mapSize);
        const p = u.getFrameExtents();
        if (
          (i.multiply(p),
          a.copy(u.mapSize),
          (i.x > h || i.y > h) &&
            (i.x > h &&
              ((a.x = Math.floor(h / p.x)),
              (i.x = a.x * p.x),
              (u.mapSize.x = a.x)),
            i.y > h &&
              ((a.y = Math.floor(h / p.y)),
              (i.y = a.y * p.y),
              (u.mapSize.y = a.y))),
          null === u.map && !u.isPointLightShadow && this.type === VSMShadowMap)
        ) {
          const e = {
            minFilter: LinearFilter,
            magFilter: LinearFilter,
            format: RGBAFormat,
          };
          (u.map = new WebGLRenderTarget(i.x, i.y, e)),
            (u.map.texture.name = c.name + ".shadowMap"),
            (u.mapPass = new WebGLRenderTarget(i.x, i.y, e)),
            u.camera.updateProjectionMatrix();
        }
        if (null === u.map) {
          const e = {
            minFilter: NearestFilter,
            magFilter: NearestFilter,
            format: RGBAFormat,
          };
          (u.map = new WebGLRenderTarget(i.x, i.y, e)),
            (u.map.texture.name = c.name + ".shadowMap"),
            u.camera.updateProjectionMatrix();
        }
        e.setRenderTarget(u.map), e.clear();
        const m = u.getViewportCount();
        for (let e = 0; e < m; e++) {
          const t = u.getViewport(e);
          o.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w),
            d.viewport(o),
            u.updateMatrices(c, e),
            (n = u.getFrustum()),
            b(r, s, u.camera, c, this.type);
        }
        u.isPointLightShadow || this.type !== VSMShadowMap || _(u, s),
          (u.needsUpdate = !1);
      }
      (g.needsUpdate = !1), e.setRenderTarget(l, c, u);
    });
}
function WebGLState(e, t, r) {
  const n = r.isWebGL2;
  const i = new (function () {
      let t = !1;
      const r = new Vector4();
      let n = null;
      const i = new Vector4(0, 0, 0, 0);
      return {
        setMask: function (r) {
          n === r || t || (e.colorMask(r, r, r, r), (n = r));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t, n, a, o, s) {
          !0 === s && ((t *= o), (n *= o), (a *= o)),
            r.set(t, n, a, o),
            !1 === i.equals(r) && (e.clearColor(t, n, a, o), i.copy(r));
        },
        reset: function () {
          (t = !1), (n = null), i.set(-1, 0, 0, 0);
        },
      };
    })(),
    a = new (function () {
      let t = !1,
        r = null,
        n = null,
        i = null;
      return {
        setTest: function (e) {
          e ? V(2929) : N(2929);
        },
        setMask: function (n) {
          r === n || t || (e.depthMask(n), (r = n));
        },
        setFunc: function (t) {
          if (n !== t) {
            if (t)
              switch (t) {
                case NeverDepth:
                  e.depthFunc(512);
                  break;
                case AlwaysDepth:
                  e.depthFunc(519);
                  break;
                case LessDepth:
                  e.depthFunc(513);
                  break;
                case LessEqualDepth:
                  e.depthFunc(515);
                  break;
                case EqualDepth:
                  e.depthFunc(514);
                  break;
                case GreaterEqualDepth:
                  e.depthFunc(518);
                  break;
                case GreaterDepth:
                  e.depthFunc(516);
                  break;
                case NotEqualDepth:
                  e.depthFunc(517);
                  break;
                default:
                  e.depthFunc(515);
              }
            else e.depthFunc(515);
            n = t;
          }
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          i !== t && (e.clearDepth(t), (i = t));
        },
        reset: function () {
          (t = !1), (r = null), (n = null), (i = null);
        },
      };
    })(),
    o = new (function () {
      let t = !1,
        r = null,
        n = null,
        i = null,
        a = null,
        o = null,
        s = null,
        l = null,
        c = null;
      return {
        setTest: function (e) {
          t || (e ? V(2960) : N(2960));
        },
        setMask: function (n) {
          r === n || t || (e.stencilMask(n), (r = n));
        },
        setFunc: function (t, r, o) {
          (n === t && i === r && a === o) ||
            (e.stencilFunc(t, r, o), (n = t), (i = r), (a = o));
        },
        setOp: function (t, r, n) {
          (o === t && s === r && l === n) ||
            (e.stencilOp(t, r, n), (o = t), (s = r), (l = n));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          c !== t && (e.clearStencil(t), (c = t));
        },
        reset: function () {
          (t = !1),
            (r = null),
            (n = null),
            (i = null),
            (a = null),
            (o = null),
            (s = null),
            (l = null),
            (c = null);
        },
      };
    })();
  let s = {},
    l = null,
    c = {},
    h = null,
    u = !1,
    d = null,
    p = null,
    m = null,
    f = null,
    g = null,
    _ = null,
    v = null,
    y = !1,
    x = null,
    b = null,
    M = null,
    w = null,
    S = null;
  const T = e.getParameter(35661);
  let E = !1,
    A = 0;
  const L = e.getParameter(7938);
  -1 !== L.indexOf("WebGL")
    ? ((A = parseFloat(/^WebGL (\d)/.exec(L)[1])), (E = A >= 1))
    : -1 !== L.indexOf("OpenGL ES") &&
      ((A = parseFloat(/^OpenGL ES (\d)/.exec(L)[1])), (E = A >= 2));
  let C = null,
    R = {};
  const P = e.getParameter(3088),
    B = e.getParameter(2978),
    D = new Vector4().fromArray(P),
    I = new Vector4().fromArray(B);
  function G(t, r, n) {
    const i = new Uint8Array(4),
      a = e.createTexture();
    e.bindTexture(t, a),
      e.texParameteri(t, 10241, 9728),
      e.texParameteri(t, 10240, 9728);
    for (let t = 0; t < n; t++)
      e.texImage2D(r + t, 0, 6408, 1, 1, 0, 6408, 5121, i);
    return a;
  }
  const F = {};
  function V(t) {
    !0 !== s[t] && (e.enable(t), (s[t] = !0));
  }
  function N(t) {
    !1 !== s[t] && (e.disable(t), (s[t] = !1));
  }
  (F[3553] = G(3553, 3553, 1)),
    (F[34067] = G(34067, 34069, 6)),
    i.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    V(2929),
    a.setFunc(LessEqualDepth),
    H(!1),
    k(CullFaceBack),
    V(2884),
    z(NoBlending);
  const U = {
    [AddEquation]: 32774,
    [SubtractEquation]: 32778,
    [ReverseSubtractEquation]: 32779,
  };
  if (n) (U[MinEquation] = 32775), (U[MaxEquation] = 32776);
  else {
    const e = t.get("EXT_blend_minmax");
    null !== e && ((U[MinEquation] = e.MIN_EXT), (U[MaxEquation] = e.MAX_EXT));
  }
  const O = {
    [ZeroFactor]: 0,
    [OneFactor]: 1,
    [SrcColorFactor]: 768,
    [SrcAlphaFactor]: 770,
    [SrcAlphaSaturateFactor]: 776,
    [DstColorFactor]: 774,
    [DstAlphaFactor]: 772,
    [OneMinusSrcColorFactor]: 769,
    [OneMinusSrcAlphaFactor]: 771,
    [OneMinusDstColorFactor]: 775,
    [OneMinusDstAlphaFactor]: 773,
  };
  function z(t, r, n, i, a, o, s, l) {
    if (t !== NoBlending) {
      if ((!1 === u && (V(3042), (u = !0)), t === CustomBlending))
        (a = a || r),
          (o = o || n),
          (s = s || i),
          (r === p && a === g) ||
            (e.blendEquationSeparate(U[r], U[a]), (p = r), (g = a)),
          (n === m && i === f && o === _ && s === v) ||
            (e.blendFuncSeparate(O[n], O[i], O[o], O[s]),
            (m = n),
            (f = i),
            (_ = o),
            (v = s)),
          (d = t),
          (y = null);
      else if (t !== d || l !== y) {
        if (
          ((p === AddEquation && g === AddEquation) ||
            (e.blendEquation(32774), (p = AddEquation), (g = AddEquation)),
          l)
        )
          switch (t) {
            case NormalBlending:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case AdditiveBlending:
              e.blendFunc(1, 1);
              break;
            case SubtractiveBlending:
              e.blendFuncSeparate(0, 0, 769, 771);
              break;
            case MultiplyBlending:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("MYGLAPI.WebGLState: Invalid blending: ", t);
          }
        else
          switch (t) {
            case NormalBlending:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case AdditiveBlending:
              e.blendFunc(770, 1);
              break;
            case SubtractiveBlending:
              e.blendFunc(0, 769);
              break;
            case MultiplyBlending:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("MYGLAPI.WebGLState: Invalid blending: ", t);
          }
        (m = null), (f = null), (_ = null), (v = null), (d = t), (y = l);
      }
    } else !0 === u && (N(3042), (u = !1));
  }
  function H(t) {
    x !== t && (t ? e.frontFace(2304) : e.frontFace(2305), (x = t));
  }
  function k(t) {
    t !== CullFaceNone
      ? (V(2884),
        t !== b &&
          (t === CullFaceBack
            ? e.cullFace(1029)
            : t === CullFaceFront
            ? e.cullFace(1028)
            : e.cullFace(1032)))
      : N(2884),
      (b = t);
  }
  function W(t, r, n) {
    t
      ? (V(32823),
        (w === r && S === n) || (e.polygonOffset(r, n), (w = r), (S = n)))
      : N(32823);
  }
  function j(t) {
    void 0 === t && (t = 33984 + T - 1),
      C !== t && (e.activeTexture(t), (C = t));
  }
  return {
    buffers: { color: i, depth: a, stencil: o },
    enable: V,
    disable: N,
    bindFramebuffer: function (t, r) {
      return (
        null === r && null !== l && (r = l),
        c[t] !== r &&
          (e.bindFramebuffer(t, r),
          (c[t] = r),
          n && (36009 === t && (c[36160] = r), 36160 === t && (c[36009] = r)),
          !0)
      );
    },
    bindXRFramebuffer: function (t) {
      t !== l && (e.bindFramebuffer(36160, t), (l = t));
    },
    useProgram: function (t) {
      return h !== t && (e.useProgram(t), (h = t), !0);
    },
    setBlending: z,
    setMaterial: function (e, t) {
      e.side === DoubleSide ? N(2884) : V(2884);
      let r = e.side === BackSide;
      t && (r = !r),
        H(r),
        e.blending === NormalBlending && !1 === e.transparent
          ? z(NoBlending)
          : z(
              e.blending,
              e.blendEquation,
              e.blendSrc,
              e.blendDst,
              e.blendEquationAlpha,
              e.blendSrcAlpha,
              e.blendDstAlpha,
              e.premultipliedAlpha
            ),
        a.setFunc(e.depthFunc),
        a.setTest(e.depthTest),
        a.setMask(e.depthWrite),
        i.setMask(e.colorWrite);
      const n = e.stencilWrite;
      o.setTest(n),
        n &&
          (o.setMask(e.stencilWriteMask),
          o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
          o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
        W(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
        !0 === e.alphaToCoverage ? V(32926) : N(32926);
    },
    setFlipSided: H,
    setCullFace: k,
    setLineWidth: function (t) {
      t !== M && (E && e.lineWidth(t), (M = t));
    },
    setPolygonOffset: W,
    setScissorTest: function (e) {
      e ? V(3089) : N(3089);
    },
    activeTexture: j,
    bindTexture: function (t, r) {
      null === C && j();
      let n = R[C];
      void 0 === n && ((n = { type: void 0, texture: void 0 }), (R[C] = n)),
        (n.type === t && n.texture === r) ||
          (e.bindTexture(t, r || F[t]), (n.type = t), (n.texture = r));
    },
    unbindTexture: function () {
      const t = R[C];
      void 0 !== t &&
        void 0 !== t.type &&
        (e.bindTexture(t.type, null), (t.type = void 0), (t.texture = void 0));
    },
    compressedTexImage2D: function () {
      try {
        e.compressedTexImage2D.apply(e, arguments);
      } catch (e) {
        console.error("MYGLAPI.WebGLState:", e);
      }
    },
    texImage2D: function () {
      try {
        e.texImage2D.apply(e, arguments);
      } catch (e) {
        console.error("MYGLAPI.WebGLState:", e);
      }
    },
    texImage3D: function () {
      try {
        e.texImage3D.apply(e, arguments);
      } catch (e) {
        console.error("MYGLAPI.WebGLState:", e);
      }
    },
    scissor: function (t) {
      !1 === D.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), D.copy(t));
    },
    viewport: function (t) {
      !1 === I.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), I.copy(t));
    },
    reset: function () {
      e.disable(3042),
        e.disable(2884),
        e.disable(2929),
        e.disable(32823),
        e.disable(3089),
        e.disable(2960),
        e.disable(32926),
        e.blendEquation(32774),
        e.blendFunc(1, 0),
        e.blendFuncSeparate(1, 0, 1, 0),
        e.colorMask(!0, !0, !0, !0),
        e.clearColor(0, 0, 0, 0),
        e.depthMask(!0),
        e.depthFunc(513),
        e.clearDepth(1),
        e.stencilMask(4294967295),
        e.stencilFunc(519, 0, 4294967295),
        e.stencilOp(7680, 7680, 7680),
        e.clearStencil(0),
        e.cullFace(1029),
        e.frontFace(2305),
        e.polygonOffset(0, 0),
        e.activeTexture(33984),
        e.bindFramebuffer(36160, null),
        !0 === n &&
          (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)),
        e.useProgram(null),
        e.lineWidth(1),
        e.scissor(0, 0, e.canvas.width, e.canvas.height),
        e.viewport(0, 0, e.canvas.width, e.canvas.height),
        (s = {}),
        (C = null),
        (R = {}),
        (l = null),
        (c = {}),
        (h = null),
        (u = !1),
        (d = null),
        (p = null),
        (m = null),
        (f = null),
        (g = null),
        (_ = null),
        (v = null),
        (y = !1),
        (x = null),
        (b = null),
        (M = null),
        (w = null),
        (S = null),
        D.set(0, 0, e.canvas.width, e.canvas.height),
        I.set(0, 0, e.canvas.width, e.canvas.height),
        i.reset(),
        a.reset(),
        o.reset();
    },
  };
}
function WebGLTextures(e, t, r, n, i, a, o) {
  const s = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    h = i.maxTextureSize,
    u = i.maxSamples,
    d = new WeakMap();
  let p,
    m = !1;
  try {
    m =
      "undefined" != typeof OffscreenCanvas &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (e) {}
  function f(e, t) {
    return m
      ? new OffscreenCanvas(e, t)
      : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  }
  function g(e, t, r, n) {
    let i = 1;
    if (
      ((e.width > n || e.height > n) && (i = n / Math.max(e.width, e.height)),
      i < 1 || !0 === t)
    ) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          e instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          e instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
      ) {
        const n = t ? floorPowerOfTwo : Math.floor,
          a = n(i * e.width),
          o = n(i * e.height);
        void 0 === p && (p = f(a, o));
        const s = r ? f(a, o) : p;
        return (
          (s.width = a),
          (s.height = o),
          s.getContext("2d").drawImage(e, 0, 0, a, o),
          console.warn(
            "MYGLAPI.WebGLRenderer: Texture has been resized from (" +
              e.width +
              "x" +
              e.height +
              ") to (" +
              a +
              "x" +
              o +
              ")."
          ),
          s
        );
      }
      return (
        "data" in e &&
          console.warn(
            "MYGLAPI.WebGLRenderer: Image in DataTexture is too big (" +
              e.width +
              "x" +
              e.height +
              ")."
          ),
        e
      );
    }
    return e;
  }
  function _(e) {
    return isPowerOfTwo(e.width) && isPowerOfTwo(e.height);
  }
  function v(e, t) {
    return (
      e.generateMipmaps &&
      t &&
      e.minFilter !== NearestFilter &&
      e.minFilter !== LinearFilter
    );
  }
  function y(t, r, i, a) {
    e.generateMipmap(t), (n.get(r).__maxMipLevel = Math.log2(Math.max(i, a)));
  }
  function x(r, n, i) {
    if (!1 === s) return n;
    if (null !== r) {
      if (void 0 !== e[r]) return e[r];
      console.warn(
        "MYGLAPI.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          r +
          "'"
      );
    }
    let a = n;
    return (
      6403 === n &&
        (5126 === i && (a = 33326),
        5131 === i && (a = 33325),
        5121 === i && (a = 33321)),
      6407 === n &&
        (5126 === i && (a = 34837),
        5131 === i && (a = 34843),
        5121 === i && (a = 32849)),
      6408 === n &&
        (5126 === i && (a = 34836),
        5131 === i && (a = 34842),
        5121 === i && (a = 32856)),
      (33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a) ||
        t.get("EXT_color_buffer_float"),
      a
    );
  }
  function b(e) {
    return e === NearestFilter ||
      e === NearestMipmapNearestFilter ||
      e === NearestMipmapLinearFilter
      ? 9728
      : 9729;
  }
  function M(t) {
    const r = t.target;
    r.removeEventListener("dispose", M),
      (function (t) {
        const r = n.get(t);
        if (void 0 === r.__webglInit) return;
        e.deleteTexture(r.__webglTexture), n.remove(t);
      })(r),
      r.isVideoTexture && d.delete(r),
      o.memory.textures--;
  }
  function w(t) {
    const r = t.target;
    r.removeEventListener("dispose", w),
      (function (t) {
        const r = t.texture,
          i = n.get(t),
          a = n.get(r);
        if (!t) return;
        void 0 !== a.__webglTexture &&
          (e.deleteTexture(a.__webglTexture), o.memory.textures--);
        t.depthTexture && t.depthTexture.dispose();
        if (t.isWebGLCubeRenderTarget)
          for (let t = 0; t < 6; t++)
            e.deleteFramebuffer(i.__webglFramebuffer[t]),
              i.__webglDepthbuffer &&
                e.deleteRenderbuffer(i.__webglDepthbuffer[t]);
        else
          e.deleteFramebuffer(i.__webglFramebuffer),
            i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer),
            i.__webglMultisampledFramebuffer &&
              e.deleteFramebuffer(i.__webglMultisampledFramebuffer),
            i.__webglColorRenderbuffer &&
              e.deleteRenderbuffer(i.__webglColorRenderbuffer),
            i.__webglDepthRenderbuffer &&
              e.deleteRenderbuffer(i.__webglDepthRenderbuffer);
        if (t.isWebGLMultipleRenderTargets)
          for (let t = 0, i = r.length; t < i; t++) {
            const i = n.get(r[t]);
            i.__webglTexture &&
              (e.deleteTexture(i.__webglTexture), o.memory.textures--),
              n.remove(r[t]);
          }
        n.remove(r), n.remove(t);
      })(r);
  }
  let S = 0;
  function T(e, t) {
    const i = n.get(e);
    if (
      (e.isVideoTexture &&
        (function (e) {
          const t = o.render.frame;
          d.get(e) !== t && (d.set(e, t), e.update());
        })(e),
      e.version > 0 && i.__version !== e.version)
    ) {
      const r = e.image;
      if (void 0 === r)
        console.warn(
          "MYGLAPI.WebGLRenderer: Texture marked for update but image is undefined"
        );
      else {
        if (!1 !== r.complete) return void P(i, e, t);
        console.warn(
          "MYGLAPI.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      }
    }
    r.activeTexture(33984 + t), r.bindTexture(3553, i.__webglTexture);
  }
  function E(t, i) {
    const o = n.get(t);
    t.version > 0 && o.__version !== t.version
      ? (function (t, n, i) {
          if (6 !== n.image.length) return;
          R(t, n),
            r.activeTexture(33984 + i),
            r.bindTexture(34067, t.__webglTexture),
            e.pixelStorei(37440, n.flipY),
            e.pixelStorei(37441, n.premultiplyAlpha),
            e.pixelStorei(3317, n.unpackAlignment),
            e.pixelStorei(37443, 0);
          const o =
              n && (n.isCompressedTexture || n.image[0].isCompressedTexture),
            l = n.image[0] && n.image[0].isDataTexture,
            h = [];
          for (let e = 0; e < 6; e++)
            h[e] =
              o || l
                ? l
                  ? n.image[e].image
                  : n.image[e]
                : g(n.image[e], !1, !0, c);
          const u = h[0],
            d = _(u) || s,
            p = a.convert(n.format),
            m = a.convert(n.type),
            f = x(n.internalFormat, p, m);
          let b;
          if ((C(34067, n, d), o)) {
            for (let e = 0; e < 6; e++) {
              b = h[e].mipmaps;
              for (let t = 0; t < b.length; t++) {
                const i = b[t];
                n.format !== RGBAFormat && n.format !== RGBFormat
                  ? null !== p
                    ? r.compressedTexImage2D(
                        34069 + e,
                        t,
                        f,
                        i.width,
                        i.height,
                        0,
                        i.data
                      )
                    : console.warn(
                        "MYGLAPI.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                      )
                  : r.texImage2D(
                      34069 + e,
                      t,
                      f,
                      i.width,
                      i.height,
                      0,
                      p,
                      m,
                      i.data
                    );
              }
            }
            t.__maxMipLevel = b.length - 1;
          } else {
            b = n.mipmaps;
            for (let e = 0; e < 6; e++)
              if (l) {
                r.texImage2D(
                  34069 + e,
                  0,
                  f,
                  h[e].width,
                  h[e].height,
                  0,
                  p,
                  m,
                  h[e].data
                );
                for (let t = 0; t < b.length; t++) {
                  const n = b[t],
                    i = n.image[e].image;
                  r.texImage2D(
                    34069 + e,
                    t + 1,
                    f,
                    i.width,
                    i.height,
                    0,
                    p,
                    m,
                    i.data
                  );
                }
              } else {
                r.texImage2D(34069 + e, 0, f, p, m, h[e]);
                for (let t = 0; t < b.length; t++) {
                  const n = b[t];
                  r.texImage2D(34069 + e, t + 1, f, p, m, n.image[e]);
                }
              }
            t.__maxMipLevel = b.length;
          }
          v(n, d) && y(34067, n, u.width, u.height);
          (t.__version = n.version), n.onUpdate && n.onUpdate(n);
        })(o, t, i)
      : (r.activeTexture(33984 + i), r.bindTexture(34067, o.__webglTexture));
  }
  const A = {
      [RepeatWrapping]: 10497,
      [ClampToEdgeWrapping]: 33071,
      [MirroredRepeatWrapping]: 33648,
    },
    L = {
      [NearestFilter]: 9728,
      [NearestMipmapNearestFilter]: 9984,
      [NearestMipmapLinearFilter]: 9986,
      [LinearFilter]: 9729,
      [LinearMipmapNearestFilter]: 9985,
      [LinearMipmapLinearFilter]: 9987,
    };
  function C(r, a, o) {
    if (
      (o
        ? (e.texParameteri(r, 10242, A[a.wrapS]),
          e.texParameteri(r, 10243, A[a.wrapT]),
          (32879 !== r && 35866 !== r) || e.texParameteri(r, 32882, A[a.wrapR]),
          e.texParameteri(r, 10240, L[a.magFilter]),
          e.texParameteri(r, 10241, L[a.minFilter]))
        : (e.texParameteri(r, 10242, 33071),
          e.texParameteri(r, 10243, 33071),
          (32879 !== r && 35866 !== r) || e.texParameteri(r, 32882, 33071),
          (a.wrapS === ClampToEdgeWrapping &&
            a.wrapT === ClampToEdgeWrapping) ||
            console.warn(
              "MYGLAPI.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to MYGLAPI.ClampToEdgeWrapping."
            ),
          e.texParameteri(r, 10240, b(a.magFilter)),
          e.texParameteri(r, 10241, b(a.minFilter)),
          a.minFilter !== NearestFilter &&
            a.minFilter !== LinearFilter &&
            console.warn(
              "MYGLAPI.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to MYGLAPI.NearestFilter or MYGLAPI.LinearFilter."
            )),
      !0 === t.has("EXT_texture_filter_anisotropic"))
    ) {
      const o = t.get("EXT_texture_filter_anisotropic");
      if (a.type === FloatType && !1 === t.has("OES_texture_float_linear"))
        return;
      if (
        !1 === s &&
        a.type === HalfFloatType &&
        !1 === t.has("OES_texture_half_float_linear")
      )
        return;
      (a.anisotropy > 1 || n.get(a).__currentAnisotropy) &&
        (e.texParameterf(
          r,
          o.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(a.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(a).__currentAnisotropy = a.anisotropy));
    }
  }
  function R(t, r) {
    void 0 === t.__webglInit &&
      ((t.__webglInit = !0),
      r.addEventListener("dispose", M),
      (t.__webglTexture = e.createTexture()),
      o.memory.textures++);
  }
  function P(t, n, i) {
    let o = 3553;
    n.isDataTexture2DArray && (o = 35866),
      n.isDataTexture3D && (o = 32879),
      R(t, n),
      r.activeTexture(33984 + i),
      r.bindTexture(o, t.__webglTexture),
      e.pixelStorei(37440, n.flipY),
      e.pixelStorei(37441, n.premultiplyAlpha),
      e.pixelStorei(3317, n.unpackAlignment),
      e.pixelStorei(37443, 0);
    const l =
        (function (e) {
          return (
            !s &&
            (e.wrapS !== ClampToEdgeWrapping ||
              e.wrapT !== ClampToEdgeWrapping ||
              (e.minFilter !== NearestFilter && e.minFilter !== LinearFilter))
          );
        })(n) && !1 === _(n.image),
      c = g(n.image, l, !1, h),
      u = _(c) || s,
      d = a.convert(n.format);
    let p,
      m = a.convert(n.type),
      f = x(n.internalFormat, d, m);
    C(o, n, u);
    const b = n.mipmaps;
    if (n.isDepthTexture)
      (f = 6402),
        s
          ? (f =
              n.type === FloatType
                ? 36012
                : n.type === UnsignedIntType
                ? 33190
                : n.type === UnsignedInt248Type
                ? 35056
                : 33189)
          : n.type === FloatType &&
            console.error(
              "WebGLRenderer: Floating point depth texture requires WebGL2."
            ),
        n.format === DepthFormat &&
          6402 === f &&
          n.type !== UnsignedShortType &&
          n.type !== UnsignedIntType &&
          (console.warn(
            "MYGLAPI.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
          ),
          (n.type = UnsignedShortType),
          (m = a.convert(n.type))),
        n.format === DepthStencilFormat &&
          6402 === f &&
          ((f = 34041),
          n.type !== UnsignedInt248Type &&
            (console.warn(
              "MYGLAPI.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
            ),
            (n.type = UnsignedInt248Type),
            (m = a.convert(n.type)))),
        r.texImage2D(3553, 0, f, c.width, c.height, 0, d, m, null);
    else if (n.isDataTexture)
      if (b.length > 0 && u) {
        for (let e = 0, t = b.length; e < t; e++)
          (p = b[e]),
            r.texImage2D(3553, e, f, p.width, p.height, 0, d, m, p.data);
        (n.generateMipmaps = !1), (t.__maxMipLevel = b.length - 1);
      } else
        r.texImage2D(3553, 0, f, c.width, c.height, 0, d, m, c.data),
          (t.__maxMipLevel = 0);
    else if (n.isCompressedTexture) {
      for (let e = 0, t = b.length; e < t; e++)
        (p = b[e]),
          n.format !== RGBAFormat && n.format !== RGBFormat
            ? null !== d
              ? r.compressedTexImage2D(3553, e, f, p.width, p.height, 0, p.data)
              : console.warn(
                  "MYGLAPI.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                )
            : r.texImage2D(3553, e, f, p.width, p.height, 0, d, m, p.data);
      t.__maxMipLevel = b.length - 1;
    } else if (n.isDataTexture2DArray)
      r.texImage3D(35866, 0, f, c.width, c.height, c.depth, 0, d, m, c.data),
        (t.__maxMipLevel = 0);
    else if (n.isDataTexture3D)
      r.texImage3D(32879, 0, f, c.width, c.height, c.depth, 0, d, m, c.data),
        (t.__maxMipLevel = 0);
    else if (b.length > 0 && u) {
      for (let e = 0, t = b.length; e < t; e++)
        (p = b[e]), r.texImage2D(3553, e, f, d, m, p);
      (n.generateMipmaps = !1), (t.__maxMipLevel = b.length - 1);
    } else r.texImage2D(3553, 0, f, d, m, c), (t.__maxMipLevel = 0);
    v(n, u) && y(o, n, c.width, c.height),
      (t.__version = n.version),
      n.onUpdate && n.onUpdate(n);
  }
  function B(t, i, o, s, l) {
    const c = a.convert(o.format),
      h = a.convert(o.type),
      u = x(o.internalFormat, c, h);
    32879 === l || 35866 === l
      ? r.texImage3D(l, 0, u, i.width, i.height, i.depth, 0, c, h, null)
      : r.texImage2D(l, 0, u, i.width, i.height, 0, c, h, null),
      r.bindFramebuffer(36160, t),
      e.framebufferTexture2D(36160, s, l, n.get(o).__webglTexture, 0),
      r.bindFramebuffer(36160, null);
  }
  function D(t, r, n) {
    if ((e.bindRenderbuffer(36161, t), r.depthBuffer && !r.stencilBuffer)) {
      let i = 33189;
      if (n) {
        const t = r.depthTexture;
        t &&
          t.isDepthTexture &&
          (t.type === FloatType
            ? (i = 36012)
            : t.type === UnsignedIntType && (i = 33190));
        const n = G(r);
        e.renderbufferStorageMultisample(36161, n, i, r.width, r.height);
      } else e.renderbufferStorage(36161, i, r.width, r.height);
      e.framebufferRenderbuffer(36160, 36096, 36161, t);
    } else if (r.depthBuffer && r.stencilBuffer) {
      if (n) {
        const t = G(r);
        e.renderbufferStorageMultisample(36161, t, 35056, r.width, r.height);
      } else e.renderbufferStorage(36161, 34041, r.width, r.height);
      e.framebufferRenderbuffer(36160, 33306, 36161, t);
    } else {
      const t =
          !0 === r.isWebGLMultipleRenderTargets ? r.texture[0] : r.texture,
        i = a.convert(t.format),
        o = a.convert(t.type),
        s = x(t.internalFormat, i, o);
      if (n) {
        const t = G(r);
        e.renderbufferStorageMultisample(36161, t, s, r.width, r.height);
      } else e.renderbufferStorage(36161, s, r.width, r.height);
    }
    e.bindRenderbuffer(36161, null);
  }
  function I(t) {
    const i = n.get(t),
      a = !0 === t.isWebGLCubeRenderTarget;
    if (t.depthTexture) {
      if (a)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      !(function (t, i) {
        if (i && i.isWebGLCubeRenderTarget)
          throw new Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (r.bindFramebuffer(36160, t),
          !i.depthTexture || !i.depthTexture.isDepthTexture)
        )
          throw new Error(
            "renderTarget.depthTexture must be an instance of MYGLAPI.DepthTexture"
          );
        (n.get(i.depthTexture).__webglTexture &&
          i.depthTexture.image.width === i.width &&
          i.depthTexture.image.height === i.height) ||
          ((i.depthTexture.image.width = i.width),
          (i.depthTexture.image.height = i.height),
          (i.depthTexture.needsUpdate = !0)),
          T(i.depthTexture, 0);
        const a = n.get(i.depthTexture).__webglTexture;
        if (i.depthTexture.format === DepthFormat)
          e.framebufferTexture2D(36160, 36096, 3553, a, 0);
        else {
          if (i.depthTexture.format !== DepthStencilFormat)
            throw new Error("Unknown depthTexture format");
          e.framebufferTexture2D(36160, 33306, 3553, a, 0);
        }
      })(i.__webglFramebuffer, t);
    } else if (a) {
      i.__webglDepthbuffer = [];
      for (let n = 0; n < 6; n++)
        r.bindFramebuffer(36160, i.__webglFramebuffer[n]),
          (i.__webglDepthbuffer[n] = e.createRenderbuffer()),
          D(i.__webglDepthbuffer[n], t, !1);
    } else
      r.bindFramebuffer(36160, i.__webglFramebuffer),
        (i.__webglDepthbuffer = e.createRenderbuffer()),
        D(i.__webglDepthbuffer, t, !1);
    r.bindFramebuffer(36160, null);
  }
  function G(e) {
    return s && e.isWebGLMultisampleRenderTarget ? Math.min(u, e.samples) : 0;
  }
  let F = !1,
    V = !1;
  (this.allocateTextureUnit = function () {
    const e = S;
    return (
      e >= l &&
        console.warn(
          "MYGLAPI.WebGLTextures: Trying to use " +
            e +
            " texture units while this GPU supports only " +
            l
        ),
      (S += 1),
      e
    );
  }),
    (this.resetTextureUnits = function () {
      S = 0;
    }),
    (this.setTexture2D = T),
    (this.setTexture2DArray = function (e, t) {
      const i = n.get(e);
      e.version > 0 && i.__version !== e.version
        ? P(i, e, t)
        : (r.activeTexture(33984 + t), r.bindTexture(35866, i.__webglTexture));
    }),
    (this.setTexture3D = function (e, t) {
      const i = n.get(e);
      e.version > 0 && i.__version !== e.version
        ? P(i, e, t)
        : (r.activeTexture(33984 + t), r.bindTexture(32879, i.__webglTexture));
    }),
    (this.setTextureCube = E),
    (this.setupRenderTarget = function (t) {
      const l = t.texture,
        c = n.get(t),
        h = n.get(l);
      t.addEventListener("dispose", w),
        !0 !== t.isWebGLMultipleRenderTargets &&
          ((h.__webglTexture = e.createTexture()),
          (h.__version = l.version),
          o.memory.textures++);
      const u = !0 === t.isWebGLCubeRenderTarget,
        d = !0 === t.isWebGLMultipleRenderTargets,
        p = !0 === t.isWebGLMultisampleRenderTarget,
        m = l.isDataTexture3D || l.isDataTexture2DArray,
        f = _(t) || s;
      if (
        (!s ||
          l.format !== RGBFormat ||
          (l.type !== FloatType && l.type !== HalfFloatType) ||
          ((l.format = RGBAFormat),
          console.warn(
            "MYGLAPI.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead."
          )),
        u)
      ) {
        c.__webglFramebuffer = [];
        for (let t = 0; t < 6; t++)
          c.__webglFramebuffer[t] = e.createFramebuffer();
      } else if (((c.__webglFramebuffer = e.createFramebuffer()), d))
        if (i.drawBuffers) {
          const r = t.texture;
          for (let t = 0, i = r.length; t < i; t++) {
            const i = n.get(r[t]);
            void 0 === i.__webglTexture &&
              ((i.__webglTexture = e.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "MYGLAPI.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      else if (p)
        if (s) {
          (c.__webglMultisampledFramebuffer = e.createFramebuffer()),
            (c.__webglColorRenderbuffer = e.createRenderbuffer()),
            e.bindRenderbuffer(36161, c.__webglColorRenderbuffer);
          const n = a.convert(l.format),
            i = a.convert(l.type),
            o = x(l.internalFormat, n, i),
            s = G(t);
          e.renderbufferStorageMultisample(36161, s, o, t.width, t.height),
            r.bindFramebuffer(36160, c.__webglMultisampledFramebuffer),
            e.framebufferRenderbuffer(
              36160,
              36064,
              36161,
              c.__webglColorRenderbuffer
            ),
            e.bindRenderbuffer(36161, null),
            t.depthBuffer &&
              ((c.__webglDepthRenderbuffer = e.createRenderbuffer()),
              D(c.__webglDepthRenderbuffer, t, !0)),
            r.bindFramebuffer(36160, null);
        } else
          console.warn(
            "MYGLAPI.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
          );
      if (u) {
        r.bindTexture(34067, h.__webglTexture), C(34067, l, f);
        for (let e = 0; e < 6; e++)
          B(c.__webglFramebuffer[e], t, l, 36064, 34069 + e);
        v(l, f) && y(34067, l, t.width, t.height), r.bindTexture(34067, null);
      } else if (d) {
        const e = t.texture;
        for (let i = 0, a = e.length; i < a; i++) {
          const a = e[i],
            o = n.get(a);
          r.bindTexture(3553, o.__webglTexture),
            C(3553, a, f),
            B(c.__webglFramebuffer, t, a, 36064 + i, 3553),
            v(a, f) && y(3553, a, t.width, t.height);
        }
        r.bindTexture(3553, null);
      } else {
        let e = 3553;
        m &&
          (s
            ? (e = l.isDataTexture3D ? 32879 : 35866)
            : console.warn(
                "MYGLAPI.DataTexture3D and MYGLAPI.DataTexture2DArray only supported with WebGL2."
              )),
          r.bindTexture(e, h.__webglTexture),
          C(e, l, f),
          B(c.__webglFramebuffer, t, l, 36064, e),
          v(l, f) && y(3553, l, t.width, t.height),
          r.bindTexture(3553, null);
      }
      t.depthBuffer && I(t);
    }),
    (this.updateRenderTargetMipmap = function (e) {
      const t = _(e) || s,
        i = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
      for (let a = 0, o = i.length; a < o; a++) {
        const o = i[a];
        if (v(o, t)) {
          const t = e.isWebGLCubeRenderTarget ? 34067 : 3553,
            i = n.get(o).__webglTexture;
          r.bindTexture(t, i),
            y(t, o, e.width, e.height),
            r.bindTexture(t, null);
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function (t) {
      if (t.isWebGLMultisampleRenderTarget)
        if (s) {
          const i = t.width,
            a = t.height;
          let o = 16384;
          t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024);
          const s = n.get(t);
          r.bindFramebuffer(36008, s.__webglMultisampledFramebuffer),
            r.bindFramebuffer(36009, s.__webglFramebuffer),
            e.blitFramebuffer(0, 0, i, a, 0, 0, i, a, o, 9728),
            r.bindFramebuffer(36008, null),
            r.bindFramebuffer(36009, s.__webglMultisampledFramebuffer);
        } else
          console.warn(
            "MYGLAPI.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
          );
    }),
    (this.safeSetTexture2D = function (e, t) {
      e &&
        e.isWebGLRenderTarget &&
        (!1 === F &&
          (console.warn(
            "MYGLAPI.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
          ),
          (F = !0)),
        (e = e.texture)),
        T(e, t);
    }),
    (this.safeSetTextureCube = function (e, t) {
      e &&
        e.isWebGLCubeRenderTarget &&
        (!1 === V &&
          (console.warn(
            "MYGLAPI.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
          ),
          (V = !0)),
        (e = e.texture)),
        E(e, t);
    });
}
function WebGLUtils(e, t, r) {
  const n = r.isWebGL2;
  return {
    convert: function (e) {
      let r;
      if (e === UnsignedByteType) return 5121;
      if (e === UnsignedShort4444Type) return 32819;
      if (e === UnsignedShort5551Type) return 32820;
      if (e === UnsignedShort565Type) return 33635;
      if (e === ByteType) return 5120;
      if (e === ShortType) return 5122;
      if (e === UnsignedShortType) return 5123;
      if (e === IntType) return 5124;
      if (e === UnsignedIntType) return 5125;
      if (e === FloatType) return 5126;
      if (e === HalfFloatType)
        return n
          ? 5131
          : null !== (r = t.get("OES_texture_half_float"))
          ? r.HALF_FLOAT_OES
          : null;
      if (e === AlphaFormat) return 6406;
      if (e === RGBFormat) return 6407;
      if (e === RGBAFormat) return 6408;
      if (e === LuminanceFormat) return 6409;
      if (e === LuminanceAlphaFormat) return 6410;
      if (e === DepthFormat) return 6402;
      if (e === DepthStencilFormat) return 34041;
      if (e === RedFormat) return 6403;
      if (e === RedIntegerFormat) return 36244;
      if (e === RGFormat) return 33319;
      if (e === RGIntegerFormat) return 33320;
      if (e === RGBIntegerFormat) return 36248;
      if (e === RGBAIntegerFormat) return 36249;
      if (
        e === RGB_S3TC_DXT1_Format ||
        e === RGBA_S3TC_DXT1_Format ||
        e === RGBA_S3TC_DXT3_Format ||
        e === RGBA_S3TC_DXT5_Format
      ) {
        if (null === (r = t.get("WEBGL_compressed_texture_s3tc"))) return null;
        if (e === RGB_S3TC_DXT1_Format) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (e === RGBA_S3TC_DXT1_Format) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (e === RGBA_S3TC_DXT3_Format) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (e === RGBA_S3TC_DXT5_Format) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (
        e === RGB_PVRTC_4BPPV1_Format ||
        e === RGB_PVRTC_2BPPV1_Format ||
        e === RGBA_PVRTC_4BPPV1_Format ||
        e === RGBA_PVRTC_2BPPV1_Format
      ) {
        if (null === (r = t.get("WEBGL_compressed_texture_pvrtc"))) return null;
        if (e === RGB_PVRTC_4BPPV1_Format)
          return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (e === RGB_PVRTC_2BPPV1_Format)
          return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (e === RGBA_PVRTC_4BPPV1_Format)
          return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (e === RGBA_PVRTC_2BPPV1_Format)
          return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (e === RGB_ETC1_Format)
        return null !== (r = t.get("WEBGL_compressed_texture_etc1"))
          ? r.COMPRESSED_RGB_ETC1_WEBGL
          : null;
      if (
        (e === RGB_ETC2_Format || e === RGBA_ETC2_EAC_Format) &&
        null !== (r = t.get("WEBGL_compressed_texture_etc"))
      ) {
        if (e === RGB_ETC2_Format) return r.COMPRESSED_RGB8_ETC2;
        if (e === RGBA_ETC2_EAC_Format) return r.COMPRESSED_RGBA8_ETC2_EAC;
      }
      return e === RGBA_ASTC_4x4_Format ||
        e === RGBA_ASTC_5x4_Format ||
        e === RGBA_ASTC_5x5_Format ||
        e === RGBA_ASTC_6x5_Format ||
        e === RGBA_ASTC_6x6_Format ||
        e === RGBA_ASTC_8x5_Format ||
        e === RGBA_ASTC_8x6_Format ||
        e === RGBA_ASTC_8x8_Format ||
        e === RGBA_ASTC_10x5_Format ||
        e === RGBA_ASTC_10x6_Format ||
        e === RGBA_ASTC_10x8_Format ||
        e === RGBA_ASTC_10x10_Format ||
        e === RGBA_ASTC_12x10_Format ||
        e === RGBA_ASTC_12x12_Format ||
        e === SRGB8_ALPHA8_ASTC_4x4_Format ||
        e === SRGB8_ALPHA8_ASTC_5x4_Format ||
        e === SRGB8_ALPHA8_ASTC_5x5_Format ||
        e === SRGB8_ALPHA8_ASTC_6x5_Format ||
        e === SRGB8_ALPHA8_ASTC_6x6_Format ||
        e === SRGB8_ALPHA8_ASTC_8x5_Format ||
        e === SRGB8_ALPHA8_ASTC_8x6_Format ||
        e === SRGB8_ALPHA8_ASTC_8x8_Format ||
        e === SRGB8_ALPHA8_ASTC_10x5_Format ||
        e === SRGB8_ALPHA8_ASTC_10x6_Format ||
        e === SRGB8_ALPHA8_ASTC_10x8_Format ||
        e === SRGB8_ALPHA8_ASTC_10x10_Format ||
        e === SRGB8_ALPHA8_ASTC_12x10_Format ||
        e === SRGB8_ALPHA8_ASTC_12x12_Format
        ? null !== (r = t.get("WEBGL_compressed_texture_astc"))
          ? e
          : null
        : e === RGBA_BPTC_Format
        ? null !== (r = t.get("EXT_texture_compression_bptc"))
          ? e
          : null
        : e === UnsignedInt248Type
        ? n
          ? 34042
          : null !== (r = t.get("WEBGL_depth_texture"))
          ? r.UNSIGNED_INT_24_8_WEBGL
          : null
        : void 0;
    },
  };
}
class ArrayCamera extends PerspectiveCamera {
  constructor(e = []) {
    super(), (this.cameras = e);
  }
}
ArrayCamera.prototype.isArrayCamera = !0;
class Group extends Object3D {
  constructor() {
    super(), (this.type = "Group");
  }
}
Group.prototype.isGroup = !0;
const _moveEvent = { type: "move" };
class WebXRController {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new Group()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new Group()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new Vector3()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new Vector3())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new Group()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new Vector3()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new Vector3())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(e),
      null !== this._grip && this._grip.dispatchEvent(e),
      null !== this._hand && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, r) {
    let n = null,
      i = null,
      a = null;
    const o = this._targetRay,
      s = this._grip,
      l = this._hand;
    if (e && "visible-blurred" !== t.session.visibilityState)
      if (
        (null !== o &&
          null !== (n = t.getPose(e.targetRaySpace, r)) &&
          (o.matrix.fromArray(n.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          n.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(n.linearVelocity))
            : (o.hasLinearVelocity = !1),
          n.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(n.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(_moveEvent)),
        l && e.hand)
      ) {
        a = !0;
        for (const n of e.hand.values()) {
          const e = t.getJointPose(n, r);
          if (void 0 === l.joints[n.jointName]) {
            const e = new Group();
            (e.matrixAutoUpdate = !1),
              (e.visible = !1),
              (l.joints[n.jointName] = e),
              l.add(e);
          }
          const i = l.joints[n.jointName];
          null !== e &&
            (i.matrix.fromArray(e.transform.matrix),
            i.matrix.decompose(i.position, i.rotation, i.scale),
            (i.jointRadius = e.radius)),
            (i.visible = null !== e);
        }
        const n = l.joints["index-finger-tip"],
          i = l.joints["thumb-tip"],
          o = n.position.distanceTo(i.position),
          s = 0.02,
          c = 0.005;
        l.inputState.pinching && o > s + c
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            o <= s - c &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        null !== s &&
          e.gripSpace &&
          null !== (i = t.getPose(e.gripSpace, r)) &&
          (s.matrix.fromArray(i.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          i.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(i.linearVelocity))
            : (s.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(i.angularVelocity))
            : (s.hasAngularVelocity = !1));
    return (
      null !== o && (o.visible = null !== n),
      null !== s && (s.visible = null !== i),
      null !== l && (l.visible = null !== a),
      this
    );
  }
}
class WebXRManager extends EventDispatcher {
  constructor(e, t) {
    super();
    const r = this,
      n = e.state;
    let i = null,
      a = 1,
      o = null,
      s = "local-floor",
      l = null;
    const c = [],
      h = new Map(),
      u = new PerspectiveCamera();
    u.layers.enable(1), (u.viewport = new Vector4());
    const d = new PerspectiveCamera();
    d.layers.enable(2), (d.viewport = new Vector4());
    const p = [u, d],
      m = new ArrayCamera();
    m.layers.enable(1), m.layers.enable(2);
    let f = null,
      g = null;
    function _(e) {
      const t = h.get(e.inputSource);
      t && t.dispatchEvent({ type: e.type, data: e.inputSource });
    }
    function v() {
      h.forEach(function (e, t) {
        e.disconnect(t);
      }),
        h.clear(),
        (f = null),
        (g = null),
        n.bindXRFramebuffer(null),
        e.setRenderTarget(e.getRenderTarget()),
        S.stop(),
        (r.isPresenting = !1),
        r.dispatchEvent({ type: "sessionend" });
    }
    function y(e) {
      const t = i.inputSources;
      for (let e = 0; e < c.length; e++) h.set(t[e], c[e]);
      for (let t = 0; t < e.removed.length; t++) {
        const r = e.removed[t],
          n = h.get(r);
        n && (n.dispatchEvent({ type: "disconnected", data: r }), h.delete(r));
      }
      for (let t = 0; t < e.added.length; t++) {
        const r = e.added[t],
          n = h.get(r);
        n && n.dispatchEvent({ type: "connected", data: r });
      }
    }
    (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (e) {
        let t = c[e];
        return (
          void 0 === t && ((t = new WebXRController()), (c[e] = t)),
          t.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (e) {
        let t = c[e];
        return (
          void 0 === t && ((t = new WebXRController()), (c[e] = t)),
          t.getGripSpace()
        );
      }),
      (this.getHand = function (e) {
        let t = c[e];
        return (
          void 0 === t && ((t = new WebXRController()), (c[e] = t)),
          t.getHandSpace()
        );
      }),
      (this.setFramebufferScaleFactor = function (e) {
        (a = e),
          !0 === r.isPresenting &&
            console.warn(
              "MYGLAPI.WebXRManager: Cannot change framebuffer scale while presenting."
            );
      }),
      (this.setReferenceSpaceType = function (e) {
        (s = e),
          !0 === r.isPresenting &&
            console.warn(
              "MYGLAPI.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return o;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (e) {
        if (null !== (i = e)) {
          i.addEventListener("select", _),
            i.addEventListener("selectstart", _),
            i.addEventListener("selectend", _),
            i.addEventListener("squeeze", _),
            i.addEventListener("squeezestart", _),
            i.addEventListener("squeezeend", _),
            i.addEventListener("end", v),
            i.addEventListener("inputsourceschange", y);
          const e = t.getContextAttributes();
          !0 !== e.xrCompatible && (await t.makeXRCompatible());
          const n = {
              antialias: e.antialias,
              alpha: e.alpha,
              depth: e.depth,
              stencil: e.stencil,
              framebufferScaleFactor: a,
            },
            l = new XRWebGLLayer(i, t, n);
          i.updateRenderState({ baseLayer: l }),
            (o = await i.requestReferenceSpace(s)),
            S.setContext(i),
            S.start(),
            (r.isPresenting = !0),
            r.dispatchEvent({ type: "sessionstart" });
        }
      });
    const x = new Vector3(),
      b = new Vector3();
    function M(e, t) {
      null === t
        ? e.matrixWorld.copy(e.matrix)
        : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
        e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }
    this.getCamera = function (e) {
      (m.near = d.near = u.near = e.near),
        (m.far = d.far = u.far = e.far),
        (f === m.near && g === m.far) ||
          (i.updateRenderState({ depthNear: m.near, depthFar: m.far }),
          (f = m.near),
          (g = m.far));
      const t = e.parent,
        r = m.cameras;
      M(m, t);
      for (let e = 0; e < r.length; e++) M(r[e], t);
      e.matrixWorld.copy(m.matrixWorld),
        e.matrix.copy(m.matrix),
        e.matrix.decompose(e.position, e.quaternion, e.scale);
      const n = e.children;
      for (let e = 0, t = n.length; e < t; e++) n[e].updateMatrixWorld(!0);
      return (
        2 === r.length
          ? (function (e, t, r) {
              x.setFromMatrixPosition(t.matrixWorld),
                b.setFromMatrixPosition(r.matrixWorld);
              const n = x.distanceTo(b),
                i = t.projectionMatrix.elements,
                a = r.projectionMatrix.elements,
                o = i[14] / (i[10] - 1),
                s = i[14] / (i[10] + 1),
                l = (i[9] + 1) / i[5],
                c = (i[9] - 1) / i[5],
                h = (i[8] - 1) / i[0],
                u = (a[8] + 1) / a[0],
                d = o * h,
                p = o * u,
                m = n / (-h + u),
                f = m * -h;
              t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                e.translateX(f),
                e.translateZ(m),
                e.matrixWorld.compose(e.position, e.quaternion, e.scale),
                e.matrixWorldInverse.copy(e.matrixWorld).invert();
              const g = o + m,
                _ = s + m,
                v = d - f,
                y = p + (n - f),
                M = ((l * s) / _) * g,
                w = ((c * s) / _) * g;
              e.projectionMatrix.makePerspective(v, y, M, w, g, _);
            })(m, u, d)
          : m.projectionMatrix.copy(u.projectionMatrix),
        m
      );
    };
    let w = null;
    const S = new WebGLAnimation();
    S.setAnimationLoop(function (e, t) {
      if (null !== (l = t.getViewerPose(o))) {
        const e = l.views,
          t = i.renderState.baseLayer;
        n.bindXRFramebuffer(t.framebuffer);
        let r = !1;
        e.length !== m.cameras.length && ((m.cameras.length = 0), (r = !0));
        for (let n = 0; n < e.length; n++) {
          const i = e[n],
            a = t.getViewport(i),
            o = p[n];
          o.matrix.fromArray(i.transform.matrix),
            o.projectionMatrix.fromArray(i.projectionMatrix),
            o.viewport.set(a.x, a.y, a.width, a.height),
            0 === n && m.matrix.copy(o.matrix),
            !0 === r && m.cameras.push(o);
        }
      }
      const r = i.inputSources;
      for (let e = 0; e < c.length; e++) {
        const n = c[e],
          i = r[e];
        n.update(i, t, o);
      }
      w && w(e, t);
    }),
      (this.setAnimationLoop = function (e) {
        w = e;
      }),
      (this.dispose = function () {});
  }
}
function WebGLMaterials(e) {
  function t(t, r) {
    (t.opacity.value = r.opacity),
      r.color && t.diffuse.value.copy(r.color),
      r.emissive &&
        t.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),
      r.map && (t.map.value = r.map),
      r.alphaMap && (t.alphaMap.value = r.alphaMap),
      r.specularMap && (t.specularMap.value = r.specularMap);
    const n = e.get(r).envMap;
    if (n) {
      (t.envMap.value = n),
        (t.flipEnvMap.value = n.isCubeTexture && n._needsFlipEnvMap ? -1 : 1),
        (t.reflectivity.value = r.reflectivity),
        (t.refractionRatio.value = r.refractionRatio);
      const i = e.get(n).__maxMipLevel;
      void 0 !== i && (t.maxMipLevel.value = i);
    }
    let i, a;
    r.lightMap &&
      ((t.lightMap.value = r.lightMap),
      (t.lightMapIntensity.value = r.lightMapIntensity)),
      r.aoMap &&
        ((t.aoMap.value = r.aoMap),
        (t.aoMapIntensity.value = r.aoMapIntensity)),
      r.map
        ? (i = r.map)
        : r.specularMap
        ? (i = r.specularMap)
        : r.displacementMap
        ? (i = r.displacementMap)
        : r.normalMap
        ? (i = r.normalMap)
        : r.bumpMap
        ? (i = r.bumpMap)
        : r.roughnessMap
        ? (i = r.roughnessMap)
        : r.metalnessMap
        ? (i = r.metalnessMap)
        : r.alphaMap
        ? (i = r.alphaMap)
        : r.emissiveMap
        ? (i = r.emissiveMap)
        : r.clearcoatMap
        ? (i = r.clearcoatMap)
        : r.clearcoatNormalMap
        ? (i = r.clearcoatNormalMap)
        : r.clearcoatRoughnessMap && (i = r.clearcoatRoughnessMap),
      void 0 !== i &&
        (i.isWebGLRenderTarget && (i = i.texture),
        !0 === i.matrixAutoUpdate && i.updateMatrix(),
        t.uvTransform.value.copy(i.matrix)),
      r.aoMap ? (a = r.aoMap) : r.lightMap && (a = r.lightMap),
      void 0 !== a &&
        (a.isWebGLRenderTarget && (a = a.texture),
        !0 === a.matrixAutoUpdate && a.updateMatrix(),
        t.uv2Transform.value.copy(a.matrix));
  }
  function r(t, r) {
    (t.roughness.value = r.roughness),
      (t.metalness.value = r.metalness),
      r.roughnessMap && (t.roughnessMap.value = r.roughnessMap),
      r.metalnessMap && (t.metalnessMap.value = r.metalnessMap),
      r.emissiveMap && (t.emissiveMap.value = r.emissiveMap),
      r.bumpMap &&
        ((t.bumpMap.value = r.bumpMap),
        (t.bumpScale.value = r.bumpScale),
        r.side === BackSide && (t.bumpScale.value *= -1)),
      r.normalMap &&
        ((t.normalMap.value = r.normalMap),
        t.normalScale.value.copy(r.normalScale),
        r.side === BackSide && t.normalScale.value.negate()),
      r.displacementMap &&
        ((t.displacementMap.value = r.displacementMap),
        (t.displacementScale.value = r.displacementScale),
        (t.displacementBias.value = r.displacementBias)),
      e.get(r).envMap && (t.envMapIntensity.value = r.envMapIntensity);
  }
  return {
    refreshFogUniforms: function (e, t) {
      e.fogColor.value.copy(t.color),
        t.isFog
          ? ((e.fogNear.value = t.near), (e.fogFar.value = t.far))
          : t.isFogExp2 && (e.fogDensity.value = t.density);
    },
    refreshMaterialUniforms: function (e, n, i, a) {
      n.isMeshBasicMaterial
        ? t(e, n)
        : n.isMeshLambertMaterial
        ? (t(e, n),
          (function (e, t) {
            t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
          })(e, n))
        : n.isMeshToonMaterial
        ? (t(e, n),
          (function (e, t) {
            t.gradientMap && (e.gradientMap.value = t.gradientMap),
              t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
              t.bumpMap &&
                ((e.bumpMap.value = t.bumpMap),
                (e.bumpScale.value = t.bumpScale),
                t.side === BackSide && (e.bumpScale.value *= -1)),
              t.normalMap &&
                ((e.normalMap.value = t.normalMap),
                e.normalScale.value.copy(t.normalScale),
                t.side === BackSide && e.normalScale.value.negate()),
              t.displacementMap &&
                ((e.displacementMap.value = t.displacementMap),
                (e.displacementScale.value = t.displacementScale),
                (e.displacementBias.value = t.displacementBias));
          })(e, n))
        : n.isMeshPhongMaterial
        ? (t(e, n),
          (function (e, t) {
            e.specular.value.copy(t.specular),
              (e.shininess.value = Math.max(t.shininess, 1e-4)),
              t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
              t.bumpMap &&
                ((e.bumpMap.value = t.bumpMap),
                (e.bumpScale.value = t.bumpScale),
                t.side === BackSide && (e.bumpScale.value *= -1)),
              t.normalMap &&
                ((e.normalMap.value = t.normalMap),
                e.normalScale.value.copy(t.normalScale),
                t.side === BackSide && e.normalScale.value.negate()),
              t.displacementMap &&
                ((e.displacementMap.value = t.displacementMap),
                (e.displacementScale.value = t.displacementScale),
                (e.displacementBias.value = t.displacementBias));
          })(e, n))
        : n.isMeshStandardMaterial
        ? (t(e, n),
          n.isMeshPhysicalMaterial
            ? (function (e, t) {
                r(e, t),
                  (e.reflectivity.value = t.reflectivity),
                  (e.clearcoat.value = t.clearcoat),
                  (e.clearcoatRoughness.value = t.clearcoatRoughness),
                  t.sheen && e.sheen.value.copy(t.sheen),
                  t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap),
                  t.clearcoatRoughnessMap &&
                    (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
                  t.clearcoatNormalMap &&
                    (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
                    (e.clearcoatNormalMap.value = t.clearcoatNormalMap),
                    t.side === BackSide &&
                      e.clearcoatNormalScale.value.negate()),
                  (e.transmission.value = t.transmission),
                  t.transmissionMap &&
                    (e.transmissionMap.value = t.transmissionMap);
              })(e, n)
            : r(e, n))
        : n.isMeshMatcapMaterial
        ? (t(e, n),
          (function (e, t) {
            t.matcap && (e.matcap.value = t.matcap),
              t.bumpMap &&
                ((e.bumpMap.value = t.bumpMap),
                (e.bumpScale.value = t.bumpScale),
                t.side === BackSide && (e.bumpScale.value *= -1)),
              t.normalMap &&
                ((e.normalMap.value = t.normalMap),
                e.normalScale.value.copy(t.normalScale),
                t.side === BackSide && e.normalScale.value.negate()),
              t.displacementMap &&
                ((e.displacementMap.value = t.displacementMap),
                (e.displacementScale.value = t.displacementScale),
                (e.displacementBias.value = t.displacementBias));
          })(e, n))
        : n.isMeshDepthMaterial
        ? (t(e, n),
          (function (e, t) {
            t.displacementMap &&
              ((e.displacementMap.value = t.displacementMap),
              (e.displacementScale.value = t.displacementScale),
              (e.displacementBias.value = t.displacementBias));
          })(e, n))
        : n.isMeshDistanceMaterial
        ? (t(e, n),
          (function (e, t) {
            t.displacementMap &&
              ((e.displacementMap.value = t.displacementMap),
              (e.displacementScale.value = t.displacementScale),
              (e.displacementBias.value = t.displacementBias)),
              e.referencePosition.value.copy(t.referencePosition),
              (e.nearDistance.value = t.nearDistance),
              (e.farDistance.value = t.farDistance);
          })(e, n))
        : n.isMeshNormalMaterial
        ? (t(e, n),
          (function (e, t) {
            t.bumpMap &&
              ((e.bumpMap.value = t.bumpMap),
              (e.bumpScale.value = t.bumpScale),
              t.side === BackSide && (e.bumpScale.value *= -1)),
              t.normalMap &&
                ((e.normalMap.value = t.normalMap),
                e.normalScale.value.copy(t.normalScale),
                t.side === BackSide && e.normalScale.value.negate()),
              t.displacementMap &&
                ((e.displacementMap.value = t.displacementMap),
                (e.displacementScale.value = t.displacementScale),
                (e.displacementBias.value = t.displacementBias));
          })(e, n))
        : n.isLineBasicMaterial
        ? ((function (e, t) {
            e.diffuse.value.copy(t.color), (e.opacity.value = t.opacity);
          })(e, n),
          n.isLineDashedMaterial &&
            (function (e, t) {
              (e.dashSize.value = t.dashSize),
                (e.totalSize.value = t.dashSize + t.gapSize),
                (e.scale.value = t.scale);
            })(e, n))
        : n.isPointsMaterial
        ? (function (e, t, r, n) {
            let i;
            e.diffuse.value.copy(t.color),
              (e.opacity.value = t.opacity),
              (e.size.value = t.size * r),
              (e.scale.value = 0.5 * n),
              t.map && (e.map.value = t.map),
              t.alphaMap && (e.alphaMap.value = t.alphaMap),
              t.map ? (i = t.map) : t.alphaMap && (i = t.alphaMap),
              void 0 !== i &&
                (!0 === i.matrixAutoUpdate && i.updateMatrix(),
                e.uvTransform.value.copy(i.matrix));
          })(e, n, i, a)
        : n.isSpriteMaterial
        ? (function (e, t) {
            let r;
            e.diffuse.value.copy(t.color),
              (e.opacity.value = t.opacity),
              (e.rotation.value = t.rotation),
              t.map && (e.map.value = t.map),
              t.alphaMap && (e.alphaMap.value = t.alphaMap),
              t.map ? (r = t.map) : t.alphaMap && (r = t.alphaMap),
              void 0 !== r &&
                (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                e.uvTransform.value.copy(r.matrix));
          })(e, n)
        : n.isShadowMaterial
        ? (e.color.value.copy(n.color), (e.opacity.value = n.opacity))
        : n.isShaderMaterial && (n.uniformsNeedUpdate = !1);
    },
  };
}
function createCanvasElement() {
  const e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  return (e.style.display = "block"), e;
}
function WebGLRenderer(e) {
  const t = void 0 !== (e = e || {}).canvas ? e.canvas : createCanvasElement(),
    r = void 0 !== e.context ? e.context : null,
    n = void 0 !== e.alpha && e.alpha,
    i = void 0 === e.depth || e.depth,
    a = void 0 === e.stencil || e.stencil,
    o = void 0 !== e.antialias && e.antialias,
    s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
    l = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
    c = void 0 !== e.powerPreference ? e.powerPreference : "default",
    h =
      void 0 !== e.failIfMajorPerformanceCaveat &&
      e.failIfMajorPerformanceCaveat;
  let u = null,
    d = null;
  const p = [],
    m = [];
  (this.domElement = t),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.gammaFactor = 2),
    (this.outputEncoding = LinearEncoding),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = NoToneMapping),
    (this.toneMappingExposure = 1);
  const f = this;
  let g = !1,
    _ = 0,
    v = 0,
    y = null,
    x = -1,
    b = null;
  const M = new Vector4(),
    w = new Vector4();
  let S = null,
    T = t.width,
    E = t.height,
    A = 1,
    L = null,
    C = null;
  const R = new Vector4(0, 0, T, E),
    P = new Vector4(0, 0, T, E);
  let B = !1;
  const D = [],
    I = new Frustum();
  let G = !1,
    F = !1;
  const V = new Matrix4(),
    N = new Vector3(),
    U = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function O() {
    return null === y ? A : 1;
  }
  let z,
    H,
    k,
    W,
    j,
    q,
    $,
    X,
    Y,
    Z,
    J,
    Q,
    K,
    ee,
    te,
    re,
    ne,
    ie,
    ae,
    oe,
    se,
    le,
    ce = r;
  function he(e, r) {
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        a = t.getContext(i, r);
      if (null !== a) return a;
    }
    return null;
  }
  try {
    const e = {
      alpha: n,
      depth: i,
      stencil: a,
      antialias: o,
      premultipliedAlpha: s,
      preserveDrawingBuffer: l,
      powerPreference: c,
      failIfMajorPerformanceCaveat: h,
    };
    if (
      (t.addEventListener("webglcontextlost", pe, !1),
      t.addEventListener("webglcontextrestored", me, !1),
      null === ce)
    ) {
      const t = ["webgl2", "webgl", "experimental-webgl"];
      if ((!0 === f.isWebGL1Renderer && t.shift(), null === (ce = he(t, e))))
        throw he(t)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    void 0 === ce.getShaderPrecisionFormat &&
      (ce.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (e) {
    throw (console.error("MYGLAPI.WebGLRenderer: " + e.message), e);
  }
  function ue() {
    (z = new WebGLExtensions(ce)),
      (H = new WebGLCapabilities(ce, z, e)),
      z.init(H),
      (se = new WebGLUtils(ce, z, H)),
      (k = new WebGLState(ce, z, H)),
      (D[0] = 1029),
      (W = new WebGLInfo(ce)),
      (j = new WebGLProperties()),
      (q = new WebGLTextures(ce, z, k, j, H, se, W)),
      ($ = new WebGLCubeMaps(f)),
      (X = new WebGLAttributes(ce, H)),
      (le = new WebGLBindingStates(ce, z, X, H)),
      (Y = new WebGLGeometries(ce, X, W, le)),
      (Z = new WebGLObjects(ce, Y, X, W)),
      (ie = new WebGLMorphtargets(ce)),
      (te = new WebGLClipping(j)),
      (J = new WebGLPrograms(f, $, z, H, le, te)),
      (Q = new WebGLMaterials(j)),
      (K = new WebGLRenderLists(j)),
      (ee = new WebGLRenderStates(z, H)),
      (ne = new WebGLBackground(f, $, k, Z, s)),
      (re = new WebGLShadowMap(f, Z, H)),
      (ae = new WebGLBufferRenderer(ce, z, W, H)),
      (oe = new WebGLIndexedBufferRenderer(ce, z, W, H)),
      (W.programs = J.programs),
      (f.capabilities = H),
      (f.extensions = z),
      (f.properties = j),
      (f.renderLists = K),
      (f.shadowMap = re),
      (f.state = k),
      (f.info = W);
  }
  ue();
  const de = new WebXRManager(f, ce);
  function pe(e) {
    e.preventDefault(),
      console.log("MYGLAPI.WebGLRenderer: Context Lost."),
      (g = !0);
  }
  function me() {
    console.log("MYGLAPI.WebGLRenderer: Context Restored."), (g = !1);
    const e = W.autoReset,
      t = re.enabled,
      r = re.autoUpdate,
      n = re.needsUpdate,
      i = re.type;
    ue(),
      (W.autoReset = e),
      (re.enabled = t),
      (re.autoUpdate = r),
      (re.needsUpdate = n),
      (re.type = i);
  }
  function fe(e) {
    const t = e.target;
    t.removeEventListener("dispose", fe),
      (function (e) {
        (function (e) {
          const t = j.get(e).programs;
          void 0 !== t &&
            t.forEach(function (e) {
              J.releaseProgram(e);
            });
        })(e),
          j.remove(e);
      })(t);
  }
  (this.xr = de),
    (this.getContext = function () {
      return ce;
    }),
    (this.getContextAttributes = function () {
      return ce.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const e = z.get("WEBGL_lose_context");
      e && e.loseContext();
    }),
    (this.forceContextRestore = function () {
      const e = z.get("WEBGL_lose_context");
      e && e.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return A;
    }),
    (this.setPixelRatio = function (e) {
      void 0 !== e && ((A = e), this.setSize(T, E, !1));
    }),
    (this.getSize = function (e) {
      return (
        void 0 === e &&
          (console.warn(
            "WebGLRenderer: .getsize() now requires a Vector2 as an argument"
          ),
          (e = new Vector2())),
        e.set(T, E)
      );
    }),
    (this.setSize = function (e, r, n) {
      de.isPresenting
        ? console.warn(
            "MYGLAPI.WebGLRenderer: Can't change size while VR device is presenting."
          )
        : ((T = e),
          (E = r),
          (t.width = Math.floor(e * A)),
          (t.height = Math.floor(r * A)),
          !1 !== n && ((t.style.width = e + "px"), (t.style.height = r + "px")),
          this.setViewport(0, 0, e, r));
    }),
    (this.getDrawingBufferSize = function (e) {
      return (
        void 0 === e &&
          (console.warn(
            "WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"
          ),
          (e = new Vector2())),
        e.set(T * A, E * A).floor()
      );
    }),
    (this.setDrawingBufferSize = function (e, r, n) {
      (T = e),
        (E = r),
        (A = n),
        (t.width = Math.floor(e * n)),
        (t.height = Math.floor(r * n)),
        this.setViewport(0, 0, e, r);
    }),
    (this.getCurrentViewport = function (e) {
      return (
        void 0 === e &&
          (console.warn(
            "WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"
          ),
          (e = new Vector4())),
        e.copy(M)
      );
    }),
    (this.getViewport = function (e) {
      return e.copy(R);
    }),
    (this.setViewport = function (e, t, r, n) {
      e.isVector4 ? R.set(e.x, e.y, e.z, e.w) : R.set(e, t, r, n),
        k.viewport(M.copy(R).multiplyScalar(A).floor());
    }),
    (this.getScissor = function (e) {
      return e.copy(P);
    }),
    (this.setScissor = function (e, t, r, n) {
      e.isVector4 ? P.set(e.x, e.y, e.z, e.w) : P.set(e, t, r, n),
        k.scissor(w.copy(P).multiplyScalar(A).floor());
    }),
    (this.getScissorTest = function () {
      return B;
    }),
    (this.setScissorTest = function (e) {
      k.setScissorTest((B = e));
    }),
    (this.setOpaqueSort = function (e) {
      L = e;
    }),
    (this.setTransparentSort = function (e) {
      C = e;
    }),
    (this.getClearColor = function (e) {
      return (
        void 0 === e &&
          (console.warn(
            "WebGLRenderer: .getClearColor() now requires a Color as an argument"
          ),
          (e = new Color())),
        e.copy(ne.getClearColor())
      );
    }),
    (this.setClearColor = function () {
      ne.setClearColor.apply(ne, arguments);
    }),
    (this.getClearAlpha = function () {
      return ne.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      ne.setClearAlpha.apply(ne, arguments);
    }),
    (this.clear = function (e, t, r) {
      let n = 0;
      (void 0 === e || e) && (n |= 16384),
        (void 0 === t || t) && (n |= 256),
        (void 0 === r || r) && (n |= 1024),
        ce.clear(n);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      t.removeEventListener("webglcontextlost", pe, !1),
        t.removeEventListener("webglcontextrestored", me, !1),
        K.dispose(),
        ee.dispose(),
        j.dispose(),
        $.dispose(),
        Z.dispose(),
        le.dispose(),
        de.dispose(),
        de.removeEventListener("sessionstart", _e),
        de.removeEventListener("sessionend", ve),
        ye.stop();
    }),
    (this.renderBufferImmediate = function (e, t) {
      le.initAttributes();
      const r = j.get(e);
      e.hasPositions && !r.position && (r.position = ce.createBuffer()),
        e.hasNormals && !r.normal && (r.normal = ce.createBuffer()),
        e.hasUvs && !r.uv && (r.uv = ce.createBuffer()),
        e.hasColors && !r.color && (r.color = ce.createBuffer());
      const n = t.getAttributes();
      e.hasPositions &&
        (ce.bindBuffer(34962, r.position),
        ce.bufferData(34962, e.positionArray, 35048),
        le.enableAttribute(n.position),
        ce.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)),
        e.hasNormals &&
          (ce.bindBuffer(34962, r.normal),
          ce.bufferData(34962, e.normalArray, 35048),
          le.enableAttribute(n.normal),
          ce.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)),
        e.hasUvs &&
          (ce.bindBuffer(34962, r.uv),
          ce.bufferData(34962, e.uvArray, 35048),
          le.enableAttribute(n.uv),
          ce.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)),
        e.hasColors &&
          (ce.bindBuffer(34962, r.color),
          ce.bufferData(34962, e.colorArray, 35048),
          le.enableAttribute(n.color),
          ce.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)),
        le.disableUnusedAttributes(),
        ce.drawArrays(4, 0, e.count),
        (e.count = 0);
    }),
    (this.renderBufferDirect = function (e, t, r, n, i, a) {
      null === t && (t = U);
      const o = i.isMesh && i.matrixWorld.determinant() < 0,
        s = Se(e, t, n, i);
      k.setMaterial(n, o);
      let l = r.index;
      const c = r.attributes.position;
      if (null === l) {
        if (void 0 === c || 0 === c.count) return;
      } else if (0 === l.count) return;
      let h,
        u = 1;
      !0 === n.wireframe && ((l = Y.getWireframeAttribute(r)), (u = 2)),
        (n.morphTargets || n.morphNormals) && ie.update(i, r, n, s),
        le.setup(i, n, s, r, l);
      let d = ae;
      null !== l && ((h = X.get(l)), (d = oe).setIndex(h));
      const p = null !== l ? l.count : c.count,
        m = r.drawRange.start * u,
        f = r.drawRange.count * u,
        g = null !== a ? a.start * u : 0,
        _ = null !== a ? a.count * u : 1 / 0,
        v = Math.max(m, g),
        y = Math.min(p, m + f, g + _) - 1,
        x = Math.max(0, y - v + 1);
      if (0 !== x) {
        if (i.isMesh)
          !0 === n.wireframe
            ? (k.setLineWidth(n.wireframeLinewidth * O()), d.setMode(1))
            : d.setMode(4);
        else if (i.isLine) {
          let e = n.linewidth;
          void 0 === e && (e = 1),
            k.setLineWidth(e * O()),
            i.isLineSegments
              ? d.setMode(1)
              : i.isLineLoop
              ? d.setMode(2)
              : d.setMode(3);
        } else i.isPoints ? d.setMode(0) : i.isSprite && d.setMode(4);
        if (i.isInstancedMesh) d.renderInstances(v, x, i.count);
        else if (r.isInstancedBufferGeometry) {
          const e = Math.min(r.instanceCount, r._maxInstanceCount);
          d.renderInstances(v, x, e);
        } else d.render(v, x);
      }
    }),
    (this.compile = function (e, t) {
      (d = ee.get(e)).init(),
        e.traverseVisible(function (e) {
          e.isLight &&
            e.layers.test(t.layers) &&
            (d.pushLight(e), e.castShadow && d.pushShadow(e));
        }),
        d.setupLights(),
        e.traverse(function (t) {
          const r = t.material;
          if (r)
            if (Array.isArray(r))
              for (let n = 0; n < r.length; n++) {
                Me(r[n], e, t);
              }
            else Me(r, e, t);
        });
    });
  let ge = null;
  function _e() {
    ye.stop();
  }
  function ve() {
    ye.start();
  }
  const ye = new WebGLAnimation();
  function xe(e, t, r) {
    const n = !0 === t.isScene ? t.overrideMaterial : null;
    for (let i = 0, a = e.length; i < a; i++) {
      const a = e[i],
        o = a.object,
        s = a.geometry,
        l = null === n ? a.material : n,
        c = a.group;
      if (r.isArrayCamera) {
        const e = r.cameras;
        for (let r = 0, n = e.length; r < n; r++) {
          const n = e[r];
          o.layers.test(n.layers) &&
            (k.viewport(M.copy(n.viewport)),
            d.setupLightsView(n),
            be(o, t, n, s, l, c));
        }
      } else be(o, t, r, s, l, c);
    }
  }
  function be(e, t, r, n, i, a) {
    if (
      (e.onBeforeRender(f, t, r, n, i, a),
      e.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, e.matrixWorld),
      e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
      e.isImmediateRenderObject)
    ) {
      const n = Se(r, t, i, e);
      k.setMaterial(i),
        le.reset(),
        (function (e, t) {
          e.render(function (e) {
            f.renderBufferImmediate(e, t);
          });
        })(e, n);
    } else f.renderBufferDirect(r, t, n, i, e, a);
    e.onAfterRender(f, t, r, n, i, a);
  }
  function Me(e, t, r) {
    !0 !== t.isScene && (t = U);
    const n = j.get(e),
      i = d.state.lights,
      a = d.state.shadowsArray,
      o = i.state.version,
      s = J.getParameters(e, i.state, a, t, r),
      l = J.getProgramCacheKey(s);
    let c = n.programs;
    (n.environment = e.isMeshStandardMaterial ? t.environment : null),
      (n.fog = t.fog),
      (n.envMap = $.get(e.envMap || n.environment)),
      void 0 === c &&
        (e.addEventListener("dispose", fe), (c = new Map()), (n.programs = c));
    let h = c.get(l);
    if (void 0 !== h) {
      if (n.currentProgram === h && n.lightsStateVersion === o)
        return we(e, s), h;
    } else
      (s.uniforms = J.getUniforms(e)),
        e.onBuild(s, f),
        e.onBeforeCompile(s, f),
        (h = J.acquireProgram(s, l)),
        c.set(l, h),
        (n.uniforms = s.uniforms);
    const u = n.uniforms;
    ((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping) ||
      (u.clippingPlanes = te.uniform),
      we(e, s),
      (n.needsLights = (function (e) {
        return (
          e.isMeshLambertMaterial ||
          e.isMeshToonMaterial ||
          e.isMeshPhongMaterial ||
          e.isMeshStandardMaterial ||
          e.isShadowMaterial ||
          (e.isShaderMaterial && !0 === e.lights)
        );
      })(e)),
      (n.lightsStateVersion = o),
      n.needsLights &&
        ((u.ambientLightColor.value = i.state.ambient),
        (u.lightProbe.value = i.state.probe),
        (u.directionalLights.value = i.state.directional),
        (u.directionalLightShadows.value = i.state.directionalShadow),
        (u.spotLights.value = i.state.spot),
        (u.spotLightShadows.value = i.state.spotShadow),
        (u.rectAreaLights.value = i.state.rectArea),
        (u.ltc_1.value = i.state.rectAreaLTC1),
        (u.ltc_2.value = i.state.rectAreaLTC2),
        (u.pointLights.value = i.state.point),
        (u.pointLightShadows.value = i.state.pointShadow),
        (u.hemisphereLights.value = i.state.hemi),
        (u.directionalShadowMap.value = i.state.directionalShadowMap),
        (u.directionalShadowMatrix.value = i.state.directionalShadowMatrix),
        (u.spotShadowMap.value = i.state.spotShadowMap),
        (u.spotShadowMatrix.value = i.state.spotShadowMatrix),
        (u.pointShadowMap.value = i.state.pointShadowMap),
        (u.pointShadowMatrix.value = i.state.pointShadowMatrix));
    const p = h.getUniforms(),
      m = WebGLUniforms.seqWithValue(p.seq, u);
    return (n.currentProgram = h), (n.uniformsList = m), h;
  }
  function we(e, t) {
    const r = j.get(e);
    (r.outputEncoding = t.outputEncoding),
      (r.instancing = t.instancing),
      (r.skinning = t.skinning),
      (r.numClippingPlanes = t.numClippingPlanes),
      (r.numIntersection = t.numClipIntersection),
      (r.vertexAlphas = t.vertexAlphas);
  }
  function Se(e, t, r, n) {
    !0 !== t.isScene && (t = U), q.resetTextureUnits();
    const i = t.fog,
      a = r.isMeshStandardMaterial ? t.environment : null,
      o = null === y ? f.outputEncoding : y.texture.encoding,
      s = $.get(r.envMap || a),
      l =
        !0 === r.vertexColors &&
        n.geometry &&
        n.geometry.attributes.color &&
        4 === n.geometry.attributes.color.itemSize,
      c = j.get(r),
      h = d.state.lights;
    if (!0 === G && (!0 === F || e !== b)) {
      const t = e === b && r.id === x;
      te.setState(r, e, t);
    }
    let u = !1;
    r.version === c.__version
      ? c.needsLights && c.lightsStateVersion !== h.state.version
        ? (u = !0)
        : c.outputEncoding !== o
        ? (u = !0)
        : n.isInstancedMesh && !1 === c.instancing
        ? (u = !0)
        : n.isInstancedMesh || !0 !== c.instancing
        ? n.isSkinnedMesh && !1 === c.skinning
          ? (u = !0)
          : n.isSkinnedMesh || !0 !== c.skinning
          ? c.envMap !== s
            ? (u = !0)
            : r.fog && c.fog !== i
            ? (u = !0)
            : void 0 === c.numClippingPlanes ||
              (c.numClippingPlanes === te.numPlanes &&
                c.numIntersection === te.numIntersection)
            ? c.vertexAlphas !== l && (u = !0)
            : (u = !0)
          : (u = !0)
        : (u = !0)
      : ((u = !0), (c.__version = r.version));
    let p = c.currentProgram;
    !0 === u && (p = Me(r, t, n));
    let m = !1,
      g = !1,
      _ = !1;
    const v = p.getUniforms(),
      M = c.uniforms;
    if (
      (k.useProgram(p.program) && ((m = !0), (g = !0), (_ = !0)),
      r.id !== x && ((x = r.id), (g = !0)),
      m || b !== e)
    ) {
      if (
        (v.setValue(ce, "projectionMatrix", e.projectionMatrix),
        H.logarithmicDepthBuffer &&
          v.setValue(ce, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)),
        b !== e && ((b = e), (g = !0), (_ = !0)),
        r.isShaderMaterial ||
          r.isMeshPhongMaterial ||
          r.isMeshToonMaterial ||
          r.isMeshStandardMaterial ||
          r.envMap)
      ) {
        const t = v.map.cameraPosition;
        void 0 !== t && t.setValue(ce, N.setFromMatrixPosition(e.matrixWorld));
      }
      (r.isMeshPhongMaterial ||
        r.isMeshToonMaterial ||
        r.isMeshLambertMaterial ||
        r.isMeshBasicMaterial ||
        r.isMeshStandardMaterial ||
        r.isShaderMaterial) &&
        v.setValue(ce, "isOrthographic", !0 === e.isOrthographicCamera),
        (r.isMeshPhongMaterial ||
          r.isMeshToonMaterial ||
          r.isMeshLambertMaterial ||
          r.isMeshBasicMaterial ||
          r.isMeshStandardMaterial ||
          r.isShaderMaterial ||
          r.isShadowMaterial ||
          n.isSkinnedMesh) &&
          v.setValue(ce, "viewMatrix", e.matrixWorldInverse);
    }
    if (n.isSkinnedMesh) {
      v.setOptional(ce, n, "bindMatrix"),
        v.setOptional(ce, n, "bindMatrixInverse");
      const e = n.skeleton;
      if (e) {
        const t = e.bones;
        if (H.floatVertexTextures) {
          if (null === e.boneTexture) {
            let r = Math.sqrt(4 * t.length);
            (r = ceilPowerOfTwo(r)), (r = Math.max(r, 4));
            const n = new Float32Array(r * r * 4);
            n.set(e.boneMatrices);
            const i = new DataTexture(n, r, r, RGBAFormat, FloatType);
            (e.boneMatrices = n), (e.boneTexture = i), (e.boneTextureSize = r);
          }
          v.setValue(ce, "boneTexture", e.boneTexture, q),
            v.setValue(ce, "boneTextureSize", e.boneTextureSize);
        } else v.setOptional(ce, e, "boneMatrices");
      }
    }
    var w, S;
    return (
      (g || c.receiveShadow !== n.receiveShadow) &&
        ((c.receiveShadow = n.receiveShadow),
        v.setValue(ce, "receiveShadow", n.receiveShadow)),
      g &&
        (v.setValue(ce, "toneMappingExposure", f.toneMappingExposure),
        c.needsLights &&
          ((S = _),
          ((w = M).ambientLightColor.needsUpdate = S),
          (w.lightProbe.needsUpdate = S),
          (w.directionalLights.needsUpdate = S),
          (w.directionalLightShadows.needsUpdate = S),
          (w.pointLights.needsUpdate = S),
          (w.pointLightShadows.needsUpdate = S),
          (w.spotLights.needsUpdate = S),
          (w.spotLightShadows.needsUpdate = S),
          (w.rectAreaLights.needsUpdate = S),
          (w.hemisphereLights.needsUpdate = S)),
        i && r.fog && Q.refreshFogUniforms(M, i),
        Q.refreshMaterialUniforms(M, r, A, E),
        WebGLUniforms.upload(ce, c.uniformsList, M, q)),
      r.isShaderMaterial &&
        !0 === r.uniformsNeedUpdate &&
        (WebGLUniforms.upload(ce, c.uniformsList, M, q),
        (r.uniformsNeedUpdate = !1)),
      r.isSpriteMaterial && v.setValue(ce, "center", n.center),
      v.setValue(ce, "modelViewMatrix", n.modelViewMatrix),
      v.setValue(ce, "normalMatrix", n.normalMatrix),
      v.setValue(ce, "modelMatrix", n.matrixWorld),
      p
    );
  }
  ye.setAnimationLoop(function (e) {
    ge && ge(e);
  }),
    "undefined" != typeof window && ye.setContext(window),
    (this.setAnimationLoop = function (e) {
      (ge = e), de.setAnimationLoop(e), null === e ? ye.stop() : ye.start();
    }),
    de.addEventListener("sessionstart", _e),
    de.addEventListener("sessionend", ve),
    (this.render = function (e, t) {
      if (void 0 !== t && !0 !== t.isCamera)
        return void console.error(
          "MYGLAPI.WebGLRenderer.render: camera is not an instance of MYGLAPI.Camera."
        );
      if (!0 === g) return;
      !0 === e.autoUpdate && e.updateMatrixWorld(),
        null === t.parent && t.updateMatrixWorld(),
        !0 === de.enabled && !0 === de.isPresenting && (t = de.getCamera(t)),
        !0 === e.isScene && e.onBeforeRender(f, e, t, y),
        (d = ee.get(e, m.length)).init(),
        m.push(d),
        V.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        I.setFromProjectionMatrix(V),
        (F = this.localClippingEnabled),
        (G = te.init(this.clippingPlanes, F, t)),
        (u = K.get(e, p.length)).init(),
        p.push(u),
        (function e(t, r, n, i) {
          if (!1 === t.visible) return;
          const a = t.layers.test(r.layers);
          if (a)
            if (t.isGroup) n = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(r);
            else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
            else if (t.isSprite) {
              if (!t.frustumCulled || I.intersectsSprite(t)) {
                i && N.setFromMatrixPosition(t.matrixWorld).applyMatrix4(V);
                const e = Z.update(t),
                  r = t.material;
                r.visible && u.push(t, e, r, n, N.z, null);
              }
            } else if (t.isImmediateRenderObject)
              i && N.setFromMatrixPosition(t.matrixWorld).applyMatrix4(V),
                u.push(t, null, t.material, n, N.z, null);
            else if (
              (t.isMesh || t.isLine || t.isPoints) &&
              (t.isSkinnedMesh &&
                t.skeleton.frame !== W.render.frame &&
                (t.skeleton.update(), (t.skeleton.frame = W.render.frame)),
              !t.frustumCulled || I.intersectsObject(t))
            ) {
              i && N.setFromMatrixPosition(t.matrixWorld).applyMatrix4(V);
              const e = Z.update(t),
                r = t.material;
              if (Array.isArray(r)) {
                const i = e.groups;
                for (let a = 0, o = i.length; a < o; a++) {
                  const o = i[a],
                    s = r[o.materialIndex];
                  s && s.visible && u.push(t, e, s, n, N.z, o);
                }
              } else r.visible && u.push(t, e, r, n, N.z, null);
            }
          const o = t.children;
          for (let t = 0, a = o.length; t < a; t++) e(o[t], r, n, i);
        })(e, t, 0, f.sortObjects),
        u.finish(),
        !0 === f.sortObjects && u.sort(L, C),
        !0 === G && te.beginShadows();
      const r = d.state.shadowsArray;
      re.render(r, e, t),
        d.setupLights(),
        d.setupLightsView(t),
        !0 === G && te.endShadows(),
        !0 === this.info.autoReset && this.info.reset(),
        ne.render(u, e);
      const n = u.opaque,
        i = u.transparent;
      n.length > 0 && xe(n, e, t),
        i.length > 0 && xe(i, e, t),
        null !== y &&
          (q.updateRenderTargetMipmap(y), q.updateMultisampleRenderTarget(y)),
        !0 === e.isScene && e.onAfterRender(f, e, t),
        k.buffers.depth.setTest(!0),
        k.buffers.depth.setMask(!0),
        k.buffers.color.setMask(!0),
        k.setPolygonOffset(!1),
        le.resetDefaultState(),
        (x = -1),
        (b = null),
        m.pop(),
        (d = m.length > 0 ? m[m.length - 1] : null),
        p.pop(),
        (u = p.length > 0 ? p[p.length - 1] : null);
    }),
    (this.getActiveCubeFace = function () {
      return _;
    }),
    (this.getActiveMipmapLevel = function () {
      return v;
    }),
    (this.getRenderTarget = function () {
      return y;
    }),
    (this.setRenderTarget = function (e, t = 0, r = 0) {
      (y = e),
        (_ = t),
        (v = r),
        e && void 0 === j.get(e).__webglFramebuffer && q.setupRenderTarget(e);
      let n = null,
        i = !1,
        a = !1;
      if (e) {
        const r = e.texture;
        (r.isDataTexture3D || r.isDataTexture2DArray) && (a = !0);
        const o = j.get(e).__webglFramebuffer;
        e.isWebGLCubeRenderTarget
          ? ((n = o[t]), (i = !0))
          : (n = e.isWebGLMultisampleRenderTarget
              ? j.get(e).__webglMultisampledFramebuffer
              : o),
          M.copy(e.viewport),
          w.copy(e.scissor),
          (S = e.scissorTest);
      } else
        M.copy(R).multiplyScalar(A).floor(),
          w.copy(P).multiplyScalar(A).floor(),
          (S = B);
      if (k.bindFramebuffer(36160, n) && H.drawBuffers) {
        let t = !1;
        if (e)
          if (e.isWebGLMultipleRenderTargets) {
            const r = e.texture;
            if (D.length !== r.length || 36064 !== D[0]) {
              for (let e = 0, t = r.length; e < t; e++) D[e] = 36064 + e;
              (D.length = r.length), (t = !0);
            }
          } else
            (1 === D.length && 36064 === D[0]) ||
              ((D[0] = 36064), (D.length = 1), (t = !0));
        else
          (1 === D.length && 1029 === D[0]) ||
            ((D[0] = 1029), (D.length = 1), (t = !0));
        t &&
          (H.isWebGL2
            ? ce.drawBuffers(D)
            : z.get("WEBGL_draw_buffers").drawBuffersWEBGL(D));
      }
      if ((k.viewport(M), k.scissor(w), k.setScissorTest(S), i)) {
        const n = j.get(e.texture);
        ce.framebufferTexture2D(36160, 36064, 34069 + t, n.__webglTexture, r);
      } else if (a) {
        const n = j.get(e.texture),
          i = t || 0;
        ce.framebufferTextureLayer(36160, 36064, n.__webglTexture, r || 0, i);
      }
    }),
    (this.readRenderTargetPixels = function (e, t, r, n, i, a, o) {
      if (!e || !e.isWebGLRenderTarget)
        return void console.error(
          "MYGLAPI.WebGLRenderer.readRenderTargetPixels: renderTarget is not MYGLAPI.WebGLRenderTarget."
        );
      let s = j.get(e).__webglFramebuffer;
      if ((e.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s)) {
        k.bindFramebuffer(36160, s);
        try {
          const o = e.texture,
            s = o.format,
            l = o.type;
          if (s !== RGBAFormat && se.convert(s) !== ce.getParameter(35739))
            return void console.error(
              "MYGLAPI.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
          const c =
            l === HalfFloatType &&
            (z.has("EXT_color_buffer_half_float") ||
              (H.isWebGL2 && z.has("EXT_color_buffer_float")));
          if (
            !(
              l === UnsignedByteType ||
              se.convert(l) === ce.getParameter(35738) ||
              (l === FloatType &&
                (H.isWebGL2 ||
                  z.has("OES_texture_float") ||
                  z.has("WEBGL_color_buffer_float"))) ||
              c
            )
          )
            return void console.error(
              "MYGLAPI.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
          36053 === ce.checkFramebufferStatus(36160)
            ? t >= 0 &&
              t <= e.width - n &&
              r >= 0 &&
              r <= e.height - i &&
              ce.readPixels(t, r, n, i, se.convert(s), se.convert(l), a)
            : console.error(
                "MYGLAPI.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
              );
        } finally {
          const e = null !== y ? j.get(y).__webglFramebuffer : null;
          k.bindFramebuffer(36160, e);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (e, t, r = 0) {
      const n = Math.pow(2, -r),
        i = Math.floor(t.image.width * n),
        a = Math.floor(t.image.height * n),
        o = se.convert(t.format);
      q.setTexture2D(t, 0),
        ce.copyTexImage2D(3553, r, o, e.x, e.y, i, a, 0),
        k.unbindTexture();
    }),
    (this.copyTextureToTexture = function (e, t, r, n = 0) {
      const i = t.image.width,
        a = t.image.height,
        o = se.convert(r.format),
        s = se.convert(r.type);
      q.setTexture2D(r, 0),
        ce.pixelStorei(37440, r.flipY),
        ce.pixelStorei(37441, r.premultiplyAlpha),
        ce.pixelStorei(3317, r.unpackAlignment),
        t.isDataTexture
          ? ce.texSubImage2D(3553, n, e.x, e.y, i, a, o, s, t.image.data)
          : t.isCompressedTexture
          ? ce.compressedTexSubImage2D(
              3553,
              n,
              e.x,
              e.y,
              t.mipmaps[0].width,
              t.mipmaps[0].height,
              o,
              t.mipmaps[0].data
            )
          : ce.texSubImage2D(3553, n, e.x, e.y, o, s, t.image),
        0 === n && r.generateMipmaps && ce.generateMipmap(3553),
        k.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (e, t, r, n, i = 0) {
      if (f.isWebGL1Renderer)
        return void console.warn(
          "MYGLAPI.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
      const { width: a, height: o, data: s } = r.image,
        l = se.convert(n.format),
        c = se.convert(n.type);
      let h;
      if (n.isDataTexture3D) q.setTexture3D(n, 0), (h = 32879);
      else {
        if (!n.isDataTexture2DArray)
          return void console.warn(
            "MYGLAPI.WebGLRenderer.copyTextureToTexture3D: only supports MYGLAPI.DataTexture3D and MYGLAPI.DataTexture2DArray."
          );
        q.setTexture2DArray(n, 0), (h = 35866);
      }
      ce.pixelStorei(37440, n.flipY),
        ce.pixelStorei(37441, n.premultiplyAlpha),
        ce.pixelStorei(3317, n.unpackAlignment);
      const u = ce.getParameter(3314),
        d = ce.getParameter(32878),
        p = ce.getParameter(3316),
        m = ce.getParameter(3315),
        g = ce.getParameter(32877);
      ce.pixelStorei(3314, a),
        ce.pixelStorei(32878, o),
        ce.pixelStorei(3316, e.min.x),
        ce.pixelStorei(3315, e.min.y),
        ce.pixelStorei(32877, e.min.z),
        ce.texSubImage3D(
          h,
          i,
          t.x,
          t.y,
          t.z,
          e.max.x - e.min.x + 1,
          e.max.y - e.min.y + 1,
          e.max.z - e.min.z + 1,
          l,
          c,
          s
        ),
        ce.pixelStorei(3314, u),
        ce.pixelStorei(32878, d),
        ce.pixelStorei(3316, p),
        ce.pixelStorei(3315, m),
        ce.pixelStorei(32877, g),
        0 === i && n.generateMipmaps && ce.generateMipmap(h),
        k.unbindTexture();
    }),
    (this.initTexture = function (e) {
      q.setTexture2D(e, 0), k.unbindTexture();
    }),
    (this.resetState = function () {
      (_ = 0), (v = 0), (y = null), k.reset(), le.reset();
    }),
    "undefined" != typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class WebGL1Renderer extends WebGLRenderer {}
WebGL1Renderer.prototype.isWebGL1Renderer = !0;
class FogExp2 {
  constructor(e, t = 25e-5) {
    (this.name = ""), (this.color = new Color(e)), (this.density = t);
  }
  clone() {
    return new FogExp2(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density,
    };
  }
}
FogExp2.prototype.isFogExp2 = !0;
class Fog {
  constructor(e, t = 1, r = 1e3) {
    (this.name = ""),
      (this.color = new Color(e)),
      (this.near = t),
      (this.far = r);
  }
  clone() {
    return new Fog(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
}
Fog.prototype.isFog = !0;
class Scene extends Object3D {
  constructor() {
    super(),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      null !== e.background && (this.background = e.background.clone()),
      null !== e.environment && (this.environment = e.environment.clone()),
      null !== e.fog && (this.fog = e.fog.clone()),
      null !== e.overrideMaterial &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.autoUpdate = e.autoUpdate),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      null !== this.background &&
        (t.object.background = this.background.toJSON(e)),
      null !== this.environment &&
        (t.object.environment = this.environment.toJSON(e)),
      null !== this.fog && (t.object.fog = this.fog.toJSON()),
      t
    );
  }
}
Scene.prototype.isScene = !0;
class InterleavedBuffer {
  constructor(e, t) {
    (this.array = e),
      (this.stride = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.usage = StaticDrawUsage),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = generateUUID());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, r) {
    (e *= this.stride), (r *= t.stride);
    for (let n = 0, i = this.stride; n < i; n++)
      this.array[e + n] = t.array[r + n];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid &&
        (this.array.buffer._uuid = generateUUID()),
      void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      r = new this.constructor(t, this.stride);
    return r.setUsage(this.usage), r;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid &&
        (this.array.buffer._uuid = generateUUID()),
      void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
InterleavedBuffer.prototype.isInterleavedBuffer = !0;
const _vector$6 = new Vector3();
class InterleavedBufferAttribute {
  constructor(e, t, r, n) {
    (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = r),
      (this.normalized = !0 === n);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, r = this.data.count; t < r; t++)
      (_vector$6.x = this.getX(t)),
        (_vector$6.y = this.getY(t)),
        (_vector$6.z = this.getZ(t)),
        _vector$6.applyMatrix4(e),
        this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, r = this.count; t < r; t++)
      (_vector$6.x = this.getX(t)),
        (_vector$6.y = this.getY(t)),
        (_vector$6.z = this.getZ(t)),
        _vector$6.applyNormalMatrix(e),
        this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, r = this.count; t < r; t++)
      (_vector$6.x = this.getX(t)),
        (_vector$6.y = this.getY(t)),
        (_vector$6.z = this.getZ(t)),
        _vector$6.transformDirection(e),
        this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
    return this;
  }
  setX(e, t) {
    return (this.data.array[e * this.data.stride + this.offset] = t), this;
  }
  setY(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 1] = t), this;
  }
  setZ(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 2] = t), this;
  }
  setW(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 3] = t), this;
  }
  getX(e) {
    return this.data.array[e * this.data.stride + this.offset];
  }
  getY(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  }
  getZ(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  }
  getW(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  }
  setXY(e, t, r) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = r),
      this
    );
  }
  setXYZ(e, t, r, n) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = r),
      (this.data.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, r, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = r),
      (this.data.array[e + 2] = n),
      (this.data.array[e + 3] = i),
      this
    );
  }
  clone(e) {
    if (void 0 === e) {
      console.log(
        "MYGLAPI.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
      );
      const e = [];
      for (let t = 0; t < this.count; t++) {
        const r = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[r + t]);
      }
      return new BufferAttribute(
        new this.array.constructor(e),
        this.itemSize,
        this.normalized
      );
    }
    return (
      void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
      void 0 === e.interleavedBuffers[this.data.uuid] &&
        (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
      new InterleavedBufferAttribute(
        e.interleavedBuffers[this.data.uuid],
        this.itemSize,
        this.offset,
        this.normalized
      )
    );
  }
  toJSON(e) {
    if (void 0 === e) {
      console.log(
        "MYGLAPI.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
      );
      const e = [];
      for (let t = 0; t < this.count; t++) {
        const r = t * this.data.stride + this.offset;
        for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[r + t]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized,
      };
    }
    return (
      void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
      void 0 === e.interleavedBuffers[this.data.uuid] &&
        (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
      {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized,
      }
    );
  }
}
InterleavedBufferAttribute.prototype.isInterleavedBufferAttribute = !0;
class SpriteMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "SpriteMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.rotation = e.rotation),
      (this.sizeAttenuation = e.sizeAttenuation),
      this
    );
  }
}
let _geometry;
SpriteMaterial.prototype.isSpriteMaterial = !0;
const _intersectPoint = new Vector3(),
  _worldScale = new Vector3(),
  _mvPosition = new Vector3(),
  _alignedPosition = new Vector2(),
  _rotatedPosition = new Vector2(),
  _viewWorldMatrix = new Matrix4(),
  _vA = new Vector3(),
  _vB = new Vector3(),
  _vC = new Vector3(),
  _uvA = new Vector2(),
  _uvB = new Vector2(),
  _uvC = new Vector2();
class Sprite extends Object3D {
  constructor(e) {
    if ((super(), (this.type = "Sprite"), void 0 === _geometry)) {
      _geometry = new BufferGeometry();
      const e = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        t = new InterleavedBuffer(e, 5);
      _geometry.setIndex([0, 1, 2, 0, 2, 3]),
        _geometry.setAttribute(
          "position",
          new InterleavedBufferAttribute(t, 3, 0, !1)
        ),
        _geometry.setAttribute(
          "uv",
          new InterleavedBufferAttribute(t, 2, 3, !1)
        );
    }
    (this.geometry = _geometry),
      (this.material = void 0 !== e ? e : new SpriteMaterial()),
      (this.center = new Vector2(0.5, 0.5));
  }
  raycast(e, t) {
    null === e.camera &&
      console.error(
        'MYGLAPI.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      _worldScale.setFromMatrixScale(this.matrixWorld),
      _viewWorldMatrix.copy(e.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        e.camera.matrixWorldInverse,
        this.matrixWorld
      ),
      _mvPosition.setFromMatrixPosition(this.modelViewMatrix),
      e.camera.isPerspectiveCamera &&
        !1 === this.material.sizeAttenuation &&
        _worldScale.multiplyScalar(-_mvPosition.z);
    const r = this.material.rotation;
    let n, i;
    0 !== r && ((i = Math.cos(r)), (n = Math.sin(r)));
    const a = this.center;
    transformVertex(_vA.set(-0.5, -0.5, 0), _mvPosition, a, _worldScale, n, i),
      transformVertex(_vB.set(0.5, -0.5, 0), _mvPosition, a, _worldScale, n, i),
      transformVertex(_vC.set(0.5, 0.5, 0), _mvPosition, a, _worldScale, n, i),
      _uvA.set(0, 0),
      _uvB.set(1, 0),
      _uvC.set(1, 1);
    let o = e.ray.intersectTriangle(_vA, _vB, _vC, !1, _intersectPoint);
    if (
      null === o &&
      (transformVertex(
        _vB.set(-0.5, 0.5, 0),
        _mvPosition,
        a,
        _worldScale,
        n,
        i
      ),
      _uvB.set(0, 1),
      null ===
        (o = e.ray.intersectTriangle(_vA, _vC, _vB, !1, _intersectPoint)))
    )
      return;
    const s = e.ray.origin.distanceTo(_intersectPoint);
    s < e.near ||
      s > e.far ||
      t.push({
        distance: s,
        point: _intersectPoint.clone(),
        uv: Triangle.getUV(
          _intersectPoint,
          _vA,
          _vB,
          _vC,
          _uvA,
          _uvB,
          _uvC,
          new Vector2()
        ),
        face: null,
        object: this,
      });
  }
  copy(e) {
    return (
      super.copy(e),
      void 0 !== e.center && this.center.copy(e.center),
      (this.material = e.material),
      this
    );
  }
}
function transformVertex(e, t, r, n, i, a) {
  _alignedPosition.subVectors(e, r).addScalar(0.5).multiply(n),
    void 0 !== i
      ? ((_rotatedPosition.x = a * _alignedPosition.x - i * _alignedPosition.y),
        (_rotatedPosition.y = i * _alignedPosition.x + a * _alignedPosition.y))
      : _rotatedPosition.copy(_alignedPosition),
    e.copy(t),
    (e.x += _rotatedPosition.x),
    (e.y += _rotatedPosition.y),
    e.applyMatrix4(_viewWorldMatrix);
}
Sprite.prototype.isSprite = !0;
const _v1$2 = new Vector3(),
  _v2$1 = new Vector3();
class LOD extends Object3D {
  constructor() {
    super(),
      (this._currentLevel = 0),
      (this.type = "LOD"),
      Object.defineProperties(this, {
        levels: { enumerable: !0, value: [] },
        isLOD: { value: !0 },
      }),
      (this.autoUpdate = !0);
  }
  copy(e) {
    super.copy(e, !1);
    const t = e.levels;
    for (let e = 0, r = t.length; e < r; e++) {
      const r = t[e];
      this.addLevel(r.object.clone(), r.distance);
    }
    return (this.autoUpdate = e.autoUpdate), this;
  }
  addLevel(e, t = 0) {
    t = Math.abs(t);
    const r = this.levels;
    let n;
    for (n = 0; n < r.length && !(t < r[n].distance); n++);
    return r.splice(n, 0, { distance: t, object: e }), this.add(e), this;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(e) {
    const t = this.levels;
    if (t.length > 0) {
      let r, n;
      for (r = 1, n = t.length; r < n && !(e < t[r].distance); r++);
      return t[r - 1].object;
    }
    return null;
  }
  raycast(e, t) {
    if (this.levels.length > 0) {
      _v1$2.setFromMatrixPosition(this.matrixWorld);
      const r = e.ray.origin.distanceTo(_v1$2);
      this.getObjectForDistance(r).raycast(e, t);
    }
  }
  update(e) {
    const t = this.levels;
    if (t.length > 1) {
      _v1$2.setFromMatrixPosition(e.matrixWorld),
        _v2$1.setFromMatrixPosition(this.matrixWorld);
      const r = _v1$2.distanceTo(_v2$1) / e.zoom;
      let n, i;
      for (
        t[0].object.visible = !0, n = 1, i = t.length;
        n < i && r >= t[n].distance;
        n++
      )
        (t[n - 1].object.visible = !1), (t[n].object.visible = !0);
      for (this._currentLevel = n - 1; n < i; n++) t[n].object.visible = !1;
    }
  }
  toJSON(e) {
    const t = super.toJSON(e);
    !1 === this.autoUpdate && (t.object.autoUpdate = !1),
      (t.object.levels = []);
    const r = this.levels;
    for (let e = 0, n = r.length; e < n; e++) {
      const n = r[e];
      t.object.levels.push({ object: n.object.uuid, distance: n.distance });
    }
    return t;
  }
}
const _basePosition = new Vector3(),
  _skinIndex = new Vector4(),
  _skinWeight = new Vector4(),
  _vector$5 = new Vector3(),
  _matrix = new Matrix4();
class SkinnedMesh extends Mesh {
  constructor(e, t) {
    super(e, t),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new Matrix4()),
      (this.bindMatrixInverse = new Matrix4());
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      this
    );
  }
  bind(e, t) {
    (this.skeleton = e),
      void 0 === t &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Vector4(),
      t = this.geometry.attributes.skinWeight;
    for (let r = 0, n = t.count; r < n; r++) {
      (e.x = t.getX(r)),
        (e.y = t.getY(r)),
        (e.z = t.getZ(r)),
        (e.w = t.getW(r));
      const n = 1 / e.manhattanLength();
      n !== 1 / 0 ? e.multiplyScalar(n) : e.set(1, 0, 0, 0),
        t.setXYZW(r, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      "attached" === this.bindMode
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : "detached" === this.bindMode
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "MYGLAPI.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  boneTransform(e, t) {
    const r = this.skeleton,
      n = this.geometry;
    _skinIndex.fromBufferAttribute(n.attributes.skinIndex, e),
      _skinWeight.fromBufferAttribute(n.attributes.skinWeight, e),
      _basePosition
        .fromBufferAttribute(n.attributes.position, e)
        .applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let e = 0; e < 4; e++) {
      const n = _skinWeight.getComponent(e);
      if (0 !== n) {
        const i = _skinIndex.getComponent(e);
        _matrix.multiplyMatrices(r.bones[i].matrixWorld, r.boneInverses[i]),
          t.addScaledVector(
            _vector$5.copy(_basePosition).applyMatrix4(_matrix),
            n
          );
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
SkinnedMesh.prototype.isSkinnedMesh = !0;
class Bone extends Object3D {
  constructor() {
    super(), (this.type = "Bone");
  }
}
Bone.prototype.isBone = !0;
const _offsetMatrix = new Matrix4(),
  _identityMatrix = new Matrix4();
class Skeleton {
  constructor(e = [], t = []) {
    (this.uuid = generateUUID()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      (this.boneTextureSize = 0),
      (this.frame = -1),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(16 * e.length)), 0 === t.length))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "MYGLAPI.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let e = 0, t = this.bones.length; e < t; e++)
        this.boneInverses.push(new Matrix4());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const t = new Matrix4();
      this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(t);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const t = this.bones[e];
      t && t.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const t = this.bones[e];
      t &&
        (t.parent && t.parent.isBone
          ? (t.matrix.copy(t.parent.matrixWorld).invert(),
            t.matrix.multiply(t.matrixWorld))
          : t.matrix.copy(t.matrixWorld),
        t.matrix.decompose(t.position, t.quaternion, t.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      r = this.boneMatrices,
      n = this.boneTexture;
    for (let n = 0, i = e.length; n < i; n++) {
      const i = e[n] ? e[n].matrixWorld : _identityMatrix;
      _offsetMatrix.multiplyMatrices(i, t[n]), _offsetMatrix.toArray(r, 16 * n);
    }
    null !== n && (n.needsUpdate = !0);
  }
  clone() {
    return new Skeleton(this.bones, this.boneInverses);
  }
  getBoneByName(e) {
    for (let t = 0, r = this.bones.length; t < r; t++) {
      const r = this.bones[t];
      if (r.name === e) return r;
    }
  }
  dispose() {
    null !== this.boneTexture &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let r = 0, n = e.bones.length; r < n; r++) {
      const n = e.bones[r];
      let i = t[n];
      void 0 === i &&
        (console.warn("MYGLAPI.Skeleton: No bone found with UUID:", n),
        (i = new Bone())),
        this.bones.push(i),
        this.boneInverses.push(new Matrix4().fromArray(e.boneInverses[r]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      r = this.boneInverses;
    for (let n = 0, i = t.length; n < i; n++) {
      const i = t[n];
      e.bones.push(i.uuid);
      const a = r[n];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
const _instanceLocalMatrix = new Matrix4(),
  _instanceWorldMatrix = new Matrix4(),
  _instanceIntersects = [],
  _mesh = new Mesh();
class InstancedMesh extends Mesh {
  constructor(e, t, r) {
    super(e, t),
      (this.instanceMatrix = new BufferAttribute(new Float32Array(16 * r), 16)),
      (this.instanceColor = null),
      (this.count = r),
      (this.frustumCulled = !1);
  }
  copy(e) {
    return (
      super.copy(e),
      this.instanceMatrix.copy(e.instanceMatrix),
      null !== e.instanceColor &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, 3 * e);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, 16 * e);
  }
  raycast(e, t) {
    const r = this.matrixWorld,
      n = this.count;
    if (
      ((_mesh.geometry = this.geometry),
      (_mesh.material = this.material),
      void 0 !== _mesh.material)
    )
      for (let i = 0; i < n; i++) {
        this.getMatrixAt(i, _instanceLocalMatrix),
          _instanceWorldMatrix.multiplyMatrices(r, _instanceLocalMatrix),
          (_mesh.matrixWorld = _instanceWorldMatrix),
          _mesh.raycast(e, _instanceIntersects);
        for (let e = 0, r = _instanceIntersects.length; e < r; e++) {
          const r = _instanceIntersects[e];
          (r.instanceId = i), (r.object = this), t.push(r);
        }
        _instanceIntersects.length = 0;
      }
  }
  setColorAt(e, t) {
    null === this.instanceColor &&
      (this.instanceColor = new BufferAttribute(
        new Float32Array(3 * this.count),
        3
      )),
      t.toArray(this.instanceColor.array, 3 * e);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, 16 * e);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
InstancedMesh.prototype.isInstancedMesh = !0;
class LineBasicMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "LineBasicMaterial"),
      (this.color = new Color(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.morphTargets = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.morphTargets = e.morphTargets),
      this
    );
  }
}
LineBasicMaterial.prototype.isLineBasicMaterial = !0;
const _start$1 = new Vector3(),
  _end$1 = new Vector3(),
  _inverseMatrix$1 = new Matrix4(),
  _ray$1 = new Ray(),
  _sphere$1 = new Sphere();
class Line extends Object3D {
  constructor(e = new BufferGeometry(), t = new LineBasicMaterial()) {
    super(),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (null === e.index) {
        const t = e.attributes.position,
          r = [0];
        for (let e = 1, n = t.count; e < n; e++)
          _start$1.fromBufferAttribute(t, e - 1),
            _end$1.fromBufferAttribute(t, e),
            (r[e] = r[e - 1]),
            (r[e] += _start$1.distanceTo(_end$1));
        e.setAttribute("lineDistance", new Float32BufferAttribute(r, 1));
      } else
        console.warn(
          "MYGLAPI.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    else
      e.isGeometry &&
        console.error(
          "MYGLAPI.Line.computeLineDistances() no longer supports MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
        );
    return this;
  }
  raycast(e, t) {
    const r = this.geometry,
      n = this.matrixWorld,
      i = e.params.Line.threshold,
      a = r.drawRange;
    if (
      (null === r.boundingSphere && r.computeBoundingSphere(),
      _sphere$1.copy(r.boundingSphere),
      _sphere$1.applyMatrix4(n),
      (_sphere$1.radius += i),
      !1 === e.ray.intersectsSphere(_sphere$1))
    )
      return;
    _inverseMatrix$1.copy(n).invert(),
      _ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);
    const o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      s = o * o,
      l = new Vector3(),
      c = new Vector3(),
      h = new Vector3(),
      u = new Vector3(),
      d = this.isLineSegments ? 2 : 1;
    if (r.isBufferGeometry) {
      const n = r.index,
        i = r.attributes.position;
      if (null !== n) {
        for (
          let r = Math.max(0, a.start),
            o = Math.min(n.count, a.start + a.count) - 1;
          r < o;
          r += d
        ) {
          const a = n.getX(r),
            o = n.getX(r + 1);
          if (
            (l.fromBufferAttribute(i, a),
            c.fromBufferAttribute(i, o),
            _ray$1.distanceSqToSegment(l, c, u, h) > s)
          )
            continue;
          u.applyMatrix4(this.matrixWorld);
          const d = e.ray.origin.distanceTo(u);
          d < e.near ||
            d > e.far ||
            t.push({
              distance: d,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: r,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      } else {
        for (
          let r = Math.max(0, a.start),
            n = Math.min(i.count, a.start + a.count) - 1;
          r < n;
          r += d
        ) {
          if (
            (l.fromBufferAttribute(i, r),
            c.fromBufferAttribute(i, r + 1),
            _ray$1.distanceSqToSegment(l, c, u, h) > s)
          )
            continue;
          u.applyMatrix4(this.matrixWorld);
          const n = e.ray.origin.distanceTo(u);
          n < e.near ||
            n > e.far ||
            t.push({
              distance: n,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: r,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      }
    } else
      r.isGeometry &&
        console.error(
          "MYGLAPI.Line.raycast() no longer supports MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
        );
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes,
        r = Object.keys(t);
      if (r.length > 0) {
        const e = t[r[0]];
        if (void 0 !== e) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let t = 0, r = e.length; t < r; t++) {
            const r = e[t].name || String(t);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[r] = t);
          }
        }
      }
    } else {
      const t = e.morphTargets;
      void 0 !== t &&
        t.length > 0 &&
        console.error(
          "MYGLAPI.Line.updateMorphTargets() does not support MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
        );
    }
  }
}
Line.prototype.isLine = !0;
const _start = new Vector3(),
  _end = new Vector3();
class LineSegments extends Line {
  constructor(e, t) {
    super(e, t), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.isBufferGeometry)
      if (null === e.index) {
        const t = e.attributes.position,
          r = [];
        for (let e = 0, n = t.count; e < n; e += 2)
          _start.fromBufferAttribute(t, e),
            _end.fromBufferAttribute(t, e + 1),
            (r[e] = 0 === e ? 0 : r[e - 1]),
            (r[e + 1] = r[e] + _start.distanceTo(_end));
        e.setAttribute("lineDistance", new Float32BufferAttribute(r, 1));
      } else
        console.warn(
          "MYGLAPI.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    else
      e.isGeometry &&
        console.error(
          "MYGLAPI.LineSegments.computeLineDistances() no longer supports MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
        );
    return this;
  }
}
LineSegments.prototype.isLineSegments = !0;
class LineLoop extends Line {
  constructor(e, t) {
    super(e, t), (this.type = "LineLoop");
  }
}
LineLoop.prototype.isLineLoop = !0;
class PointsMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "PointsMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.morphTargets = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.morphTargets = e.morphTargets),
      this
    );
  }
}
PointsMaterial.prototype.isPointsMaterial = !0;
const _inverseMatrix = new Matrix4(),
  _ray = new Ray(),
  _sphere = new Sphere(),
  _position$2 = new Vector3();
class Points extends Object3D {
  constructor(e = new BufferGeometry(), t = new PointsMaterial()) {
    super(),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const r = this.geometry,
      n = this.matrixWorld,
      i = e.params.Points.threshold,
      a = r.drawRange;
    if (
      (null === r.boundingSphere && r.computeBoundingSphere(),
      _sphere.copy(r.boundingSphere),
      _sphere.applyMatrix4(n),
      (_sphere.radius += i),
      !1 === e.ray.intersectsSphere(_sphere))
    )
      return;
    _inverseMatrix.copy(n).invert(),
      _ray.copy(e.ray).applyMatrix4(_inverseMatrix);
    const o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      s = o * o;
    if (r.isBufferGeometry) {
      const i = r.index,
        o = r.attributes.position;
      if (null !== i) {
        for (
          let r = Math.max(0, a.start),
            l = Math.min(i.count, a.start + a.count);
          r < l;
          r++
        ) {
          const a = i.getX(r);
          _position$2.fromBufferAttribute(o, a),
            testPoint(_position$2, a, s, n, e, t, this);
        }
      } else {
        for (
          let r = Math.max(0, a.start),
            i = Math.min(o.count, a.start + a.count);
          r < i;
          r++
        )
          _position$2.fromBufferAttribute(o, r),
            testPoint(_position$2, r, s, n, e, t, this);
      }
    } else
      console.error(
        "MYGLAPI.Points.raycast() no longer supports MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
      );
  }
  updateMorphTargets() {
    const e = this.geometry;
    if (e.isBufferGeometry) {
      const t = e.morphAttributes,
        r = Object.keys(t);
      if (r.length > 0) {
        const e = t[r[0]];
        if (void 0 !== e) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let t = 0, r = e.length; t < r; t++) {
            const r = e[t].name || String(t);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[r] = t);
          }
        }
      }
    } else {
      const t = e.morphTargets;
      void 0 !== t &&
        t.length > 0 &&
        console.error(
          "MYGLAPI.Points.updateMorphTargets() does not support MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
        );
    }
  }
}
function testPoint(e, t, r, n, i, a, o) {
  const s = _ray.distanceSqToPoint(e);
  if (s < r) {
    const r = new Vector3();
    _ray.closestPointToPoint(e, r), r.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(r);
    if (l < i.near || l > i.far) return;
    a.push({
      distance: l,
      distanceToRay: Math.sqrt(s),
      point: r,
      index: t,
      face: null,
      object: o,
    });
  }
}
Points.prototype.isPoints = !0;
class VideoTexture extends Texture {
  constructor(e, t, r, n, i, a, o, s, l) {
    super(e, t, r, n, i, a, o, s, l),
      (this.format = void 0 !== o ? o : RGBFormat),
      (this.minFilter = void 0 !== a ? a : LinearFilter),
      (this.magFilter = void 0 !== i ? i : LinearFilter),
      (this.generateMipmaps = !1);
    const c = this;
    "requestVideoFrameCallback" in e &&
      e.requestVideoFrameCallback(function t() {
        (c.needsUpdate = !0), e.requestVideoFrameCallback(t);
      });
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const e = this.image;
    !1 === "requestVideoFrameCallback" in e &&
      e.readyState >= e.HAVE_CURRENT_DATA &&
      (this.needsUpdate = !0);
  }
}
VideoTexture.prototype.isVideoTexture = !0;
class CompressedTexture extends Texture {
  constructor(e, t, r, n, i, a, o, s, l, c, h, u) {
    super(null, a, o, s, l, c, n, i, h, u),
      (this.image = { width: t, height: r }),
      (this.mipmaps = e),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
CompressedTexture.prototype.isCompressedTexture = !0;
class CanvasTexture extends Texture {
  constructor(e, t, r, n, i, a, o, s, l) {
    super(e, t, r, n, i, a, o, s, l), (this.needsUpdate = !0);
  }
}
CanvasTexture.prototype.isCanvasTexture = !0;
class DepthTexture extends Texture {
  constructor(e, t, r, n, i, a, o, s, l, c) {
    if (
      (c = void 0 !== c ? c : DepthFormat) !== DepthFormat &&
      c !== DepthStencilFormat
    )
      throw new Error(
        "DepthTexture format must be either MYGLAPI.DepthFormat or MYGLAPI.DepthStencilFormat"
      );
    void 0 === r && c === DepthFormat && (r = UnsignedShortType),
      void 0 === r && c === DepthStencilFormat && (r = UnsignedInt248Type),
      super(null, n, i, a, o, s, c, r, l),
      (this.image = { width: e, height: t }),
      (this.magFilter = void 0 !== o ? o : NearestFilter),
      (this.minFilter = void 0 !== s ? s : NearestFilter),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
DepthTexture.prototype.isDepthTexture = !0;
class CircleGeometry extends BufferGeometry {
  constructor(e = 1, t = 8, r = 0, n = 2 * Math.PI) {
    super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: e,
        segments: t,
        thetaStart: r,
        thetaLength: n,
      }),
      (t = Math.max(3, t));
    const i = [],
      a = [],
      o = [],
      s = [],
      l = new Vector3(),
      c = new Vector2();
    a.push(0, 0, 0), o.push(0, 0, 1), s.push(0.5, 0.5);
    for (let i = 0, h = 3; i <= t; i++, h += 3) {
      const u = r + (i / t) * n;
      (l.x = e * Math.cos(u)),
        (l.y = e * Math.sin(u)),
        a.push(l.x, l.y, l.z),
        o.push(0, 0, 1),
        (c.x = (a[h] / e + 1) / 2),
        (c.y = (a[h + 1] / e + 1) / 2),
        s.push(c.x, c.y);
    }
    for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
    this.setIndex(i),
      this.setAttribute("position", new Float32BufferAttribute(a, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(o, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(s, 2));
  }
}
class CylinderGeometry extends BufferGeometry {
  constructor(
    e = 1,
    t = 1,
    r = 1,
    n = 8,
    i = 1,
    a = !1,
    o = 0,
    s = 2 * Math.PI
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: r,
        radialSegments: n,
        heightSegments: i,
        openEnded: a,
        thetaStart: o,
        thetaLength: s,
      });
    const l = this;
    (n = Math.floor(n)), (i = Math.floor(i));
    const c = [],
      h = [],
      u = [],
      d = [];
    let p = 0;
    const m = [],
      f = r / 2;
    let g = 0;
    function _(r) {
      const i = p,
        a = new Vector2(),
        m = new Vector3();
      let _ = 0;
      const v = !0 === r ? e : t,
        y = !0 === r ? 1 : -1;
      for (let e = 1; e <= n; e++)
        h.push(0, f * y, 0), u.push(0, y, 0), d.push(0.5, 0.5), p++;
      const x = p;
      for (let e = 0; e <= n; e++) {
        const t = (e / n) * s + o,
          r = Math.cos(t),
          i = Math.sin(t);
        (m.x = v * i),
          (m.y = f * y),
          (m.z = v * r),
          h.push(m.x, m.y, m.z),
          u.push(0, y, 0),
          (a.x = 0.5 * r + 0.5),
          (a.y = 0.5 * i * y + 0.5),
          d.push(a.x, a.y),
          p++;
      }
      for (let e = 0; e < n; e++) {
        const t = i + e,
          n = x + e;
        !0 === r ? c.push(n, n + 1, t) : c.push(n + 1, n, t), (_ += 3);
      }
      l.addGroup(g, _, !0 === r ? 1 : 2), (g += _);
    }
    !(function () {
      const a = new Vector3(),
        _ = new Vector3();
      let v = 0;
      const y = (t - e) / r;
      for (let l = 0; l <= i; l++) {
        const c = [],
          g = l / i,
          v = g * (t - e) + e;
        for (let e = 0; e <= n; e++) {
          const t = e / n,
            i = t * s + o,
            l = Math.sin(i),
            m = Math.cos(i);
          (_.x = v * l),
            (_.y = -g * r + f),
            (_.z = v * m),
            h.push(_.x, _.y, _.z),
            a.set(l, y, m).normalize(),
            u.push(a.x, a.y, a.z),
            d.push(t, 1 - g),
            c.push(p++);
        }
        m.push(c);
      }
      for (let e = 0; e < n; e++)
        for (let t = 0; t < i; t++) {
          const r = m[t][e],
            n = m[t + 1][e],
            i = m[t + 1][e + 1],
            a = m[t][e + 1];
          c.push(r, n, a), c.push(n, i, a), (v += 6);
        }
      l.addGroup(g, v, 0), (g += v);
    })(),
      !1 === a && (e > 0 && _(!0), t > 0 && _(!1)),
      this.setIndex(c),
      this.setAttribute("position", new Float32BufferAttribute(h, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(u, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(d, 2));
  }
}
class ConeGeometry extends CylinderGeometry {
  constructor(e = 1, t = 1, r = 8, n = 1, i = !1, a = 0, o = 2 * Math.PI) {
    super(0, e, t, r, n, i, a, o),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        radialSegments: r,
        heightSegments: n,
        openEnded: i,
        thetaStart: a,
        thetaLength: o,
      });
  }
}
class PolyhedronGeometry extends BufferGeometry {
  constructor(e, t, r = 1, n = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: r, detail: n });
    const i = [],
      a = [];
    function o(e, t, r, n) {
      const i = n + 1,
        a = [];
      for (let n = 0; n <= i; n++) {
        a[n] = [];
        const o = e.clone().lerp(r, n / i),
          s = t.clone().lerp(r, n / i),
          l = i - n;
        for (let e = 0; e <= l; e++)
          a[n][e] = 0 === e && n === i ? o : o.clone().lerp(s, e / l);
      }
      for (let e = 0; e < i; e++)
        for (let t = 0; t < 2 * (i - e) - 1; t++) {
          const r = Math.floor(t / 2);
          t % 2 == 0
            ? (s(a[e][r + 1]), s(a[e + 1][r]), s(a[e][r]))
            : (s(a[e][r + 1]), s(a[e + 1][r + 1]), s(a[e + 1][r]));
        }
    }
    function s(e) {
      i.push(e.x, e.y, e.z);
    }
    function l(t, r) {
      const n = 3 * t;
      (r.x = e[n + 0]), (r.y = e[n + 1]), (r.z = e[n + 2]);
    }
    function c(e, t, r, n) {
      n < 0 && 1 === e.x && (a[t] = e.x - 1),
        0 === r.x && 0 === r.z && (a[t] = n / 2 / Math.PI + 0.5);
    }
    function h(e) {
      return Math.atan2(e.z, -e.x);
    }
    !(function (e) {
      const r = new Vector3(),
        n = new Vector3(),
        i = new Vector3();
      for (let a = 0; a < t.length; a += 3)
        l(t[a + 0], r), l(t[a + 1], n), l(t[a + 2], i), o(r, n, i, e);
    })(n),
      (function (e) {
        const t = new Vector3();
        for (let r = 0; r < i.length; r += 3)
          (t.x = i[r + 0]),
            (t.y = i[r + 1]),
            (t.z = i[r + 2]),
            t.normalize().multiplyScalar(e),
            (i[r + 0] = t.x),
            (i[r + 1] = t.y),
            (i[r + 2] = t.z);
      })(r),
      (function () {
        const e = new Vector3();
        for (let r = 0; r < i.length; r += 3) {
          (e.x = i[r + 0]), (e.y = i[r + 1]), (e.z = i[r + 2]);
          const n = h(e) / 2 / Math.PI + 0.5,
            o =
              ((t = e),
              Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z)) / Math.PI +
                0.5);
          a.push(n, 1 - o);
        }
        var t;
        (function () {
          const e = new Vector3(),
            t = new Vector3(),
            r = new Vector3(),
            n = new Vector3(),
            o = new Vector2(),
            s = new Vector2(),
            l = new Vector2();
          for (let u = 0, d = 0; u < i.length; u += 9, d += 6) {
            e.set(i[u + 0], i[u + 1], i[u + 2]),
              t.set(i[u + 3], i[u + 4], i[u + 5]),
              r.set(i[u + 6], i[u + 7], i[u + 8]),
              o.set(a[d + 0], a[d + 1]),
              s.set(a[d + 2], a[d + 3]),
              l.set(a[d + 4], a[d + 5]),
              n.copy(e).add(t).add(r).divideScalar(3);
            const p = h(n);
            c(o, d + 0, e, p), c(s, d + 2, t, p), c(l, d + 4, r, p);
          }
        })(),
          (function () {
            for (let e = 0; e < a.length; e += 6) {
              const t = a[e + 0],
                r = a[e + 2],
                n = a[e + 4],
                i = Math.max(t, r, n),
                o = Math.min(t, r, n);
              i > 0.9 &&
                o < 0.1 &&
                (t < 0.2 && (a[e + 0] += 1),
                r < 0.2 && (a[e + 2] += 1),
                n < 0.2 && (a[e + 4] += 1));
            }
          })();
      })(),
      this.setAttribute("position", new Float32BufferAttribute(i, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(i.slice(), 3)),
      this.setAttribute("uv", new Float32BufferAttribute(a, 2)),
      0 === n ? this.computeVertexNormals() : this.normalizeNormals();
  }
}
class DodecahedronGeometry extends PolyhedronGeometry {
  constructor(e = 1, t = 0) {
    const r = (1 + Math.sqrt(5)) / 2,
      n = 1 / r;
    super(
      [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -n,
        -r,
        0,
        -n,
        r,
        0,
        n,
        -r,
        0,
        n,
        r,
        -n,
        -r,
        0,
        -n,
        r,
        0,
        n,
        -r,
        0,
        n,
        r,
        0,
        -r,
        0,
        -n,
        r,
        0,
        -n,
        -r,
        0,
        n,
        r,
        0,
        n,
      ],
      [
        3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8,
        17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18,
        0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13,
        18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5,
        11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14,
        5, 1, 5, 9,
      ],
      e,
      t
    ),
      (this.type = "DodecahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
}
const _v0 = new Vector3(),
  _v1$1 = new Vector3(),
  _normal = new Vector3(),
  _triangle = new Triangle();
class EdgesGeometry extends BufferGeometry {
  constructor(e, t) {
    if (
      (super(),
      (this.type = "EdgesGeometry"),
      (this.parameters = { thresholdAngle: t }),
      (t = void 0 !== t ? t : 1),
      !0 === e.isGeometry)
    )
      return void console.error(
        "MYGLAPI.EdgesGeometry no longer supports MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
      );
    const r = Math.pow(10, 4),
      n = Math.cos(DEG2RAD * t),
      i = e.getIndex(),
      a = e.getAttribute("position"),
      o = i ? i.count : a.count,
      s = [0, 0, 0],
      l = ["a", "b", "c"],
      c = new Array(3),
      h = {},
      u = [];
    for (let e = 0; e < o; e += 3) {
      i
        ? ((s[0] = i.getX(e)), (s[1] = i.getX(e + 1)), (s[2] = i.getX(e + 2)))
        : ((s[0] = e), (s[1] = e + 1), (s[2] = e + 2));
      const { a: t, b: o, c: d } = _triangle;
      if (
        (t.fromBufferAttribute(a, s[0]),
        o.fromBufferAttribute(a, s[1]),
        d.fromBufferAttribute(a, s[2]),
        _triangle.getNormal(_normal),
        (c[0] = `${Math.round(t.x * r)},${Math.round(t.y * r)},${Math.round(
          t.z * r
        )}`),
        (c[1] = `${Math.round(o.x * r)},${Math.round(o.y * r)},${Math.round(
          o.z * r
        )}`),
        (c[2] = `${Math.round(d.x * r)},${Math.round(d.y * r)},${Math.round(
          d.z * r
        )}`),
        c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0])
      )
        for (let e = 0; e < 3; e++) {
          const t = (e + 1) % 3,
            r = c[e],
            i = c[t],
            a = _triangle[l[e]],
            o = _triangle[l[t]],
            d = `${r}_${i}`,
            p = `${i}_${r}`;
          p in h && h[p]
            ? (_normal.dot(h[p].normal) <= n &&
                (u.push(a.x, a.y, a.z), u.push(o.x, o.y, o.z)),
              (h[p] = null))
            : d in h ||
              (h[d] = { index0: s[e], index1: s[t], normal: _normal.clone() });
        }
    }
    for (const e in h)
      if (h[e]) {
        const { index0: t, index1: r } = h[e];
        _v0.fromBufferAttribute(a, t),
          _v1$1.fromBufferAttribute(a, r),
          u.push(_v0.x, _v0.y, _v0.z),
          u.push(_v1$1.x, _v1$1.y, _v1$1.z);
      }
    this.setAttribute("position", new Float32BufferAttribute(u, 3));
  }
}
const Earcut = {
  triangulate: function (e, t, r) {
    r = r || 2;
    const n = t && t.length,
      i = n ? t[0] * r : e.length;
    let a = linkedList(e, 0, i, r, !0);
    const o = [];
    if (!a || a.next === a.prev) return o;
    let s, l, c, h, u, d, p;
    if ((n && (a = eliminateHoles(e, t, a, r)), e.length > 80 * r)) {
      (s = c = e[0]), (l = h = e[1]);
      for (let t = r; t < i; t += r)
        (u = e[t]) < s && (s = u),
          (d = e[t + 1]) < l && (l = d),
          u > c && (c = u),
          d > h && (h = d);
      p = 0 !== (p = Math.max(c - s, h - l)) ? 1 / p : 0;
    }
    return earcutLinked(a, o, r, s, l, p), o;
  },
};
function linkedList(e, t, r, n, i) {
  let a, o;
  if (i === signedArea(e, t, r, n) > 0)
    for (a = t; a < r; a += n) o = insertNode(a, e[a], e[a + 1], o);
  else for (a = r - n; a >= t; a -= n) o = insertNode(a, e[a], e[a + 1], o);
  return o && equals(o, o.next) && (removeNode(o), (o = o.next)), o;
}
function filterPoints(e, t) {
  if (!e) return e;
  t || (t = e);
  let r,
    n = e;
  do {
    if (
      ((r = !1),
      n.steiner || (!equals(n, n.next) && 0 !== area(n.prev, n, n.next)))
    )
      n = n.next;
    else {
      if ((removeNode(n), (n = t = n.prev) === n.next)) break;
      r = !0;
    }
  } while (r || n !== t);
  return t;
}
function earcutLinked(e, t, r, n, i, a, o) {
  if (!e) return;
  !o && a && indexCurve(e, n, i, a);
  let s,
    l,
    c = e;
  for (; e.prev !== e.next; )
    if (((s = e.prev), (l = e.next), a ? isEarHashed(e, n, i, a) : isEar(e)))
      t.push(s.i / r),
        t.push(e.i / r),
        t.push(l.i / r),
        removeNode(e),
        (e = l.next),
        (c = l.next);
    else if ((e = l) === c) {
      o
        ? 1 === o
          ? earcutLinked(
              (e = cureLocalIntersections(filterPoints(e), t, r)),
              t,
              r,
              n,
              i,
              a,
              2
            )
          : 2 === o && splitEarcut(e, t, r, n, i, a)
        : earcutLinked(filterPoints(e), t, r, n, i, a, 1);
      break;
    }
}
function isEar(e) {
  const t = e.prev,
    r = e,
    n = e.next;
  if (area(t, r, n) >= 0) return !1;
  let i = e.next.next;
  for (; i !== e.prev; ) {
    if (
      pointInTriangle(t.x, t.y, r.x, r.y, n.x, n.y, i.x, i.y) &&
      area(i.prev, i, i.next) >= 0
    )
      return !1;
    i = i.next;
  }
  return !0;
}
function isEarHashed(e, t, r, n) {
  const i = e.prev,
    a = e,
    o = e.next;
  if (area(i, a, o) >= 0) return !1;
  const s = i.x < a.x ? (i.x < o.x ? i.x : o.x) : a.x < o.x ? a.x : o.x,
    l = i.y < a.y ? (i.y < o.y ? i.y : o.y) : a.y < o.y ? a.y : o.y,
    c = i.x > a.x ? (i.x > o.x ? i.x : o.x) : a.x > o.x ? a.x : o.x,
    h = i.y > a.y ? (i.y > o.y ? i.y : o.y) : a.y > o.y ? a.y : o.y,
    u = zOrder(s, l, t, r, n),
    d = zOrder(c, h, t, r, n);
  let p = e.prevZ,
    m = e.nextZ;
  for (; p && p.z >= u && m && m.z <= d; ) {
    if (
      p !== e.prev &&
      p !== e.next &&
      pointInTriangle(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) &&
      area(p.prev, p, p.next) >= 0
    )
      return !1;
    if (
      ((p = p.prevZ),
      m !== e.prev &&
        m !== e.next &&
        pointInTriangle(i.x, i.y, a.x, a.y, o.x, o.y, m.x, m.y) &&
        area(m.prev, m, m.next) >= 0)
    )
      return !1;
    m = m.nextZ;
  }
  for (; p && p.z >= u; ) {
    if (
      p !== e.prev &&
      p !== e.next &&
      pointInTriangle(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) &&
      area(p.prev, p, p.next) >= 0
    )
      return !1;
    p = p.prevZ;
  }
  for (; m && m.z <= d; ) {
    if (
      m !== e.prev &&
      m !== e.next &&
      pointInTriangle(i.x, i.y, a.x, a.y, o.x, o.y, m.x, m.y) &&
      area(m.prev, m, m.next) >= 0
    )
      return !1;
    m = m.nextZ;
  }
  return !0;
}
function cureLocalIntersections(e, t, r) {
  let n = e;
  do {
    const i = n.prev,
      a = n.next.next;
    !equals(i, a) &&
      intersects(i, n, n.next, a) &&
      locallyInside(i, a) &&
      locallyInside(a, i) &&
      (t.push(i.i / r),
      t.push(n.i / r),
      t.push(a.i / r),
      removeNode(n),
      removeNode(n.next),
      (n = e = a)),
      (n = n.next);
  } while (n !== e);
  return filterPoints(n);
}
function splitEarcut(e, t, r, n, i, a) {
  let o = e;
  do {
    let e = o.next.next;
    for (; e !== o.prev; ) {
      if (o.i !== e.i && isValidDiagonal(o, e)) {
        let s = splitPolygon(o, e);
        return (
          (o = filterPoints(o, o.next)),
          (s = filterPoints(s, s.next)),
          earcutLinked(o, t, r, n, i, a),
          void earcutLinked(s, t, r, n, i, a)
        );
      }
      e = e.next;
    }
    o = o.next;
  } while (o !== e);
}
function eliminateHoles(e, t, r, n) {
  const i = [];
  let a, o, s, l, c;
  for (a = 0, o = t.length; a < o; a++)
    (c = linkedList(
      e,
      (s = t[a] * n),
      (l = a < o - 1 ? t[a + 1] * n : e.length),
      n,
      !1
    )) === c.next && (c.steiner = !0),
      i.push(getLeftmost(c));
  for (i.sort(compareX), a = 0; a < i.length; a++)
    eliminateHole(i[a], r), (r = filterPoints(r, r.next));
  return r;
}
function compareX(e, t) {
  return e.x - t.x;
}
function eliminateHole(e, t) {
  if ((t = findHoleBridge(e, t))) {
    const r = splitPolygon(t, e);
    filterPoints(t, t.next), filterPoints(r, r.next);
  }
}
function findHoleBridge(e, t) {
  let r = t;
  const n = e.x,
    i = e.y;
  let a,
    o = -1 / 0;
  do {
    if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
      const e = r.x + ((i - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
      if (e <= n && e > o) {
        if (((o = e), e === n)) {
          if (i === r.y) return r;
          if (i === r.next.y) return r.next;
        }
        a = r.x < r.next.x ? r : r.next;
      }
    }
    r = r.next;
  } while (r !== t);
  if (!a) return null;
  if (n === o) return a;
  const s = a,
    l = a.x,
    c = a.y;
  let h,
    u = 1 / 0;
  r = a;
  do {
    n >= r.x &&
      r.x >= l &&
      n !== r.x &&
      pointInTriangle(i < c ? n : o, i, l, c, i < c ? o : n, i, r.x, r.y) &&
      ((h = Math.abs(i - r.y) / (n - r.x)),
      locallyInside(r, e) &&
        (h < u ||
          (h === u &&
            (r.x > a.x || (r.x === a.x && sectorContainsSector(a, r))))) &&
        ((a = r), (u = h))),
      (r = r.next);
  } while (r !== s);
  return a;
}
function sectorContainsSector(e, t) {
  return area(e.prev, e, t.prev) < 0 && area(t.next, e, e.next) < 0;
}
function indexCurve(e, t, r, n) {
  let i = e;
  do {
    null === i.z && (i.z = zOrder(i.x, i.y, t, r, n)),
      (i.prevZ = i.prev),
      (i.nextZ = i.next),
      (i = i.next);
  } while (i !== e);
  (i.prevZ.nextZ = null), (i.prevZ = null), sortLinked(i);
}
function sortLinked(e) {
  let t,
    r,
    n,
    i,
    a,
    o,
    s,
    l,
    c = 1;
  do {
    for (r = e, e = null, a = null, o = 0; r; ) {
      for (o++, n = r, s = 0, t = 0; t < c && (s++, (n = n.nextZ)); t++);
      for (l = c; s > 0 || (l > 0 && n); )
        0 !== s && (0 === l || !n || r.z <= n.z)
          ? ((i = r), (r = r.nextZ), s--)
          : ((i = n), (n = n.nextZ), l--),
          a ? (a.nextZ = i) : (e = i),
          (i.prevZ = a),
          (a = i);
      r = n;
    }
    (a.nextZ = null), (c *= 2);
  } while (o > 1);
  return e;
}
function zOrder(e, t, r, n, i) {
  return (
    (e =
      1431655765 &
      ((e =
        858993459 &
        ((e =
          252645135 &
          ((e = 16711935 & ((e = 32767 * (e - r) * i) | (e << 8))) |
            (e << 4))) |
          (e << 2))) |
        (e << 1))) |
    ((t =
      1431655765 &
      ((t =
        858993459 &
        ((t =
          252645135 &
          ((t = 16711935 & ((t = 32767 * (t - n) * i) | (t << 8))) |
            (t << 4))) |
          (t << 2))) |
        (t << 1))) <<
      1)
  );
}
function getLeftmost(e) {
  let t = e,
    r = e;
  do {
    (t.x < r.x || (t.x === r.x && t.y < r.y)) && (r = t), (t = t.next);
  } while (t !== e);
  return r;
}
function pointInTriangle(e, t, r, n, i, a, o, s) {
  return (
    (i - o) * (t - s) - (e - o) * (a - s) >= 0 &&
    (e - o) * (n - s) - (r - o) * (t - s) >= 0 &&
    (r - o) * (a - s) - (i - o) * (n - s) >= 0
  );
}
function isValidDiagonal(e, t) {
  return (
    e.next.i !== t.i &&
    e.prev.i !== t.i &&
    !intersectsPolygon(e, t) &&
    ((locallyInside(e, t) &&
      locallyInside(t, e) &&
      middleInside(e, t) &&
      (area(e.prev, e, t.prev) || area(e, t.prev, t))) ||
      (equals(e, t) &&
        area(e.prev, e, e.next) > 0 &&
        area(t.prev, t, t.next) > 0))
  );
}
function area(e, t, r) {
  return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y);
}
function equals(e, t) {
  return e.x === t.x && e.y === t.y;
}
function intersects(e, t, r, n) {
  const i = sign(area(e, t, r)),
    a = sign(area(e, t, n)),
    o = sign(area(r, n, e)),
    s = sign(area(r, n, t));
  return (
    (i !== a && o !== s) ||
    !(0 !== i || !onSegment(e, r, t)) ||
    !(0 !== a || !onSegment(e, n, t)) ||
    !(0 !== o || !onSegment(r, e, n)) ||
    !(0 !== s || !onSegment(r, t, n))
  );
}
function onSegment(e, t, r) {
  return (
    t.x <= Math.max(e.x, r.x) &&
    t.x >= Math.min(e.x, r.x) &&
    t.y <= Math.max(e.y, r.y) &&
    t.y >= Math.min(e.y, r.y)
  );
}
function sign(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function intersectsPolygon(e, t) {
  let r = e;
  do {
    if (
      r.i !== e.i &&
      r.next.i !== e.i &&
      r.i !== t.i &&
      r.next.i !== t.i &&
      intersects(r, r.next, e, t)
    )
      return !0;
    r = r.next;
  } while (r !== e);
  return !1;
}
function locallyInside(e, t) {
  return area(e.prev, e, e.next) < 0
    ? area(e, t, e.next) >= 0 && area(e, e.prev, t) >= 0
    : area(e, t, e.prev) < 0 || area(e, e.next, t) < 0;
}
function middleInside(e, t) {
  let r = e,
    n = !1;
  const i = (e.x + t.x) / 2,
    a = (e.y + t.y) / 2;
  do {
    r.y > a != r.next.y > a &&
      r.next.y !== r.y &&
      i < ((r.next.x - r.x) * (a - r.y)) / (r.next.y - r.y) + r.x &&
      (n = !n),
      (r = r.next);
  } while (r !== e);
  return n;
}
function splitPolygon(e, t) {
  const r = new Node(e.i, e.x, e.y),
    n = new Node(t.i, t.x, t.y),
    i = e.next,
    a = t.prev;
  return (
    (e.next = t),
    (t.prev = e),
    (r.next = i),
    (i.prev = r),
    (n.next = r),
    (r.prev = n),
    (a.next = n),
    (n.prev = a),
    n
  );
}
function insertNode(e, t, r, n) {
  const i = new Node(e, t, r);
  return (
    n
      ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
      : ((i.prev = i), (i.next = i)),
    i
  );
}
function removeNode(e) {
  (e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Node(e, t, r) {
  (this.i = e),
    (this.x = t),
    (this.y = r),
    (this.prev = null),
    (this.next = null),
    (this.z = null),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
function signedArea(e, t, r, n) {
  let i = 0;
  for (let a = t, o = r - n; a < r; a += n)
    (i += (e[o] - e[a]) * (e[a + 1] + e[o + 1])), (o = a);
  return i;
}
class ShapeUtils {
  static area(e) {
    const t = e.length;
    let r = 0;
    for (let n = t - 1, i = 0; i < t; n = i++)
      r += e[n].x * e[i].y - e[i].x * e[n].y;
    return 0.5 * r;
  }
  static isClockWise(e) {
    return ShapeUtils.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const r = [],
      n = [],
      i = [];
    removeDupEndPts(e), addContour(r, e);
    let a = e.length;
    t.forEach(removeDupEndPts);
    for (let e = 0; e < t.length; e++)
      n.push(a), (a += t[e].length), addContour(r, t[e]);
    const o = Earcut.triangulate(r, n);
    for (let e = 0; e < o.length; e += 3) i.push(o.slice(e, e + 3));
    return i;
  }
}
function removeDupEndPts(e) {
  const t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function addContour(e, t) {
  for (let r = 0; r < t.length; r++) e.push(t[r].x), e.push(t[r].y);
}
class ExtrudeGeometry extends BufferGeometry {
  constructor(e, t) {
    super(),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = { shapes: e, options: t }),
      (e = Array.isArray(e) ? e : [e]);
    const r = this,
      n = [],
      i = [];
    for (let t = 0, r = e.length; t < r; t++) {
      a(e[t]);
    }
    function a(e) {
      const a = [],
        o = void 0 !== t.curveSegments ? t.curveSegments : 12,
        s = void 0 !== t.steps ? t.steps : 1;
      let l = void 0 !== t.depth ? t.depth : 100,
        c = void 0 === t.bevelEnabled || t.bevelEnabled,
        h = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
        u = void 0 !== t.bevelSize ? t.bevelSize : h - 2,
        d = void 0 !== t.bevelOffset ? t.bevelOffset : 0,
        p = void 0 !== t.bevelSegments ? t.bevelSegments : 3;
      const m = t.extrudePath,
        f = void 0 !== t.UVGenerator ? t.UVGenerator : WorldUVGenerator;
      void 0 !== t.amount &&
        (console.warn(
          "MYGLAPI.ExtrudeBufferGeometry: amount has been renamed to depth."
        ),
        (l = t.amount));
      let g,
        _,
        v,
        y,
        x,
        b = !1;
      m &&
        ((g = m.getSpacedPoints(s)),
        (b = !0),
        (c = !1),
        (_ = m.computeFrenetFrames(s, !1)),
        (v = new Vector3()),
        (y = new Vector3()),
        (x = new Vector3())),
        c || ((p = 0), (h = 0), (u = 0), (d = 0));
      const M = e.extractPoints(o);
      let w = M.shape;
      const S = M.holes;
      if (!ShapeUtils.isClockWise(w)) {
        w = w.reverse();
        for (let e = 0, t = S.length; e < t; e++) {
          const t = S[e];
          ShapeUtils.isClockWise(t) && (S[e] = t.reverse());
        }
      }
      const T = ShapeUtils.triangulateShape(w, S),
        E = w;
      for (let e = 0, t = S.length; e < t; e++) {
        const t = S[e];
        w = w.concat(t);
      }
      function A(e, t, r) {
        return (
          t || console.error("MYGLAPI.ExtrudeGeometry: vec does not exist"),
          t.clone().multiplyScalar(r).add(e)
        );
      }
      const L = w.length,
        C = T.length;
      function R(e, t, r) {
        let n, i, a;
        const o = e.x - t.x,
          s = e.y - t.y,
          l = r.x - e.x,
          c = r.y - e.y,
          h = o * o + s * s,
          u = o * c - s * l;
        if (Math.abs(u) > Number.EPSILON) {
          const u = Math.sqrt(h),
            d = Math.sqrt(l * l + c * c),
            p = t.x - s / u,
            m = t.y + o / u,
            f =
              ((r.x - c / d - p) * c - (r.y + l / d - m) * l) / (o * c - s * l),
            g = (n = p + o * f - e.x) * n + (i = m + s * f - e.y) * i;
          if (g <= 2) return new Vector2(n, i);
          a = Math.sqrt(g / 2);
        } else {
          let e = !1;
          o > Number.EPSILON
            ? l > Number.EPSILON && (e = !0)
            : o < -Number.EPSILON
            ? l < -Number.EPSILON && (e = !0)
            : Math.sign(s) === Math.sign(c) && (e = !0),
            e
              ? ((n = -s), (i = o), (a = Math.sqrt(h)))
              : ((n = o), (i = s), (a = Math.sqrt(h / 2)));
        }
        return new Vector2(n / a, i / a);
      }
      const P = [];
      for (let e = 0, t = E.length, r = t - 1, n = e + 1; e < t; e++, r++, n++)
        r === t && (r = 0), n === t && (n = 0), (P[e] = R(E[e], E[r], E[n]));
      const B = [];
      let D,
        I = P.concat();
      for (let e = 0, t = S.length; e < t; e++) {
        const t = S[e];
        D = [];
        for (
          let e = 0, r = t.length, n = r - 1, i = e + 1;
          e < r;
          e++, n++, i++
        )
          n === r && (n = 0), i === r && (i = 0), (D[e] = R(t[e], t[n], t[i]));
        B.push(D), (I = I.concat(D));
      }
      for (let e = 0; e < p; e++) {
        const t = e / p,
          r = h * Math.cos((t * Math.PI) / 2),
          n = u * Math.sin((t * Math.PI) / 2) + d;
        for (let e = 0, t = E.length; e < t; e++) {
          const t = A(E[e], P[e], n);
          V(t.x, t.y, -r);
        }
        for (let e = 0, t = S.length; e < t; e++) {
          const t = S[e];
          D = B[e];
          for (let e = 0, i = t.length; e < i; e++) {
            const i = A(t[e], D[e], n);
            V(i.x, i.y, -r);
          }
        }
      }
      const G = u + d;
      for (let e = 0; e < L; e++) {
        const t = c ? A(w[e], I[e], G) : w[e];
        b
          ? (y.copy(_.normals[0]).multiplyScalar(t.x),
            v.copy(_.binormals[0]).multiplyScalar(t.y),
            x.copy(g[0]).add(y).add(v),
            V(x.x, x.y, x.z))
          : V(t.x, t.y, 0);
      }
      for (let e = 1; e <= s; e++)
        for (let t = 0; t < L; t++) {
          const r = c ? A(w[t], I[t], G) : w[t];
          b
            ? (y.copy(_.normals[e]).multiplyScalar(r.x),
              v.copy(_.binormals[e]).multiplyScalar(r.y),
              x.copy(g[e]).add(y).add(v),
              V(x.x, x.y, x.z))
            : V(r.x, r.y, (l / s) * e);
        }
      for (let e = p - 1; e >= 0; e--) {
        const t = e / p,
          r = h * Math.cos((t * Math.PI) / 2),
          n = u * Math.sin((t * Math.PI) / 2) + d;
        for (let e = 0, t = E.length; e < t; e++) {
          const t = A(E[e], P[e], n);
          V(t.x, t.y, l + r);
        }
        for (let e = 0, t = S.length; e < t; e++) {
          const t = S[e];
          D = B[e];
          for (let e = 0, i = t.length; e < i; e++) {
            const i = A(t[e], D[e], n);
            b ? V(i.x, i.y + g[s - 1].y, g[s - 1].x + r) : V(i.x, i.y, l + r);
          }
        }
      }
      function F(e, t) {
        let r = e.length;
        for (; --r >= 0; ) {
          const n = r;
          let i = r - 1;
          i < 0 && (i = e.length - 1);
          for (let e = 0, r = s + 2 * p; e < r; e++) {
            const r = L * e,
              a = L * (e + 1);
            U(t + n + r, t + i + r, t + i + a, t + n + a);
          }
        }
      }
      function V(e, t, r) {
        a.push(e), a.push(t), a.push(r);
      }
      function N(e, t, i) {
        O(e), O(t), O(i);
        const a = n.length / 3,
          o = f.generateTopUV(r, n, a - 3, a - 2, a - 1);
        z(o[0]), z(o[1]), z(o[2]);
      }
      function U(e, t, i, a) {
        O(e), O(t), O(a), O(t), O(i), O(a);
        const o = n.length / 3,
          s = f.generateSideWallUV(r, n, o - 6, o - 3, o - 2, o - 1);
        z(s[0]), z(s[1]), z(s[3]), z(s[1]), z(s[2]), z(s[3]);
      }
      function O(e) {
        n.push(a[3 * e + 0]), n.push(a[3 * e + 1]), n.push(a[3 * e + 2]);
      }
      function z(e) {
        i.push(e.x), i.push(e.y);
      }
      !(function () {
        const e = n.length / 3;
        if (c) {
          let e = 0,
            t = L * e;
          for (let e = 0; e < C; e++) {
            const r = T[e];
            N(r[2] + t, r[1] + t, r[0] + t);
          }
          t = L * (e = s + 2 * p);
          for (let e = 0; e < C; e++) {
            const r = T[e];
            N(r[0] + t, r[1] + t, r[2] + t);
          }
        } else {
          for (let e = 0; e < C; e++) {
            const t = T[e];
            N(t[2], t[1], t[0]);
          }
          for (let e = 0; e < C; e++) {
            const t = T[e];
            N(t[0] + L * s, t[1] + L * s, t[2] + L * s);
          }
        }
        r.addGroup(e, n.length / 3 - e, 0);
      })(),
        (function () {
          const e = n.length / 3;
          let t = 0;
          F(E, t), (t += E.length);
          for (let e = 0, r = S.length; e < r; e++) {
            const r = S[e];
            F(r, t), (t += r.length);
          }
          r.addGroup(e, n.length / 3 - e, 1);
        })();
    }
    this.setAttribute("position", new Float32BufferAttribute(n, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(i, 2)),
      this.computeVertexNormals();
  }
  toJSON() {
    const e = BufferGeometry.prototype.toJSON.call(this);
    return toJSON$1(this.parameters.shapes, this.parameters.options, e);
  }
}
const WorldUVGenerator = {
  generateTopUV: function (e, t, r, n, i) {
    const a = t[3 * r],
      o = t[3 * r + 1],
      s = t[3 * n],
      l = t[3 * n + 1],
      c = t[3 * i],
      h = t[3 * i + 1];
    return [new Vector2(a, o), new Vector2(s, l), new Vector2(c, h)];
  },
  generateSideWallUV: function (e, t, r, n, i, a) {
    const o = t[3 * r],
      s = t[3 * r + 1],
      l = t[3 * r + 2],
      c = t[3 * n],
      h = t[3 * n + 1],
      u = t[3 * n + 2],
      d = t[3 * i],
      p = t[3 * i + 1],
      m = t[3 * i + 2],
      f = t[3 * a],
      g = t[3 * a + 1],
      _ = t[3 * a + 2];
    return Math.abs(s - h) < 0.01
      ? [
          new Vector2(o, 1 - l),
          new Vector2(c, 1 - u),
          new Vector2(d, 1 - m),
          new Vector2(f, 1 - _),
        ]
      : [
          new Vector2(s, 1 - l),
          new Vector2(h, 1 - u),
          new Vector2(p, 1 - m),
          new Vector2(g, 1 - _),
        ];
  },
};
function toJSON$1(e, t, r) {
  if (((r.shapes = []), Array.isArray(e)))
    for (let t = 0, n = e.length; t < n; t++) {
      const n = e[t];
      r.shapes.push(n.uuid);
    }
  else r.shapes.push(e.uuid);
  return (
    void 0 !== t.extrudePath &&
      (r.options.extrudePath = t.extrudePath.toJSON()),
    r
  );
}
class IcosahedronGeometry extends PolyhedronGeometry {
  constructor(e = 1, t = 0) {
    const r = (1 + Math.sqrt(5)) / 2;
    super(
      [
        -1,
        r,
        0,
        1,
        r,
        0,
        -1,
        -r,
        0,
        1,
        -r,
        0,
        0,
        -1,
        r,
        0,
        1,
        r,
        0,
        -1,
        -r,
        0,
        1,
        -r,
        r,
        0,
        -1,
        r,
        0,
        1,
        -r,
        0,
        -1,
        -r,
        0,
        1,
      ],
      [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ],
      e,
      t
    ),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
}
class LatheGeometry extends BufferGeometry {
  constructor(e, t = 12, r = 0, n = 2 * Math.PI) {
    super(),
      (this.type = "LatheGeometry"),
      (this.parameters = { points: e, segments: t, phiStart: r, phiLength: n }),
      (t = Math.floor(t)),
      (n = clamp(n, 0, 2 * Math.PI));
    const i = [],
      a = [],
      o = [],
      s = 1 / t,
      l = new Vector3(),
      c = new Vector2();
    for (let i = 0; i <= t; i++) {
      const h = r + i * s * n,
        u = Math.sin(h),
        d = Math.cos(h);
      for (let r = 0; r <= e.length - 1; r++)
        (l.x = e[r].x * u),
          (l.y = e[r].y),
          (l.z = e[r].x * d),
          a.push(l.x, l.y, l.z),
          (c.x = i / t),
          (c.y = r / (e.length - 1)),
          o.push(c.x, c.y);
    }
    for (let r = 0; r < t; r++)
      for (let t = 0; t < e.length - 1; t++) {
        const n = t + r * e.length,
          a = n,
          o = n + e.length,
          s = n + e.length + 1,
          l = n + 1;
        i.push(a, o, l), i.push(o, s, l);
      }
    if (
      (this.setIndex(i),
      this.setAttribute("position", new Float32BufferAttribute(a, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(o, 2)),
      this.computeVertexNormals(),
      n === 2 * Math.PI)
    ) {
      const r = this.attributes.normal.array,
        n = new Vector3(),
        i = new Vector3(),
        a = new Vector3(),
        o = t * e.length * 3;
      for (let t = 0, s = 0; t < e.length; t++, s += 3)
        (n.x = r[s + 0]),
          (n.y = r[s + 1]),
          (n.z = r[s + 2]),
          (i.x = r[o + s + 0]),
          (i.y = r[o + s + 1]),
          (i.z = r[o + s + 2]),
          a.addVectors(n, i).normalize(),
          (r[s + 0] = r[o + s + 0] = a.x),
          (r[s + 1] = r[o + s + 1] = a.y),
          (r[s + 2] = r[o + s + 2] = a.z);
    }
  }
}
class OctahedronGeometry extends PolyhedronGeometry {
  constructor(e = 1, t = 0) {
    super(
      [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2],
      e,
      t
    ),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
}
class ParametricGeometry extends BufferGeometry {
  constructor(e, t, r) {
    super(),
      (this.type = "ParametricGeometry"),
      (this.parameters = { func: e, slices: t, stacks: r });
    const n = [],
      i = [],
      a = [],
      o = [],
      s = new Vector3(),
      l = new Vector3(),
      c = new Vector3(),
      h = new Vector3(),
      u = new Vector3();
    e.length < 3 &&
      console.error(
        "MYGLAPI.ParametricGeometry: Function must now modify a Vector3 as third parameter."
      );
    const d = t + 1;
    for (let n = 0; n <= r; n++) {
      const d = n / r;
      for (let r = 0; r <= t; r++) {
        const n = r / t;
        e(n, d, l),
          i.push(l.x, l.y, l.z),
          n - 1e-5 >= 0
            ? (e(n - 1e-5, d, c), h.subVectors(l, c))
            : (e(n + 1e-5, d, c), h.subVectors(c, l)),
          d - 1e-5 >= 0
            ? (e(n, d - 1e-5, c), u.subVectors(l, c))
            : (e(n, d + 1e-5, c), u.subVectors(c, l)),
          s.crossVectors(h, u).normalize(),
          a.push(s.x, s.y, s.z),
          o.push(n, d);
      }
    }
    for (let e = 0; e < r; e++)
      for (let r = 0; r < t; r++) {
        const t = e * d + r,
          i = e * d + r + 1,
          a = (e + 1) * d + r + 1,
          o = (e + 1) * d + r;
        n.push(t, i, o), n.push(i, a, o);
      }
    this.setIndex(n),
      this.setAttribute("position", new Float32BufferAttribute(i, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(a, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(o, 2));
  }
}
class RingGeometry extends BufferGeometry {
  constructor(e = 0.5, t = 1, r = 8, n = 1, i = 0, a = 2 * Math.PI) {
    super(),
      (this.type = "RingGeometry"),
      (this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: r,
        phiSegments: n,
        thetaStart: i,
        thetaLength: a,
      }),
      (r = Math.max(3, r));
    const o = [],
      s = [],
      l = [],
      c = [];
    let h = e;
    const u = (t - e) / (n = Math.max(1, n)),
      d = new Vector3(),
      p = new Vector2();
    for (let e = 0; e <= n; e++) {
      for (let e = 0; e <= r; e++) {
        const n = i + (e / r) * a;
        (d.x = h * Math.cos(n)),
          (d.y = h * Math.sin(n)),
          s.push(d.x, d.y, d.z),
          l.push(0, 0, 1),
          (p.x = (d.x / t + 1) / 2),
          (p.y = (d.y / t + 1) / 2),
          c.push(p.x, p.y);
      }
      h += u;
    }
    for (let e = 0; e < n; e++) {
      const t = e * (r + 1);
      for (let e = 0; e < r; e++) {
        const n = e + t,
          i = n,
          a = n + r + 1,
          s = n + r + 2,
          l = n + 1;
        o.push(i, a, l), o.push(a, s, l);
      }
    }
    this.setIndex(o),
      this.setAttribute("position", new Float32BufferAttribute(s, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(l, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(c, 2));
  }
}
class ShapeGeometry extends BufferGeometry {
  constructor(e, t = 12) {
    super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = { shapes: e, curveSegments: t });
    const r = [],
      n = [],
      i = [],
      a = [];
    let o = 0,
      s = 0;
    if (!1 === Array.isArray(e)) l(e);
    else
      for (let t = 0; t < e.length; t++)
        l(e[t]), this.addGroup(o, s, t), (o += s), (s = 0);
    function l(e) {
      const o = n.length / 3,
        l = e.extractPoints(t);
      let c = l.shape;
      const h = l.holes;
      !1 === ShapeUtils.isClockWise(c) && (c = c.reverse());
      for (let e = 0, t = h.length; e < t; e++) {
        const t = h[e];
        !0 === ShapeUtils.isClockWise(t) && (h[e] = t.reverse());
      }
      const u = ShapeUtils.triangulateShape(c, h);
      for (let e = 0, t = h.length; e < t; e++) {
        const t = h[e];
        c = c.concat(t);
      }
      for (let e = 0, t = c.length; e < t; e++) {
        const t = c[e];
        n.push(t.x, t.y, 0), i.push(0, 0, 1), a.push(t.x, t.y);
      }
      for (let e = 0, t = u.length; e < t; e++) {
        const t = u[e],
          n = t[0] + o,
          i = t[1] + o,
          a = t[2] + o;
        r.push(n, i, a), (s += 3);
      }
    }
    this.setIndex(r),
      this.setAttribute("position", new Float32BufferAttribute(n, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(i, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(a, 2));
  }
  toJSON() {
    const e = BufferGeometry.prototype.toJSON.call(this);
    return toJSON(this.parameters.shapes, e);
  }
}
function toJSON(e, t) {
  if (((t.shapes = []), Array.isArray(e)))
    for (let r = 0, n = e.length; r < n; r++) {
      const n = e[r];
      t.shapes.push(n.uuid);
    }
  else t.shapes.push(e.uuid);
  return t;
}
class SphereGeometry extends BufferGeometry {
  constructor(e = 1, t = 8, r = 6, n = 0, i = 2 * Math.PI, a = 0, o = Math.PI) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: r,
        phiStart: n,
        phiLength: i,
        thetaStart: a,
        thetaLength: o,
      }),
      (t = Math.max(3, Math.floor(t))),
      (r = Math.max(2, Math.floor(r)));
    const s = Math.min(a + o, Math.PI);
    let l = 0;
    const c = [],
      h = new Vector3(),
      u = new Vector3(),
      d = [],
      p = [],
      m = [],
      f = [];
    for (let d = 0; d <= r; d++) {
      const g = [],
        _ = d / r;
      let v = 0;
      0 == d && 0 == a
        ? (v = 0.5 / t)
        : d == r && s == Math.PI && (v = -0.5 / t);
      for (let r = 0; r <= t; r++) {
        const s = r / t;
        (h.x = -e * Math.cos(n + s * i) * Math.sin(a + _ * o)),
          (h.y = e * Math.cos(a + _ * o)),
          (h.z = e * Math.sin(n + s * i) * Math.sin(a + _ * o)),
          p.push(h.x, h.y, h.z),
          u.copy(h).normalize(),
          m.push(u.x, u.y, u.z),
          f.push(s + v, 1 - _),
          g.push(l++);
      }
      c.push(g);
    }
    for (let e = 0; e < r; e++)
      for (let n = 0; n < t; n++) {
        const t = c[e][n + 1],
          i = c[e][n],
          o = c[e + 1][n],
          l = c[e + 1][n + 1];
        (0 !== e || a > 0) && d.push(t, i, l),
          (e !== r - 1 || s < Math.PI) && d.push(i, o, l);
      }
    this.setIndex(d),
      this.setAttribute("position", new Float32BufferAttribute(p, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(m, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(f, 2));
  }
}
class TetrahedronGeometry extends PolyhedronGeometry {
  constructor(e = 1, t = 0) {
    super(
      [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
      e,
      t
    ),
      (this.type = "TetrahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
}
class TextGeometry extends ExtrudeGeometry {
  constructor(e, t = {}) {
    const r = t.font;
    if (!r || !r.isFont)
      return (
        console.error(
          "MYGLAPI.TextGeometry: font parameter is not an instance of MYGLAPI.Font."
        ),
        new BufferGeometry()
      );
    const n = r.generateShapes(e, t.size);
    (t.depth = void 0 !== t.height ? t.height : 50),
      void 0 === t.bevelThickness && (t.bevelThickness = 10),
      void 0 === t.bevelSize && (t.bevelSize = 8),
      void 0 === t.bevelEnabled && (t.bevelEnabled = !1),
      super(n, t),
      (this.type = "TextGeometry");
  }
}
class TorusGeometry extends BufferGeometry {
  constructor(e = 1, t = 0.4, r = 8, n = 6, i = 2 * Math.PI) {
    super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: r,
        tubularSegments: n,
        arc: i,
      }),
      (r = Math.floor(r)),
      (n = Math.floor(n));
    const a = [],
      o = [],
      s = [],
      l = [],
      c = new Vector3(),
      h = new Vector3(),
      u = new Vector3();
    for (let a = 0; a <= r; a++)
      for (let d = 0; d <= n; d++) {
        const p = (d / n) * i,
          m = (a / r) * Math.PI * 2;
        (h.x = (e + t * Math.cos(m)) * Math.cos(p)),
          (h.y = (e + t * Math.cos(m)) * Math.sin(p)),
          (h.z = t * Math.sin(m)),
          o.push(h.x, h.y, h.z),
          (c.x = e * Math.cos(p)),
          (c.y = e * Math.sin(p)),
          u.subVectors(h, c).normalize(),
          s.push(u.x, u.y, u.z),
          l.push(d / n),
          l.push(a / r);
      }
    for (let e = 1; e <= r; e++)
      for (let t = 1; t <= n; t++) {
        const r = (n + 1) * e + t - 1,
          i = (n + 1) * (e - 1) + t - 1,
          o = (n + 1) * (e - 1) + t,
          s = (n + 1) * e + t;
        a.push(r, i, s), a.push(i, o, s);
      }
    this.setIndex(a),
      this.setAttribute("position", new Float32BufferAttribute(o, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(s, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(l, 2));
  }
}
class TorusKnotGeometry extends BufferGeometry {
  constructor(e = 1, t = 0.4, r = 64, n = 8, i = 2, a = 3) {
    super(),
      (this.type = "TorusKnotGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: r,
        radialSegments: n,
        p: i,
        q: a,
      }),
      (r = Math.floor(r)),
      (n = Math.floor(n));
    const o = [],
      s = [],
      l = [],
      c = [],
      h = new Vector3(),
      u = new Vector3(),
      d = new Vector3(),
      p = new Vector3(),
      m = new Vector3(),
      f = new Vector3(),
      g = new Vector3();
    for (let o = 0; o <= r; ++o) {
      const v = (o / r) * i * Math.PI * 2;
      _(v, i, a, e, d),
        _(v + 0.01, i, a, e, p),
        f.subVectors(p, d),
        g.addVectors(p, d),
        m.crossVectors(f, g),
        g.crossVectors(m, f),
        m.normalize(),
        g.normalize();
      for (let e = 0; e <= n; ++e) {
        const i = (e / n) * Math.PI * 2,
          a = -t * Math.cos(i),
          p = t * Math.sin(i);
        (h.x = d.x + (a * g.x + p * m.x)),
          (h.y = d.y + (a * g.y + p * m.y)),
          (h.z = d.z + (a * g.z + p * m.z)),
          s.push(h.x, h.y, h.z),
          u.subVectors(h, d).normalize(),
          l.push(u.x, u.y, u.z),
          c.push(o / r),
          c.push(e / n);
      }
    }
    for (let e = 1; e <= r; e++)
      for (let t = 1; t <= n; t++) {
        const r = (n + 1) * (e - 1) + (t - 1),
          i = (n + 1) * e + (t - 1),
          a = (n + 1) * e + t,
          s = (n + 1) * (e - 1) + t;
        o.push(r, i, s), o.push(i, a, s);
      }
    function _(e, t, r, n, i) {
      const a = Math.cos(e),
        o = Math.sin(e),
        s = (r / t) * e,
        l = Math.cos(s);
      (i.x = n * (2 + l) * 0.5 * a),
        (i.y = n * (2 + l) * o * 0.5),
        (i.z = n * Math.sin(s) * 0.5);
    }
    this.setIndex(o),
      this.setAttribute("position", new Float32BufferAttribute(s, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(l, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(c, 2));
  }
}
class TubeGeometry extends BufferGeometry {
  constructor(e, t = 64, r = 1, n = 8, i = !1) {
    super(),
      (this.type = "TubeGeometry"),
      (this.parameters = {
        path: e,
        tubularSegments: t,
        radius: r,
        radialSegments: n,
        closed: i,
      });
    const a = e.computeFrenetFrames(t, i);
    (this.tangents = a.tangents),
      (this.normals = a.normals),
      (this.binormals = a.binormals);
    const o = new Vector3(),
      s = new Vector3(),
      l = new Vector2();
    let c = new Vector3();
    const h = [],
      u = [],
      d = [],
      p = [];
    function m(i) {
      c = e.getPointAt(i / t, c);
      const l = a.normals[i],
        d = a.binormals[i];
      for (let e = 0; e <= n; e++) {
        const t = (e / n) * Math.PI * 2,
          i = Math.sin(t),
          a = -Math.cos(t);
        (s.x = a * l.x + i * d.x),
          (s.y = a * l.y + i * d.y),
          (s.z = a * l.z + i * d.z),
          s.normalize(),
          u.push(s.x, s.y, s.z),
          (o.x = c.x + r * s.x),
          (o.y = c.y + r * s.y),
          (o.z = c.z + r * s.z),
          h.push(o.x, o.y, o.z);
      }
    }
    !(function () {
      for (let e = 0; e < t; e++) m(e);
      m(!1 === i ? t : 0),
        (function () {
          for (let e = 0; e <= t; e++)
            for (let r = 0; r <= n; r++)
              (l.x = e / t), (l.y = r / n), d.push(l.x, l.y);
        })(),
        (function () {
          for (let e = 1; e <= t; e++)
            for (let t = 1; t <= n; t++) {
              const r = (n + 1) * (e - 1) + (t - 1),
                i = (n + 1) * e + (t - 1),
                a = (n + 1) * e + t,
                o = (n + 1) * (e - 1) + t;
              p.push(r, i, o), p.push(i, a, o);
            }
        })();
    })(),
      this.setIndex(p),
      this.setAttribute("position", new Float32BufferAttribute(h, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(u, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(d, 2));
  }
  toJSON() {
    const e = BufferGeometry.prototype.toJSON.call(this);
    return (e.path = this.parameters.path.toJSON()), e;
  }
}
class WireframeGeometry extends BufferGeometry {
  constructor(e) {
    if ((super(), (this.type = "WireframeGeometry"), !0 === e.isGeometry))
      return void console.error(
        "MYGLAPI.WireframeGeometry no longer supports MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead."
      );
    const t = [],
      r = [0, 0],
      n = {},
      i = new Vector3();
    if (null !== e.index) {
      const a = e.attributes.position,
        o = e.index;
      let s = e.groups;
      0 === s.length && (s = [{ start: 0, count: o.count, materialIndex: 0 }]);
      for (let e = 0, t = s.length; e < t; ++e) {
        const t = s[e],
          i = t.start;
        for (let e = i, a = i + t.count; e < a; e += 3)
          for (let t = 0; t < 3; t++) {
            const i = o.getX(e + t),
              a = o.getX(e + ((t + 1) % 3));
            (r[0] = Math.min(i, a)), (r[1] = Math.max(i, a));
            const s = r[0] + "," + r[1];
            void 0 === n[s] && (n[s] = { index1: r[0], index2: r[1] });
          }
      }
      for (const e in n) {
        const r = n[e];
        i.fromBufferAttribute(a, r.index1),
          t.push(i.x, i.y, i.z),
          i.fromBufferAttribute(a, r.index2),
          t.push(i.x, i.y, i.z);
      }
    } else {
      const r = e.attributes.position;
      for (let e = 0, n = r.count / 3; e < n; e++)
        for (let n = 0; n < 3; n++) {
          const a = 3 * e + n;
          i.fromBufferAttribute(r, a), t.push(i.x, i.y, i.z);
          const o = 3 * e + ((n + 1) % 3);
          i.fromBufferAttribute(r, o), t.push(i.x, i.y, i.z);
        }
    }
    this.setAttribute("position", new Float32BufferAttribute(t, 3));
  }
}
var Geometries = Object.freeze({
  __proto__: null,
  BoxGeometry: BoxGeometry,
  BoxBufferGeometry: BoxGeometry,
  CircleGeometry: CircleGeometry,
  CircleBufferGeometry: CircleGeometry,
  ConeGeometry: ConeGeometry,
  ConeBufferGeometry: ConeGeometry,
  CylinderGeometry: CylinderGeometry,
  CylinderBufferGeometry: CylinderGeometry,
  DodecahedronGeometry: DodecahedronGeometry,
  DodecahedronBufferGeometry: DodecahedronGeometry,
  EdgesGeometry: EdgesGeometry,
  ExtrudeGeometry: ExtrudeGeometry,
  ExtrudeBufferGeometry: ExtrudeGeometry,
  IcosahedronGeometry: IcosahedronGeometry,
  IcosahedronBufferGeometry: IcosahedronGeometry,
  LatheGeometry: LatheGeometry,
  LatheBufferGeometry: LatheGeometry,
  OctahedronGeometry: OctahedronGeometry,
  OctahedronBufferGeometry: OctahedronGeometry,
  ParametricGeometry: ParametricGeometry,
  ParametricBufferGeometry: ParametricGeometry,
  PlaneGeometry: PlaneGeometry,
  PlaneBufferGeometry: PlaneGeometry,
  PolyhedronGeometry: PolyhedronGeometry,
  PolyhedronBufferGeometry: PolyhedronGeometry,
  RingGeometry: RingGeometry,
  RingBufferGeometry: RingGeometry,
  ShapeGeometry: ShapeGeometry,
  ShapeBufferGeometry: ShapeGeometry,
  SphereGeometry: SphereGeometry,
  SphereBufferGeometry: SphereGeometry,
  TetrahedronGeometry: TetrahedronGeometry,
  TetrahedronBufferGeometry: TetrahedronGeometry,
  TextGeometry: TextGeometry,
  TextBufferGeometry: TextGeometry,
  TorusGeometry: TorusGeometry,
  TorusBufferGeometry: TorusGeometry,
  TorusKnotGeometry: TorusKnotGeometry,
  TorusKnotBufferGeometry: TorusKnotGeometry,
  TubeGeometry: TubeGeometry,
  TubeBufferGeometry: TubeGeometry,
  WireframeGeometry: WireframeGeometry,
});
class ShadowMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "ShadowMaterial"),
      (this.color = new Color(0)),
      (this.transparent = !0),
      this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this;
  }
}
ShadowMaterial.prototype.isShadowMaterial = !0;
class RawShaderMaterial extends ShaderMaterial {
  constructor(e) {
    super(e), (this.type = "RawShaderMaterial");
  }
}
RawShaderMaterial.prototype.isRawShaderMaterial = !0;
class MeshStandardMaterial extends Material {
  constructor(e) {
    super(),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Color(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Color(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.flatShading = !1),
      (this.vertexTangents = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.flatShading = e.flatShading),
      (this.vertexTangents = e.vertexTangents),
      this
    );
  }
}
MeshStandardMaterial.prototype.isMeshStandardMaterial = !0;
class MeshPhysicalMaterial extends MeshStandardMaterial {
  constructor(e) {
    super(),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoat = 0),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Vector2(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.reflectivity = 0.5),
      Object.defineProperty(this, "ior", {
        get: function () {
          return (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity);
        },
        set: function (e) {
          this.reflectivity = clamp((2.5 * (e - 1)) / (e + 1), 0, 1);
        },
      }),
      (this.sheen = null),
      (this.transmission = 0),
      (this.transmissionMap = null),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.reflectivity = e.reflectivity),
      e.sheen
        ? (this.sheen = (this.sheen || new Color()).copy(e.sheen))
        : (this.sheen = null),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      this
    );
  }
}
MeshPhysicalMaterial.prototype.isMeshPhysicalMaterial = !0;
class MeshPhongMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshPhongMaterial"),
      (this.color = new Color(16777215)),
      (this.specular = new Color(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Color(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = MultiplyOperation),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
MeshPhongMaterial.prototype.isMeshPhongMaterial = !0;
class MeshToonMaterial extends Material {
  constructor(e) {
    super(),
      (this.defines = { TOON: "" }),
      (this.type = "MeshToonMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.gradientMap = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Color(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.gradientMap = e.gradientMap),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      this
    );
  }
}
MeshToonMaterial.prototype.isMeshToonMaterial = !0;
class MeshNormalMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
MeshNormalMaterial.prototype.isMeshNormalMaterial = !0;
class MeshLambertMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshLambertMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Color(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = MultiplyOperation),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      this
    );
  }
}
MeshLambertMaterial.prototype.isMeshLambertMaterial = !0;
class MeshMatcapMaterial extends Material {
  constructor(e) {
    super(),
      (this.defines = { MATCAP: "" }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new Color(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.morphTargets = !1),
      (this.morphNormals = !1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { MATCAP: "" }),
      this.color.copy(e.color),
      (this.matcap = e.matcap),
      (this.map = e.map),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.morphTargets = e.morphTargets),
      (this.morphNormals = e.morphNormals),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
MeshMatcapMaterial.prototype.isMeshMatcapMaterial = !0;
class LineDashedMaterial extends LineBasicMaterial {
  constructor(e) {
    super(),
      (this.type = "LineDashedMaterial"),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.scale = e.scale),
      (this.dashSize = e.dashSize),
      (this.gapSize = e.gapSize),
      this
    );
  }
}
LineDashedMaterial.prototype.isLineDashedMaterial = !0;
var Materials = Object.freeze({
  __proto__: null,
  ShadowMaterial: ShadowMaterial,
  SpriteMaterial: SpriteMaterial,
  RawShaderMaterial: RawShaderMaterial,
  ShaderMaterial: ShaderMaterial,
  PointsMaterial: PointsMaterial,
  MeshPhysicalMaterial: MeshPhysicalMaterial,
  MeshStandardMaterial: MeshStandardMaterial,
  MeshPhongMaterial: MeshPhongMaterial,
  MeshToonMaterial: MeshToonMaterial,
  MeshNormalMaterial: MeshNormalMaterial,
  MeshLambertMaterial: MeshLambertMaterial,
  MeshDepthMaterial: MeshDepthMaterial,
  MeshDistanceMaterial: MeshDistanceMaterial,
  MeshBasicMaterial: MeshBasicMaterial,
  MeshMatcapMaterial: MeshMatcapMaterial,
  LineDashedMaterial: LineDashedMaterial,
  LineBasicMaterial: LineBasicMaterial,
  Material: Material,
});
const AnimationUtils = {
  arraySlice: function (e, t, r) {
    return AnimationUtils.isTypedArray(e)
      ? new e.constructor(e.subarray(t, void 0 !== r ? r : e.length))
      : e.slice(t, r);
  },
  convertArray: function (e, t, r) {
    return !e || (!r && e.constructor === t)
      ? e
      : "number" == typeof t.BYTES_PER_ELEMENT
      ? new t(e)
      : Array.prototype.slice.call(e);
  },
  isTypedArray: function (e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  },
  getKeyframeOrder: function (e) {
    const t = e.length,
      r = new Array(t);
    for (let e = 0; e !== t; ++e) r[e] = e;
    return (
      r.sort(function (t, r) {
        return e[t] - e[r];
      }),
      r
    );
  },
  sortedArray: function (e, t, r) {
    const n = e.length,
      i = new e.constructor(n);
    for (let a = 0, o = 0; o !== n; ++a) {
      const n = r[a] * t;
      for (let r = 0; r !== t; ++r) i[o++] = e[n + r];
    }
    return i;
  },
  flattenJSON: function (e, t, r, n) {
    let i = 1,
      a = e[0];
    for (; void 0 !== a && void 0 === a[n]; ) a = e[i++];
    if (void 0 === a) return;
    let o = a[n];
    if (void 0 !== o)
      if (Array.isArray(o))
        do {
          void 0 !== (o = a[n]) && (t.push(a.time), r.push.apply(r, o)),
            (a = e[i++]);
        } while (void 0 !== a);
      else if (void 0 !== o.toArray)
        do {
          void 0 !== (o = a[n]) && (t.push(a.time), o.toArray(r, r.length)),
            (a = e[i++]);
        } while (void 0 !== a);
      else
        do {
          void 0 !== (o = a[n]) && (t.push(a.time), r.push(o)), (a = e[i++]);
        } while (void 0 !== a);
  },
  subclip: function (e, t, r, n, i = 30) {
    const a = e.clone();
    a.name = t;
    const o = [];
    for (let e = 0; e < a.tracks.length; ++e) {
      const t = a.tracks[e],
        s = t.getValueSize(),
        l = [],
        c = [];
      for (let e = 0; e < t.times.length; ++e) {
        const a = t.times[e] * i;
        if (!(a < r || a >= n)) {
          l.push(t.times[e]);
          for (let r = 0; r < s; ++r) c.push(t.values[e * s + r]);
        }
      }
      0 !== l.length &&
        ((t.times = AnimationUtils.convertArray(l, t.times.constructor)),
        (t.values = AnimationUtils.convertArray(c, t.values.constructor)),
        o.push(t));
    }
    a.tracks = o;
    let s = 1 / 0;
    for (let e = 0; e < a.tracks.length; ++e)
      s > a.tracks[e].times[0] && (s = a.tracks[e].times[0]);
    for (let e = 0; e < a.tracks.length; ++e) a.tracks[e].shift(-1 * s);
    return a.resetDuration(), a;
  },
  makeClipAdditive: function (e, t = 0, r = e, n = 30) {
    n <= 0 && (n = 30);
    const i = r.tracks.length,
      a = t / n;
    for (let t = 0; t < i; ++t) {
      const n = r.tracks[t],
        i = n.ValueTypeName;
      if ("bool" === i || "string" === i) continue;
      const o = e.tracks.find(function (e) {
        return e.name === n.name && e.ValueTypeName === i;
      });
      if (void 0 === o) continue;
      let s = 0;
      const l = n.getValueSize();
      n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (s = l / 3);
      let c = 0;
      const h = o.getValueSize();
      o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (c = h / 3);
      const u = n.times.length - 1;
      let d;
      if (a <= n.times[0]) {
        const e = s,
          t = l - s;
        d = AnimationUtils.arraySlice(n.values, e, t);
      } else if (a >= n.times[u]) {
        const e = u * l + s,
          t = e + l - s;
        d = AnimationUtils.arraySlice(n.values, e, t);
      } else {
        const e = n.createInterpolant(),
          t = s,
          r = l - s;
        e.evaluate(a), (d = AnimationUtils.arraySlice(e.resultBuffer, t, r));
      }
      if ("quaternion" === i) {
        new Quaternion().fromArray(d).normalize().conjugate().toArray(d);
      }
      const p = o.times.length;
      for (let e = 0; e < p; ++e) {
        const t = e * h + c;
        if ("quaternion" === i)
          Quaternion.multiplyQuaternionsFlat(o.values, t, d, 0, o.values, t);
        else {
          const e = h - 2 * c;
          for (let r = 0; r < e; ++r) o.values[t + r] -= d[r];
        }
      }
    }
    return (e.blendMode = AdditiveAnimationBlendMode), e;
  },
};
class Interpolant {
  constructor(e, t, r, n) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = void 0 !== n ? n : new t.constructor(r)),
      (this.sampleValues = t),
      (this.valueSize = r),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let r = this._cachedIndex,
      n = t[r],
      i = t[r - 1];
    e: {
      t: {
        let a;
        r: {
          n: if (!(e < n)) {
            for (let a = r + 2; ; ) {
              if (void 0 === n) {
                if (e < i) break n;
                return (
                  (r = t.length),
                  (this._cachedIndex = r),
                  this.afterEnd_(r - 1, e, i)
                );
              }
              if (r === a) break;
              if (((i = n), e < (n = t[++r]))) break t;
            }
            a = t.length;
            break r;
          }
          if (e >= i) break e;
          {
            const o = t[1];
            e < o && ((r = 2), (i = o));
            for (let a = r - 2; ; ) {
              if (void 0 === i)
                return (this._cachedIndex = 0), this.beforeStart_(0, e, n);
              if (r === a) break;
              if (((n = i), e >= (i = t[--r - 1]))) break t;
            }
            (a = r), (r = 0);
          }
        }
        for (; r < a; ) {
          const n = (r + a) >>> 1;
          e < t[n] ? (a = n) : (r = n + 1);
        }
        if (((n = t[r]), void 0 === (i = t[r - 1])))
          return (this._cachedIndex = 0), this.beforeStart_(0, e, n);
        if (void 0 === n)
          return (
            (r = t.length), (this._cachedIndex = r), this.afterEnd_(r - 1, i, e)
          );
      }
      (this._cachedIndex = r), this.intervalChanged_(r, i, n);
    }
    return this.interpolate_(r, i, e, n);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      r = this.sampleValues,
      n = this.valueSize,
      i = e * n;
    for (let e = 0; e !== n; ++e) t[e] = r[i + e];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
(Interpolant.prototype.beforeStart_ = Interpolant.prototype.copySampleValue_),
  (Interpolant.prototype.afterEnd_ = Interpolant.prototype.copySampleValue_);
class CubicInterpolant extends Interpolant {
  constructor(e, t, r, n) {
    super(e, t, r, n),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = {
        endingStart: ZeroCurvatureEnding,
        endingEnd: ZeroCurvatureEnding,
      });
  }
  intervalChanged_(e, t, r) {
    const n = this.parameterPositions;
    let i = e - 2,
      a = e + 1,
      o = n[i],
      s = n[a];
    if (void 0 === o)
      switch (this.getSettings_().endingStart) {
        case ZeroSlopeEnding:
          (i = e), (o = 2 * t - r);
          break;
        case WrapAroundEnding:
          o = t + n[(i = n.length - 2)] - n[i + 1];
          break;
        default:
          (i = e), (o = r);
      }
    if (void 0 === s)
      switch (this.getSettings_().endingEnd) {
        case ZeroSlopeEnding:
          (a = e), (s = 2 * r - t);
          break;
        case WrapAroundEnding:
          (a = 1), (s = r + n[1] - n[0]);
          break;
        default:
          (a = e - 1), (s = t);
      }
    const l = 0.5 * (r - t),
      c = this.valueSize;
    (this._weightPrev = l / (t - o)),
      (this._weightNext = l / (s - r)),
      (this._offsetPrev = i * c),
      (this._offsetNext = a * c);
  }
  interpolate_(e, t, r, n) {
    const i = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      s = e * o,
      l = s - o,
      c = this._offsetPrev,
      h = this._offsetNext,
      u = this._weightPrev,
      d = this._weightNext,
      p = (r - t) / (n - t),
      m = p * p,
      f = m * p,
      g = -u * f + 2 * u * m - u * p,
      _ = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1,
      v = (-1 - d) * f + (1.5 + d) * m + 0.5 * p,
      y = d * f - d * m;
    for (let e = 0; e !== o; ++e)
      i[e] = g * a[c + e] + _ * a[l + e] + v * a[s + e] + y * a[h + e];
    return i;
  }
}
class LinearInterpolant extends Interpolant {
  constructor(e, t, r, n) {
    super(e, t, r, n);
  }
  interpolate_(e, t, r, n) {
    const i = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      s = e * o,
      l = s - o,
      c = (r - t) / (n - t),
      h = 1 - c;
    for (let e = 0; e !== o; ++e) i[e] = a[l + e] * h + a[s + e] * c;
    return i;
  }
}
class DiscreteInterpolant extends Interpolant {
  constructor(e, t, r, n) {
    super(e, t, r, n);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class KeyframeTrack {
  constructor(e, t, r, n) {
    if (void 0 === e)
      throw new Error("MYGLAPI.KeyframeTrack: track name is undefined");
    if (void 0 === t || 0 === t.length)
      throw new Error(
        "MYGLAPI.KeyframeTrack: no keyframes in track named " + e
      );
    (this.name = e),
      (this.times = AnimationUtils.convertArray(t, this.TimeBufferType)),
      (this.values = AnimationUtils.convertArray(r, this.ValueBufferType)),
      this.setInterpolation(n || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let r;
    if (t.toJSON !== this.toJSON) r = t.toJSON(e);
    else {
      r = {
        name: e.name,
        times: AnimationUtils.convertArray(e.times, Array),
        values: AnimationUtils.convertArray(e.values, Array),
      };
      const t = e.getInterpolation();
      t !== e.DefaultInterpolation && (r.interpolation = t);
    }
    return (r.type = e.ValueTypeName), r;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new DiscreteInterpolant(
      this.times,
      this.values,
      this.getValueSize(),
      e
    );
  }
  InterpolantFactoryMethodLinear(e) {
    return new LinearInterpolant(
      this.times,
      this.values,
      this.getValueSize(),
      e
    );
  }
  InterpolantFactoryMethodSmooth(e) {
    return new CubicInterpolant(
      this.times,
      this.values,
      this.getValueSize(),
      e
    );
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case InterpolateDiscrete:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case InterpolateLinear:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case InterpolateSmooth:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (void 0 === t) {
      const t =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (void 0 === this.createInterpolant) {
        if (e === this.DefaultInterpolation) throw new Error(t);
        this.setInterpolation(this.DefaultInterpolation);
      }
      return console.warn("MYGLAPI.KeyframeTrack:", t), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return InterpolateDiscrete;
      case this.InterpolantFactoryMethodLinear:
        return InterpolateLinear;
      case this.InterpolantFactoryMethodSmooth:
        return InterpolateSmooth;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (0 !== e) {
      const t = this.times;
      for (let r = 0, n = t.length; r !== n; ++r) t[r] += e;
    }
    return this;
  }
  scale(e) {
    if (1 !== e) {
      const t = this.times;
      for (let r = 0, n = t.length; r !== n; ++r) t[r] *= e;
    }
    return this;
  }
  trim(e, t) {
    const r = this.times,
      n = r.length;
    let i = 0,
      a = n - 1;
    for (; i !== n && r[i] < e; ) ++i;
    for (; -1 !== a && r[a] > t; ) --a;
    if ((++a, 0 !== i || a !== n)) {
      i >= a && (i = (a = Math.max(a, 1)) - 1);
      const e = this.getValueSize();
      (this.times = AnimationUtils.arraySlice(r, i, a)),
        (this.values = AnimationUtils.arraySlice(this.values, i * e, a * e));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) != 0 &&
      (console.error(
        "MYGLAPI.KeyframeTrack: Invalid value size in track.",
        this
      ),
      (e = !1));
    const r = this.times,
      n = this.values,
      i = r.length;
    0 === i &&
      (console.error("MYGLAPI.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let t = 0; t !== i; t++) {
      const n = r[t];
      if ("number" == typeof n && isNaN(n)) {
        console.error(
          "MYGLAPI.KeyframeTrack: Time is not a valid number.",
          this,
          t,
          n
        ),
          (e = !1);
        break;
      }
      if (null !== a && a > n) {
        console.error(
          "MYGLAPI.KeyframeTrack: Out of order keys.",
          this,
          t,
          n,
          a
        ),
          (e = !1);
        break;
      }
      a = n;
    }
    if (void 0 !== n && AnimationUtils.isTypedArray(n))
      for (let t = 0, r = n.length; t !== r; ++t) {
        const r = n[t];
        if (isNaN(r)) {
          console.error(
            "MYGLAPI.KeyframeTrack: Value is not a valid number.",
            this,
            t,
            r
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = AnimationUtils.arraySlice(this.times),
      t = AnimationUtils.arraySlice(this.values),
      r = this.getValueSize(),
      n = this.getInterpolation() === InterpolateSmooth,
      i = e.length - 1;
    let a = 1;
    for (let o = 1; o < i; ++o) {
      let i = !1;
      const s = e[o];
      if (s !== e[o + 1] && (1 !== o || s !== e[0]))
        if (n) i = !0;
        else {
          const e = o * r,
            n = e - r,
            a = e + r;
          for (let o = 0; o !== r; ++o) {
            const r = t[e + o];
            if (r !== t[n + o] || r !== t[a + o]) {
              i = !0;
              break;
            }
          }
        }
      if (i) {
        if (o !== a) {
          e[a] = e[o];
          const n = o * r,
            i = a * r;
          for (let e = 0; e !== r; ++e) t[i + e] = t[n + e];
        }
        ++a;
      }
    }
    if (i > 0) {
      e[a] = e[i];
      for (let e = i * r, n = a * r, o = 0; o !== r; ++o) t[n + o] = t[e + o];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = AnimationUtils.arraySlice(e, 0, a)),
          (this.values = AnimationUtils.arraySlice(t, 0, a * r)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = AnimationUtils.arraySlice(this.times, 0),
      t = AnimationUtils.arraySlice(this.values, 0),
      r = new (0, this.constructor)(this.name, e, t);
    return (r.createInterpolant = this.createInterpolant), r;
  }
}
(KeyframeTrack.prototype.TimeBufferType = Float32Array),
  (KeyframeTrack.prototype.ValueBufferType = Float32Array),
  (KeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear);
class BooleanKeyframeTrack extends KeyframeTrack {}
(BooleanKeyframeTrack.prototype.ValueTypeName = "bool"),
  (BooleanKeyframeTrack.prototype.ValueBufferType = Array),
  (BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete),
  (BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0),
  (BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0);
class ColorKeyframeTrack extends KeyframeTrack {}
ColorKeyframeTrack.prototype.ValueTypeName = "color";
class NumberKeyframeTrack extends KeyframeTrack {}
NumberKeyframeTrack.prototype.ValueTypeName = "number";
class QuaternionLinearInterpolant extends Interpolant {
  constructor(e, t, r, n) {
    super(e, t, r, n);
  }
  interpolate_(e, t, r, n) {
    const i = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      s = (r - t) / (n - t);
    let l = e * o;
    for (let e = l + o; l !== e; l += 4)
      Quaternion.slerpFlat(i, 0, a, l - o, a, l, s);
    return i;
  }
}
class QuaternionKeyframeTrack extends KeyframeTrack {
  InterpolantFactoryMethodLinear(e) {
    return new QuaternionLinearInterpolant(
      this.times,
      this.values,
      this.getValueSize(),
      e
    );
  }
}
(QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion"),
  (QuaternionKeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear),
  (QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0);
class StringKeyframeTrack extends KeyframeTrack {}
(StringKeyframeTrack.prototype.ValueTypeName = "string"),
  (StringKeyframeTrack.prototype.ValueBufferType = Array),
  (StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete),
  (StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0),
  (StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0);
class VectorKeyframeTrack extends KeyframeTrack {}
VectorKeyframeTrack.prototype.ValueTypeName = "vector";
class AnimationClip {
  constructor(e, t = -1, r, n = NormalAnimationBlendMode) {
    (this.name = e),
      (this.tracks = r),
      (this.duration = t),
      (this.blendMode = n),
      (this.uuid = generateUUID()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      r = e.tracks,
      n = 1 / (e.fps || 1);
    for (let e = 0, i = r.length; e !== i; ++e)
      t.push(parseKeyframeTrack(r[e]).scale(n));
    const i = new this(e.name, e.duration, t, e.blendMode);
    return (i.uuid = e.uuid), i;
  }
  static toJSON(e) {
    const t = [],
      r = e.tracks,
      n = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let e = 0, n = r.length; e !== n; ++e)
      t.push(KeyframeTrack.toJSON(r[e]));
    return n;
  }
  static CreateFromMorphTargetSequence(e, t, r, n) {
    const i = t.length,
      a = [];
    for (let e = 0; e < i; e++) {
      let o = [],
        s = [];
      o.push((e + i - 1) % i, e, (e + 1) % i), s.push(0, 1, 0);
      const l = AnimationUtils.getKeyframeOrder(o);
      (o = AnimationUtils.sortedArray(o, 1, l)),
        (s = AnimationUtils.sortedArray(s, 1, l)),
        n || 0 !== o[0] || (o.push(i), s.push(s[0])),
        a.push(
          new NumberKeyframeTrack(
            ".morphTargetInfluences[" + t[e].name + "]",
            o,
            s
          ).scale(1 / r)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let r = e;
    if (!Array.isArray(e)) {
      const t = e;
      r = (t.geometry && t.geometry.animations) || t.animations;
    }
    for (let e = 0; e < r.length; e++) if (r[e].name === t) return r[e];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, r) {
    const n = {},
      i = /^([\w-]*?)([\d]+)$/;
    for (let t = 0, r = e.length; t < r; t++) {
      const r = e[t],
        a = r.name.match(i);
      if (a && a.length > 1) {
        const e = a[1];
        let t = n[e];
        t || (n[e] = t = []), t.push(r);
      }
    }
    const a = [];
    for (const e in n)
      a.push(this.CreateFromMorphTargetSequence(e, n[e], t, r));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error(
          "MYGLAPI.AnimationClip: No animation in JSONLoader data."
        ),
        null
      );
    const r = function (e, t, r, n, i) {
        if (0 !== r.length) {
          const a = [],
            o = [];
          AnimationUtils.flattenJSON(r, a, o, n),
            0 !== a.length && i.push(new e(t, a, o));
        }
      },
      n = [],
      i = e.name || "default",
      a = e.fps || 30,
      o = e.blendMode;
    let s = e.length || -1;
    const l = e.hierarchy || [];
    for (let e = 0; e < l.length; e++) {
      const i = l[e].keys;
      if (i && 0 !== i.length)
        if (i[0].morphTargets) {
          const e = {};
          let t;
          for (t = 0; t < i.length; t++)
            if (i[t].morphTargets)
              for (let r = 0; r < i[t].morphTargets.length; r++)
                e[i[t].morphTargets[r]] = -1;
          for (const r in e) {
            const e = [],
              a = [];
            for (let n = 0; n !== i[t].morphTargets.length; ++n) {
              const n = i[t];
              e.push(n.time), a.push(n.morphTarget === r ? 1 : 0);
            }
            n.push(
              new NumberKeyframeTrack(".morphTargetInfluence[" + r + "]", e, a)
            );
          }
          s = e.length * (a || 1);
        } else {
          const a = ".bones[" + t[e].name + "]";
          r(VectorKeyframeTrack, a + ".position", i, "pos", n),
            r(QuaternionKeyframeTrack, a + ".quaternion", i, "rot", n),
            r(VectorKeyframeTrack, a + ".scale", i, "scl", n);
        }
    }
    return 0 === n.length ? null : new this(i, s, n, o);
  }
  resetDuration() {
    let e = 0;
    for (let t = 0, r = this.tracks.length; t !== r; ++t) {
      const r = this.tracks[t];
      e = Math.max(e, r.times[r.times.length - 1]);
    }
    return (this.duration = e), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function getTrackTypeForValueTypeName(e) {
  switch (e.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return NumberKeyframeTrack;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return VectorKeyframeTrack;
    case "color":
      return ColorKeyframeTrack;
    case "quaternion":
      return QuaternionKeyframeTrack;
    case "bool":
    case "boolean":
      return BooleanKeyframeTrack;
    case "string":
      return StringKeyframeTrack;
  }
  throw new Error("MYGLAPI.KeyframeTrack: Unsupported typeName: " + e);
}
function parseKeyframeTrack(e) {
  if (void 0 === e.type)
    throw new Error(
      "MYGLAPI.KeyframeTrack: track type undefined, can not parse"
    );
  const t = getTrackTypeForValueTypeName(e.type);
  if (void 0 === e.times) {
    const t = [],
      r = [];
    AnimationUtils.flattenJSON(e.keys, t, r, "value"),
      (e.times = t),
      (e.values = r);
  }
  return void 0 !== t.parse
    ? t.parse(e)
    : new t(e.name, e.times, e.values, e.interpolation);
}
const Cache = {
  enabled: !1,
  files: {},
  add: function (e, t) {
    !1 !== this.enabled && (this.files[e] = t);
  },
  get: function (e) {
    if (!1 !== this.enabled) return this.files[e];
  },
  remove: function (e) {
    delete this.files[e];
  },
  clear: function () {
    this.files = {};
  },
};
class LoadingManager {
  constructor(e, t, r) {
    const n = this;
    let i = !1,
      a = 0,
      o = 0,
      s = void 0;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = r),
      (this.itemStart = function (e) {
        o++, !1 === i && void 0 !== n.onStart && n.onStart(e, a, o), (i = !0);
      }),
      (this.itemEnd = function (e) {
        a++,
          void 0 !== n.onProgress && n.onProgress(e, a, o),
          a === o && ((i = !1), void 0 !== n.onLoad && n.onLoad());
      }),
      (this.itemError = function (e) {
        void 0 !== n.onError && n.onError(e);
      }),
      (this.resolveURL = function (e) {
        return s ? s(e) : e;
      }),
      (this.setURLModifier = function (e) {
        return (s = e), this;
      }),
      (this.addHandler = function (e, t) {
        return l.push(e, t), this;
      }),
      (this.removeHandler = function (e) {
        const t = l.indexOf(e);
        return -1 !== t && l.splice(t, 2), this;
      }),
      (this.getHandler = function (e) {
        for (let t = 0, r = l.length; t < r; t += 2) {
          const r = l[t],
            n = l[t + 1];
          if ((r.global && (r.lastIndex = 0), r.test(e))) return n;
        }
        return null;
      });
  }
}
const DefaultLoadingManager = new LoadingManager();
class Loader {
  constructor(e) {
    (this.manager = void 0 !== e ? e : DefaultLoadingManager),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const r = this;
    return new Promise(function (n, i) {
      r.load(e, n, t, i);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
const loading = {};
class FileLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    void 0 === e && (e = ""),
      void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const i = this,
      a = Cache.get(e);
    if (void 0 !== a)
      return (
        i.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), i.manager.itemEnd(e);
        }, 0),
        a
      );
    if (void 0 !== loading[e])
      return void loading[e].push({ onLoad: t, onProgress: r, onError: n });
    const o = e.match(/^data:(.*?)(;base64)?,(.*)$/);
    let s;
    if (o) {
      const r = o[1],
        a = !!o[2];
      let s = o[3];
      (s = decodeURIComponent(s)), a && (s = atob(s));
      try {
        let a;
        const o = (this.responseType || "").toLowerCase();
        switch (o) {
          case "arraybuffer":
          case "blob":
            const e = new Uint8Array(s.length);
            for (let t = 0; t < s.length; t++) e[t] = s.charCodeAt(t);
            a = "blob" === o ? new Blob([e.buffer], { type: r }) : e.buffer;
            break;
          case "document":
            const t = new DOMParser();
            a = t.parseFromString(s, r);
            break;
          case "json":
            a = JSON.parse(s);
            break;
          default:
            a = s;
        }
        setTimeout(function () {
          t && t(a), i.manager.itemEnd(e);
        }, 0);
      } catch (t) {
        setTimeout(function () {
          n && n(t), i.manager.itemError(e), i.manager.itemEnd(e);
        }, 0);
      }
    } else {
      (loading[e] = []),
        loading[e].push({ onLoad: t, onProgress: r, onError: n }),
        (s = new XMLHttpRequest()).open("GET", e, !0),
        s.addEventListener(
          "load",
          function (t) {
            const r = this.response,
              n = loading[e];
            if ((delete loading[e], 200 === this.status || 0 === this.status)) {
              0 === this.status &&
                console.warn("MYGLAPI.FileLoader: HTTP Status 0 received."),
                Cache.add(e, r);
              for (let e = 0, t = n.length; e < t; e++) {
                const t = n[e];
                t.onLoad && t.onLoad(r);
              }
              i.manager.itemEnd(e);
            } else {
              for (let e = 0, r = n.length; e < r; e++) {
                const r = n[e];
                r.onError && r.onError(t);
              }
              i.manager.itemError(e), i.manager.itemEnd(e);
            }
          },
          !1
        ),
        s.addEventListener(
          "progress",
          function (t) {
            const r = loading[e];
            for (let e = 0, n = r.length; e < n; e++) {
              const n = r[e];
              n.onProgress && n.onProgress(t);
            }
          },
          !1
        ),
        s.addEventListener(
          "error",
          function (t) {
            const r = loading[e];
            delete loading[e];
            for (let e = 0, n = r.length; e < n; e++) {
              const n = r[e];
              n.onError && n.onError(t);
            }
            i.manager.itemError(e), i.manager.itemEnd(e);
          },
          !1
        ),
        s.addEventListener(
          "abort",
          function (t) {
            const r = loading[e];
            delete loading[e];
            for (let e = 0, n = r.length; e < n; e++) {
              const n = r[e];
              n.onError && n.onError(t);
            }
            i.manager.itemError(e), i.manager.itemEnd(e);
          },
          !1
        ),
        void 0 !== this.responseType && (s.responseType = this.responseType),
        void 0 !== this.withCredentials &&
          (s.withCredentials = this.withCredentials),
        s.overrideMimeType &&
          s.overrideMimeType(
            void 0 !== this.mimeType ? this.mimeType : "text/plain"
          );
      for (const e in this.requestHeader)
        s.setRequestHeader(e, this.requestHeader[e]);
      s.send(null);
    }
    return i.manager.itemStart(e), s;
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class AnimationLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    const i = this,
      a = new FileLoader(this.manager);
    a.setPath(this.path),
      a.setRequestHeader(this.requestHeader),
      a.setWithCredentials(this.withCredentials),
      a.load(
        e,
        function (r) {
          try {
            t(i.parse(JSON.parse(r)));
          } catch (t) {
            n ? n(t) : console.error(t), i.manager.itemError(e);
          }
        },
        r,
        n
      );
  }
  parse(e) {
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const n = AnimationClip.parse(e[r]);
      t.push(n);
    }
    return t;
  }
}
class CompressedTextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    const i = this,
      a = [],
      o = new CompressedTexture(),
      s = new FileLoader(this.manager);
    s.setPath(this.path),
      s.setResponseType("arraybuffer"),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(i.withCredentials);
    let l = 0;
    function c(c) {
      s.load(
        e[c],
        function (e) {
          const r = i.parse(e, !0);
          (a[c] = {
            width: r.width,
            height: r.height,
            format: r.format,
            mipmaps: r.mipmaps,
          }),
            6 === (l += 1) &&
              (1 === r.mipmapCount && (o.minFilter = LinearFilter),
              (o.image = a),
              (o.format = r.format),
              (o.needsUpdate = !0),
              t && t(o));
        },
        r,
        n
      );
    }
    if (Array.isArray(e)) for (let t = 0, r = e.length; t < r; ++t) c(t);
    else
      s.load(
        e,
        function (e) {
          const r = i.parse(e, !0);
          if (r.isCubemap) {
            const e = r.mipmaps.length / r.mipmapCount;
            for (let t = 0; t < e; t++) {
              a[t] = { mipmaps: [] };
              for (let e = 0; e < r.mipmapCount; e++)
                a[t].mipmaps.push(r.mipmaps[t * r.mipmapCount + e]),
                  (a[t].format = r.format),
                  (a[t].width = r.width),
                  (a[t].height = r.height);
            }
            o.image = a;
          } else
            (o.image.width = r.width),
              (o.image.height = r.height),
              (o.mipmaps = r.mipmaps);
          1 === r.mipmapCount && (o.minFilter = LinearFilter),
            (o.format = r.format),
            (o.needsUpdate = !0),
            t && t(o);
        },
        r,
        n
      );
    return o;
  }
}
class ImageLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const i = this,
      a = Cache.get(e);
    if (void 0 !== a)
      return (
        i.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), i.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
    function s() {
      o.removeEventListener("load", s, !1),
        o.removeEventListener("error", l, !1),
        Cache.add(e, this),
        t && t(this),
        i.manager.itemEnd(e);
    }
    function l(t) {
      o.removeEventListener("load", s, !1),
        o.removeEventListener("error", l, !1),
        n && n(t),
        i.manager.itemError(e),
        i.manager.itemEnd(e);
    }
    return (
      o.addEventListener("load", s, !1),
      o.addEventListener("error", l, !1),
      "data:" !== e.substr(0, 5) &&
        void 0 !== this.crossOrigin &&
        (o.crossOrigin = this.crossOrigin),
      i.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class CubeTextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    const i = new CubeTexture(),
      a = new ImageLoader(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;
    function s(r) {
      a.load(
        e[r],
        function (e) {
          (i.images[r] = e), 6 === ++o && ((i.needsUpdate = !0), t && t(i));
        },
        void 0,
        n
      );
    }
    for (let t = 0; t < e.length; ++t) s(t);
    return i;
  }
}
class DataTextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    const i = this,
      a = new DataTexture(),
      o = new FileLoader(this.manager);
    return (
      o.setResponseType("arraybuffer"),
      o.setRequestHeader(this.requestHeader),
      o.setPath(this.path),
      o.setWithCredentials(i.withCredentials),
      o.load(
        e,
        function (e) {
          const r = i.parse(e);
          r &&
            (void 0 !== r.image
              ? (a.image = r.image)
              : void 0 !== r.data &&
                ((a.image.width = r.width),
                (a.image.height = r.height),
                (a.image.data = r.data)),
            (a.wrapS = void 0 !== r.wrapS ? r.wrapS : ClampToEdgeWrapping),
            (a.wrapT = void 0 !== r.wrapT ? r.wrapT : ClampToEdgeWrapping),
            (a.magFilter = void 0 !== r.magFilter ? r.magFilter : LinearFilter),
            (a.minFilter = void 0 !== r.minFilter ? r.minFilter : LinearFilter),
            (a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1),
            void 0 !== r.encoding && (a.encoding = r.encoding),
            void 0 !== r.flipY && (a.flipY = r.flipY),
            void 0 !== r.format && (a.format = r.format),
            void 0 !== r.type && (a.type = r.type),
            void 0 !== r.mipmaps &&
              ((a.mipmaps = r.mipmaps),
              (a.minFilter = LinearMipmapLinearFilter)),
            1 === r.mipmapCount && (a.minFilter = LinearFilter),
            void 0 !== r.generateMipmaps &&
              (a.generateMipmaps = r.generateMipmaps),
            (a.needsUpdate = !0),
            t && t(a, r));
        },
        r,
        n
      ),
      a
    );
  }
}
class TextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    const i = new Texture(),
      a = new ImageLoader(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (r) {
          i.image = r;
          const n =
            e.search(/\.jpe?g($|\?)/i) > 0 ||
            0 === e.search(/^data\:image\/jpeg/);
          (i.format = n ? RGBFormat : RGBAFormat),
            (i.needsUpdate = !0),
            void 0 !== t && t(i);
        },
        r,
        n
      ),
      i
    );
  }
}
class Curve {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("MYGLAPI.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    const r = this.getUtoTmapping(e);
    return this.getPoint(r, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let r = 0; r <= e; r++) t.push(this.getPoint(r / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let r = 0; r <= e; r++) t.push(this.getPointAt(r / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let r,
      n = this.getPoint(0),
      i = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      (i += (r = this.getPoint(a / e)).distanceTo(n)), t.push(i), (n = r);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    const r = this.getLengths();
    let n = 0;
    const i = r.length;
    let a;
    a = t || e * r[i - 1];
    let o,
      s = 0,
      l = i - 1;
    for (; s <= l; )
      if ((o = r[(n = Math.floor(s + (l - s) / 2))] - a) < 0) s = n + 1;
      else {
        if (!(o > 0)) {
          l = n;
          break;
        }
        l = n - 1;
      }
    if (r[(n = l)] === a) return n / (i - 1);
    const c = r[n];
    return (n + (a - c) / (r[n + 1] - c)) / (i - 1);
  }
  getTangent(e, t) {
    let r = e - 1e-4,
      n = e + 1e-4;
    r < 0 && (r = 0), n > 1 && (n = 1);
    const i = this.getPoint(r),
      a = this.getPoint(n),
      o = t || (i.isVector2 ? new Vector2() : new Vector3());
    return o.copy(a).sub(i).normalize(), o;
  }
  getTangentAt(e, t) {
    const r = this.getUtoTmapping(e);
    return this.getTangent(r, t);
  }
  computeFrenetFrames(e, t) {
    const r = new Vector3(),
      n = [],
      i = [],
      a = [],
      o = new Vector3(),
      s = new Matrix4();
    for (let t = 0; t <= e; t++) {
      const r = t / e;
      (n[t] = this.getTangentAt(r, new Vector3())), n[t].normalize();
    }
    (i[0] = new Vector3()), (a[0] = new Vector3());
    let l = Number.MAX_VALUE;
    const c = Math.abs(n[0].x),
      h = Math.abs(n[0].y),
      u = Math.abs(n[0].z);
    c <= l && ((l = c), r.set(1, 0, 0)),
      h <= l && ((l = h), r.set(0, 1, 0)),
      u <= l && r.set(0, 0, 1),
      o.crossVectors(n[0], r).normalize(),
      i[0].crossVectors(n[0], o),
      a[0].crossVectors(n[0], i[0]);
    for (let t = 1; t <= e; t++) {
      if (
        ((i[t] = i[t - 1].clone()),
        (a[t] = a[t - 1].clone()),
        o.crossVectors(n[t - 1], n[t]),
        o.length() > Number.EPSILON)
      ) {
        o.normalize();
        const e = Math.acos(clamp(n[t - 1].dot(n[t]), -1, 1));
        i[t].applyMatrix4(s.makeRotationAxis(o, e));
      }
      a[t].crossVectors(n[t], i[t]);
    }
    if (!0 === t) {
      let t = Math.acos(clamp(i[0].dot(i[e]), -1, 1));
      (t /= e), n[0].dot(o.crossVectors(i[0], i[e])) > 0 && (t = -t);
      for (let r = 1; r <= e; r++)
        i[r].applyMatrix4(s.makeRotationAxis(n[r], t * r)),
          a[r].crossVectors(n[r], i[r]);
    }
    return { tangents: n, normals: i, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    const e = {
      metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class EllipseCurve extends Curve {
  constructor(
    e = 0,
    t = 0,
    r = 1,
    n = 1,
    i = 0,
    a = 2 * Math.PI,
    o = !1,
    s = 0
  ) {
    super(),
      (this.type = "EllipseCurve"),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = r),
      (this.yRadius = n),
      (this.aStartAngle = i),
      (this.aEndAngle = a),
      (this.aClockwise = o),
      (this.aRotation = s);
  }
  getPoint(e, t) {
    const r = t || new Vector2(),
      n = 2 * Math.PI;
    let i = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(i) < Number.EPSILON;
    for (; i < 0; ) i += n;
    for (; i > n; ) i -= n;
    i < Number.EPSILON && (i = a ? 0 : n),
      !0 !== this.aClockwise || a || (i === n ? (i = -n) : (i -= n));
    const o = this.aStartAngle + e * i;
    let s = this.aX + this.xRadius * Math.cos(o),
      l = this.aY + this.yRadius * Math.sin(o);
    if (0 !== this.aRotation) {
      const e = Math.cos(this.aRotation),
        t = Math.sin(this.aRotation),
        r = s - this.aX,
        n = l - this.aY;
      (s = r * e - n * t + this.aX), (l = r * t + n * e + this.aY);
    }
    return r.set(s, l);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
EllipseCurve.prototype.isEllipseCurve = !0;
class ArcCurve extends EllipseCurve {
  constructor(e, t, r, n, i, a) {
    super(e, t, r, r, n, i, a), (this.type = "ArcCurve");
  }
}
function CubicPoly() {
  let e = 0,
    t = 0,
    r = 0,
    n = 0;
  function i(i, a, o, s) {
    (e = i),
      (t = o),
      (r = -3 * i + 3 * a - 2 * o - s),
      (n = 2 * i - 2 * a + o + s);
  }
  return {
    initCatmullRom: function (e, t, r, n, a) {
      i(t, r, a * (r - e), a * (n - t));
    },
    initNonuniformCatmullRom: function (e, t, r, n, a, o, s) {
      let l = (t - e) / a - (r - e) / (a + o) + (r - t) / o,
        c = (r - t) / o - (n - t) / (o + s) + (n - r) / s;
      i(t, r, (l *= o), (c *= o));
    },
    calc: function (i) {
      const a = i * i;
      return e + t * i + r * a + n * (a * i);
    },
  };
}
ArcCurve.prototype.isArcCurve = !0;
const tmp = new Vector3(),
  px = new CubicPoly(),
  py = new CubicPoly(),
  pz = new CubicPoly();
class CatmullRomCurve3 extends Curve {
  constructor(e = [], t = !1, r = "centripetal", n = 0.5) {
    super(),
      (this.type = "CatmullRomCurve3"),
      (this.points = e),
      (this.closed = t),
      (this.curveType = r),
      (this.tension = n);
  }
  getPoint(e, t = new Vector3()) {
    const r = t,
      n = this.points,
      i = n.length,
      a = (i - (this.closed ? 0 : 1)) * e;
    let o,
      s,
      l = Math.floor(a),
      c = a - l;
    this.closed
      ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / i) + 1) * i)
      : 0 === c && l === i - 1 && ((l = i - 2), (c = 1)),
      this.closed || l > 0
        ? (o = n[(l - 1) % i])
        : (tmp.subVectors(n[0], n[1]).add(n[0]), (o = tmp));
    const h = n[l % i],
      u = n[(l + 1) % i];
    if (
      (this.closed || l + 2 < i
        ? (s = n[(l + 2) % i])
        : (tmp.subVectors(n[i - 1], n[i - 2]).add(n[i - 1]), (s = tmp)),
      "centripetal" === this.curveType || "chordal" === this.curveType)
    ) {
      const e = "chordal" === this.curveType ? 0.5 : 0.25;
      let t = Math.pow(o.distanceToSquared(h), e),
        r = Math.pow(h.distanceToSquared(u), e),
        n = Math.pow(u.distanceToSquared(s), e);
      r < 1e-4 && (r = 1),
        t < 1e-4 && (t = r),
        n < 1e-4 && (n = r),
        px.initNonuniformCatmullRom(o.x, h.x, u.x, s.x, t, r, n),
        py.initNonuniformCatmullRom(o.y, h.y, u.y, s.y, t, r, n),
        pz.initNonuniformCatmullRom(o.z, h.z, u.z, s.z, t, r, n);
    } else
      "catmullrom" === this.curveType &&
        (px.initCatmullRom(o.x, h.x, u.x, s.x, this.tension),
        py.initCatmullRom(o.y, h.y, u.y, s.y, this.tension),
        pz.initCatmullRom(o.z, h.z, u.z, s.z, this.tension));
    return r.set(px.calc(c), py.calc(c), pz.calc(c)), r;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, r = e.points.length; t < r; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, r = this.points.length; t < r; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return (
      (e.closed = this.closed),
      (e.curveType = this.curveType),
      (e.tension = this.tension),
      e
    );
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, r = e.points.length; t < r; t++) {
      const r = e.points[t];
      this.points.push(new Vector3().fromArray(r));
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
}
function CatmullRom(e, t, r, n, i) {
  const a = 0.5 * (n - t),
    o = 0.5 * (i - r),
    s = e * e;
  return (
    (2 * r - 2 * n + a + o) * (e * s) +
    (-3 * r + 3 * n - 2 * a - o) * s +
    a * e +
    r
  );
}
function QuadraticBezierP0(e, t) {
  const r = 1 - e;
  return r * r * t;
}
function QuadraticBezierP1(e, t) {
  return 2 * (1 - e) * e * t;
}
function QuadraticBezierP2(e, t) {
  return e * e * t;
}
function QuadraticBezier(e, t, r, n) {
  return (
    QuadraticBezierP0(e, t) + QuadraticBezierP1(e, r) + QuadraticBezierP2(e, n)
  );
}
function CubicBezierP0(e, t) {
  const r = 1 - e;
  return r * r * r * t;
}
function CubicBezierP1(e, t) {
  const r = 1 - e;
  return 3 * r * r * e * t;
}
function CubicBezierP2(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function CubicBezierP3(e, t) {
  return e * e * e * t;
}
function CubicBezier(e, t, r, n, i) {
  return (
    CubicBezierP0(e, t) +
    CubicBezierP1(e, r) +
    CubicBezierP2(e, n) +
    CubicBezierP3(e, i)
  );
}
CatmullRomCurve3.prototype.isCatmullRomCurve3 = !0;
class CubicBezierCurve extends Curve {
  constructor(
    e = new Vector2(),
    t = new Vector2(),
    r = new Vector2(),
    n = new Vector2()
  ) {
    super(),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = r),
      (this.v3 = n);
  }
  getPoint(e, t = new Vector2()) {
    const r = t,
      n = this.v0,
      i = this.v1,
      a = this.v2,
      o = this.v3;
    return (
      r.set(
        CubicBezier(e, n.x, i.x, a.x, o.x),
        CubicBezier(e, n.y, i.y, a.y, o.y)
      ),
      r
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
CubicBezierCurve.prototype.isCubicBezierCurve = !0;
class CubicBezierCurve3 extends Curve {
  constructor(
    e = new Vector3(),
    t = new Vector3(),
    r = new Vector3(),
    n = new Vector3()
  ) {
    super(),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = r),
      (this.v3 = n);
  }
  getPoint(e, t = new Vector3()) {
    const r = t,
      n = this.v0,
      i = this.v1,
      a = this.v2,
      o = this.v3;
    return (
      r.set(
        CubicBezier(e, n.x, i.x, a.x, o.x),
        CubicBezier(e, n.y, i.y, a.y, o.y),
        CubicBezier(e, n.z, i.z, a.z, o.z)
      ),
      r
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
CubicBezierCurve3.prototype.isCubicBezierCurve3 = !0;
class LineCurve extends Curve {
  constructor(e = new Vector2(), t = new Vector2()) {
    super(), (this.type = "LineCurve"), (this.v1 = e), (this.v2 = t);
  }
  getPoint(e, t = new Vector2()) {
    const r = t;
    return (
      1 === e
        ? r.copy(this.v2)
        : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(e).add(this.v1)),
      r
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t) {
    const r = t || new Vector2();
    return r.copy(this.v2).sub(this.v1).normalize(), r;
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
LineCurve.prototype.isLineCurve = !0;
class LineCurve3 extends Curve {
  constructor(e = new Vector3(), t = new Vector3()) {
    super(),
      (this.type = "LineCurve3"),
      (this.isLineCurve3 = !0),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new Vector3()) {
    const r = t;
    return (
      1 === e
        ? r.copy(this.v2)
        : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(e).add(this.v1)),
      r
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class QuadraticBezierCurve extends Curve {
  constructor(e = new Vector2(), t = new Vector2(), r = new Vector2()) {
    super(),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = r);
  }
  getPoint(e, t = new Vector2()) {
    const r = t,
      n = this.v0,
      i = this.v1,
      a = this.v2;
    return (
      r.set(
        QuadraticBezier(e, n.x, i.x, a.x),
        QuadraticBezier(e, n.y, i.y, a.y)
      ),
      r
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
QuadraticBezierCurve.prototype.isQuadraticBezierCurve = !0;
class QuadraticBezierCurve3 extends Curve {
  constructor(e = new Vector3(), t = new Vector3(), r = new Vector3()) {
    super(),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = r);
  }
  getPoint(e, t = new Vector3()) {
    const r = t,
      n = this.v0,
      i = this.v1,
      a = this.v2;
    return (
      r.set(
        QuadraticBezier(e, n.x, i.x, a.x),
        QuadraticBezier(e, n.y, i.y, a.y),
        QuadraticBezier(e, n.z, i.z, a.z)
      ),
      r
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
QuadraticBezierCurve3.prototype.isQuadraticBezierCurve3 = !0;
class SplineCurve extends Curve {
  constructor(e = []) {
    super(), (this.type = "SplineCurve"), (this.points = e);
  }
  getPoint(e, t = new Vector2()) {
    const r = t,
      n = this.points,
      i = (n.length - 1) * e,
      a = Math.floor(i),
      o = i - a,
      s = n[0 === a ? a : a - 1],
      l = n[a],
      c = n[a > n.length - 2 ? n.length - 1 : a + 1],
      h = n[a > n.length - 3 ? n.length - 1 : a + 2];
    return (
      r.set(
        CatmullRom(o, s.x, l.x, c.x, h.x),
        CatmullRom(o, s.y, l.y, c.y, h.y)
      ),
      r
    );
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, r = e.points.length; t < r; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, r = this.points.length; t < r; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, r = e.points.length; t < r; t++) {
      const r = e.points[t];
      this.points.push(new Vector2().fromArray(r));
    }
    return this;
  }
}
SplineCurve.prototype.isSplineCurve = !0;
var Curves = Object.freeze({
  __proto__: null,
  ArcCurve: ArcCurve,
  CatmullRomCurve3: CatmullRomCurve3,
  CubicBezierCurve: CubicBezierCurve,
  CubicBezierCurve3: CubicBezierCurve3,
  EllipseCurve: EllipseCurve,
  LineCurve: LineCurve,
  LineCurve3: LineCurve3,
  QuadraticBezierCurve: QuadraticBezierCurve,
  QuadraticBezierCurve3: QuadraticBezierCurve3,
  SplineCurve: SplineCurve,
});
class CurvePath extends Curve {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new LineCurve(t, e));
  }
  getPoint(e) {
    const t = e * this.getLength(),
      r = this.getCurveLengths();
    let n = 0;
    for (; n < r.length; ) {
      if (r[n] >= t) {
        const e = r[n] - t,
          i = this.curves[n],
          a = i.getLength(),
          o = 0 === a ? 0 : 1 - e / a;
        return i.getPointAt(o);
      }
      n++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let r = 0, n = this.curves.length; r < n; r++)
      (t += this.curves[r].getLength()), e.push(t);
    return (this.cacheLengths = e), e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let r = 0; r <= e; r++) t.push(this.getPoint(r / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let r;
    for (let n = 0, i = this.curves; n < i.length; n++) {
      const a = i[n],
        o =
          a && a.isEllipseCurve
            ? 2 * e
            : a && (a.isLineCurve || a.isLineCurve3)
            ? 1
            : a && a.isSplineCurve
            ? e * a.points.length
            : e,
        s = a.getPoints(o);
      for (let e = 0; e < s.length; e++) {
        const n = s[e];
        (r && r.equals(n)) || (t.push(n), (r = n));
      }
    }
    return (
      this.autoClose &&
        t.length > 1 &&
        !t[t.length - 1].equals(t[0]) &&
        t.push(t[0]),
      t
    );
  }
  copy(e) {
    super.copy(e), (this.curves = []);
    for (let t = 0, r = e.curves.length; t < r; t++) {
      const r = e.curves[t];
      this.curves.push(r.clone());
    }
    return (this.autoClose = e.autoClose), this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.autoClose = this.autoClose), (e.curves = []);
    for (let t = 0, r = this.curves.length; t < r; t++) {
      const r = this.curves[t];
      e.curves.push(r.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
    for (let t = 0, r = e.curves.length; t < r; t++) {
      const r = e.curves[t];
      this.curves.push(new Curves[r.type]().fromJSON(r));
    }
    return this;
  }
}
class Path extends CurvePath {
  constructor(e) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new Vector2()),
      e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, r = e.length; t < r; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const r = new LineCurve(this.currentPoint.clone(), new Vector2(e, t));
    return this.curves.push(r), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, r, n) {
    const i = new QuadraticBezierCurve(
      this.currentPoint.clone(),
      new Vector2(e, t),
      new Vector2(r, n)
    );
    return this.curves.push(i), this.currentPoint.set(r, n), this;
  }
  bezierCurveTo(e, t, r, n, i, a) {
    const o = new CubicBezierCurve(
      this.currentPoint.clone(),
      new Vector2(e, t),
      new Vector2(r, n),
      new Vector2(i, a)
    );
    return this.curves.push(o), this.currentPoint.set(i, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e),
      r = new SplineCurve(t);
    return this.curves.push(r), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, r, n, i, a) {
    const o = this.currentPoint.x,
      s = this.currentPoint.y;
    return this.absarc(e + o, t + s, r, n, i, a), this;
  }
  absarc(e, t, r, n, i, a) {
    return this.absellipse(e, t, r, r, n, i, a), this;
  }
  ellipse(e, t, r, n, i, a, o, s) {
    const l = this.currentPoint.x,
      c = this.currentPoint.y;
    return this.absellipse(e + l, t + c, r, n, i, a, o, s), this;
  }
  absellipse(e, t, r, n, i, a, o, s) {
    const l = new EllipseCurve(e, t, r, n, i, a, o, s);
    if (this.curves.length > 0) {
      const e = l.getPoint(0);
      e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
    }
    this.curves.push(l);
    const c = l.getPoint(1);
    return this.currentPoint.copy(c), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.currentPoint = this.currentPoint.toArray()), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class Shape extends Path {
  constructor(e) {
    super(e),
      (this.uuid = generateUUID()),
      (this.type = "Shape"),
      (this.holes = []);
  }
  getPointsHoles(e) {
    const t = [];
    for (let r = 0, n = this.holes.length; r < n; r++)
      t[r] = this.holes[r].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), (this.holes = []);
    for (let t = 0, r = e.holes.length; t < r; t++) {
      const r = e.holes[t];
      this.holes.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    (e.uuid = this.uuid), (e.holes = []);
    for (let t = 0, r = this.holes.length; t < r; t++) {
      const r = this.holes[t];
      e.holes.push(r.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
    for (let t = 0, r = e.holes.length; t < r; t++) {
      const r = e.holes[t];
      this.holes.push(new Path().fromJSON(r));
    }
    return this;
  }
}
class Light extends Object3D {
  constructor(e, t = 1) {
    super(),
      (this.type = "Light"),
      (this.color = new Color(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      void 0 !== this.groundColor &&
        (t.object.groundColor = this.groundColor.getHex()),
      void 0 !== this.distance && (t.object.distance = this.distance),
      void 0 !== this.angle && (t.object.angle = this.angle),
      void 0 !== this.decay && (t.object.decay = this.decay),
      void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
      void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
Light.prototype.isLight = !0;
class HemisphereLight extends Light {
  constructor(e, t, r) {
    super(e, r),
      (this.type = "HemisphereLight"),
      this.position.copy(Object3D.DefaultUp),
      this.updateMatrix(),
      (this.groundColor = new Color(t));
  }
  copy(e) {
    return (
      Light.prototype.copy.call(this, e),
      this.groundColor.copy(e.groundColor),
      this
    );
  }
}
HemisphereLight.prototype.isHemisphereLight = !0;
const _projScreenMatrix$1 = new Matrix4(),
  _lightPositionWorld$1 = new Vector3(),
  _lookTarget$1 = new Vector3();
class LightShadow {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.mapSize = new Vector2(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Matrix4()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Frustum()),
      (this._frameExtents = new Vector2(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Vector4(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      r = this.matrix;
    _lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(_lightPositionWorld$1),
      _lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(_lookTarget$1),
      t.updateMatrixWorld(),
      _projScreenMatrix$1.multiplyMatrices(
        t.projectionMatrix,
        t.matrixWorldInverse
      ),
      this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),
      r.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      r.multiply(t.projectionMatrix),
      r.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      0 !== this.bias && (e.bias = this.bias),
      0 !== this.normalBias && (e.normalBias = this.normalBias),
      1 !== this.radius && (e.radius = this.radius),
      (512 === this.mapSize.x && 512 === this.mapSize.y) ||
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class SpotLightShadow extends LightShadow {
  constructor() {
    super(new PerspectiveCamera(50, 1, 0.5, 500)), (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      r = 2 * RAD2DEG * e.angle * this.focus,
      n = this.mapSize.width / this.mapSize.height,
      i = e.distance || t.far;
    (r === t.fov && n === t.aspect && i === t.far) ||
      ((t.fov = r), (t.aspect = n), (t.far = i), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
SpotLightShadow.prototype.isSpotLightShadow = !0;
class SpotLight extends Light {
  constructor(e, t, r = 0, n = Math.PI / 3, i = 0, a = 1) {
    super(e, t),
      (this.type = "SpotLight"),
      this.position.copy(Object3D.DefaultUp),
      this.updateMatrix(),
      (this.target = new Object3D()),
      (this.distance = r),
      (this.angle = n),
      (this.penumbra = i),
      (this.decay = a),
      (this.shadow = new SpotLightShadow());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
SpotLight.prototype.isSpotLight = !0;
const _projScreenMatrix = new Matrix4(),
  _lightPositionWorld = new Vector3(),
  _lookTarget = new Vector3();
class PointLightShadow extends LightShadow {
  constructor() {
    super(new PerspectiveCamera(90, 1, 0.5, 500)),
      (this._frameExtents = new Vector2(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Vector4(2, 1, 1, 1),
        new Vector4(0, 1, 1, 1),
        new Vector4(3, 1, 1, 1),
        new Vector4(1, 1, 1, 1),
        new Vector4(3, 0, 1, 1),
        new Vector4(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new Vector3(1, 0, 0),
        new Vector3(-1, 0, 0),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, -1),
        new Vector3(0, 1, 0),
        new Vector3(0, -1, 0),
      ]),
      (this._cubeUps = [
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const r = this.camera,
      n = this.matrix,
      i = e.distance || r.far;
    i !== r.far && ((r.far = i), r.updateProjectionMatrix()),
      _lightPositionWorld.setFromMatrixPosition(e.matrixWorld),
      r.position.copy(_lightPositionWorld),
      _lookTarget.copy(r.position),
      _lookTarget.add(this._cubeDirections[t]),
      r.up.copy(this._cubeUps[t]),
      r.lookAt(_lookTarget),
      r.updateMatrixWorld(),
      n.makeTranslation(
        -_lightPositionWorld.x,
        -_lightPositionWorld.y,
        -_lightPositionWorld.z
      ),
      _projScreenMatrix.multiplyMatrices(
        r.projectionMatrix,
        r.matrixWorldInverse
      ),
      this._frustum.setFromProjectionMatrix(_projScreenMatrix);
  }
}
PointLightShadow.prototype.isPointLightShadow = !0;
class PointLight extends Light {
  constructor(e, t, r = 0, n = 1) {
    super(e, t),
      (this.type = "PointLight"),
      (this.distance = r),
      (this.decay = n),
      (this.shadow = new PointLightShadow());
  }
  get power() {
    return 4 * this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
PointLight.prototype.isPointLight = !0;
class OrthographicCamera extends Camera {
  constructor(e = -1, t = 1, r = 1, n = -1, i = 0.1, a = 2e3) {
    super(),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = r),
      (this.bottom = n),
      (this.near = i),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, r, n, i, a) {
    null === this.view &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = r),
      (this.view.offsetY = n),
      (this.view.width = i),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      r = (this.right + this.left) / 2,
      n = (this.top + this.bottom) / 2;
    let i = r - e,
      a = r + e,
      o = n + t,
      s = n - t;
    if (null !== this.view && this.view.enabled) {
      const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
        t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (a = (i += e * this.view.offsetX) + e * this.view.width),
        (s = (o -= t * this.view.offsetY) - t * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
OrthographicCamera.prototype.isOrthographicCamera = !0;
class DirectionalLightShadow extends LightShadow {
  constructor() {
    super(new OrthographicCamera(-5, 5, 5, -5, 0.5, 500));
  }
}
DirectionalLightShadow.prototype.isDirectionalLightShadow = !0;
class DirectionalLight extends Light {
  constructor(e, t) {
    super(e, t),
      (this.type = "DirectionalLight"),
      this.position.copy(Object3D.DefaultUp),
      this.updateMatrix(),
      (this.target = new Object3D()),
      (this.shadow = new DirectionalLightShadow());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
DirectionalLight.prototype.isDirectionalLight = !0;
class AmbientLight extends Light {
  constructor(e, t) {
    super(e, t), (this.type = "AmbientLight");
  }
}
AmbientLight.prototype.isAmbientLight = !0;
class RectAreaLight extends Light {
  constructor(e, t, r = 10, n = 10) {
    super(e, t),
      (this.type = "RectAreaLight"),
      (this.width = r),
      (this.height = n);
  }
  copy(e) {
    return (
      super.copy(e), (this.width = e.width), (this.height = e.height), this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.width = this.width), (t.object.height = this.height), t;
  }
}
RectAreaLight.prototype.isRectAreaLight = !0;
class SphericalHarmonics3 {
  constructor() {
    this.coefficients = [];
    for (let e = 0; e < 9; e++) this.coefficients.push(new Vector3());
  }
  set(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
    return this;
  }
  getAt(e, t) {
    const r = e.x,
      n = e.y,
      i = e.z,
      a = this.coefficients;
    return (
      t.copy(a[0]).multiplyScalar(0.282095),
      t.addScaledVector(a[1], 0.488603 * n),
      t.addScaledVector(a[2], 0.488603 * i),
      t.addScaledVector(a[3], 0.488603 * r),
      t.addScaledVector(a[4], r * n * 1.092548),
      t.addScaledVector(a[5], n * i * 1.092548),
      t.addScaledVector(a[6], 0.315392 * (3 * i * i - 1)),
      t.addScaledVector(a[7], r * i * 1.092548),
      t.addScaledVector(a[8], 0.546274 * (r * r - n * n)),
      t
    );
  }
  getIrradianceAt(e, t) {
    const r = e.x,
      n = e.y,
      i = e.z,
      a = this.coefficients;
    return (
      t.copy(a[0]).multiplyScalar(0.886227),
      t.addScaledVector(a[1], 1.023328 * n),
      t.addScaledVector(a[2], 1.023328 * i),
      t.addScaledVector(a[3], 1.023328 * r),
      t.addScaledVector(a[4], 0.858086 * r * n),
      t.addScaledVector(a[5], 0.858086 * n * i),
      t.addScaledVector(a[6], 0.743125 * i * i - 0.247708),
      t.addScaledVector(a[7], 0.858086 * r * i),
      t.addScaledVector(a[8], 0.429043 * (r * r - n * n)),
      t
    );
  }
  add(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let r = 0; r < 9; r++)
      this.coefficients[r].addScaledVector(e.coefficients[r], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let r = 0; r < 9; r++) this.coefficients[r].lerp(e.coefficients[r], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    const r = this.coefficients;
    for (let n = 0; n < 9; n++) r[n].fromArray(e, t + 3 * n);
    return this;
  }
  toArray(e = [], t = 0) {
    const r = this.coefficients;
    for (let n = 0; n < 9; n++) r[n].toArray(e, t + 3 * n);
    return e;
  }
  static getBasisAt(e, t) {
    const r = e.x,
      n = e.y,
      i = e.z;
    (t[0] = 0.282095),
      (t[1] = 0.488603 * n),
      (t[2] = 0.488603 * i),
      (t[3] = 0.488603 * r),
      (t[4] = 1.092548 * r * n),
      (t[5] = 1.092548 * n * i),
      (t[6] = 0.315392 * (3 * i * i - 1)),
      (t[7] = 1.092548 * r * i),
      (t[8] = 0.546274 * (r * r - n * n));
  }
}
SphericalHarmonics3.prototype.isSphericalHarmonics3 = !0;
class LightProbe extends Light {
  constructor(e = new SphericalHarmonics3(), t = 1) {
    super(void 0, t), (this.sh = e);
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return (this.intensity = e.intensity), this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.object.sh = this.sh.toArray()), t;
  }
}
LightProbe.prototype.isLightProbe = !0;
class MaterialLoader extends Loader {
  constructor(e) {
    super(e), (this.textures = {});
  }
  load(e, t, r, n) {
    const i = this,
      a = new FileLoader(i.manager);
    a.setPath(i.path),
      a.setRequestHeader(i.requestHeader),
      a.setWithCredentials(i.withCredentials),
      a.load(
        e,
        function (r) {
          try {
            t(i.parse(JSON.parse(r)));
          } catch (t) {
            n ? n(t) : console.error(t), i.manager.itemError(e);
          }
        },
        r,
        n
      );
  }
  parse(e) {
    const t = this.textures;
    function r(e) {
      return (
        void 0 === t[e] &&
          console.warn("MYGLAPI.MaterialLoader: Undefined texture", e),
        t[e]
      );
    }
    const n = new Materials[e.type]();
    if (
      (void 0 !== e.uuid && (n.uuid = e.uuid),
      void 0 !== e.name && (n.name = e.name),
      void 0 !== e.color && void 0 !== n.color && n.color.setHex(e.color),
      void 0 !== e.roughness && (n.roughness = e.roughness),
      void 0 !== e.metalness && (n.metalness = e.metalness),
      void 0 !== e.sheen && (n.sheen = new Color().setHex(e.sheen)),
      void 0 !== e.emissive &&
        void 0 !== n.emissive &&
        n.emissive.setHex(e.emissive),
      void 0 !== e.specular &&
        void 0 !== n.specular &&
        n.specular.setHex(e.specular),
      void 0 !== e.shininess && (n.shininess = e.shininess),
      void 0 !== e.clearcoat && (n.clearcoat = e.clearcoat),
      void 0 !== e.clearcoatRoughness &&
        (n.clearcoatRoughness = e.clearcoatRoughness),
      void 0 !== e.fog && (n.fog = e.fog),
      void 0 !== e.flatShading && (n.flatShading = e.flatShading),
      void 0 !== e.blending && (n.blending = e.blending),
      void 0 !== e.combine && (n.combine = e.combine),
      void 0 !== e.side && (n.side = e.side),
      void 0 !== e.shadowSide && (n.shadowSide = e.shadowSide),
      void 0 !== e.opacity && (n.opacity = e.opacity),
      void 0 !== e.transparent && (n.transparent = e.transparent),
      void 0 !== e.alphaTest && (n.alphaTest = e.alphaTest),
      void 0 !== e.depthTest && (n.depthTest = e.depthTest),
      void 0 !== e.depthWrite && (n.depthWrite = e.depthWrite),
      void 0 !== e.colorWrite && (n.colorWrite = e.colorWrite),
      void 0 !== e.stencilWrite && (n.stencilWrite = e.stencilWrite),
      void 0 !== e.stencilWriteMask &&
        (n.stencilWriteMask = e.stencilWriteMask),
      void 0 !== e.stencilFunc && (n.stencilFunc = e.stencilFunc),
      void 0 !== e.stencilRef && (n.stencilRef = e.stencilRef),
      void 0 !== e.stencilFuncMask && (n.stencilFuncMask = e.stencilFuncMask),
      void 0 !== e.stencilFail && (n.stencilFail = e.stencilFail),
      void 0 !== e.stencilZFail && (n.stencilZFail = e.stencilZFail),
      void 0 !== e.stencilZPass && (n.stencilZPass = e.stencilZPass),
      void 0 !== e.wireframe && (n.wireframe = e.wireframe),
      void 0 !== e.wireframeLinewidth &&
        (n.wireframeLinewidth = e.wireframeLinewidth),
      void 0 !== e.wireframeLinecap &&
        (n.wireframeLinecap = e.wireframeLinecap),
      void 0 !== e.wireframeLinejoin &&
        (n.wireframeLinejoin = e.wireframeLinejoin),
      void 0 !== e.rotation && (n.rotation = e.rotation),
      1 !== e.linewidth && (n.linewidth = e.linewidth),
      void 0 !== e.dashSize && (n.dashSize = e.dashSize),
      void 0 !== e.gapSize && (n.gapSize = e.gapSize),
      void 0 !== e.scale && (n.scale = e.scale),
      void 0 !== e.polygonOffset && (n.polygonOffset = e.polygonOffset),
      void 0 !== e.polygonOffsetFactor &&
        (n.polygonOffsetFactor = e.polygonOffsetFactor),
      void 0 !== e.polygonOffsetUnits &&
        (n.polygonOffsetUnits = e.polygonOffsetUnits),
      void 0 !== e.morphTargets && (n.morphTargets = e.morphTargets),
      void 0 !== e.morphNormals && (n.morphNormals = e.morphNormals),
      void 0 !== e.dithering && (n.dithering = e.dithering),
      void 0 !== e.alphaToCoverage && (n.alphaToCoverage = e.alphaToCoverage),
      void 0 !== e.premultipliedAlpha &&
        (n.premultipliedAlpha = e.premultipliedAlpha),
      void 0 !== e.vertexTangents && (n.vertexTangents = e.vertexTangents),
      void 0 !== e.visible && (n.visible = e.visible),
      void 0 !== e.toneMapped && (n.toneMapped = e.toneMapped),
      void 0 !== e.userData && (n.userData = e.userData),
      void 0 !== e.vertexColors &&
        ("number" == typeof e.vertexColors
          ? (n.vertexColors = e.vertexColors > 0)
          : (n.vertexColors = e.vertexColors)),
      void 0 !== e.uniforms)
    )
      for (const t in e.uniforms) {
        const i = e.uniforms[t];
        switch (((n.uniforms[t] = {}), i.type)) {
          case "t":
            n.uniforms[t].value = r(i.value);
            break;
          case "c":
            n.uniforms[t].value = new Color().setHex(i.value);
            break;
          case "v2":
            n.uniforms[t].value = new Vector2().fromArray(i.value);
            break;
          case "v3":
            n.uniforms[t].value = new Vector3().fromArray(i.value);
            break;
          case "v4":
            n.uniforms[t].value = new Vector4().fromArray(i.value);
            break;
          case "m3":
            n.uniforms[t].value = new Matrix3().fromArray(i.value);
            break;
          case "m4":
            n.uniforms[t].value = new Matrix4().fromArray(i.value);
            break;
          default:
            n.uniforms[t].value = i.value;
        }
      }
    if (
      (void 0 !== e.defines && (n.defines = e.defines),
      void 0 !== e.vertexShader && (n.vertexShader = e.vertexShader),
      void 0 !== e.fragmentShader && (n.fragmentShader = e.fragmentShader),
      void 0 !== e.extensions)
    )
      for (const t in e.extensions) n.extensions[t] = e.extensions[t];
    if (
      (void 0 !== e.shading && (n.flatShading = 1 === e.shading),
      void 0 !== e.size && (n.size = e.size),
      void 0 !== e.sizeAttenuation && (n.sizeAttenuation = e.sizeAttenuation),
      void 0 !== e.map && (n.map = r(e.map)),
      void 0 !== e.matcap && (n.matcap = r(e.matcap)),
      void 0 !== e.alphaMap && (n.alphaMap = r(e.alphaMap)),
      void 0 !== e.bumpMap && (n.bumpMap = r(e.bumpMap)),
      void 0 !== e.bumpScale && (n.bumpScale = e.bumpScale),
      void 0 !== e.normalMap && (n.normalMap = r(e.normalMap)),
      void 0 !== e.normalMapType && (n.normalMapType = e.normalMapType),
      void 0 !== e.normalScale)
    ) {
      let t = e.normalScale;
      !1 === Array.isArray(t) && (t = [t, t]),
        (n.normalScale = new Vector2().fromArray(t));
    }
    return (
      void 0 !== e.displacementMap &&
        (n.displacementMap = r(e.displacementMap)),
      void 0 !== e.displacementScale &&
        (n.displacementScale = e.displacementScale),
      void 0 !== e.displacementBias &&
        (n.displacementBias = e.displacementBias),
      void 0 !== e.roughnessMap && (n.roughnessMap = r(e.roughnessMap)),
      void 0 !== e.metalnessMap && (n.metalnessMap = r(e.metalnessMap)),
      void 0 !== e.emissiveMap && (n.emissiveMap = r(e.emissiveMap)),
      void 0 !== e.emissiveIntensity &&
        (n.emissiveIntensity = e.emissiveIntensity),
      void 0 !== e.specularMap && (n.specularMap = r(e.specularMap)),
      void 0 !== e.envMap && (n.envMap = r(e.envMap)),
      void 0 !== e.envMapIntensity && (n.envMapIntensity = e.envMapIntensity),
      void 0 !== e.reflectivity && (n.reflectivity = e.reflectivity),
      void 0 !== e.refractionRatio && (n.refractionRatio = e.refractionRatio),
      void 0 !== e.lightMap && (n.lightMap = r(e.lightMap)),
      void 0 !== e.lightMapIntensity &&
        (n.lightMapIntensity = e.lightMapIntensity),
      void 0 !== e.aoMap && (n.aoMap = r(e.aoMap)),
      void 0 !== e.aoMapIntensity && (n.aoMapIntensity = e.aoMapIntensity),
      void 0 !== e.gradientMap && (n.gradientMap = r(e.gradientMap)),
      void 0 !== e.clearcoatMap && (n.clearcoatMap = r(e.clearcoatMap)),
      void 0 !== e.clearcoatRoughnessMap &&
        (n.clearcoatRoughnessMap = r(e.clearcoatRoughnessMap)),
      void 0 !== e.clearcoatNormalMap &&
        (n.clearcoatNormalMap = r(e.clearcoatNormalMap)),
      void 0 !== e.clearcoatNormalScale &&
        (n.clearcoatNormalScale = new Vector2().fromArray(
          e.clearcoatNormalScale
        )),
      void 0 !== e.transmission && (n.transmission = e.transmission),
      void 0 !== e.transmissionMap &&
        (n.transmissionMap = r(e.transmissionMap)),
      n
    );
  }
  setTextures(e) {
    return (this.textures = e), this;
  }
}
class LoaderUtils {
  static decodeText(e) {
    if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
    let t = "";
    for (let r = 0, n = e.length; r < n; r++) t += String.fromCharCode(e[r]);
    try {
      return decodeURIComponent(escape(t));
    } catch (e) {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return -1 === t ? "./" : e.substr(0, t + 1);
  }
}
class InstancedBufferGeometry extends BufferGeometry {
  constructor() {
    super(),
      (this.type = "InstancedBufferGeometry"),
      (this.instanceCount = 1 / 0);
  }
  copy(e) {
    return super.copy(e), (this.instanceCount = e.instanceCount), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = super.toJSON(this);
    return (
      (e.instanceCount = this.instanceCount),
      (e.isInstancedBufferGeometry = !0),
      e
    );
  }
}
InstancedBufferGeometry.prototype.isInstancedBufferGeometry = !0;
class InstancedBufferAttribute extends BufferAttribute {
  constructor(e, t, r, n) {
    "number" == typeof r &&
      ((n = r),
      (r = !1),
      console.error(
        "MYGLAPI.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
      )),
      super(e, t, r),
      (this.meshPerAttribute = n || 1);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
InstancedBufferAttribute.prototype.isInstancedBufferAttribute = !0;
class BufferGeometryLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    const i = this,
      a = new FileLoader(i.manager);
    a.setPath(i.path),
      a.setRequestHeader(i.requestHeader),
      a.setWithCredentials(i.withCredentials),
      a.load(
        e,
        function (r) {
          try {
            t(i.parse(JSON.parse(r)));
          } catch (t) {
            n ? n(t) : console.error(t), i.manager.itemError(e);
          }
        },
        r,
        n
      );
  }
  parse(e) {
    const t = {},
      r = {};
    function n(e, n) {
      if (void 0 !== t[n]) return t[n];
      const i = e.interleavedBuffers[n],
        a = (function (e, t) {
          if (void 0 !== r[t]) return r[t];
          const n = e.arrayBuffers[t],
            i = new Uint32Array(n).buffer;
          return (r[t] = i), i;
        })(e, i.buffer),
        o = getTypedArray(i.type, a),
        s = new InterleavedBuffer(o, i.stride);
      return (s.uuid = i.uuid), (t[n] = s), s;
    }
    const i = e.isInstancedBufferGeometry
        ? new InstancedBufferGeometry()
        : new BufferGeometry(),
      a = e.data.index;
    if (void 0 !== a) {
      const e = getTypedArray(a.type, a.array);
      i.setIndex(new BufferAttribute(e, 1));
    }
    const o = e.data.attributes;
    for (const t in o) {
      const r = o[t];
      let a;
      if (r.isInterleavedBufferAttribute) {
        const t = n(e.data, r.data);
        a = new InterleavedBufferAttribute(
          t,
          r.itemSize,
          r.offset,
          r.normalized
        );
      } else {
        const e = getTypedArray(r.type, r.array);
        a = new (
          r.isInstancedBufferAttribute
            ? InstancedBufferAttribute
            : BufferAttribute
        )(e, r.itemSize, r.normalized);
      }
      void 0 !== r.name && (a.name = r.name),
        void 0 !== r.usage && a.setUsage(r.usage),
        void 0 !== r.updateRange &&
          ((a.updateRange.offset = r.updateRange.offset),
          (a.updateRange.count = r.updateRange.count)),
        i.setAttribute(t, a);
    }
    const s = e.data.morphAttributes;
    if (s)
      for (const t in s) {
        const r = s[t],
          a = [];
        for (let t = 0, i = r.length; t < i; t++) {
          const i = r[t];
          let o;
          if (i.isInterleavedBufferAttribute) {
            const t = n(e.data, i.data);
            o = new InterleavedBufferAttribute(
              t,
              i.itemSize,
              i.offset,
              i.normalized
            );
          } else {
            const e = getTypedArray(i.type, i.array);
            o = new BufferAttribute(e, i.itemSize, i.normalized);
          }
          void 0 !== i.name && (o.name = i.name), a.push(o);
        }
        i.morphAttributes[t] = a;
      }
    e.data.morphTargetsRelative && (i.morphTargetsRelative = !0);
    const l = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (void 0 !== l)
      for (let e = 0, t = l.length; e !== t; ++e) {
        const t = l[e];
        i.addGroup(t.start, t.count, t.materialIndex);
      }
    const c = e.data.boundingSphere;
    if (void 0 !== c) {
      const e = new Vector3();
      void 0 !== c.center && e.fromArray(c.center),
        (i.boundingSphere = new Sphere(e, c.radius));
    }
    return (
      e.name && (i.name = e.name), e.userData && (i.userData = e.userData), i
    );
  }
}
class ObjectLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    const i = this,
      a = "" === this.path ? LoaderUtils.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || a;
    const o = new FileLoader(this.manager);
    o.setPath(this.path),
      o.setRequestHeader(this.requestHeader),
      o.setWithCredentials(this.withCredentials),
      o.load(
        e,
        function (r) {
          let a = null;
          try {
            a = JSON.parse(r);
          } catch (t) {
            return (
              void 0 !== n && n(t),
              void console.error(
                "MYGLAPI:ObjectLoader: Can't parse " + e + ".",
                t.message
              )
            );
          }
          const o = a.metadata;
          void 0 !== o &&
          void 0 !== o.type &&
          "geometry" !== o.type.toLowerCase()
            ? i.parse(a, t)
            : console.error("MYGLAPI.ObjectLoader: Can't load " + e);
        },
        r,
        n
      );
  }
  parse(e, t) {
    const r = this.parseAnimations(e.animations),
      n = this.parseShapes(e.shapes),
      i = this.parseGeometries(e.geometries, n),
      a = this.parseImages(e.images, function () {
        void 0 !== t && t(l);
      }),
      o = this.parseTextures(e.textures, a),
      s = this.parseMaterials(e.materials, o),
      l = this.parseObject(e.object, i, s, r),
      c = this.parseSkeletons(e.skeletons, l);
    if ((this.bindSkeletons(l, c), void 0 !== t)) {
      let e = !1;
      for (const t in a)
        if (a[t] instanceof HTMLImageElement) {
          e = !0;
          break;
        }
      !1 === e && t(l);
    }
    return l;
  }
  parseShapes(e) {
    const t = {};
    if (void 0 !== e)
      for (let r = 0, n = e.length; r < n; r++) {
        const n = new Shape().fromJSON(e[r]);
        t[n.uuid] = n;
      }
    return t;
  }
  parseSkeletons(e, t) {
    const r = {},
      n = {};
    if (
      (t.traverse(function (e) {
        e.isBone && (n[e.uuid] = e);
      }),
      void 0 !== e)
    )
      for (let t = 0, i = e.length; t < i; t++) {
        const i = new Skeleton().fromJSON(e[t], n);
        r[i.uuid] = i;
      }
    return r;
  }
  parseGeometries(e, t) {
    const r = {};
    let n;
    if (void 0 !== e) {
      const i = new BufferGeometryLoader();
      for (let a = 0, o = e.length; a < o; a++) {
        let o;
        const s = e[a];
        switch (s.type) {
          case "PlaneGeometry":
          case "PlaneBufferGeometry":
            o = new Geometries[s.type](
              s.width,
              s.height,
              s.widthSegments,
              s.heightSegments
            );
            break;
          case "BoxGeometry":
          case "BoxBufferGeometry":
            o = new Geometries[s.type](
              s.width,
              s.height,
              s.depth,
              s.widthSegments,
              s.heightSegments,
              s.depthSegments
            );
            break;
          case "CircleGeometry":
          case "CircleBufferGeometry":
            o = new Geometries[s.type](
              s.radius,
              s.segments,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "CylinderGeometry":
          case "CylinderBufferGeometry":
            o = new Geometries[s.type](
              s.radiusTop,
              s.radiusBottom,
              s.height,
              s.radialSegments,
              s.heightSegments,
              s.openEnded,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "ConeGeometry":
          case "ConeBufferGeometry":
            o = new Geometries[s.type](
              s.radius,
              s.height,
              s.radialSegments,
              s.heightSegments,
              s.openEnded,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "SphereGeometry":
          case "SphereBufferGeometry":
            o = new Geometries[s.type](
              s.radius,
              s.widthSegments,
              s.heightSegments,
              s.phiStart,
              s.phiLength,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "DodecahedronGeometry":
          case "DodecahedronBufferGeometry":
          case "IcosahedronGeometry":
          case "IcosahedronBufferGeometry":
          case "OctahedronGeometry":
          case "OctahedronBufferGeometry":
          case "TetrahedronGeometry":
          case "TetrahedronBufferGeometry":
            o = new Geometries[s.type](s.radius, s.detail);
            break;
          case "RingGeometry":
          case "RingBufferGeometry":
            o = new Geometries[s.type](
              s.innerRadius,
              s.outerRadius,
              s.thetaSegments,
              s.phiSegments,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "TorusGeometry":
          case "TorusBufferGeometry":
            o = new Geometries[s.type](
              s.radius,
              s.tube,
              s.radialSegments,
              s.tubularSegments,
              s.arc
            );
            break;
          case "TorusKnotGeometry":
          case "TorusKnotBufferGeometry":
            o = new Geometries[s.type](
              s.radius,
              s.tube,
              s.tubularSegments,
              s.radialSegments,
              s.p,
              s.q
            );
            break;
          case "TubeGeometry":
          case "TubeBufferGeometry":
            o = new Geometries[s.type](
              new Curves[s.path.type]().fromJSON(s.path),
              s.tubularSegments,
              s.radius,
              s.radialSegments,
              s.closed
            );
            break;
          case "LatheGeometry":
          case "LatheBufferGeometry":
            o = new Geometries[s.type](
              s.points,
              s.segments,
              s.phiStart,
              s.phiLength
            );
            break;
          case "PolyhedronGeometry":
          case "PolyhedronBufferGeometry":
            o = new Geometries[s.type](
              s.vertices,
              s.indices,
              s.radius,
              s.details
            );
            break;
          case "ShapeGeometry":
          case "ShapeBufferGeometry":
            n = [];
            for (let e = 0, r = s.shapes.length; e < r; e++) {
              const r = t[s.shapes[e]];
              n.push(r);
            }
            o = new Geometries[s.type](n, s.curveSegments);
            break;
          case "ExtrudeGeometry":
          case "ExtrudeBufferGeometry":
            n = [];
            for (let e = 0, r = s.shapes.length; e < r; e++) {
              const r = t[s.shapes[e]];
              n.push(r);
            }
            const e = s.options.extrudePath;
            void 0 !== e &&
              (s.options.extrudePath = new Curves[e.type]().fromJSON(e)),
              (o = new Geometries[s.type](n, s.options));
            break;
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            o = i.parse(s);
            break;
          case "Geometry":
            console.error(
              'MYGLAPI.ObjectLoader: Loading "Geometry" is not supported anymore.'
            );
            break;
          default:
            console.warn(
              'MYGLAPI.ObjectLoader: Unsupported geometry type "' + s.type + '"'
            );
            continue;
        }
        (o.uuid = s.uuid),
          void 0 !== s.name && (o.name = s.name),
          !0 === o.isBufferGeometry &&
            void 0 !== s.userData &&
            (o.userData = s.userData),
          (r[s.uuid] = o);
      }
    }
    return r;
  }
  parseMaterials(e, t) {
    const r = {},
      n = {};
    if (void 0 !== e) {
      const i = new MaterialLoader();
      i.setTextures(t);
      for (let t = 0, a = e.length; t < a; t++) {
        const a = e[t];
        if ("MultiMaterial" === a.type) {
          const e = [];
          for (let t = 0; t < a.materials.length; t++) {
            const n = a.materials[t];
            void 0 === r[n.uuid] && (r[n.uuid] = i.parse(n)), e.push(r[n.uuid]);
          }
          n[a.uuid] = e;
        } else
          void 0 === r[a.uuid] && (r[a.uuid] = i.parse(a)),
            (n[a.uuid] = r[a.uuid]);
      }
    }
    return n;
  }
  parseAnimations(e) {
    const t = {};
    if (void 0 !== e)
      for (let r = 0; r < e.length; r++) {
        const n = e[r],
          i = AnimationClip.parse(n);
        t[i.uuid] = i;
      }
    return t;
  }
  parseImages(e, t) {
    const r = this,
      n = {};
    let i;
    function a(e) {
      if ("string" == typeof e) {
        const t = e;
        return (function (e) {
          return (
            r.manager.itemStart(e),
            i.load(
              e,
              function () {
                r.manager.itemEnd(e);
              },
              void 0,
              function () {
                r.manager.itemError(e), r.manager.itemEnd(e);
              }
            )
          );
        })(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(t) ? t : r.resourcePath + t);
      }
      return e.data
        ? {
            data: getTypedArray(e.type, e.data),
            width: e.width,
            height: e.height,
          }
        : null;
    }
    if (void 0 !== e && e.length > 0) {
      const r = new LoadingManager(t);
      (i = new ImageLoader(r)).setCrossOrigin(this.crossOrigin);
      for (let t = 0, r = e.length; t < r; t++) {
        const r = e[t],
          i = r.url;
        if (Array.isArray(i)) {
          n[r.uuid] = [];
          for (let e = 0, t = i.length; e < t; e++) {
            const t = a(i[e]);
            null !== t &&
              (t instanceof HTMLImageElement
                ? n[r.uuid].push(t)
                : n[r.uuid].push(new DataTexture(t.data, t.width, t.height)));
          }
        } else {
          const e = a(r.url);
          null !== e && (n[r.uuid] = e);
        }
      }
    }
    return n;
  }
  parseTextures(e, t) {
    function r(e, t) {
      return "number" == typeof e
        ? e
        : (console.warn(
            "MYGLAPI.ObjectLoader.parseTexture: Constant should be in numeric form.",
            e
          ),
          t[e]);
    }
    const n = {};
    if (void 0 !== e)
      for (let i = 0, a = e.length; i < a; i++) {
        const a = e[i];
        let o;
        void 0 === a.image &&
          console.warn(
            'MYGLAPI.ObjectLoader: No "image" specified for',
            a.uuid
          ),
          void 0 === t[a.image] &&
            console.warn("MYGLAPI.ObjectLoader: Undefined image", a.image);
        const s = t[a.image];
        Array.isArray(s)
          ? ((o = new CubeTexture(s)), 6 === s.length && (o.needsUpdate = !0))
          : ((o =
              s && s.data
                ? new DataTexture(s.data, s.width, s.height)
                : new Texture(s)),
            s && (o.needsUpdate = !0)),
          (o.uuid = a.uuid),
          void 0 !== a.name && (o.name = a.name),
          void 0 !== a.mapping && (o.mapping = r(a.mapping, TEXTURE_MAPPING)),
          void 0 !== a.offset && o.offset.fromArray(a.offset),
          void 0 !== a.repeat && o.repeat.fromArray(a.repeat),
          void 0 !== a.center && o.center.fromArray(a.center),
          void 0 !== a.rotation && (o.rotation = a.rotation),
          void 0 !== a.wrap &&
            ((o.wrapS = r(a.wrap[0], TEXTURE_WRAPPING)),
            (o.wrapT = r(a.wrap[1], TEXTURE_WRAPPING))),
          void 0 !== a.format && (o.format = a.format),
          void 0 !== a.type && (o.type = a.type),
          void 0 !== a.encoding && (o.encoding = a.encoding),
          void 0 !== a.minFilter &&
            (o.minFilter = r(a.minFilter, TEXTURE_FILTER)),
          void 0 !== a.magFilter &&
            (o.magFilter = r(a.magFilter, TEXTURE_FILTER)),
          void 0 !== a.anisotropy && (o.anisotropy = a.anisotropy),
          void 0 !== a.flipY && (o.flipY = a.flipY),
          void 0 !== a.premultiplyAlpha &&
            (o.premultiplyAlpha = a.premultiplyAlpha),
          void 0 !== a.unpackAlignment &&
            (o.unpackAlignment = a.unpackAlignment),
          (n[a.uuid] = o);
      }
    return n;
  }
  parseObject(e, t, r, n) {
    let i, a, o;
    function s(e) {
      return (
        void 0 === t[e] &&
          console.warn("MYGLAPI.ObjectLoader: Undefined geometry", e),
        t[e]
      );
    }
    function l(e) {
      if (void 0 !== e) {
        if (Array.isArray(e)) {
          const t = [];
          for (let n = 0, i = e.length; n < i; n++) {
            const i = e[n];
            void 0 === r[i] &&
              console.warn("MYGLAPI.ObjectLoader: Undefined material", i),
              t.push(r[i]);
          }
          return t;
        }
        return (
          void 0 === r[e] &&
            console.warn("MYGLAPI.ObjectLoader: Undefined material", e),
          r[e]
        );
      }
    }
    switch (e.type) {
      case "Scene":
        (i = new Scene()),
          void 0 !== e.background &&
            Number.isInteger(e.background) &&
            (i.background = new Color(e.background)),
          void 0 !== e.fog &&
            ("Fog" === e.fog.type
              ? (i.fog = new Fog(e.fog.color, e.fog.near, e.fog.far))
              : "FogExp2" === e.fog.type &&
                (i.fog = new FogExp2(e.fog.color, e.fog.density)));
        break;
      case "PerspectiveCamera":
        (i = new PerspectiveCamera(e.fov, e.aspect, e.near, e.far)),
          void 0 !== e.focus && (i.focus = e.focus),
          void 0 !== e.zoom && (i.zoom = e.zoom),
          void 0 !== e.filmGauge && (i.filmGauge = e.filmGauge),
          void 0 !== e.filmOffset && (i.filmOffset = e.filmOffset),
          void 0 !== e.view && (i.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        (i = new OrthographicCamera(
          e.left,
          e.right,
          e.top,
          e.bottom,
          e.near,
          e.far
        )),
          void 0 !== e.zoom && (i.zoom = e.zoom),
          void 0 !== e.view && (i.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        i = new AmbientLight(e.color, e.intensity);
        break;
      case "DirectionalLight":
        i = new DirectionalLight(e.color, e.intensity);
        break;
      case "PointLight":
        i = new PointLight(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        i = new RectAreaLight(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        i = new SpotLight(
          e.color,
          e.intensity,
          e.distance,
          e.angle,
          e.penumbra,
          e.decay
        );
        break;
      case "HemisphereLight":
        i = new HemisphereLight(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        i = new LightProbe().fromJSON(e);
        break;
      case "SkinnedMesh":
        (a = s(e.geometry)),
          (o = l(e.material)),
          (i = new SkinnedMesh(a, o)),
          void 0 !== e.bindMode && (i.bindMode = e.bindMode),
          void 0 !== e.bindMatrix && i.bindMatrix.fromArray(e.bindMatrix),
          void 0 !== e.skeleton && (i.skeleton = e.skeleton);
        break;
      case "Mesh":
        (a = s(e.geometry)), (o = l(e.material)), (i = new Mesh(a, o));
        break;
      case "InstancedMesh":
        (a = s(e.geometry)), (o = l(e.material));
        const t = e.count,
          r = e.instanceMatrix,
          n = e.instanceColor;
        ((i = new InstancedMesh(a, o, t)).instanceMatrix = new BufferAttribute(
          new Float32Array(r.array),
          16
        )),
          void 0 !== n &&
            (i.instanceColor = new BufferAttribute(
              new Float32Array(n.array),
              n.itemSize
            ));
        break;
      case "LOD":
        i = new LOD();
        break;
      case "Line":
        i = new Line(s(e.geometry), l(e.material));
        break;
      case "LineLoop":
        i = new LineLoop(s(e.geometry), l(e.material));
        break;
      case "LineSegments":
        i = new LineSegments(s(e.geometry), l(e.material));
        break;
      case "PointCloud":
      case "Points":
        i = new Points(s(e.geometry), l(e.material));
        break;
      case "Sprite":
        i = new Sprite(l(e.material));
        break;
      case "Group":
        i = new Group();
        break;
      case "Bone":
        i = new Bone();
        break;
      default:
        i = new Object3D();
    }
    if (
      ((i.uuid = e.uuid),
      void 0 !== e.name && (i.name = e.name),
      void 0 !== e.matrix
        ? (i.matrix.fromArray(e.matrix),
          void 0 !== e.matrixAutoUpdate &&
            (i.matrixAutoUpdate = e.matrixAutoUpdate),
          i.matrixAutoUpdate &&
            i.matrix.decompose(i.position, i.quaternion, i.scale))
        : (void 0 !== e.position && i.position.fromArray(e.position),
          void 0 !== e.rotation && i.rotation.fromArray(e.rotation),
          void 0 !== e.quaternion && i.quaternion.fromArray(e.quaternion),
          void 0 !== e.scale && i.scale.fromArray(e.scale)),
      void 0 !== e.castShadow && (i.castShadow = e.castShadow),
      void 0 !== e.receiveShadow && (i.receiveShadow = e.receiveShadow),
      e.shadow &&
        (void 0 !== e.shadow.bias && (i.shadow.bias = e.shadow.bias),
        void 0 !== e.shadow.normalBias &&
          (i.shadow.normalBias = e.shadow.normalBias),
        void 0 !== e.shadow.radius && (i.shadow.radius = e.shadow.radius),
        void 0 !== e.shadow.mapSize &&
          i.shadow.mapSize.fromArray(e.shadow.mapSize),
        void 0 !== e.shadow.camera &&
          (i.shadow.camera = this.parseObject(e.shadow.camera))),
      void 0 !== e.visible && (i.visible = e.visible),
      void 0 !== e.frustumCulled && (i.frustumCulled = e.frustumCulled),
      void 0 !== e.renderOrder && (i.renderOrder = e.renderOrder),
      void 0 !== e.userData && (i.userData = e.userData),
      void 0 !== e.layers && (i.layers.mask = e.layers),
      void 0 !== e.children)
    ) {
      const a = e.children;
      for (let e = 0; e < a.length; e++) i.add(this.parseObject(a[e], t, r, n));
    }
    if (void 0 !== e.animations) {
      const t = e.animations;
      for (let e = 0; e < t.length; e++) {
        const r = t[e];
        i.animations.push(n[r]);
      }
    }
    if ("LOD" === e.type) {
      void 0 !== e.autoUpdate && (i.autoUpdate = e.autoUpdate);
      const t = e.levels;
      for (let e = 0; e < t.length; e++) {
        const r = t[e],
          n = i.getObjectByProperty("uuid", r.object);
        void 0 !== n && i.addLevel(n, r.distance);
      }
    }
    return i;
  }
  bindSkeletons(e, t) {
    0 !== Object.keys(t).length &&
      e.traverse(function (e) {
        if (!0 === e.isSkinnedMesh && void 0 !== e.skeleton) {
          const r = t[e.skeleton];
          void 0 === r
            ? console.warn(
                "MYGLAPI.ObjectLoader: No skeleton found with UUID:",
                e.skeleton
              )
            : e.bind(r, e.bindMatrix);
        }
      });
  }
  setTexturePath(e) {
    return (
      console.warn(
        "MYGLAPI.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."
      ),
      this.setResourcePath(e)
    );
  }
}
const TEXTURE_MAPPING = {
    UVMapping: UVMapping,
    CubeReflectionMapping: CubeReflectionMapping,
    CubeRefractionMapping: CubeRefractionMapping,
    EquirectangularReflectionMapping: EquirectangularReflectionMapping,
    EquirectangularRefractionMapping: EquirectangularRefractionMapping,
    CubeUVReflectionMapping: CubeUVReflectionMapping,
    CubeUVRefractionMapping: CubeUVRefractionMapping,
  },
  TEXTURE_WRAPPING = {
    RepeatWrapping: RepeatWrapping,
    ClampToEdgeWrapping: ClampToEdgeWrapping,
    MirroredRepeatWrapping: MirroredRepeatWrapping,
  },
  TEXTURE_FILTER = {
    NearestFilter: NearestFilter,
    NearestMipmapNearestFilter: NearestMipmapNearestFilter,
    NearestMipmapLinearFilter: NearestMipmapLinearFilter,
    LinearFilter: LinearFilter,
    LinearMipmapNearestFilter: LinearMipmapNearestFilter,
    LinearMipmapLinearFilter: LinearMipmapLinearFilter,
  };
class ImageBitmapLoader extends Loader {
  constructor(e) {
    super(e),
      "undefined" == typeof createImageBitmap &&
        console.warn(
          "MYGLAPI.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      "undefined" == typeof fetch &&
        console.warn("MYGLAPI.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, r, n) {
    void 0 === e && (e = ""),
      void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const i = this,
      a = Cache.get(e);
    if (void 0 !== a)
      return (
        i.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), i.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = {};
    (o.credentials =
      "anonymous" === this.crossOrigin ? "same-origin" : "include"),
      (o.headers = this.requestHeader),
      fetch(e, o)
        .then(function (e) {
          return e.blob();
        })
        .then(function (e) {
          return createImageBitmap(
            e,
            Object.assign(i.options, { colorSpaceConversion: "none" })
          );
        })
        .then(function (r) {
          Cache.add(e, r), t && t(r), i.manager.itemEnd(e);
        })
        .catch(function (t) {
          n && n(t), i.manager.itemError(e), i.manager.itemEnd(e);
        }),
      i.manager.itemStart(e);
  }
}
ImageBitmapLoader.prototype.isImageBitmapLoader = !0;
class ShapePath {
  constructor() {
    (this.type = "ShapePath"),
      (this.color = new Color()),
      (this.subPaths = []),
      (this.currentPath = null);
  }
  moveTo(e, t) {
    return (
      (this.currentPath = new Path()),
      this.subPaths.push(this.currentPath),
      this.currentPath.moveTo(e, t),
      this
    );
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, r, n) {
    return this.currentPath.quadraticCurveTo(e, t, r, n), this;
  }
  bezierCurveTo(e, t, r, n, i, a) {
    return this.currentPath.bezierCurveTo(e, t, r, n, i, a), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e, t) {
    function r(e) {
      const t = [];
      for (let r = 0, n = e.length; r < n; r++) {
        const n = e[r],
          i = new Shape();
        (i.curves = n.curves), t.push(i);
      }
      return t;
    }
    function n(e, t) {
      const r = t.length;
      let n = !1;
      for (let i = r - 1, a = 0; a < r; i = a++) {
        let r = t[i],
          o = t[a],
          s = o.x - r.x,
          l = o.y - r.y;
        if (Math.abs(l) > Number.EPSILON) {
          if (
            (l < 0 && ((r = t[a]), (s = -s), (o = t[i]), (l = -l)),
            e.y < r.y || e.y > o.y)
          )
            continue;
          if (e.y === r.y) {
            if (e.x === r.x) return !0;
          } else {
            const t = l * (e.x - r.x) - s * (e.y - r.y);
            if (0 === t) return !0;
            if (t < 0) continue;
            n = !n;
          }
        } else {
          if (e.y !== r.y) continue;
          if ((o.x <= e.x && e.x <= r.x) || (r.x <= e.x && e.x <= o.x))
            return !0;
        }
      }
      return n;
    }
    const i = ShapeUtils.isClockWise,
      a = this.subPaths;
    if (0 === a.length) return [];
    if (!0 === t) return r(a);
    let o, s, l;
    const c = [];
    if (1 === a.length)
      return (s = a[0]), ((l = new Shape()).curves = s.curves), c.push(l), c;
    let h = !i(a[0].getPoints());
    h = e ? !h : h;
    const u = [],
      d = [];
    let p,
      m,
      f = [],
      g = 0;
    (d[g] = void 0), (f[g] = []);
    for (let t = 0, r = a.length; t < r; t++)
      (o = i((p = (s = a[t]).getPoints()))),
        (o = e ? !o : o)
          ? (!h && d[g] && g++,
            (d[g] = { s: new Shape(), p: p }),
            (d[g].s.curves = s.curves),
            h && g++,
            (f[g] = []))
          : f[g].push({ h: s, p: p[0] });
    if (!d[0]) return r(a);
    if (d.length > 1) {
      let e = !1;
      const t = [];
      for (let e = 0, t = d.length; e < t; e++) u[e] = [];
      for (let r = 0, i = d.length; r < i; r++) {
        const i = f[r];
        for (let a = 0; a < i.length; a++) {
          const o = i[a];
          let s = !0;
          for (let i = 0; i < d.length; i++)
            n(o.p, d[i].p) &&
              (r !== i && t.push({ froms: r, tos: i, hole: a }),
              s ? ((s = !1), u[i].push(o)) : (e = !0));
          s && u[r].push(o);
        }
      }
      t.length > 0 && (e || (f = u));
    }
    for (let e = 0, t = d.length; e < t; e++) {
      (l = d[e].s), c.push(l);
      for (let t = 0, r = (m = f[e]).length; t < r; t++) l.holes.push(m[t].h);
    }
    return c;
  }
}
class Font {
  constructor(e) {
    (this.type = "Font"), (this.data = e);
  }
  generateShapes(e, t = 100) {
    const r = [],
      n = createPaths(e, t, this.data);
    for (let e = 0, t = n.length; e < t; e++)
      Array.prototype.push.apply(r, n[e].toShapes());
    return r;
  }
}
function createPaths(e, t, r) {
  const n = Array.from(e),
    i = t / r.resolution,
    a = (r.boundingBox.yMax - r.boundingBox.yMin + r.underlineThickness) * i,
    o = [];
  let s = 0,
    l = 0;
  for (let e = 0; e < n.length; e++) {
    const t = n[e];
    if ("\n" === t) (s = 0), (l -= a);
    else {
      const e = createPath(t, i, s, l, r);
      (s += e.offsetX), o.push(e.path);
    }
  }
  return o;
}
function createPath(e, t, r, n, i) {
  const a = i.glyphs[e] || i.glyphs["?"];
  if (!a)
    return void console.error(
      'MYGLAPI.Font: character "' +
        e +
        '" does not exists in font family ' +
        i.familyName +
        "."
    );
  const o = new ShapePath();
  let s, l, c, h, u, d, p, m;
  if (a.o) {
    const e = a._cachedOutline || (a._cachedOutline = a.o.split(" "));
    for (let i = 0, a = e.length; i < a; ) {
      switch (e[i++]) {
        case "m":
          (s = e[i++] * t + r), (l = e[i++] * t + n), o.moveTo(s, l);
          break;
        case "l":
          (s = e[i++] * t + r), (l = e[i++] * t + n), o.lineTo(s, l);
          break;
        case "q":
          (c = e[i++] * t + r),
            (h = e[i++] * t + n),
            (u = e[i++] * t + r),
            (d = e[i++] * t + n),
            o.quadraticCurveTo(u, d, c, h);
          break;
        case "b":
          (c = e[i++] * t + r),
            (h = e[i++] * t + n),
            (u = e[i++] * t + r),
            (d = e[i++] * t + n),
            (p = e[i++] * t + r),
            (m = e[i++] * t + n),
            o.bezierCurveTo(u, d, p, m, c, h);
      }
    }
  }
  return { offsetX: a.ha * t, path: o };
}
Font.prototype.isFont = !0;
class FontLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    const i = this,
      a = new FileLoader(this.manager);
    a.setPath(this.path),
      a.setRequestHeader(this.requestHeader),
      a.setWithCredentials(i.withCredentials),
      a.load(
        e,
        function (e) {
          let r;
          try {
            r = JSON.parse(e);
          } catch (t) {
            console.warn(
              "MYGLAPI.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."
            ),
              (r = JSON.parse(e.substring(65, e.length - 2)));
          }
          const n = i.parse(r);
          t && t(n);
        },
        r,
        n
      );
  }
  parse(e) {
    return new Font(e);
  }
}
let _context;
const AudioContext = {
  getContext: function () {
    return (
      void 0 === _context &&
        (_context = new (window.AudioContext || window.webkitAudioContext)()),
      _context
    );
  },
  setContext: function (e) {
    _context = e;
  },
};
class AudioLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    const i = this,
      a = new FileLoader(this.manager);
    a.setResponseType("arraybuffer"),
      a.setPath(this.path),
      a.setRequestHeader(this.requestHeader),
      a.setWithCredentials(this.withCredentials),
      a.load(
        e,
        function (r) {
          try {
            const a = r.slice(0);
            AudioContext.getContext().decodeAudioData(a, function (e) {
              t(e);
            });
          } catch (t) {
            n ? n(t) : console.error(t), i.manager.itemError(e);
          }
        },
        r,
        n
      );
  }
}
class HemisphereLightProbe extends LightProbe {
  constructor(e, t, r = 1) {
    super(void 0, r);
    const n = new Color().set(e),
      i = new Color().set(t),
      a = new Vector3(n.r, n.g, n.b),
      o = new Vector3(i.r, i.g, i.b),
      s = Math.sqrt(Math.PI),
      l = s * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),
      this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l);
  }
}
HemisphereLightProbe.prototype.isHemisphereLightProbe = !0;
class AmbientLightProbe extends LightProbe {
  constructor(e, t = 1) {
    super(void 0, t);
    const r = new Color().set(e);
    this.sh.coefficients[0]
      .set(r.r, r.g, r.b)
      .multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
AmbientLightProbe.prototype.isAmbientLightProbe = !0;
const _eyeRight = new Matrix4(),
  _eyeLeft = new Matrix4();
class StereoCamera {
  constructor() {
    (this.type = "StereoCamera"),
      (this.aspect = 1),
      (this.eyeSep = 0.064),
      (this.cameraL = new PerspectiveCamera()),
      this.cameraL.layers.enable(1),
      (this.cameraL.matrixAutoUpdate = !1),
      (this.cameraR = new PerspectiveCamera()),
      this.cameraR.layers.enable(2),
      (this.cameraR.matrixAutoUpdate = !1),
      (this._cache = {
        focus: null,
        fov: null,
        aspect: null,
        near: null,
        far: null,
        zoom: null,
        eyeSep: null,
      });
  }
  update(e) {
    const t = this._cache;
    if (
      t.focus !== e.focus ||
      t.fov !== e.fov ||
      t.aspect !== e.aspect * this.aspect ||
      t.near !== e.near ||
      t.far !== e.far ||
      t.zoom !== e.zoom ||
      t.eyeSep !== this.eyeSep
    ) {
      (t.focus = e.focus),
        (t.fov = e.fov),
        (t.aspect = e.aspect * this.aspect),
        (t.near = e.near),
        (t.far = e.far),
        (t.zoom = e.zoom),
        (t.eyeSep = this.eyeSep);
      const r = e.projectionMatrix.clone(),
        n = t.eyeSep / 2,
        i = (n * t.near) / t.focus,
        a = (t.near * Math.tan(DEG2RAD * t.fov * 0.5)) / t.zoom;
      let o, s;
      (_eyeLeft.elements[12] = -n),
        (_eyeRight.elements[12] = n),
        (o = -a * t.aspect + i),
        (s = a * t.aspect + i),
        (r.elements[0] = (2 * t.near) / (s - o)),
        (r.elements[8] = (s + o) / (s - o)),
        this.cameraL.projectionMatrix.copy(r),
        (o = -a * t.aspect - i),
        (s = a * t.aspect - i),
        (r.elements[0] = (2 * t.near) / (s - o)),
        (r.elements[8] = (s + o) / (s - o)),
        this.cameraR.projectionMatrix.copy(r);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(_eyeLeft),
      this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(_eyeRight);
  }
}
class Clock {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = now()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = now();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function now() {
  return ("undefined" == typeof performance ? Date : performance).now();
}
const _position$1 = new Vector3(),
  _quaternion$1 = new Quaternion(),
  _scale$1 = new Vector3(),
  _orientation$1 = new Vector3();
class AudioListener extends Object3D {
  constructor() {
    super(),
      (this.type = "AudioListener"),
      (this.context = AudioContext.getContext()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      (this.filter = null),
      (this.timeDelta = 0),
      (this._clock = new Clock());
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return (
      null !== this.filter &&
        (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        (this.filter = null)),
      this
    );
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return (
      null !== this.filter
        ? (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination))
        : this.gain.disconnect(this.context.destination),
      (this.filter = e),
      this.gain.connect(this.filter),
      this.filter.connect(this.context.destination),
      this
    );
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener,
      r = this.up;
    if (
      ((this.timeDelta = this._clock.getDelta()),
      this.matrixWorld.decompose(_position$1, _quaternion$1, _scale$1),
      _orientation$1.set(0, 0, -1).applyQuaternion(_quaternion$1),
      t.positionX)
    ) {
      const e = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(_position$1.x, e),
        t.positionY.linearRampToValueAtTime(_position$1.y, e),
        t.positionZ.linearRampToValueAtTime(_position$1.z, e),
        t.forwardX.linearRampToValueAtTime(_orientation$1.x, e),
        t.forwardY.linearRampToValueAtTime(_orientation$1.y, e),
        t.forwardZ.linearRampToValueAtTime(_orientation$1.z, e),
        t.upX.linearRampToValueAtTime(r.x, e),
        t.upY.linearRampToValueAtTime(r.y, e),
        t.upZ.linearRampToValueAtTime(r.z, e);
    } else
      t.setPosition(_position$1.x, _position$1.y, _position$1.z),
        t.setOrientation(
          _orientation$1.x,
          _orientation$1.y,
          _orientation$1.z,
          r.x,
          r.y,
          r.z
        );
  }
}
class Audio extends Object3D {
  constructor(e) {
    super(),
      (this.type = "Audio"),
      (this.listener = e),
      (this.context = e.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(e.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = "empty"),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "audioNode"),
      (this.source = e),
      this.connect(),
      this
    );
  }
  setMediaElementSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaNode"),
      (this.source = this.context.createMediaElementSource(e)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaStreamNode"),
      (this.source = this.context.createMediaStreamSource(e)),
      this.connect(),
      this
    );
  }
  setBuffer(e) {
    return (
      (this.buffer = e),
      (this.sourceType = "buffer"),
      this.autoplay && this.play(),
      this
    );
  }
  play(e = 0) {
    if (!0 === this.isPlaying)
      return void console.warn("MYGLAPI.Audio: Audio is already playing.");
    if (!1 === this.hasPlaybackControl)
      return void console.warn(
        "MYGLAPI.Audio: this Audio has no playback control."
      );
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return (
      (t.buffer = this.buffer),
      (t.loop = this.loop),
      (t.loopStart = this.loopStart),
      (t.loopEnd = this.loopEnd),
      (t.onended = this.onEnded.bind(this)),
      t.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = t),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (!1 !== this.hasPlaybackControl)
      return (
        !0 === this.isPlaying &&
          ((this._progress +=
            Math.max(this.context.currentTime - this._startedAt, 0) *
            this.playbackRate),
          !0 === this.loop &&
            (this._progress =
              this._progress % (this.duration || this.buffer.duration)),
          this.source.stop(),
          (this.source.onended = null),
          (this.isPlaying = !1)),
        this
      );
    console.warn("MYGLAPI.Audio: this Audio has no playback control.");
  }
  stop() {
    if (!1 !== this.hasPlaybackControl)
      return (
        (this._progress = 0),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1),
        this
      );
    console.warn("MYGLAPI.Audio: this Audio has no playback control.");
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else this.source.disconnect(this.getOutput());
    return (this._connected = !1), this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return (
      e || (e = []),
      !0 === this._connected
        ? (this.disconnect(), (this.filters = e.slice()), this.connect())
        : (this.filters = e.slice()),
      this
    );
  }
  setDetune(e) {
    if (((this.detune = e), void 0 !== this.source.detune))
      return (
        !0 === this.isPlaying &&
          this.source.detune.setTargetAtTime(
            this.detune,
            this.context.currentTime,
            0.01
          ),
        this
      );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (!1 !== this.hasPlaybackControl)
      return (
        (this.playbackRate = e),
        !0 === this.isPlaying &&
          this.source.playbackRate.setTargetAtTime(
            this.playbackRate,
            this.context.currentTime,
            0.01
          ),
        this
      );
    console.warn("MYGLAPI.Audio: this Audio has no playback control.");
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return !1 === this.hasPlaybackControl
      ? (console.warn("MYGLAPI.Audio: this Audio has no playback control."), !1)
      : this.loop;
  }
  setLoop(e) {
    if (!1 !== this.hasPlaybackControl)
      return (
        (this.loop = e),
        !0 === this.isPlaying && (this.source.loop = this.loop),
        this
      );
    console.warn("MYGLAPI.Audio: this Audio has no playback control.");
  }
  setLoopStart(e) {
    return (this.loopStart = e), this;
  }
  setLoopEnd(e) {
    return (this.loopEnd = e), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
}
const _position = new Vector3(),
  _quaternion = new Quaternion(),
  _scale = new Vector3(),
  _orientation = new Vector3();
class PositionalAudio extends Audio {
  constructor(e) {
    super(e),
      (this.panner = this.context.createPanner()),
      (this.panner.panningModel = "HRTF"),
      this.panner.connect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(e) {
    return (this.panner.refDistance = e), this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(e) {
    return (this.panner.rolloffFactor = e), this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(e) {
    return (this.panner.distanceModel = e), this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(e) {
    return (this.panner.maxDistance = e), this;
  }
  setDirectionalCone(e, t, r) {
    return (
      (this.panner.coneInnerAngle = e),
      (this.panner.coneOuterAngle = t),
      (this.panner.coneOuterGain = r),
      this
    );
  }
  updateMatrixWorld(e) {
    if (
      (super.updateMatrixWorld(e),
      !0 === this.hasPlaybackControl && !1 === this.isPlaying)
    )
      return;
    this.matrixWorld.decompose(_position, _quaternion, _scale),
      _orientation.set(0, 0, 1).applyQuaternion(_quaternion);
    const t = this.panner;
    if (t.positionX) {
      const e = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(_position.x, e),
        t.positionY.linearRampToValueAtTime(_position.y, e),
        t.positionZ.linearRampToValueAtTime(_position.z, e),
        t.orientationX.linearRampToValueAtTime(_orientation.x, e),
        t.orientationY.linearRampToValueAtTime(_orientation.y, e),
        t.orientationZ.linearRampToValueAtTime(_orientation.z, e);
    } else
      t.setPosition(_position.x, _position.y, _position.z),
        t.setOrientation(_orientation.x, _orientation.y, _orientation.z);
  }
}
class AudioAnalyser {
  constructor(e, t = 2048) {
    (this.analyser = e.context.createAnalyser()),
      (this.analyser.fftSize = t),
      (this.data = new Uint8Array(this.analyser.frequencyBinCount)),
      e.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let e = 0;
    const t = this.getFrequencyData();
    for (let r = 0; r < t.length; r++) e += t[r];
    return e / t.length;
  }
}
class PropertyMixer {
  constructor(e, t, r) {
    let n, i, a;
    switch (((this.binding = e), (this.valueSize = r), t)) {
      case "quaternion":
        (n = this._slerp),
          (i = this._slerpAdditive),
          (a = this._setAdditiveIdentityQuaternion),
          (this.buffer = new Float64Array(6 * r)),
          (this._workIndex = 5);
        break;
      case "string":
      case "bool":
        (n = this._select),
          (i = this._select),
          (a = this._setAdditiveIdentityOther),
          (this.buffer = new Array(5 * r));
        break;
      default:
        (n = this._lerp),
          (i = this._lerpAdditive),
          (a = this._setAdditiveIdentityNumeric),
          (this.buffer = new Float64Array(5 * r));
    }
    (this._mixBufferRegion = n),
      (this._mixBufferRegionAdditive = i),
      (this._setIdentity = a),
      (this._origIndex = 3),
      (this._addIndex = 4),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0),
      (this.useCount = 0),
      (this.referenceCount = 0);
  }
  accumulate(e, t) {
    const r = this.buffer,
      n = this.valueSize,
      i = e * n + n;
    let a = this.cumulativeWeight;
    if (0 === a) {
      for (let e = 0; e !== n; ++e) r[i + e] = r[e];
      a = t;
    } else {
      const e = t / (a += t);
      this._mixBufferRegion(r, i, 0, e, n);
    }
    this.cumulativeWeight = a;
  }
  accumulateAdditive(e) {
    const t = this.buffer,
      r = this.valueSize,
      n = r * this._addIndex;
    0 === this.cumulativeWeightAdditive && this._setIdentity(),
      this._mixBufferRegionAdditive(t, n, 0, e, r),
      (this.cumulativeWeightAdditive += e);
  }
  apply(e) {
    const t = this.valueSize,
      r = this.buffer,
      n = e * t + t,
      i = this.cumulativeWeight,
      a = this.cumulativeWeightAdditive,
      o = this.binding;
    if (
      ((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), i < 1)
    ) {
      const e = t * this._origIndex;
      this._mixBufferRegion(r, n, e, 1 - i, t);
    }
    a > 0 && this._mixBufferRegionAdditive(r, n, this._addIndex * t, 1, t);
    for (let e = t, i = t + t; e !== i; ++e)
      if (r[e] !== r[e + t]) {
        o.setValue(r, n);
        break;
      }
  }
  saveOriginalState() {
    const e = this.binding,
      t = this.buffer,
      r = this.valueSize,
      n = r * this._origIndex;
    e.getValue(t, n);
    for (let e = r, i = n; e !== i; ++e) t[e] = t[n + (e % r)];
    this._setIdentity(),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0);
  }
  restoreOriginalState() {
    const e = 3 * this.valueSize;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize,
      t = e + this.valueSize;
    for (let r = e; r < t; r++) this.buffer[r] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(),
      (this.buffer[this._addIndex * this.valueSize + 3] = 1);
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize,
      t = this._addIndex * this.valueSize;
    for (let r = 0; r < this.valueSize; r++)
      this.buffer[t + r] = this.buffer[e + r];
  }
  _select(e, t, r, n, i) {
    if (n >= 0.5) for (let n = 0; n !== i; ++n) e[t + n] = e[r + n];
  }
  _slerp(e, t, r, n) {
    Quaternion.slerpFlat(e, t, e, t, e, r, n);
  }
  _slerpAdditive(e, t, r, n, i) {
    const a = this._workIndex * i;
    Quaternion.multiplyQuaternionsFlat(e, a, e, t, e, r),
      Quaternion.slerpFlat(e, t, e, t, e, a, n);
  }
  _lerp(e, t, r, n, i) {
    const a = 1 - n;
    for (let o = 0; o !== i; ++o) {
      const i = t + o;
      e[i] = e[i] * a + e[r + o] * n;
    }
  }
  _lerpAdditive(e, t, r, n, i) {
    for (let a = 0; a !== i; ++a) {
      const i = t + a;
      e[i] = e[i] + e[r + a] * n;
    }
  }
}
const _RESERVED_CHARS_RE = "\\[\\]\\.:\\/",
  _reservedRe = new RegExp("[\\[\\]\\.:\\/]", "g"),
  _wordChar = "[^\\[\\]\\.:\\/]",
  _wordCharOrDot = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
  _directoryRe = /((?:WC+[\/:])*)/.source.replace("WC", _wordChar),
  _nodeRe = /(WCOD+)?/.source.replace("WCOD", _wordCharOrDot),
  _objectRe = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _wordChar),
  _propertyRe = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _wordChar),
  _trackRe = new RegExp(
    "^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$"
  ),
  _supportedObjectNames = ["material", "materials", "bones"];
class Composite {
  constructor(e, t, r) {
    const n = r || PropertyBinding.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, n));
  }
  getValue(e, t) {
    this.bind();
    const r = this._targetGroup.nCachedObjects_,
      n = this._bindings[r];
    void 0 !== n && n.getValue(e, t);
  }
  setValue(e, t) {
    const r = this._bindings;
    for (let n = this._targetGroup.nCachedObjects_, i = r.length; n !== i; ++n)
      r[n].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, r = e.length; t !== r; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, r = e.length; t !== r; ++t)
      e[t].unbind();
  }
}
class PropertyBinding {
  constructor(e, t, r) {
    (this.path = t),
      (this.parsedPath = r || PropertyBinding.parseTrackName(t)),
      (this.node = PropertyBinding.findNode(e, this.parsedPath.nodeName) || e),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, r) {
    return e && e.isAnimationObjectGroup
      ? new PropertyBinding.Composite(e, t, r)
      : new PropertyBinding(e, t, r);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(_reservedRe, "");
  }
  static parseTrackName(e) {
    const t = _trackRe.exec(e);
    if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const r = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      n = r.nodeName && r.nodeName.lastIndexOf(".");
    if (void 0 !== n && -1 !== n) {
      const e = r.nodeName.substring(n + 1);
      -1 !== _supportedObjectNames.indexOf(e) &&
        ((r.nodeName = r.nodeName.substring(0, n)), (r.objectName = e));
    }
    if (null === r.propertyName || 0 === r.propertyName.length)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return r;
  }
  static findNode(e, t) {
    if (!t || "" === t || "." === t || -1 === t || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const r = e.skeleton.getBoneByName(t);
      if (void 0 !== r) return r;
    }
    if (e.children) {
      const r = function (e) {
          for (let n = 0; n < e.length; n++) {
            const i = e[n];
            if (i.name === t || i.uuid === t) return i;
            const a = r(i.children);
            if (a) return a;
          }
          return null;
        },
        n = r(e.children);
      if (n) return n;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.node[this.propertyName];
  }
  _getValue_array(e, t) {
    const r = this.resolvedProperty;
    for (let n = 0, i = r.length; n !== i; ++n) e[t++] = r[n];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const r = this.resolvedProperty;
    for (let n = 0, i = r.length; n !== i; ++n) r[n] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const r = this.resolvedProperty;
    for (let n = 0, i = r.length; n !== i; ++n) r[n] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const r = this.resolvedProperty;
    for (let n = 0, i = r.length; n !== i; ++n) r[n] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      r = t.objectName,
      n = t.propertyName;
    let i = t.propertyIndex;
    if (
      (e ||
        ((e =
          PropertyBinding.findNode(this.rootNode, t.nodeName) || this.rootNode),
        (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    )
      return void console.error(
        "MYGLAPI.PropertyBinding: Trying to update node for track: " +
          this.path +
          " but it wasn't found."
      );
    if (r) {
      let n = t.objectIndex;
      switch (r) {
        case "materials":
          if (!e.material)
            return void console.error(
              "MYGLAPI.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
          if (!e.material.materials)
            return void console.error(
              "MYGLAPI.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton)
            return void console.error(
              "MYGLAPI.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
          e = e.skeleton.bones;
          for (let t = 0; t < e.length; t++)
            if (e[t].name === n) {
              n = t;
              break;
            }
          break;
        default:
          if (void 0 === e[r])
            return void console.error(
              "MYGLAPI.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
          e = e[r];
      }
      if (void 0 !== n) {
        if (void 0 === e[n])
          return void console.error(
            "MYGLAPI.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
        e = e[n];
      }
    }
    const a = e[n];
    if (void 0 === a) {
      const r = t.nodeName;
      return void console.error(
        "MYGLAPI.PropertyBinding: Trying to update property for track: " +
          r +
          "." +
          n +
          " but it wasn't found.",
        e
      );
    }
    let o = this.Versioning.None;
    (this.targetObject = e),
      void 0 !== e.needsUpdate
        ? (o = this.Versioning.NeedsUpdate)
        : void 0 !== e.matrixWorldNeedsUpdate &&
          (o = this.Versioning.MatrixWorldNeedsUpdate);
    let s = this.BindingType.Direct;
    if (void 0 !== i) {
      if ("morphTargetInfluences" === n) {
        if (!e.geometry)
          return void console.error(
            "MYGLAPI.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
        if (!e.geometry.isBufferGeometry)
          return void console.error(
            "MYGLAPI.PropertyBinding: Can not bind to morphTargetInfluences on MYGLAPI.Geometry. Use MYGLAPI.BufferGeometry instead.",
            this
          );
        if (!e.geometry.morphAttributes)
          return void console.error(
            "MYGLAPI.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
        void 0 !== e.morphTargetDictionary[i] &&
          (i = e.morphTargetDictionary[i]);
      }
      (s = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = i);
    } else
      void 0 !== a.fromArray && void 0 !== a.toArray
        ? ((s = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((s = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = n);
    (this.getValue = this.GetterByBindingType[s]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[s][o]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
(PropertyBinding.Composite = Composite),
  (PropertyBinding.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (PropertyBinding.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (PropertyBinding.prototype.GetterByBindingType = [
    PropertyBinding.prototype._getValue_direct,
    PropertyBinding.prototype._getValue_array,
    PropertyBinding.prototype._getValue_arrayElement,
    PropertyBinding.prototype._getValue_toArray,
  ]),
  (PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
    [
      PropertyBinding.prototype._setValue_direct,
      PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
      PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      PropertyBinding.prototype._setValue_array,
      PropertyBinding.prototype._setValue_array_setNeedsUpdate,
      PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      PropertyBinding.prototype._setValue_arrayElement,
      PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
      PropertyBinding.prototype
        ._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      PropertyBinding.prototype._setValue_fromArray,
      PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
      PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]);
class AnimationObjectGroup {
  constructor() {
    (this.uuid = generateUUID()),
      (this._objects = Array.prototype.slice.call(arguments)),
      (this.nCachedObjects_ = 0);
    const e = {};
    this._indicesByUUID = e;
    for (let t = 0, r = arguments.length; t !== r; ++t)
      e[arguments[t].uuid] = t;
    (this._paths = []),
      (this._parsedPaths = []),
      (this._bindings = []),
      (this._bindingsIndicesByPath = {});
    const t = this;
    this.stats = {
      objects: {
        get total() {
          return t._objects.length;
        },
        get inUse() {
          return this.total - t.nCachedObjects_;
        },
      },
      get bindingsPerObject() {
        return t._bindings.length;
      },
    };
  }
  add() {
    const e = this._objects,
      t = this._indicesByUUID,
      r = this._paths,
      n = this._parsedPaths,
      i = this._bindings,
      a = i.length;
    let o = void 0,
      s = e.length,
      l = this.nCachedObjects_;
    for (let c = 0, h = arguments.length; c !== h; ++c) {
      const h = arguments[c],
        u = h.uuid;
      let d = t[u];
      if (void 0 === d) {
        (d = s++), (t[u] = d), e.push(h);
        for (let e = 0, t = a; e !== t; ++e)
          i[e].push(new PropertyBinding(h, r[e], n[e]));
      } else if (d < l) {
        o = e[d];
        const s = --l,
          c = e[s];
        (t[c.uuid] = d), (e[d] = c), (t[u] = s), (e[s] = h);
        for (let e = 0, t = a; e !== t; ++e) {
          const t = i[e],
            a = t[s];
          let o = t[d];
          (t[d] = a),
            void 0 === o && (o = new PropertyBinding(h, r[e], n[e])),
            (t[s] = o);
        }
      } else
        e[d] !== o &&
          console.error(
            "MYGLAPI.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes."
          );
    }
    this.nCachedObjects_ = l;
  }
  remove() {
    const e = this._objects,
      t = this._indicesByUUID,
      r = this._bindings,
      n = r.length;
    let i = this.nCachedObjects_;
    for (let a = 0, o = arguments.length; a !== o; ++a) {
      const o = arguments[a],
        s = o.uuid,
        l = t[s];
      if (void 0 !== l && l >= i) {
        const a = i++,
          c = e[a];
        (t[c.uuid] = l), (e[l] = c), (t[s] = a), (e[a] = o);
        for (let e = 0, t = n; e !== t; ++e) {
          const t = r[e],
            n = t[a],
            i = t[l];
          (t[l] = n), (t[a] = i);
        }
      }
    }
    this.nCachedObjects_ = i;
  }
  uncache() {
    const e = this._objects,
      t = this._indicesByUUID,
      r = this._bindings,
      n = r.length;
    let i = this.nCachedObjects_,
      a = e.length;
    for (let o = 0, s = arguments.length; o !== s; ++o) {
      const s = arguments[o].uuid,
        l = t[s];
      if (void 0 !== l)
        if ((delete t[s], l < i)) {
          const o = --i,
            s = e[o],
            c = --a,
            h = e[c];
          (t[s.uuid] = l), (e[l] = s), (t[h.uuid] = o), (e[o] = h), e.pop();
          for (let e = 0, t = n; e !== t; ++e) {
            const t = r[e],
              n = t[o],
              i = t[c];
            (t[l] = n), (t[o] = i), t.pop();
          }
        } else {
          const i = --a,
            o = e[i];
          i > 0 && (t[o.uuid] = l), (e[l] = o), e.pop();
          for (let e = 0, t = n; e !== t; ++e) {
            const t = r[e];
            (t[l] = t[i]), t.pop();
          }
        }
    }
    this.nCachedObjects_ = i;
  }
  subscribe_(e, t) {
    const r = this._bindingsIndicesByPath;
    let n = r[e];
    const i = this._bindings;
    if (void 0 !== n) return i[n];
    const a = this._paths,
      o = this._parsedPaths,
      s = this._objects,
      l = s.length,
      c = this.nCachedObjects_,
      h = new Array(l);
    (n = i.length), (r[e] = n), a.push(e), o.push(t), i.push(h);
    for (let r = c, n = s.length; r !== n; ++r) {
      const n = s[r];
      h[r] = new PropertyBinding(n, e, t);
    }
    return h;
  }
  unsubscribe_(e) {
    const t = this._bindingsIndicesByPath,
      r = t[e];
    if (void 0 !== r) {
      const n = this._paths,
        i = this._parsedPaths,
        a = this._bindings,
        o = a.length - 1,
        s = a[o];
      (t[e[o]] = r),
        (a[r] = s),
        a.pop(),
        (i[r] = i[o]),
        i.pop(),
        (n[r] = n[o]),
        n.pop();
    }
  }
}
AnimationObjectGroup.prototype.isAnimationObjectGroup = !0;
class AnimationAction {
  constructor(e, t, r = null, n = t.blendMode) {
    (this._mixer = e),
      (this._clip = t),
      (this._localRoot = r),
      (this.blendMode = n);
    const i = t.tracks,
      a = i.length,
      o = new Array(a),
      s = { endingStart: ZeroCurvatureEnding, endingEnd: ZeroCurvatureEnding };
    for (let e = 0; e !== a; ++e) {
      const t = i[e].createInterpolant(null);
      (o[e] = t), (t.settings = s);
    }
    (this._interpolantSettings = s),
      (this._interpolants = o),
      (this._propertyBindings = new Array(a)),
      (this._cacheIndex = null),
      (this._byClipCacheIndex = null),
      (this._timeScaleInterpolant = null),
      (this._weightInterpolant = null),
      (this.loop = LoopRepeat),
      (this._loopCount = -1),
      (this._startTime = null),
      (this.time = 0),
      (this.timeScale = 1),
      (this._effectiveTimeScale = 1),
      (this.weight = 1),
      (this._effectiveWeight = 1),
      (this.repetitions = 1 / 0),
      (this.paused = !1),
      (this.enabled = !0),
      (this.clampWhenFinished = !1),
      (this.zeroSlopeAtStart = !0),
      (this.zeroSlopeAtEnd = !0);
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return (
      (this.paused = !1),
      (this.enabled = !0),
      (this.time = 0),
      (this._loopCount = -1),
      (this._startTime = null),
      this.stopFading().stopWarping()
    );
  }
  isRunning() {
    return (
      this.enabled &&
      !this.paused &&
      0 !== this.timeScale &&
      null === this._startTime &&
      this._mixer._isActiveAction(this)
    );
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return (this._startTime = e), this;
  }
  setLoop(e, t) {
    return (this.loop = e), (this.repetitions = t), this;
  }
  setEffectiveWeight(e) {
    return (
      (this.weight = e),
      (this._effectiveWeight = this.enabled ? e : 0),
      this.stopFading()
    );
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, r) {
    if ((e.fadeOut(t), this.fadeIn(t), r)) {
      const r = this._clip.duration,
        n = e._clip.duration,
        i = n / r,
        a = r / n;
      e.warp(1, i, t), this.warp(a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, r) {
    return e.crossFadeFrom(this, t, r);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return (
      null !== e &&
        ((this._weightInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  setEffectiveTimeScale(e) {
    return (
      (this.timeScale = e),
      (this._effectiveTimeScale = this.paused ? 0 : e),
      this.stopWarping()
    );
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return (this.timeScale = this._clip.duration / e), this.stopWarping();
  }
  syncWith(e) {
    return (
      (this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping()
    );
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, r) {
    const n = this._mixer,
      i = n.time,
      a = this.timeScale;
    let o = this._timeScaleInterpolant;
    null === o &&
      ((o = n._lendControlInterpolant()), (this._timeScaleInterpolant = o));
    const s = o.parameterPositions,
      l = o.sampleValues;
    return (s[0] = i), (s[1] = i + r), (l[0] = e / a), (l[1] = t / a), this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return (
      null !== e &&
        ((this._timeScaleInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, r, n) {
    if (!this.enabled) return void this._updateWeight(e);
    const i = this._startTime;
    if (null !== i) {
      const n = (e - i) * r;
      if (n < 0 || 0 === r) return;
      (this._startTime = null), (t = r * n);
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t),
      o = this._updateWeight(e);
    if (o > 0) {
      const e = this._interpolants,
        t = this._propertyBindings;
      switch (this.blendMode) {
        case AdditiveAnimationBlendMode:
          for (let r = 0, n = e.length; r !== n; ++r)
            e[r].evaluate(a), t[r].accumulateAdditive(o);
          break;
        case NormalAnimationBlendMode:
        default:
          for (let r = 0, i = e.length; r !== i; ++r)
            e[r].evaluate(a), t[r].accumulate(n, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const r = this._weightInterpolant;
      if (null !== r) {
        const n = r.evaluate(e)[0];
        (t *= n),
          e > r.parameterPositions[1] &&
            (this.stopFading(), 0 === n && (this.enabled = !1));
      }
    }
    return (this._effectiveWeight = t), t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const r = this._timeScaleInterpolant;
      if (null !== r) {
        (t *= r.evaluate(e)[0]),
          e > r.parameterPositions[1] &&
            (this.stopWarping(),
            0 === t ? (this.paused = !0) : (this.timeScale = t));
      }
    }
    return (this._effectiveTimeScale = t), t;
  }
  _updateTime(e) {
    const t = this._clip.duration,
      r = this.loop;
    let n = this.time + e,
      i = this._loopCount;
    const a = r === LoopPingPong;
    if (0 === e) return -1 === i ? n : a && 1 == (1 & i) ? t - n : n;
    if (r === LoopOnce) {
      -1 === i && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
      e: {
        if (n >= t) n = t;
        else {
          if (!(n < 0)) {
            this.time = n;
            break e;
          }
          n = 0;
        }
        this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
          (this.time = n),
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e < 0 ? -1 : 1,
          });
      }
    } else {
      if (
        (-1 === i &&
          (e >= 0
            ? ((i = 0), this._setEndings(!0, 0 === this.repetitions, a))
            : this._setEndings(0 === this.repetitions, !0, a)),
        n >= t || n < 0)
      ) {
        const r = Math.floor(n / t);
        (n -= t * r), (i += Math.abs(r));
        const o = this.repetitions - i;
        if (o <= 0)
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (n = e > 0 ? t : 0),
            (this.time = n),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e > 0 ? 1 : -1,
            });
        else {
          if (1 === o) {
            const t = e < 0;
            this._setEndings(t, !t, a);
          } else this._setEndings(!1, !1, a);
          (this._loopCount = i),
            (this.time = n),
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: r,
            });
        }
      } else this.time = n;
      if (a && 1 == (1 & i)) return t - n;
    }
    return n;
  }
  _setEndings(e, t, r) {
    const n = this._interpolantSettings;
    r
      ? ((n.endingStart = ZeroSlopeEnding), (n.endingEnd = ZeroSlopeEnding))
      : ((n.endingStart = e
          ? this.zeroSlopeAtStart
            ? ZeroSlopeEnding
            : ZeroCurvatureEnding
          : WrapAroundEnding),
        (n.endingEnd = t
          ? this.zeroSlopeAtEnd
            ? ZeroSlopeEnding
            : ZeroCurvatureEnding
          : WrapAroundEnding));
  }
  _scheduleFading(e, t, r) {
    const n = this._mixer,
      i = n.time;
    let a = this._weightInterpolant;
    null === a &&
      ((a = n._lendControlInterpolant()), (this._weightInterpolant = a));
    const o = a.parameterPositions,
      s = a.sampleValues;
    return (o[0] = i), (s[0] = t), (o[1] = i + e), (s[1] = r), this;
  }
}
class AnimationMixer extends EventDispatcher {
  constructor(e) {
    super(),
      (this._root = e),
      this._initMemoryManager(),
      (this._accuIndex = 0),
      (this.time = 0),
      (this.timeScale = 1);
  }
  _bindAction(e, t) {
    const r = e._localRoot || this._root,
      n = e._clip.tracks,
      i = n.length,
      a = e._propertyBindings,
      o = e._interpolants,
      s = r.uuid,
      l = this._bindingsByRootAndName;
    let c = l[s];
    void 0 === c && ((c = {}), (l[s] = c));
    for (let e = 0; e !== i; ++e) {
      const i = n[e],
        l = i.name;
      let h = c[l];
      if (void 0 !== h) a[e] = h;
      else {
        if (void 0 !== (h = a[e])) {
          null === h._cacheIndex &&
            (++h.referenceCount, this._addInactiveBinding(h, s, l));
          continue;
        }
        const n = t && t._propertyBindings[e].binding.parsedPath;
        ++(h = new PropertyMixer(
          PropertyBinding.create(r, l, n),
          i.ValueTypeName,
          i.getValueSize()
        )).referenceCount,
          this._addInactiveBinding(h, s, l),
          (a[e] = h);
      }
      o[e].resultBuffer = h.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (null === e._cacheIndex) {
        const t = (e._localRoot || this._root).uuid,
          r = e._clip.uuid,
          n = this._actionsByClip[r];
        this._bindAction(e, n && n.knownActions[0]),
          this._addInactiveAction(e, r, t);
      }
      const t = e._propertyBindings;
      for (let e = 0, r = t.length; e !== r; ++e) {
        const r = t[e];
        0 == r.useCount++ && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let e = 0, r = t.length; e !== r; ++e) {
        const r = t[e];
        0 == --r.useCount &&
          (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    (this._actions = []),
      (this._nActiveActions = 0),
      (this._actionsByClip = {}),
      (this._bindings = []),
      (this._nActiveBindings = 0),
      (this._bindingsByRootAndName = {}),
      (this._controlInterpolants = []),
      (this._nActiveControlInterpolants = 0);
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        },
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        },
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        },
      },
    };
  }
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return null !== t && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, r) {
    const n = this._actions,
      i = this._actionsByClip;
    let a = i[t];
    if (void 0 === a)
      (a = { knownActions: [e], actionByRoot: {} }),
        (e._byClipCacheIndex = 0),
        (i[t] = a);
    else {
      const t = a.knownActions;
      (e._byClipCacheIndex = t.length), t.push(e);
    }
    (e._cacheIndex = n.length), n.push(e), (a.actionByRoot[r] = e);
  }
  _removeInactiveAction(e) {
    const t = this._actions,
      r = t[t.length - 1],
      n = e._cacheIndex;
    (r._cacheIndex = n), (t[n] = r), t.pop(), (e._cacheIndex = null);
    const i = e._clip.uuid,
      a = this._actionsByClip,
      o = a[i],
      s = o.knownActions,
      l = s[s.length - 1],
      c = e._byClipCacheIndex;
    (l._byClipCacheIndex = c),
      (s[c] = l),
      s.pop(),
      (e._byClipCacheIndex = null),
      delete o.actionByRoot[(e._localRoot || this._root).uuid],
      0 === s.length && delete a[i],
      this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let e = 0, r = t.length; e !== r; ++e) {
      const r = t[e];
      0 == --r.referenceCount && this._removeInactiveBinding(r);
    }
  }
  _lendAction(e) {
    const t = this._actions,
      r = e._cacheIndex,
      n = this._nActiveActions++,
      i = t[n];
    (e._cacheIndex = n), (t[n] = e), (i._cacheIndex = r), (t[r] = i);
  }
  _takeBackAction(e) {
    const t = this._actions,
      r = e._cacheIndex,
      n = --this._nActiveActions,
      i = t[n];
    (e._cacheIndex = n), (t[n] = e), (i._cacheIndex = r), (t[r] = i);
  }
  _addInactiveBinding(e, t, r) {
    const n = this._bindingsByRootAndName,
      i = this._bindings;
    let a = n[t];
    void 0 === a && ((a = {}), (n[t] = a)),
      (a[r] = e),
      (e._cacheIndex = i.length),
      i.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings,
      r = e.binding,
      n = r.rootNode.uuid,
      i = r.path,
      a = this._bindingsByRootAndName,
      o = a[n],
      s = t[t.length - 1],
      l = e._cacheIndex;
    (s._cacheIndex = l),
      (t[l] = s),
      t.pop(),
      delete o[i],
      0 === Object.keys(o).length && delete a[n];
  }
  _lendBinding(e) {
    const t = this._bindings,
      r = e._cacheIndex,
      n = this._nActiveBindings++,
      i = t[n];
    (e._cacheIndex = n), (t[n] = e), (i._cacheIndex = r), (t[r] = i);
  }
  _takeBackBinding(e) {
    const t = this._bindings,
      r = e._cacheIndex,
      n = --this._nActiveBindings,
      i = t[n];
    (e._cacheIndex = n), (t[n] = e), (i._cacheIndex = r), (t[r] = i);
  }
  _lendControlInterpolant() {
    const e = this._controlInterpolants,
      t = this._nActiveControlInterpolants++;
    let r = e[t];
    return (
      void 0 === r &&
        (((r = new LinearInterpolant(
          new Float32Array(2),
          new Float32Array(2),
          1,
          this._controlInterpolantsResultBuffer
        )).__cacheIndex = t),
        (e[t] = r)),
      r
    );
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants,
      r = e.__cacheIndex,
      n = --this._nActiveControlInterpolants,
      i = t[n];
    (e.__cacheIndex = n), (t[n] = e), (i.__cacheIndex = r), (t[r] = i);
  }
  clipAction(e, t, r) {
    const n = t || this._root,
      i = n.uuid;
    let a = "string" == typeof e ? AnimationClip.findByName(n, e) : e;
    const o = null !== a ? a.uuid : e,
      s = this._actionsByClip[o];
    let l = null;
    if (
      (void 0 === r &&
        (r = null !== a ? a.blendMode : NormalAnimationBlendMode),
      void 0 !== s)
    ) {
      const e = s.actionByRoot[i];
      if (void 0 !== e && e.blendMode === r) return e;
      (l = s.knownActions[0]), null === a && (a = l._clip);
    }
    if (null === a) return null;
    const c = new AnimationAction(this, a, t, r);
    return this._bindAction(c, l), this._addInactiveAction(c, o, i), c;
  }
  existingAction(e, t) {
    const r = t || this._root,
      n = r.uuid,
      i = "string" == typeof e ? AnimationClip.findByName(r, e) : e,
      a = i ? i.uuid : e,
      o = this._actionsByClip[a];
    return (void 0 !== o && o.actionByRoot[n]) || null;
  }
  stopAllAction() {
    const e = this._actions;
    for (let t = this._nActiveActions - 1; t >= 0; --t) e[t].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    const t = this._actions,
      r = this._nActiveActions,
      n = (this.time += e),
      i = Math.sign(e),
      a = (this._accuIndex ^= 1);
    for (let o = 0; o !== r; ++o) {
      t[o]._update(n, e, i, a);
    }
    const o = this._bindings,
      s = this._nActiveBindings;
    for (let e = 0; e !== s; ++e) o[e].apply(a);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    const t = this._actions,
      r = e.uuid,
      n = this._actionsByClip,
      i = n[r];
    if (void 0 !== i) {
      const e = i.knownActions;
      for (let r = 0, n = e.length; r !== n; ++r) {
        const n = e[r];
        this._deactivateAction(n);
        const i = n._cacheIndex,
          a = t[t.length - 1];
        (n._cacheIndex = null),
          (n._byClipCacheIndex = null),
          (a._cacheIndex = i),
          (t[i] = a),
          t.pop(),
          this._removeInactiveBindingsForAction(n);
      }
      delete n[r];
    }
  }
  uncacheRoot(e) {
    const t = e.uuid,
      r = this._actionsByClip;
    for (const e in r) {
      const n = r[e].actionByRoot[t];
      void 0 !== n &&
        (this._deactivateAction(n), this._removeInactiveAction(n));
    }
    const n = this._bindingsByRootAndName[t];
    if (void 0 !== n)
      for (const e in n) {
        const t = n[e];
        t.restoreOriginalState(), this._removeInactiveBinding(t);
      }
  }
  uncacheAction(e, t) {
    const r = this.existingAction(e, t);
    null !== r && (this._deactivateAction(r), this._removeInactiveAction(r));
  }
}
AnimationMixer.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class Uniform {
  constructor(e) {
    "string" == typeof e &&
      (console.warn("MYGLAPI.Uniform: Type parameter is no longer needed."),
      (e = arguments[1])),
      (this.value = e);
  }
  clone() {
    return new Uniform(
      void 0 === this.value.clone ? this.value : this.value.clone()
    );
  }
}
class InstancedInterleavedBuffer extends InterleavedBuffer {
  constructor(e, t, r = 1) {
    super(e, t), (this.meshPerAttribute = r || 1);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  clone(e) {
    const t = super.clone(e);
    return (t.meshPerAttribute = this.meshPerAttribute), t;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.isInstancedInterleavedBuffer = !0),
      (t.meshPerAttribute = this.meshPerAttribute),
      t
    );
  }
}
InstancedInterleavedBuffer.prototype.isInstancedInterleavedBuffer = !0;
class GLBufferAttribute {
  constructor(e, t, r, n, i) {
    (this.buffer = e),
      (this.type = t),
      (this.itemSize = r),
      (this.elementSize = n),
      (this.count = i),
      (this.version = 0);
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setBuffer(e) {
    return (this.buffer = e), this;
  }
  setType(e, t) {
    return (this.type = e), (this.elementSize = t), this;
  }
  setItemSize(e) {
    return (this.itemSize = e), this;
  }
  setCount(e) {
    return (this.count = e), this;
  }
}
GLBufferAttribute.prototype.isGLBufferAttribute = !0;
class Raycaster {
  constructor(e, t, r = 0, n = 1 / 0) {
    (this.ray = new Ray(e, t)),
      (this.near = r),
      (this.far = n),
      (this.camera = null),
      (this.layers = new Layers()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      });
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t && t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t && t.isOrthographicCamera
      ? (this.ray.origin
          .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
          .unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        (this.camera = t))
      : console.error("MYGLAPI.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !1, r = []) {
    return intersectObject(e, this, r, t), r.sort(ascSort), r;
  }
  intersectObjects(e, t = !1, r = []) {
    for (let n = 0, i = e.length; n < i; n++) intersectObject(e[n], this, r, t);
    return r.sort(ascSort), r;
  }
}
function ascSort(e, t) {
  return e.distance - t.distance;
}
function intersectObject(e, t, r, n) {
  if ((e.layers.test(t.layers) && e.raycast(t, r), !0 === n)) {
    const n = e.children;
    for (let e = 0, i = n.length; e < i; e++) intersectObject(n[e], t, r, !0);
  }
}
class Spherical {
  constructor(e = 1, t = 0, r = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = r), this;
  }
  set(e, t, r) {
    return (this.radius = e), (this.phi = t), (this.theta = r), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, r) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + r * r)),
      0 === this.radius
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, r)),
          (this.phi = Math.acos(clamp(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Cylindrical {
  constructor(e = 1, t = 0, r = 0) {
    return (this.radius = e), (this.theta = t), (this.y = r), this;
  }
  set(e, t, r) {
    return (this.radius = e), (this.theta = t), (this.y = r), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.theta = e.theta), (this.y = e.y), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, r) {
    return (
      (this.radius = Math.sqrt(e * e + r * r)),
      (this.theta = Math.atan2(e, r)),
      (this.y = t),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _vector$4 = new Vector2();
class Box2 {
  constructor(e = new Vector2(1 / 0, 1 / 0), t = new Vector2(-1 / 0, -1 / 0)) {
    (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, r = e.length; t < r; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const r = _vector$4.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(r), this.max.copy(e).add(r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = 1 / 0),
      (this.max.x = this.max.y = -1 / 0),
      this
    );
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return (
      void 0 === e &&
        (console.warn("MYGLAPI.Box2: .getCenter() target is now required"),
        (e = new Vector2())),
      this.isEmpty()
        ? e.set(0, 0)
        : e.addVectors(this.min, this.max).multiplyScalar(0.5)
    );
  }
  getSize(e) {
    return (
      void 0 === e &&
        (console.warn("MYGLAPI.Box2: .getSize() target is now required"),
        (e = new Vector2())),
      this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
    );
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y
    );
  }
  getParameter(e, t) {
    return (
      void 0 === t &&
        (console.warn("MYGLAPI.Box2: .getParameter() target is now required"),
        (t = new Vector2())),
      t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y)
      )
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y
    );
  }
  clampPoint(e, t) {
    return (
      void 0 === t &&
        (console.warn("MYGLAPI.Box2: .clampPoint() target is now required"),
        (t = new Vector2())),
      t.copy(e).clamp(this.min, this.max)
    );
  }
  distanceToPoint(e) {
    return _vector$4.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
Box2.prototype.isBox2 = !0;
const _startP = new Vector3(),
  _startEnd = new Vector3();
class Line3 {
  constructor(e = new Vector3(), t = new Vector3()) {
    (this.start = e), (this.end = t);
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return (
      void 0 === e &&
        (console.warn("MYGLAPI.Line3: .getCenter() target is now required"),
        (e = new Vector3())),
      e.addVectors(this.start, this.end).multiplyScalar(0.5)
    );
  }
  delta(e) {
    return (
      void 0 === e &&
        (console.warn("MYGLAPI.Line3: .delta() target is now required"),
        (e = new Vector3())),
      e.subVectors(this.end, this.start)
    );
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return (
      void 0 === t &&
        (console.warn("MYGLAPI.Line3: .at() target is now required"),
        (t = new Vector3())),
      this.delta(t).multiplyScalar(e).add(this.start)
    );
  }
  closestPointToPointParameter(e, t) {
    _startP.subVectors(e, this.start),
      _startEnd.subVectors(this.end, this.start);
    const r = _startEnd.dot(_startEnd);
    let n = _startEnd.dot(_startP) / r;
    return t && (n = clamp(n, 0, 1)), n;
  }
  closestPointToPoint(e, t, r) {
    const n = this.closestPointToPointParameter(e, t);
    return (
      void 0 === r &&
        (console.warn(
          "MYGLAPI.Line3: .closestPointToPoint() target is now required"
        ),
        (r = new Vector3())),
      this.delta(r).multiplyScalar(n).add(this.start)
    );
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ImmediateRenderObject extends Object3D {
  constructor(e) {
    super(),
      (this.material = e),
      (this.render = function () {}),
      (this.hasPositions = !1),
      (this.hasNormals = !1),
      (this.hasColors = !1),
      (this.hasUvs = !1),
      (this.positionArray = null),
      (this.normalArray = null),
      (this.colorArray = null),
      (this.uvArray = null),
      (this.count = 0);
  }
}
ImmediateRenderObject.prototype.isImmediateRenderObject = !0;
const _vector$3 = new Vector3();
class SpotLightHelper extends Object3D {
  constructor(e, t) {
    super(),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = t);
    const r = new BufferGeometry(),
      n = [
        0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1,
        0, 0, 0, 0, -1, 1,
      ];
    for (let e = 0, t = 1, r = 32; e < r; e++, t++) {
      const i = (e / r) * Math.PI * 2,
        a = (t / r) * Math.PI * 2;
      n.push(Math.cos(i), Math.sin(i), 1, Math.cos(a), Math.sin(a), 1);
    }
    r.setAttribute("position", new Float32BufferAttribute(n, 3));
    const i = new LineBasicMaterial({ fog: !1, toneMapped: !1 });
    (this.cone = new LineSegments(r, i)), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateMatrixWorld();
    const e = this.light.distance ? this.light.distance : 1e3,
      t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e),
      _vector$3.setFromMatrixPosition(this.light.target.matrixWorld),
      this.cone.lookAt(_vector$3),
      void 0 !== this.color
        ? this.cone.material.color.set(this.color)
        : this.cone.material.color.copy(this.light.color);
  }
}
const _vector$2 = new Vector3(),
  _boneMatrix = new Matrix4(),
  _matrixWorldInv = new Matrix4();
class SkeletonHelper extends LineSegments {
  constructor(e) {
    const t = getBoneList(e),
      r = new BufferGeometry(),
      n = [],
      i = [],
      a = new Color(0, 0, 1),
      o = new Color(0, 1, 0);
    for (let e = 0; e < t.length; e++) {
      const r = t[e];
      r.parent &&
        r.parent.isBone &&
        (n.push(0, 0, 0),
        n.push(0, 0, 0),
        i.push(a.r, a.g, a.b),
        i.push(o.r, o.g, o.b));
    }
    r.setAttribute("position", new Float32BufferAttribute(n, 3)),
      r.setAttribute("color", new Float32BufferAttribute(i, 3)),
      super(
        r,
        new LineBasicMaterial({
          vertexColors: !0,
          depthTest: !1,
          depthWrite: !1,
          toneMapped: !1,
          transparent: !0,
        })
      ),
      (this.type = "SkeletonHelper"),
      (this.isSkeletonHelper = !0),
      (this.root = e),
      (this.bones = t),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }
  updateMatrixWorld(e) {
    const t = this.bones,
      r = this.geometry,
      n = r.getAttribute("position");
    _matrixWorldInv.copy(this.root.matrixWorld).invert();
    for (let e = 0, r = 0; e < t.length; e++) {
      const i = t[e];
      i.parent &&
        i.parent.isBone &&
        (_boneMatrix.multiplyMatrices(_matrixWorldInv, i.matrixWorld),
        _vector$2.setFromMatrixPosition(_boneMatrix),
        n.setXYZ(r, _vector$2.x, _vector$2.y, _vector$2.z),
        _boneMatrix.multiplyMatrices(_matrixWorldInv, i.parent.matrixWorld),
        _vector$2.setFromMatrixPosition(_boneMatrix),
        n.setXYZ(r + 1, _vector$2.x, _vector$2.y, _vector$2.z),
        (r += 2));
    }
    (r.getAttribute("position").needsUpdate = !0), super.updateMatrixWorld(e);
  }
}
function getBoneList(e) {
  const t = [];
  e && e.isBone && t.push(e);
  for (let r = 0; r < e.children.length; r++)
    t.push.apply(t, getBoneList(e.children[r]));
  return t;
}
class PointLightHelper extends Mesh {
  constructor(e, t, r) {
    super(
      new SphereGeometry(t, 4, 2),
      new MeshBasicMaterial({ wireframe: !0, fog: !1, toneMapped: !1 })
    ),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.color = r),
      (this.type = "PointLightHelper"),
      (this.matrix = this.light.matrixWorld),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    void 0 !== this.color
      ? this.material.color.set(this.color)
      : this.material.color.copy(this.light.color);
  }
}
const _vector$1 = new Vector3(),
  _color1 = new Color(),
  _color2 = new Color();
class HemisphereLightHelper extends Object3D {
  constructor(e, t, r) {
    super(),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = r);
    const n = new OctahedronGeometry(t);
    n.rotateY(0.5 * Math.PI),
      (this.material = new MeshBasicMaterial({
        wireframe: !0,
        fog: !1,
        toneMapped: !1,
      })),
      void 0 === this.color && (this.material.vertexColors = !0);
    const i = n.getAttribute("position"),
      a = new Float32Array(3 * i.count);
    n.setAttribute("color", new BufferAttribute(a, 3)),
      this.add(new Mesh(n, this.material)),
      this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const e = this.children[0];
    if (void 0 !== this.color) this.material.color.set(this.color);
    else {
      const t = e.geometry.getAttribute("color");
      _color1.copy(this.light.color), _color2.copy(this.light.groundColor);
      for (let e = 0, r = t.count; e < r; e++) {
        const n = e < r / 2 ? _color1 : _color2;
        t.setXYZ(e, n.r, n.g, n.b);
      }
      t.needsUpdate = !0;
    }
    e.lookAt(_vector$1.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class GridHelper extends LineSegments {
  constructor(e = 10, t = 10, r = 4473924, n = 8947848) {
    (r = new Color(r)), (n = new Color(n));
    const i = t / 2,
      a = e / t,
      o = e / 2,
      s = [],
      l = [];
    for (let e = 0, c = 0, h = -o; e <= t; e++, h += a) {
      s.push(-o, 0, h, o, 0, h), s.push(h, 0, -o, h, 0, o);
      const t = e === i ? r : n;
      t.toArray(l, c),
        (c += 3),
        t.toArray(l, c),
        (c += 3),
        t.toArray(l, c),
        (c += 3),
        t.toArray(l, c),
        (c += 3);
    }
    const c = new BufferGeometry();
    c.setAttribute("position", new Float32BufferAttribute(s, 3)),
      c.setAttribute("color", new Float32BufferAttribute(l, 3)),
      super(c, new LineBasicMaterial({ vertexColors: !0, toneMapped: !1 })),
      (this.type = "GridHelper");
  }
}
class PolarGridHelper extends LineSegments {
  constructor(e = 10, t = 16, r = 8, n = 64, i = 4473924, a = 8947848) {
    (i = new Color(i)), (a = new Color(a));
    const o = [],
      s = [];
    for (let r = 0; r <= t; r++) {
      const n = (r / t) * (2 * Math.PI),
        l = Math.sin(n) * e,
        c = Math.cos(n) * e;
      o.push(0, 0, 0), o.push(l, 0, c);
      const h = 1 & r ? i : a;
      s.push(h.r, h.g, h.b), s.push(h.r, h.g, h.b);
    }
    for (let t = 0; t <= r; t++) {
      const l = 1 & t ? i : a,
        c = e - (e / r) * t;
      for (let e = 0; e < n; e++) {
        let t = (e / n) * (2 * Math.PI),
          r = Math.sin(t) * c,
          i = Math.cos(t) * c;
        o.push(r, 0, i),
          s.push(l.r, l.g, l.b),
          (t = ((e + 1) / n) * (2 * Math.PI)),
          (r = Math.sin(t) * c),
          (i = Math.cos(t) * c),
          o.push(r, 0, i),
          s.push(l.r, l.g, l.b);
      }
    }
    const l = new BufferGeometry();
    l.setAttribute("position", new Float32BufferAttribute(o, 3)),
      l.setAttribute("color", new Float32BufferAttribute(s, 3)),
      super(l, new LineBasicMaterial({ vertexColors: !0, toneMapped: !1 })),
      (this.type = "PolarGridHelper");
  }
}
const _v1 = new Vector3(),
  _v2 = new Vector3(),
  _v3 = new Vector3();
class DirectionalLightHelper extends Object3D {
  constructor(e, t, r) {
    super(),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = r),
      void 0 === t && (t = 1);
    let n = new BufferGeometry();
    n.setAttribute(
      "position",
      new Float32BufferAttribute(
        [-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0],
        3
      )
    );
    const i = new LineBasicMaterial({ fog: !1, toneMapped: !1 });
    (this.lightPlane = new Line(n, i)),
      this.add(this.lightPlane),
      (n = new BufferGeometry()).setAttribute(
        "position",
        new Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3)
      ),
      (this.targetLine = new Line(n, i)),
      this.add(this.targetLine),
      this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(),
      this.lightPlane.material.dispose(),
      this.targetLine.geometry.dispose(),
      this.targetLine.material.dispose();
  }
  update() {
    _v1.setFromMatrixPosition(this.light.matrixWorld),
      _v2.setFromMatrixPosition(this.light.target.matrixWorld),
      _v3.subVectors(_v2, _v1),
      this.lightPlane.lookAt(_v2),
      void 0 !== this.color
        ? (this.lightPlane.material.color.set(this.color),
          this.targetLine.material.color.set(this.color))
        : (this.lightPlane.material.color.copy(this.light.color),
          this.targetLine.material.color.copy(this.light.color)),
      this.targetLine.lookAt(_v2),
      (this.targetLine.scale.z = _v3.length());
  }
}
const _vector = new Vector3(),
  _camera = new Camera();
class CameraHelper extends LineSegments {
  constructor(e) {
    const t = new BufferGeometry(),
      r = new LineBasicMaterial({
        color: 16777215,
        vertexColors: !0,
        toneMapped: !1,
      }),
      n = [],
      i = [],
      a = {},
      o = new Color(16755200),
      s = new Color(16711680),
      l = new Color(43775),
      c = new Color(16777215),
      h = new Color(3355443);
    function u(e, t, r) {
      d(e, r), d(t, r);
    }
    function d(e, t) {
      n.push(0, 0, 0),
        i.push(t.r, t.g, t.b),
        void 0 === a[e] && (a[e] = []),
        a[e].push(n.length / 3 - 1);
    }
    u("n1", "n2", o),
      u("n2", "n4", o),
      u("n4", "n3", o),
      u("n3", "n1", o),
      u("f1", "f2", o),
      u("f2", "f4", o),
      u("f4", "f3", o),
      u("f3", "f1", o),
      u("n1", "f1", o),
      u("n2", "f2", o),
      u("n3", "f3", o),
      u("n4", "f4", o),
      u("p", "n1", s),
      u("p", "n2", s),
      u("p", "n3", s),
      u("p", "n4", s),
      u("u1", "u2", l),
      u("u2", "u3", l),
      u("u3", "u1", l),
      u("c", "t", c),
      u("p", "c", h),
      u("cn1", "cn2", h),
      u("cn3", "cn4", h),
      u("cf1", "cf2", h),
      u("cf3", "cf4", h),
      t.setAttribute("position", new Float32BufferAttribute(n, 3)),
      t.setAttribute("color", new Float32BufferAttribute(i, 3)),
      super(t, r),
      (this.type = "CameraHelper"),
      (this.camera = e),
      this.camera.updateProjectionMatrix &&
        this.camera.updateProjectionMatrix(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.pointMap = a),
      this.update();
  }
  update() {
    const e = this.geometry,
      t = this.pointMap;
    _camera.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
      setPoint("c", t, e, _camera, 0, 0, -1),
      setPoint("t", t, e, _camera, 0, 0, 1),
      setPoint("n1", t, e, _camera, -1, -1, -1),
      setPoint("n2", t, e, _camera, 1, -1, -1),
      setPoint("n3", t, e, _camera, -1, 1, -1),
      setPoint("n4", t, e, _camera, 1, 1, -1),
      setPoint("f1", t, e, _camera, -1, -1, 1),
      setPoint("f2", t, e, _camera, 1, -1, 1),
      setPoint("f3", t, e, _camera, -1, 1, 1),
      setPoint("f4", t, e, _camera, 1, 1, 1),
      setPoint("u1", t, e, _camera, 0.7, 1.1, -1),
      setPoint("u2", t, e, _camera, -0.7, 1.1, -1),
      setPoint("u3", t, e, _camera, 0, 2, -1),
      setPoint("cf1", t, e, _camera, -1, 0, 1),
      setPoint("cf2", t, e, _camera, 1, 0, 1),
      setPoint("cf3", t, e, _camera, 0, -1, 1),
      setPoint("cf4", t, e, _camera, 0, 1, 1),
      setPoint("cn1", t, e, _camera, -1, 0, -1),
      setPoint("cn2", t, e, _camera, 1, 0, -1),
      setPoint("cn3", t, e, _camera, 0, -1, -1),
      setPoint("cn4", t, e, _camera, 0, 1, -1),
      (e.getAttribute("position").needsUpdate = !0);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function setPoint(e, t, r, n, i, a, o) {
  _vector.set(i, a, o).unproject(n);
  const s = t[e];
  if (void 0 !== s) {
    const e = r.getAttribute("position");
    for (let t = 0, r = s.length; t < r; t++)
      e.setXYZ(s[t], _vector.x, _vector.y, _vector.z);
  }
}
const _box = new Box3();
class BoxHelper extends LineSegments {
  constructor(e, t = 16776960) {
    const r = new Uint16Array([
        0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7,
      ]),
      n = new Float32Array(24),
      i = new BufferGeometry();
    i.setIndex(new BufferAttribute(r, 1)),
      i.setAttribute("position", new BufferAttribute(n, 3)),
      super(i, new LineBasicMaterial({ color: t, toneMapped: !1 })),
      (this.object = e),
      (this.type = "BoxHelper"),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  update(e) {
    if (
      (void 0 !== e &&
        console.warn("MYGLAPI.BoxHelper: .update() has no longer arguments."),
      void 0 !== this.object && _box.setFromObject(this.object),
      _box.isEmpty())
    )
      return;
    const t = _box.min,
      r = _box.max,
      n = this.geometry.attributes.position,
      i = n.array;
    (i[0] = r.x),
      (i[1] = r.y),
      (i[2] = r.z),
      (i[3] = t.x),
      (i[4] = r.y),
      (i[5] = r.z),
      (i[6] = t.x),
      (i[7] = t.y),
      (i[8] = r.z),
      (i[9] = r.x),
      (i[10] = t.y),
      (i[11] = r.z),
      (i[12] = r.x),
      (i[13] = r.y),
      (i[14] = t.z),
      (i[15] = t.x),
      (i[16] = r.y),
      (i[17] = t.z),
      (i[18] = t.x),
      (i[19] = t.y),
      (i[20] = t.z),
      (i[21] = r.x),
      (i[22] = t.y),
      (i[23] = t.z),
      (n.needsUpdate = !0),
      this.geometry.computeBoundingSphere();
  }
  setFromObject(e) {
    return (this.object = e), this.update(), this;
  }
  copy(e) {
    return (
      LineSegments.prototype.copy.call(this, e), (this.object = e.object), this
    );
  }
}
class Box3Helper extends LineSegments {
  constructor(e, t = 16776960) {
    const r = new Uint16Array([
        0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7,
      ]),
      n = new BufferGeometry();
    n.setIndex(new BufferAttribute(r, 1)),
      n.setAttribute(
        "position",
        new Float32BufferAttribute(
          [
            1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1,
            -1, 1, -1, -1,
          ],
          3
        )
      ),
      super(n, new LineBasicMaterial({ color: t, toneMapped: !1 })),
      (this.box = e),
      (this.type = "Box3Helper"),
      this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(e) {
    const t = this.box;
    t.isEmpty() ||
      (t.getCenter(this.position),
      t.getSize(this.scale),
      this.scale.multiplyScalar(0.5),
      super.updateMatrixWorld(e));
  }
}
class PlaneHelper extends Line {
  constructor(e, t = 1, r = 16776960) {
    const n = r,
      i = new BufferGeometry();
    i.setAttribute(
      "position",
      new Float32BufferAttribute(
        [
          1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1,
          1, 1, 1, 0, 0, 1, 0, 0, 0,
        ],
        3
      )
    ),
      i.computeBoundingSphere(),
      super(i, new LineBasicMaterial({ color: n, toneMapped: !1 })),
      (this.type = "PlaneHelper"),
      (this.plane = e),
      (this.size = t);
    const a = new BufferGeometry();
    a.setAttribute(
      "position",
      new Float32BufferAttribute(
        [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
        3
      )
    ),
      a.computeBoundingSphere(),
      this.add(
        new Mesh(
          a,
          new MeshBasicMaterial({
            color: n,
            opacity: 0.2,
            transparent: !0,
            depthWrite: !1,
            toneMapped: !1,
          })
        )
      );
  }
  updateMatrixWorld(e) {
    let t = -this.plane.constant;
    Math.abs(t) < 1e-8 && (t = 1e-8),
      this.scale.set(0.5 * this.size, 0.5 * this.size, t),
      (this.children[0].material.side = t < 0 ? BackSide : FrontSide),
      this.lookAt(this.plane.normal),
      super.updateMatrixWorld(e);
  }
}
const _axis = new Vector3();
let _lineGeometry, _coneGeometry;
class ArrowHelper extends Object3D {
  constructor(
    e = new Vector3(0, 0, 1),
    t = new Vector3(0, 0, 0),
    r = 1,
    n = 16776960,
    i = 0.2 * r,
    a = 0.2 * i
  ) {
    super(),
      (this.type = "ArrowHelper"),
      void 0 === _lineGeometry &&
        ((_lineGeometry = new BufferGeometry()).setAttribute(
          "position",
          new Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3)
        ),
        (_coneGeometry = new CylinderGeometry(0, 0.5, 1, 5, 1)).translate(
          0,
          -0.5,
          0
        )),
      this.position.copy(t),
      (this.line = new Line(
        _lineGeometry,
        new LineBasicMaterial({ color: n, toneMapped: !1 })
      )),
      (this.line.matrixAutoUpdate = !1),
      this.add(this.line),
      (this.cone = new Mesh(
        _coneGeometry,
        new MeshBasicMaterial({ color: n, toneMapped: !1 })
      )),
      (this.cone.matrixAutoUpdate = !1),
      this.add(this.cone),
      this.setDirection(e),
      this.setLength(r, i, a);
  }
  setDirection(e) {
    if (e.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
    else if (e.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
    else {
      _axis.set(e.z, 0, -e.x).normalize();
      const t = Math.acos(e.y);
      this.quaternion.setFromAxisAngle(_axis, t);
    }
  }
  setLength(e, t = 0.2 * e, r = 0.2 * t) {
    this.line.scale.set(1, Math.max(1e-4, e - t), 1),
      this.line.updateMatrix(),
      this.cone.scale.set(r, t, r),
      (this.cone.position.y = e),
      this.cone.updateMatrix();
  }
  setColor(e) {
    this.line.material.color.set(e), this.cone.material.color.set(e);
  }
  copy(e) {
    return (
      super.copy(e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this
    );
  }
}
class AxesHelper extends LineSegments {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      r = new BufferGeometry();
    r.setAttribute("position", new Float32BufferAttribute(t, 3)),
      r.setAttribute(
        "color",
        new Float32BufferAttribute(
          [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
          3
        )
      ),
      super(r, new LineBasicMaterial({ vertexColors: !0, toneMapped: !1 })),
      (this.type = "AxesHelper");
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const _floatView = new Float32Array(1),
  _int32View = new Int32Array(_floatView.buffer);
class DataUtils {
  static toHalfFloat(e) {
    _floatView[0] = e;
    const t = _int32View[0];
    let r = (t >> 16) & 32768,
      n = (t >> 12) & 2047;
    const i = (t >> 23) & 255;
    return i < 103
      ? r
      : i > 142
      ? ((r |= 31744), (r |= (255 == i ? 0 : 1) && 8388607 & t))
      : i < 113
      ? (r |= ((n |= 2048) >> (114 - i)) + ((n >> (113 - i)) & 1))
      : ((r |= ((i - 112) << 10) | (n >> 1)), (r += 1 & n));
  }
}
const LOD_MIN = 4,
  LOD_MAX = 8,
  SIZE_MAX = Math.pow(2, LOD_MAX),
  EXTRA_LOD_SIGMA = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  TOTAL_LODS = LOD_MAX - LOD_MIN + 1 + EXTRA_LOD_SIGMA.length,
  MAX_SAMPLES = 20,
  ENCODINGS = {
    [LinearEncoding]: 0,
    [sRGBEncoding]: 1,
    [RGBEEncoding]: 2,
    [RGBM7Encoding]: 3,
    [RGBM16Encoding]: 4,
    [RGBDEncoding]: 5,
    [GammaEncoding]: 6,
  },
  backgroundMaterial = new MeshBasicMaterial({
    side: BackSide,
    depthWrite: !1,
    depthTest: !1,
  }),
  backgroundBox = new Mesh(new BoxGeometry(), backgroundMaterial),
  _flatCamera = new OrthographicCamera(),
  {
    _lodPlanes: _lodPlanes,
    _sizeLods: _sizeLods,
    _sigmas: _sigmas,
  } = _createPlanes(),
  _clearColor = new Color();
let _oldTarget = null;
const PHI = (1 + Math.sqrt(5)) / 2,
  INV_PHI = 1 / PHI,
  _axisDirections = [
    new Vector3(1, 1, 1),
    new Vector3(-1, 1, 1),
    new Vector3(1, 1, -1),
    new Vector3(-1, 1, -1),
    new Vector3(0, PHI, INV_PHI),
    new Vector3(0, PHI, -INV_PHI),
    new Vector3(INV_PHI, 0, PHI),
    new Vector3(-INV_PHI, 0, PHI),
    new Vector3(PHI, INV_PHI, 0),
    new Vector3(-PHI, INV_PHI, 0),
  ];
function convertLinearToRGBE(e) {
  const t = Math.max(e.r, e.g, e.b),
    r = Math.min(Math.max(Math.ceil(Math.log2(t)), -128), 127);
  return e.multiplyScalar(Math.pow(2, -r)), (r + 128) / 255;
}
class PMREMGenerator {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._blurMaterial = _getBlurShader(MAX_SAMPLES)),
      (this._equirectShader = null),
      (this._cubemapShader = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, r = 0.1, n = 100) {
    _oldTarget = this._renderer.getRenderTarget();
    const i = this._allocateTargets();
    return (
      this._sceneToCubeUV(e, r, n, i),
      t > 0 && this._blur(i, 0, 0, t),
      this._applyPMREM(i),
      this._cleanup(i),
      i
    );
  }
  fromEquirectangular(e) {
    return this._fromTexture(e);
  }
  fromCubemap(e) {
    return this._fromTexture(e);
  }
  compileCubemapShader() {
    null === this._cubemapShader &&
      ((this._cubemapShader = _getCubemapShader()),
      this._compileMaterial(this._cubemapShader));
  }
  compileEquirectangularShader() {
    null === this._equirectShader &&
      ((this._equirectShader = _getEquirectShader()),
      this._compileMaterial(this._equirectShader));
  }
  dispose() {
    this._blurMaterial.dispose(),
      null !== this._cubemapShader && this._cubemapShader.dispose(),
      null !== this._equirectShader && this._equirectShader.dispose();
    for (let e = 0; e < _lodPlanes.length; e++) _lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._pingPongRenderTarget.dispose(),
      this._renderer.setRenderTarget(_oldTarget),
      (e.scissorTest = !1),
      _setViewport(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e) {
    _oldTarget = this._renderer.getRenderTarget();
    const t = this._allocateTargets(e);
    return (
      this._textureToCubeUV(e, t), this._applyPMREM(t), this._cleanup(t), t
    );
  }
  _allocateTargets(e) {
    const t = {
        magFilter: NearestFilter,
        minFilter: NearestFilter,
        generateMipmaps: !1,
        type: UnsignedByteType,
        format: RGBEFormat,
        encoding: _isLDR(e) ? e.encoding : RGBEEncoding,
        depthBuffer: !1,
      },
      r = _createRenderTarget(t);
    return (
      (r.depthBuffer = !e),
      (this._pingPongRenderTarget = _createRenderTarget(t)),
      r
    );
  }
  _compileMaterial(e) {
    const t = new Mesh(_lodPlanes[0], e);
    this._renderer.compile(t, _flatCamera);
  }
  _sceneToCubeUV(e, t, r, n) {
    const i = new PerspectiveCamera(90, 1, t, r),
      a = [1, -1, 1, 1, 1, 1],
      o = [1, 1, 1, -1, -1, -1],
      s = this._renderer,
      l = s.autoClear,
      c = s.outputEncoding,
      h = s.toneMapping;
    s.getClearColor(_clearColor),
      (s.toneMapping = NoToneMapping),
      (s.outputEncoding = LinearEncoding),
      (s.autoClear = !1);
    let u = !1;
    const d = e.background;
    if (d) {
      if (d.isColor) {
        backgroundMaterial.color.copy(d).convertSRGBToLinear(),
          (e.background = null);
        const t = convertLinearToRGBE(backgroundMaterial.color);
        (backgroundMaterial.opacity = t), (u = !0);
      }
    } else {
      backgroundMaterial.color.copy(_clearColor).convertSRGBToLinear();
      const e = convertLinearToRGBE(backgroundMaterial.color);
      (backgroundMaterial.opacity = e), (u = !0);
    }
    for (let t = 0; t < 6; t++) {
      const r = t % 3;
      0 == r
        ? (i.up.set(0, a[t], 0), i.lookAt(o[t], 0, 0))
        : 1 == r
        ? (i.up.set(0, 0, a[t]), i.lookAt(0, o[t], 0))
        : (i.up.set(0, a[t], 0), i.lookAt(0, 0, o[t])),
        _setViewport(n, r * SIZE_MAX, t > 2 ? SIZE_MAX : 0, SIZE_MAX, SIZE_MAX),
        s.setRenderTarget(n),
        u && s.render(backgroundBox, i),
        s.render(e, i);
    }
    (s.toneMapping = h), (s.outputEncoding = c), (s.autoClear = l);
  }
  _textureToCubeUV(e, t) {
    const r = this._renderer;
    e.isCubeTexture
      ? null == this._cubemapShader &&
        (this._cubemapShader = _getCubemapShader())
      : null == this._equirectShader &&
        (this._equirectShader = _getEquirectShader());
    const n = e.isCubeTexture ? this._cubemapShader : this._equirectShader,
      i = new Mesh(_lodPlanes[0], n),
      a = n.uniforms;
    (a.envMap.value = e),
      e.isCubeTexture ||
        a.texelSize.value.set(1 / e.image.width, 1 / e.image.height),
      (a.inputEncoding.value = ENCODINGS[e.encoding]),
      (a.outputEncoding.value = ENCODINGS[t.texture.encoding]),
      _setViewport(t, 0, 0, 3 * SIZE_MAX, 2 * SIZE_MAX),
      r.setRenderTarget(t),
      r.render(i, _flatCamera);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      r = t.autoClear;
    t.autoClear = !1;
    for (let t = 1; t < TOTAL_LODS; t++) {
      const r = Math.sqrt(
          _sigmas[t] * _sigmas[t] - _sigmas[t - 1] * _sigmas[t - 1]
        ),
        n = _axisDirections[(t - 1) % _axisDirections.length];
      this._blur(e, t - 1, t, r, n);
    }
    t.autoClear = r;
  }
  _blur(e, t, r, n, i) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, r, n, "latitudinal", i),
      this._halfBlur(a, e, r, r, n, "longitudinal", i);
  }
  _halfBlur(e, t, r, n, i, a, o) {
    const s = this._renderer,
      l = this._blurMaterial;
    "latitudinal" !== a &&
      "longitudinal" !== a &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const c = new Mesh(_lodPlanes[n], l),
      h = l.uniforms,
      u = _sizeLods[r] - 1,
      d = isFinite(i)
        ? Math.PI / (2 * u)
        : (2 * Math.PI) / (2 * MAX_SAMPLES - 1),
      p = i / d,
      m = isFinite(i) ? 1 + Math.floor(3 * p) : MAX_SAMPLES;
    m > MAX_SAMPLES &&
      console.warn(
        `sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${MAX_SAMPLES}`
      );
    const f = [];
    let g = 0;
    for (let e = 0; e < MAX_SAMPLES; ++e) {
      const t = e / p,
        r = Math.exp((-t * t) / 2);
      f.push(r), 0 == e ? (g += r) : e < m && (g += 2 * r);
    }
    for (let e = 0; e < f.length; e++) f[e] = f[e] / g;
    (h.envMap.value = e.texture),
      (h.samples.value = m),
      (h.weights.value = f),
      (h.latitudinal.value = "latitudinal" === a),
      o && (h.poleAxis.value = o),
      (h.dTheta.value = d),
      (h.mipInt.value = LOD_MAX - r),
      (h.inputEncoding.value = ENCODINGS[e.texture.encoding]),
      (h.outputEncoding.value = ENCODINGS[e.texture.encoding]);
    const _ = _sizeLods[n];
    _setViewport(
      t,
      3 * Math.max(0, SIZE_MAX - 2 * _),
      (0 === n ? 0 : 2 * SIZE_MAX) +
        2 * _ * (n > LOD_MAX - LOD_MIN ? n - LOD_MAX + LOD_MIN : 0),
      3 * _,
      2 * _
    ),
      s.setRenderTarget(t),
      s.render(c, _flatCamera);
  }
}
function _isLDR(e) {
  return (
    void 0 !== e &&
    e.type === UnsignedByteType &&
    (e.encoding === LinearEncoding ||
      e.encoding === sRGBEncoding ||
      e.encoding === GammaEncoding)
  );
}
function _createPlanes() {
  const e = [],
    t = [],
    r = [];
  let n = LOD_MAX;
  for (let i = 0; i < TOTAL_LODS; i++) {
    const a = Math.pow(2, n);
    t.push(a);
    let o = 1 / a;
    i > LOD_MAX - LOD_MIN
      ? (o = EXTRA_LOD_SIGMA[i - LOD_MAX + LOD_MIN - 1])
      : 0 == i && (o = 0),
      r.push(o);
    const s = 1 / (a - 1),
      l = -s / 2,
      c = 1 + s / 2,
      h = [l, l, c, l, c, c, l, l, c, c, l, c],
      u = 6,
      d = 6,
      p = 3,
      m = 2,
      f = 1,
      g = new Float32Array(p * d * u),
      _ = new Float32Array(m * d * u),
      v = new Float32Array(f * d * u);
    for (let e = 0; e < u; e++) {
      const t = ((e % 3) * 2) / 3 - 1,
        r = e > 2 ? 0 : -1,
        n = [
          t,
          r,
          0,
          t + 2 / 3,
          r,
          0,
          t + 2 / 3,
          r + 1,
          0,
          t,
          r,
          0,
          t + 2 / 3,
          r + 1,
          0,
          t,
          r + 1,
          0,
        ];
      g.set(n, p * d * e), _.set(h, m * d * e);
      const i = [e, e, e, e, e, e];
      v.set(i, f * d * e);
    }
    const y = new BufferGeometry();
    y.setAttribute("position", new BufferAttribute(g, p)),
      y.setAttribute("uv", new BufferAttribute(_, m)),
      y.setAttribute("faceIndex", new BufferAttribute(v, f)),
      e.push(y),
      n > LOD_MIN && n--;
  }
  return { _lodPlanes: e, _sizeLods: t, _sigmas: r };
}
function _createRenderTarget(e) {
  const t = new WebGLRenderTarget(3 * SIZE_MAX, 3 * SIZE_MAX, e);
  return (
    (t.texture.mapping = CubeUVReflectionMapping),
    (t.texture.name = "PMREM.cubeUv"),
    (t.scissorTest = !0),
    t
  );
}
function _setViewport(e, t, r, n, i) {
  e.viewport.set(t, r, n, i), e.scissor.set(t, r, n, i);
}
function _getBlurShader(e) {
  const t = new Float32Array(e),
    r = new Vector3(0, 1, 0);
  return new RawShaderMaterial({
    name: "SphericalGaussianBlur",
    defines: { n: e },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: t },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
      inputEncoding: { value: ENCODINGS[LinearEncoding] },
      outputEncoding: { value: ENCODINGS[LinearEncoding] },
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t${_getEncodings()}\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
    blending: NoBlending,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _getEquirectShader() {
  const e = new Vector2(1, 1);
  return new RawShaderMaterial({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null },
      texelSize: { value: e },
      inputEncoding: { value: ENCODINGS[LinearEncoding] },
      outputEncoding: { value: ENCODINGS[LinearEncoding] },
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t${_getEncodings()}\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
    blending: NoBlending,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _getCubemapShader() {
  return new RawShaderMaterial({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      inputEncoding: { value: ENCODINGS[LinearEncoding] },
      outputEncoding: { value: ENCODINGS[LinearEncoding] },
    },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t${_getEncodings()}\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t`,
    blending: NoBlending,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _getCommonVertexShader() {
  return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
}
function _getEncodings() {
  return "\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t";
}
const LineStrip = 0,
  LinePieces = 1,
  NoColors = 0,
  FaceColors = 1,
  VertexColors = 2;
function MeshFaceMaterial(e) {
  return (
    console.warn(
      "MYGLAPI.MeshFaceMaterial has been removed. Use an Array instead."
    ),
    e
  );
}
function MultiMaterial(e = []) {
  return (
    console.warn(
      "MYGLAPI.MultiMaterial has been removed. Use an Array instead."
    ),
    (e.isMultiMaterial = !0),
    (e.materials = e),
    (e.clone = function () {
      return e.slice();
    }),
    e
  );
}
function PointCloud(e, t) {
  return (
    console.warn("MYGLAPI.PointCloud has been renamed to MYGLAPI.Points."),
    new Points(e, t)
  );
}
function Particle(e) {
  return (
    console.warn("MYGLAPI.Particle has been renamed to MYGLAPI.Sprite."),
    new Sprite(e)
  );
}
function ParticleSystem(e, t) {
  return (
    console.warn("MYGLAPI.ParticleSystem has been renamed to MYGLAPI.Points."),
    new Points(e, t)
  );
}
function PointCloudMaterial(e) {
  return (
    console.warn(
      "MYGLAPI.PointCloudMaterial has been renamed to MYGLAPI.PointsMaterial."
    ),
    new PointsMaterial(e)
  );
}
function ParticleBasicMaterial(e) {
  return (
    console.warn(
      "MYGLAPI.ParticleBasicMaterial has been renamed to MYGLAPI.PointsMaterial."
    ),
    new PointsMaterial(e)
  );
}
function ParticleSystemMaterial(e) {
  return (
    console.warn(
      "MYGLAPI.ParticleSystemMaterial has been renamed to MYGLAPI.PointsMaterial."
    ),
    new PointsMaterial(e)
  );
}
function Vertex(e, t, r) {
  return (
    console.warn(
      "MYGLAPI.Vertex has been removed. Use MYGLAPI.Vector3 instead."
    ),
    new Vector3(e, t, r)
  );
}
function DynamicBufferAttribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.DynamicBufferAttribute has been removed. Use new MYGLAPI.BufferAttribute().setUsage( MYGLAPI.DynamicDrawUsage ) instead."
    ),
    new BufferAttribute(e, t).setUsage(DynamicDrawUsage)
  );
}
function Int8Attribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.Int8Attribute has been removed. Use new MYGLAPI.Int8BufferAttribute() instead."
    ),
    new Int8BufferAttribute(e, t)
  );
}
function Uint8Attribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.Uint8Attribute has been removed. Use new MYGLAPI.Uint8BufferAttribute() instead."
    ),
    new Uint8BufferAttribute(e, t)
  );
}
function Uint8ClampedAttribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.Uint8ClampedAttribute has been removed. Use new MYGLAPI.Uint8ClampedBufferAttribute() instead."
    ),
    new Uint8ClampedBufferAttribute(e, t)
  );
}
function Int16Attribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.Int16Attribute has been removed. Use new MYGLAPI.Int16BufferAttribute() instead."
    ),
    new Int16BufferAttribute(e, t)
  );
}
function Uint16Attribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.Uint16Attribute has been removed. Use new MYGLAPI.Uint16BufferAttribute() instead."
    ),
    new Uint16BufferAttribute(e, t)
  );
}
function Int32Attribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.Int32Attribute has been removed. Use new MYGLAPI.Int32BufferAttribute() instead."
    ),
    new Int32BufferAttribute(e, t)
  );
}
function Uint32Attribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.Uint32Attribute has been removed. Use new MYGLAPI.Uint32BufferAttribute() instead."
    ),
    new Uint32BufferAttribute(e, t)
  );
}
function Float32Attribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.Float32Attribute has been removed. Use new MYGLAPI.Float32BufferAttribute() instead."
    ),
    new Float32BufferAttribute(e, t)
  );
}
function Float64Attribute(e, t) {
  return (
    console.warn(
      "MYGLAPI.Float64Attribute has been removed. Use new MYGLAPI.Float64BufferAttribute() instead."
    ),
    new Float64BufferAttribute(e, t)
  );
}
function AxisHelper(e) {
  return (
    console.warn("MYGLAPI.AxisHelper has been renamed to MYGLAPI.AxesHelper."),
    new AxesHelper(e)
  );
}
function BoundingBoxHelper(e, t) {
  return (
    console.warn(
      "MYGLAPI.BoundingBoxHelper has been deprecated. Creating a MYGLAPI.BoxHelper instead."
    ),
    new BoxHelper(e, t)
  );
}
function EdgesHelper(e, t) {
  return (
    console.warn(
      "MYGLAPI.EdgesHelper has been removed. Use MYGLAPI.EdgesGeometry instead."
    ),
    new LineSegments(
      new EdgesGeometry(e.geometry),
      new LineBasicMaterial({ color: void 0 !== t ? t : 16777215 })
    )
  );
}
function WireframeHelper(e, t) {
  return (
    console.warn(
      "MYGLAPI.WireframeHelper has been removed. Use MYGLAPI.WireframeGeometry instead."
    ),
    new LineSegments(
      new WireframeGeometry(e.geometry),
      new LineBasicMaterial({ color: void 0 !== t ? t : 16777215 })
    )
  );
}
function XHRLoader(e) {
  return (
    console.warn("MYGLAPI.XHRLoader has been renamed to MYGLAPI.FileLoader."),
    new FileLoader(e)
  );
}
function BinaryTextureLoader(e) {
  return (
    console.warn(
      "MYGLAPI.BinaryTextureLoader has been renamed to MYGLAPI.DataTextureLoader."
    ),
    new DataTextureLoader(e)
  );
}
function WebGLRenderTargetCube(e, t, r) {
  return (
    console.warn(
      "MYGLAPI.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."
    ),
    new WebGLCubeRenderTarget(e, r)
  );
}
function CanvasRenderer() {
  console.error("MYGLAPI.CanvasRenderer has been removed");
}
function JSONLoader() {
  console.error("MYGLAPI.JSONLoader has been removed.");
}
(Curve.create = function (e, t) {
  return (
    console.log("MYGLAPI.Curve.create() has been deprecated"),
    (e.prototype = Object.create(Curve.prototype)),
    (e.prototype.constructor = e),
    (e.prototype.getPoint = t),
    e
  );
}),
  (Path.prototype.fromPoints = function (e) {
    return (
      console.warn(
        "MYGLAPI.Path: .fromPoints() has been renamed to .setFromPoints()."
      ),
      this.setFromPoints(e)
    );
  }),
  (GridHelper.prototype.setColors = function () {
    console.error(
      "MYGLAPI.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
    );
  }),
  (SkeletonHelper.prototype.update = function () {
    console.error(
      "MYGLAPI.SkeletonHelper: update() no longer needs to be called."
    );
  }),
  (Loader.prototype.extractUrlBase = function (e) {
    return (
      console.warn(
        "MYGLAPI.Loader: .extractUrlBase() has been deprecated. Use MYGLAPI.LoaderUtils.extractUrlBase() instead."
      ),
      LoaderUtils.extractUrlBase(e)
    );
  }),
  (Loader.Handlers = {
    add: function () {
      console.error(
        "MYGLAPI.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
      );
    },
    get: function () {
      console.error(
        "MYGLAPI.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
      );
    },
  }),
  (Box2.prototype.center = function (e) {
    return (
      console.warn("MYGLAPI.Box2: .center() has been renamed to .getCenter()."),
      this.getCenter(e)
    );
  }),
  (Box2.prototype.empty = function () {
    return (
      console.warn("MYGLAPI.Box2: .empty() has been renamed to .isEmpty()."),
      this.isEmpty()
    );
  }),
  (Box2.prototype.isIntersectionBox = function (e) {
    return (
      console.warn(
        "MYGLAPI.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."
      ),
      this.intersectsBox(e)
    );
  }),
  (Box2.prototype.size = function (e) {
    return (
      console.warn("MYGLAPI.Box2: .size() has been renamed to .getSize()."),
      this.getSize(e)
    );
  }),
  (Box3.prototype.center = function (e) {
    return (
      console.warn("MYGLAPI.Box3: .center() has been renamed to .getCenter()."),
      this.getCenter(e)
    );
  }),
  (Box3.prototype.empty = function () {
    return (
      console.warn("MYGLAPI.Box3: .empty() has been renamed to .isEmpty()."),
      this.isEmpty()
    );
  }),
  (Box3.prototype.isIntersectionBox = function (e) {
    return (
      console.warn(
        "MYGLAPI.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
      ),
      this.intersectsBox(e)
    );
  }),
  (Box3.prototype.isIntersectionSphere = function (e) {
    return (
      console.warn(
        "MYGLAPI.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
      ),
      this.intersectsSphere(e)
    );
  }),
  (Box3.prototype.size = function (e) {
    return (
      console.warn("MYGLAPI.Box3: .size() has been renamed to .getSize()."),
      this.getSize(e)
    );
  }),
  (Sphere.prototype.empty = function () {
    return (
      console.warn("MYGLAPI.Sphere: .empty() has been renamed to .isEmpty()."),
      this.isEmpty()
    );
  }),
  (Frustum.prototype.setFromMatrix = function (e) {
    return (
      console.warn(
        "MYGLAPI.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
      ),
      this.setFromProjectionMatrix(e)
    );
  }),
  (Line3.prototype.center = function (e) {
    return (
      console.warn(
        "MYGLAPI.Line3: .center() has been renamed to .getCenter()."
      ),
      this.getCenter(e)
    );
  }),
  (Matrix3.prototype.flattenToArrayOffset = function (e, t) {
    return (
      console.warn(
        "MYGLAPI.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
      ),
      this.toArray(e, t)
    );
  }),
  (Matrix3.prototype.multiplyVector3 = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
      ),
      e.applyMatrix3(this)
    );
  }),
  (Matrix3.prototype.multiplyVector3Array = function () {
    console.error("MYGLAPI.Matrix3: .multiplyVector3Array() has been removed.");
  }),
  (Matrix3.prototype.applyToBufferAttribute = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
      ),
      e.applyMatrix3(this)
    );
  }),
  (Matrix3.prototype.applyToVector3Array = function () {
    console.error("MYGLAPI.Matrix3: .applyToVector3Array() has been removed.");
  }),
  (Matrix3.prototype.getInverse = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
      ),
      this.copy(e).invert()
    );
  }),
  (Matrix4.prototype.extractPosition = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .extractPosition() has been renamed to .copyPosition()."
      ),
      this.copyPosition(e)
    );
  }),
  (Matrix4.prototype.flattenToArrayOffset = function (e, t) {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
      ),
      this.toArray(e, t)
    );
  }),
  (Matrix4.prototype.getPosition = function () {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
      ),
      new Vector3().setFromMatrixColumn(this, 3)
    );
  }),
  (Matrix4.prototype.setRotationFromQuaternion = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
      ),
      this.makeRotationFromQuaternion(e)
    );
  }),
  (Matrix4.prototype.multiplyToArray = function () {
    console.warn("MYGLAPI.Matrix4: .multiplyToArray() has been removed.");
  }),
  (Matrix4.prototype.multiplyVector3 = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
      ),
      e.applyMatrix4(this)
    );
  }),
  (Matrix4.prototype.multiplyVector4 = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
      ),
      e.applyMatrix4(this)
    );
  }),
  (Matrix4.prototype.multiplyVector3Array = function () {
    console.error("MYGLAPI.Matrix4: .multiplyVector3Array() has been removed.");
  }),
  (Matrix4.prototype.rotateAxis = function (e) {
    console.warn(
      "MYGLAPI.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
    ),
      e.transformDirection(this);
  }),
  (Matrix4.prototype.crossVector = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
      ),
      e.applyMatrix4(this)
    );
  }),
  (Matrix4.prototype.translate = function () {
    console.error("MYGLAPI.Matrix4: .translate() has been removed.");
  }),
  (Matrix4.prototype.rotateX = function () {
    console.error("MYGLAPI.Matrix4: .rotateX() has been removed.");
  }),
  (Matrix4.prototype.rotateY = function () {
    console.error("MYGLAPI.Matrix4: .rotateY() has been removed.");
  }),
  (Matrix4.prototype.rotateZ = function () {
    console.error("MYGLAPI.Matrix4: .rotateZ() has been removed.");
  }),
  (Matrix4.prototype.rotateByAxis = function () {
    console.error("MYGLAPI.Matrix4: .rotateByAxis() has been removed.");
  }),
  (Matrix4.prototype.applyToBufferAttribute = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
      ),
      e.applyMatrix4(this)
    );
  }),
  (Matrix4.prototype.applyToVector3Array = function () {
    console.error("MYGLAPI.Matrix4: .applyToVector3Array() has been removed.");
  }),
  (Matrix4.prototype.makeFrustum = function (e, t, r, n, i, a) {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
      ),
      this.makePerspective(e, t, n, r, i, a)
    );
  }),
  (Matrix4.prototype.getInverse = function (e) {
    return (
      console.warn(
        "MYGLAPI.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
      ),
      this.copy(e).invert()
    );
  }),
  (Plane.prototype.isIntersectionLine = function (e) {
    return (
      console.warn(
        "MYGLAPI.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
      ),
      this.intersectsLine(e)
    );
  }),
  (Quaternion.prototype.multiplyVector3 = function (e) {
    return (
      console.warn(
        "MYGLAPI.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
      ),
      e.applyQuaternion(this)
    );
  }),
  (Quaternion.prototype.inverse = function () {
    return (
      console.warn(
        "MYGLAPI.Quaternion: .inverse() has been renamed to invert()."
      ),
      this.invert()
    );
  }),
  (Ray.prototype.isIntersectionBox = function (e) {
    return (
      console.warn(
        "MYGLAPI.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
      ),
      this.intersectsBox(e)
    );
  }),
  (Ray.prototype.isIntersectionPlane = function (e) {
    return (
      console.warn(
        "MYGLAPI.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
      ),
      this.intersectsPlane(e)
    );
  }),
  (Ray.prototype.isIntersectionSphere = function (e) {
    return (
      console.warn(
        "MYGLAPI.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
      ),
      this.intersectsSphere(e)
    );
  }),
  (Triangle.prototype.area = function () {
    return (
      console.warn("MYGLAPI.Triangle: .area() has been renamed to .getArea()."),
      this.getArea()
    );
  }),
  (Triangle.prototype.barycoordFromPoint = function (e, t) {
    return (
      console.warn(
        "MYGLAPI.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
      ),
      this.getBarycoord(e, t)
    );
  }),
  (Triangle.prototype.midpoint = function (e) {
    return (
      console.warn(
        "MYGLAPI.Triangle: .midpoint() has been renamed to .getMidpoint()."
      ),
      this.getMidpoint(e)
    );
  }),
  (Triangle.prototypenormal = function (e) {
    return (
      console.warn(
        "MYGLAPI.Triangle: .normal() has been renamed to .getNormal()."
      ),
      this.getNormal(e)
    );
  }),
  (Triangle.prototype.plane = function (e) {
    return (
      console.warn(
        "MYGLAPI.Triangle: .plane() has been renamed to .getPlane()."
      ),
      this.getPlane(e)
    );
  }),
  (Triangle.barycoordFromPoint = function (e, t, r, n, i) {
    return (
      console.warn(
        "MYGLAPI.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
      ),
      Triangle.getBarycoord(e, t, r, n, i)
    );
  }),
  (Triangle.normal = function (e, t, r, n) {
    return (
      console.warn(
        "MYGLAPI.Triangle: .normal() has been renamed to .getNormal()."
      ),
      Triangle.getNormal(e, t, r, n)
    );
  }),
  (Shape.prototype.extractAllPoints = function (e) {
    return (
      console.warn(
        "MYGLAPI.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
      ),
      this.extractPoints(e)
    );
  }),
  (Shape.prototype.extrude = function (e) {
    return (
      console.warn(
        "MYGLAPI.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
      ),
      new ExtrudeGeometry(this, e)
    );
  }),
  (Shape.prototype.makeGeometry = function (e) {
    return (
      console.warn(
        "MYGLAPI.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
      ),
      new ShapeGeometry(this, e)
    );
  }),
  (Vector2.prototype.fromAttribute = function (e, t, r) {
    return (
      console.warn(
        "MYGLAPI.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
      ),
      this.fromBufferAttribute(e, t, r)
    );
  }),
  (Vector2.prototype.distanceToManhattan = function (e) {
    return (
      console.warn(
        "MYGLAPI.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
      ),
      this.manhattanDistanceTo(e)
    );
  }),
  (Vector2.prototype.lengthManhattan = function () {
    return (
      console.warn(
        "MYGLAPI.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
      ),
      this.manhattanLength()
    );
  }),
  (Vector3.prototype.setEulerFromRotationMatrix = function () {
    console.error(
      "MYGLAPI.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
    );
  }),
  (Vector3.prototype.setEulerFromQuaternion = function () {
    console.error(
      "MYGLAPI.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
    );
  }),
  (Vector3.prototype.getPositionFromMatrix = function (e) {
    return (
      console.warn(
        "MYGLAPI.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
      ),
      this.setFromMatrixPosition(e)
    );
  }),
  (Vector3.prototype.getScaleFromMatrix = function (e) {
    return (
      console.warn(
        "MYGLAPI.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
      ),
      this.setFromMatrixScale(e)
    );
  }),
  (Vector3.prototype.getColumnFromMatrix = function (e, t) {
    return (
      console.warn(
        "MYGLAPI.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
      ),
      this.setFromMatrixColumn(t, e)
    );
  }),
  (Vector3.prototype.applyProjection = function (e) {
    return (
      console.warn(
        "MYGLAPI.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
      ),
      this.applyMatrix4(e)
    );
  }),
  (Vector3.prototype.fromAttribute = function (e, t, r) {
    return (
      console.warn(
        "MYGLAPI.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
      ),
      this.fromBufferAttribute(e, t, r)
    );
  }),
  (Vector3.prototype.distanceToManhattan = function (e) {
    return (
      console.warn(
        "MYGLAPI.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
      ),
      this.manhattanDistanceTo(e)
    );
  }),
  (Vector3.prototype.lengthManhattan = function () {
    return (
      console.warn(
        "MYGLAPI.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
      ),
      this.manhattanLength()
    );
  }),
  (Vector4.prototype.fromAttribute = function (e, t, r) {
    return (
      console.warn(
        "MYGLAPI.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
      ),
      this.fromBufferAttribute(e, t, r)
    );
  }),
  (Vector4.prototype.lengthManhattan = function () {
    return (
      console.warn(
        "MYGLAPI.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
      ),
      this.manhattanLength()
    );
  }),
  (Object3D.prototype.getChildByName = function (e) {
    return (
      console.warn(
        "MYGLAPI.Object3D: .getChildByName() has been renamed to .getObjectByName()."
      ),
      this.getObjectByName(e)
    );
  }),
  (Object3D.prototype.renderDepth = function () {
    console.warn(
      "MYGLAPI.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
    );
  }),
  (Object3D.prototype.translate = function (e, t) {
    return (
      console.warn(
        "MYGLAPI.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
      ),
      this.translateOnAxis(t, e)
    );
  }),
  (Object3D.prototype.getWorldRotation = function () {
    console.error(
      "MYGLAPI.Object3D: .getWorldRotation() has been removed. Use MYGLAPI.Object3D.getWorldQuaternion( target ) instead."
    );
  }),
  (Object3D.prototype.applyMatrix = function (e) {
    return (
      console.warn(
        "MYGLAPI.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
      ),
      this.applyMatrix4(e)
    );
  }),
  Object.defineProperties(Object3D.prototype, {
    eulerOrder: {
      get: function () {
        return (
          console.warn("MYGLAPI.Object3D: .eulerOrder is now .rotation.order."),
          this.rotation.order
        );
      },
      set: function (e) {
        console.warn("MYGLAPI.Object3D: .eulerOrder is now .rotation.order."),
          (this.rotation.order = e);
      },
    },
    useQuaternion: {
      get: function () {
        console.warn(
          "MYGLAPI.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
        );
      },
      set: function () {
        console.warn(
          "MYGLAPI.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
        );
      },
    },
  }),
  (Mesh.prototype.setDrawMode = function () {
    console.error(
      "MYGLAPI.Mesh: .setDrawMode() has been removed. The renderer now always assumes MYGLAPI.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
    );
  }),
  Object.defineProperties(Mesh.prototype, {
    drawMode: {
      get: function () {
        return (
          console.error(
            "MYGLAPI.Mesh: .drawMode has been removed. The renderer now always assumes MYGLAPI.TrianglesDrawMode."
          ),
          0
        );
      },
      set: function () {
        console.error(
          "MYGLAPI.Mesh: .drawMode has been removed. The renderer now always assumes MYGLAPI.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
        );
      },
    },
  }),
  (SkinnedMesh.prototype.initBones = function () {
    console.error("MYGLAPI.SkinnedMesh: initBones() has been removed.");
  }),
  (PerspectiveCamera.prototype.setLens = function (e, t) {
    console.warn(
      "MYGLAPI.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
    ),
      void 0 !== t && (this.filmGauge = t),
      this.setFocalLength(e);
  }),
  Object.defineProperties(Light.prototype, {
    onlyShadow: {
      set: function () {
        console.warn("MYGLAPI.Light: .onlyShadow has been removed.");
      },
    },
    shadowCameraFov: {
      set: function (e) {
        console.warn(
          "MYGLAPI.Light: .shadowCameraFov is now .shadow.camera.fov."
        ),
          (this.shadow.camera.fov = e);
      },
    },
    shadowCameraLeft: {
      set: function (e) {
        console.warn(
          "MYGLAPI.Light: .shadowCameraLeft is now .shadow.camera.left."
        ),
          (this.shadow.camera.left = e);
      },
    },
    shadowCameraRight: {
      set: function (e) {
        console.warn(
          "MYGLAPI.Light: .shadowCameraRight is now .shadow.camera.right."
        ),
          (this.shadow.camera.right = e);
      },
    },
    shadowCameraTop: {
      set: function (e) {
        console.warn(
          "MYGLAPI.Light: .shadowCameraTop is now .shadow.camera.top."
        ),
          (this.shadow.camera.top = e);
      },
    },
    shadowCameraBottom: {
      set: function (e) {
        console.warn(
          "MYGLAPI.Light: .shadowCameraBottom is now .shadow.camera.bottom."
        ),
          (this.shadow.camera.bottom = e);
      },
    },
    shadowCameraNear: {
      set: function (e) {
        console.warn(
          "MYGLAPI.Light: .shadowCameraNear is now .shadow.camera.near."
        ),
          (this.shadow.camera.near = e);
      },
    },
    shadowCameraFar: {
      set: function (e) {
        console.warn(
          "MYGLAPI.Light: .shadowCameraFar is now .shadow.camera.far."
        ),
          (this.shadow.camera.far = e);
      },
    },
    shadowCameraVisible: {
      set: function () {
        console.warn(
          "MYGLAPI.Light: .shadowCameraVisible has been removed. Use new MYGLAPI.CameraHelper( light.shadow.camera ) instead."
        );
      },
    },
    shadowBias: {
      set: function (e) {
        console.warn("MYGLAPI.Light: .shadowBias is now .shadow.bias."),
          (this.shadow.bias = e);
      },
    },
    shadowDarkness: {
      set: function () {
        console.warn("MYGLAPI.Light: .shadowDarkness has been removed.");
      },
    },
    shadowMapWidth: {
      set: function (e) {
        console.warn(
          "MYGLAPI.Light: .shadowMapWidth is now .shadow.mapSize.width."
        ),
          (this.shadow.mapSize.width = e);
      },
    },
    shadowMapHeight: {
      set: function (e) {
        console.warn(
          "MYGLAPI.Light: .shadowMapHeight is now .shadow.mapSize.height."
        ),
          (this.shadow.mapSize.height = e);
      },
    },
  }),
  Object.defineProperties(BufferAttribute.prototype, {
    length: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.BufferAttribute: .length has been deprecated. Use .count instead."
          ),
          this.array.length
        );
      },
    },
    dynamic: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
          ),
          this.usage === DynamicDrawUsage
        );
      },
      set: function () {
        console.warn(
          "MYGLAPI.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
        ),
          this.setUsage(DynamicDrawUsage);
      },
    },
  }),
  (BufferAttribute.prototype.setDynamic = function (e) {
    return (
      console.warn(
        "MYGLAPI.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
      ),
      this.setUsage(!0 === e ? DynamicDrawUsage : StaticDrawUsage),
      this
    );
  }),
  (BufferAttribute.prototype.copyIndicesArray = function () {
    console.error(
      "MYGLAPI.BufferAttribute: .copyIndicesArray() has been removed."
    );
  }),
  (BufferAttribute.prototype.setArray = function () {
    console.error(
      "MYGLAPI.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
    );
  }),
  (BufferGeometry.prototype.addIndex = function (e) {
    console.warn(
      "MYGLAPI.BufferGeometry: .addIndex() has been renamed to .setIndex()."
    ),
      this.setIndex(e);
  }),
  (BufferGeometry.prototype.addAttribute = function (e, t) {
    return (
      console.warn(
        "MYGLAPI.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
      ),
      (t && t.isBufferAttribute) || (t && t.isInterleavedBufferAttribute)
        ? "index" === e
          ? (console.warn(
              "MYGLAPI.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
            ),
            this.setIndex(t),
            this)
          : this.setAttribute(e, t)
        : (console.warn(
            "MYGLAPI.BufferGeometry: .addAttribute() now expects ( name, attribute )."
          ),
          this.setAttribute(e, new BufferAttribute(arguments[1], arguments[2])))
    );
  }),
  (BufferGeometry.prototype.addDrawCall = function (e, t, r) {
    void 0 !== r &&
      console.warn(
        "MYGLAPI.BufferGeometry: .addDrawCall() no longer supports indexOffset."
      ),
      console.warn(
        "MYGLAPI.BufferGeometry: .addDrawCall() is now .addGroup()."
      ),
      this.addGroup(e, t);
  }),
  (BufferGeometry.prototype.clearDrawCalls = function () {
    console.warn(
      "MYGLAPI.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
    ),
      this.clearGroups();
  }),
  (BufferGeometry.prototype.computeOffsets = function () {
    console.warn("MYGLAPI.BufferGeometry: .computeOffsets() has been removed.");
  }),
  (BufferGeometry.prototype.removeAttribute = function (e) {
    return (
      console.warn(
        "MYGLAPI.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
      ),
      this.deleteAttribute(e)
    );
  }),
  (BufferGeometry.prototype.applyMatrix = function (e) {
    return (
      console.warn(
        "MYGLAPI.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
      ),
      this.applyMatrix4(e)
    );
  }),
  Object.defineProperties(BufferGeometry.prototype, {
    drawcalls: {
      get: function () {
        return (
          console.error(
            "MYGLAPI.BufferGeometry: .drawcalls has been renamed to .groups."
          ),
          this.groups
        );
      },
    },
    offsets: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.BufferGeometry: .offsets has been renamed to .groups."
          ),
          this.groups
        );
      },
    },
  }),
  (InterleavedBuffer.prototype.setDynamic = function (e) {
    return (
      console.warn(
        "MYGLAPI.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
      ),
      this.setUsage(!0 === e ? DynamicDrawUsage : StaticDrawUsage),
      this
    );
  }),
  (InterleavedBuffer.prototype.setArray = function () {
    console.error(
      "MYGLAPI.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
    );
  }),
  (ExtrudeGeometry.prototype.getArrays = function () {
    console.error("MYGLAPI.ExtrudeGeometry: .getArrays() has been removed.");
  }),
  (ExtrudeGeometry.prototype.addShapeList = function () {
    console.error("MYGLAPI.ExtrudeGeometry: .addShapeList() has been removed.");
  }),
  (ExtrudeGeometry.prototype.addShape = function () {
    console.error("MYGLAPI.ExtrudeGeometry: .addShape() has been removed.");
  }),
  (Scene.prototype.dispose = function () {
    console.error("MYGLAPI.Scene: .dispose() has been removed.");
  }),
  (Uniform.prototype.onUpdate = function () {
    return (
      console.warn(
        "MYGLAPI.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."
      ),
      this
    );
  }),
  Object.defineProperties(Material.prototype, {
    wrapAround: {
      get: function () {
        console.warn("MYGLAPI.Material: .wrapAround has been removed.");
      },
      set: function () {
        console.warn("MYGLAPI.Material: .wrapAround has been removed.");
      },
    },
    overdraw: {
      get: function () {
        console.warn("MYGLAPI.Material: .overdraw has been removed.");
      },
      set: function () {
        console.warn("MYGLAPI.Material: .overdraw has been removed.");
      },
    },
    wrapRGB: {
      get: function () {
        return (
          console.warn("MYGLAPI.Material: .wrapRGB has been removed."),
          new Color()
        );
      },
    },
    shading: {
      get: function () {
        console.error(
          "MYGLAPI." +
            this.type +
            ": .shading has been removed. Use the boolean .flatShading instead."
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI." +
            this.type +
            ": .shading has been removed. Use the boolean .flatShading instead."
        ),
          (this.flatShading = e === FlatShading);
      },
    },
    stencilMask: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI." +
              this.type +
              ": .stencilMask has been removed. Use .stencilFuncMask instead."
          ),
          this.stencilFuncMask
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI." +
            this.type +
            ": .stencilMask has been removed. Use .stencilFuncMask instead."
        ),
          (this.stencilFuncMask = e);
      },
    },
  }),
  Object.defineProperties(ShaderMaterial.prototype, {
    derivatives: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
          ),
          this.extensions.derivatives
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
        ),
          (this.extensions.derivatives = e);
      },
    },
  }),
  (WebGLRenderer.prototype.clearTarget = function (e, t, r, n) {
    console.warn(
      "MYGLAPI.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
    ),
      this.setRenderTarget(e),
      this.clear(t, r, n);
  }),
  (WebGLRenderer.prototype.animate = function (e) {
    console.warn(
      "MYGLAPI.WebGLRenderer: .animate() is now .setAnimationLoop()."
    ),
      this.setAnimationLoop(e);
  }),
  (WebGLRenderer.prototype.getCurrentRenderTarget = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
      ),
      this.getRenderTarget()
    );
  }),
  (WebGLRenderer.prototype.getMaxAnisotropy = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
      ),
      this.capabilities.getMaxAnisotropy()
    );
  }),
  (WebGLRenderer.prototype.getPrecision = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .getPrecision() is now .capabilities.precision."
      ),
      this.capabilities.precision
    );
  }),
  (WebGLRenderer.prototype.resetGLState = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .resetGLState() is now .state.reset()."
      ),
      this.state.reset()
    );
  }),
  (WebGLRenderer.prototype.supportsFloatTextures = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
      ),
      this.extensions.get("OES_texture_float")
    );
  }),
  (WebGLRenderer.prototype.supportsHalfFloatTextures = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
      ),
      this.extensions.get("OES_texture_half_float")
    );
  }),
  (WebGLRenderer.prototype.supportsStandardDerivatives = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
      ),
      this.extensions.get("OES_standard_derivatives")
    );
  }),
  (WebGLRenderer.prototype.supportsCompressedTextureS3TC = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
      ),
      this.extensions.get("WEBGL_compressed_texture_s3tc")
    );
  }),
  (WebGLRenderer.prototype.supportsCompressedTexturePVRTC = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
      ),
      this.extensions.get("WEBGL_compressed_texture_pvrtc")
    );
  }),
  (WebGLRenderer.prototype.supportsBlendMinMax = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
      ),
      this.extensions.get("EXT_blend_minmax")
    );
  }),
  (WebGLRenderer.prototype.supportsVertexTextures = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
      ),
      this.capabilities.vertexTextures
    );
  }),
  (WebGLRenderer.prototype.supportsInstancedArrays = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
      ),
      this.extensions.get("ANGLE_instanced_arrays")
    );
  }),
  (WebGLRenderer.prototype.enableScissorTest = function (e) {
    console.warn(
      "MYGLAPI.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
    ),
      this.setScissorTest(e);
  }),
  (WebGLRenderer.prototype.initMaterial = function () {
    console.warn("MYGLAPI.WebGLRenderer: .initMaterial() has been removed.");
  }),
  (WebGLRenderer.prototype.addPrePlugin = function () {
    console.warn("MYGLAPI.WebGLRenderer: .addPrePlugin() has been removed.");
  }),
  (WebGLRenderer.prototype.addPostPlugin = function () {
    console.warn("MYGLAPI.WebGLRenderer: .addPostPlugin() has been removed.");
  }),
  (WebGLRenderer.prototype.updateShadowMap = function () {
    console.warn("MYGLAPI.WebGLRenderer: .updateShadowMap() has been removed.");
  }),
  (WebGLRenderer.prototype.setFaceCulling = function () {
    console.warn("MYGLAPI.WebGLRenderer: .setFaceCulling() has been removed.");
  }),
  (WebGLRenderer.prototype.allocTextureUnit = function () {
    console.warn(
      "MYGLAPI.WebGLRenderer: .allocTextureUnit() has been removed."
    );
  }),
  (WebGLRenderer.prototype.setTexture = function () {
    console.warn("MYGLAPI.WebGLRenderer: .setTexture() has been removed.");
  }),
  (WebGLRenderer.prototype.setTexture2D = function () {
    console.warn("MYGLAPI.WebGLRenderer: .setTexture2D() has been removed.");
  }),
  (WebGLRenderer.prototype.setTextureCube = function () {
    console.warn("MYGLAPI.WebGLRenderer: .setTextureCube() has been removed.");
  }),
  (WebGLRenderer.prototype.getActiveMipMapLevel = function () {
    return (
      console.warn(
        "MYGLAPI.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
      ),
      this.getActiveMipmapLevel()
    );
  }),
  Object.defineProperties(WebGLRenderer.prototype, {
    shadowMapEnabled: {
      get: function () {
        return this.shadowMap.enabled;
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
        ),
          (this.shadowMap.enabled = e);
      },
    },
    shadowMapType: {
      get: function () {
        return this.shadowMap.type;
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMapType is now .shadowMap.type."
        ),
          (this.shadowMap.type = e);
      },
    },
    shadowMapCullFace: {
      get: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
        );
      },
      set: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
        );
      },
    },
    context: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderer: .context has been removed. Use .getContext() instead."
          ),
          this.getContext()
        );
      },
    },
    vr: {
      get: function () {
        return (
          console.warn("MYGLAPI.WebGLRenderer: .vr has been renamed to .xr"),
          this.xr
        );
      },
    },
    gammaInput: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
          ),
          !1
        );
      },
      set: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
        );
      },
    },
    gammaOutput: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
          ),
          !1
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
        ),
          (this.outputEncoding = !0 === e ? sRGBEncoding : LinearEncoding);
      },
    },
    toneMappingWhitePoint: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderer: .toneMappingWhitePoint has been removed."
          ),
          1
        );
      },
      set: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .toneMappingWhitePoint has been removed."
        );
      },
    },
  }),
  Object.defineProperties(WebGLShadowMap.prototype, {
    cullFace: {
      get: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
        );
      },
      set: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
        );
      },
    },
    renderReverseSided: {
      get: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
        );
      },
      set: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
        );
      },
    },
    renderSingleSided: {
      get: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
        );
      },
      set: function () {
        console.warn(
          "MYGLAPI.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
        );
      },
    },
  }),
  Object.defineProperties(WebGLRenderTarget.prototype, {
    wrapS: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .wrapS is now .texture.wrapS."
          ),
          this.texture.wrapS
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderTarget: .wrapS is now .texture.wrapS."
        ),
          (this.texture.wrapS = e);
      },
    },
    wrapT: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .wrapT is now .texture.wrapT."
          ),
          this.texture.wrapT
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderTarget: .wrapT is now .texture.wrapT."
        ),
          (this.texture.wrapT = e);
      },
    },
    magFilter: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .magFilter is now .texture.magFilter."
          ),
          this.texture.magFilter
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderTarget: .magFilter is now .texture.magFilter."
        ),
          (this.texture.magFilter = e);
      },
    },
    minFilter: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .minFilter is now .texture.minFilter."
          ),
          this.texture.minFilter
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderTarget: .minFilter is now .texture.minFilter."
        ),
          (this.texture.minFilter = e);
      },
    },
    anisotropy: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
          ),
          this.texture.anisotropy
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
        ),
          (this.texture.anisotropy = e);
      },
    },
    offset: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .offset is now .texture.offset."
          ),
          this.texture.offset
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderTarget: .offset is now .texture.offset."
        ),
          (this.texture.offset = e);
      },
    },
    repeat: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .repeat is now .texture.repeat."
          ),
          this.texture.repeat
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderTarget: .repeat is now .texture.repeat."
        ),
          (this.texture.repeat = e);
      },
    },
    format: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .format is now .texture.format."
          ),
          this.texture.format
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderTarget: .format is now .texture.format."
        ),
          (this.texture.format = e);
      },
    },
    type: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .type is now .texture.type."
          ),
          this.texture.type
        );
      },
      set: function (e) {
        console.warn("MYGLAPI.WebGLRenderTarget: .type is now .texture.type."),
          (this.texture.type = e);
      },
    },
    generateMipmaps: {
      get: function () {
        return (
          console.warn(
            "MYGLAPI.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
          ),
          this.texture.generateMipmaps
        );
      },
      set: function (e) {
        console.warn(
          "MYGLAPI.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
        ),
          (this.texture.generateMipmaps = e);
      },
    },
  }),
  (Audio.prototype.load = function (e) {
    console.warn(
      "MYGLAPI.Audio: .load has been deprecated. Use MYGLAPI.AudioLoader instead."
    );
    const t = this;
    return (
      new AudioLoader().load(e, function (e) {
        t.setBuffer(e);
      }),
      this
    );
  }),
  (AudioAnalyser.prototype.getData = function () {
    return (
      console.warn(
        "MYGLAPI.AudioAnalyser: .getData() is now .getFrequencyData()."
      ),
      this.getFrequencyData()
    );
  }),
  (CubeCamera.prototype.updateCubeMap = function (e, t) {
    return (
      console.warn("MYGLAPI.CubeCamera: .updateCubeMap() is now .update()."),
      this.update(e, t)
    );
  }),
  (CubeCamera.prototype.clear = function (e, t, r, n) {
    return (
      console.warn(
        "MYGLAPI.CubeCamera: .clear() is now .renderTarget.clear()."
      ),
      this.renderTarget.clear(e, t, r, n)
    );
  }),
  (ImageUtils.crossOrigin = void 0),
  (ImageUtils.loadTexture = function (e, t, r, n) {
    console.warn(
      "MYGLAPI.ImageUtils.loadTexture has been deprecated. Use MYGLAPI.TextureLoader() instead."
    );
    const i = new TextureLoader();
    i.setCrossOrigin(this.crossOrigin);
    const a = i.load(e, r, void 0, n);
    return t && (a.mapping = t), a;
  }),
  (ImageUtils.loadTextureCube = function (e, t, r, n) {
    console.warn(
      "MYGLAPI.ImageUtils.loadTextureCube has been deprecated. Use MYGLAPI.CubeTextureLoader() instead."
    );
    const i = new CubeTextureLoader();
    i.setCrossOrigin(this.crossOrigin);
    const a = i.load(e, r, void 0, n);
    return t && (a.mapping = t), a;
  }),
  (ImageUtils.loadCompressedTexture = function () {
    console.error(
      "MYGLAPI.ImageUtils.loadCompressedTexture has been removed. Use MYGLAPI.DDSLoader instead."
    );
  }),
  (ImageUtils.loadCompressedTextureCube = function () {
    console.error(
      "MYGLAPI.ImageUtils.loadCompressedTextureCube has been removed. Use MYGLAPI.DDSLoader instead."
    );
  });
const SceneUtils = {
  createMultiMaterialObject: function () {
    console.error(
      "MYGLAPI.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js"
    );
  },
  detach: function () {
    console.error(
      "MYGLAPI.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js"
    );
  },
  attach: function () {
    console.error(
      "MYGLAPI.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js"
    );
  },
};
function LensFlare() {
  console.error(
    "MYGLAPI.LensFlare has been moved to /examples/jsm/objects/Lensflare.js"
  );
}
"undefined" != typeof __THREE_DEVTOOLS__ &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "129dev" } })
  ),
  "undefined" != typeof window &&
    (window.__THREE__
      ? console.warn("WARNING: Multiple instances of Three.js being imported.")
      : (window.__THREE__ = "129dev"));
export {
  ACESFilmicToneMapping,
  AddEquation,
  AddOperation,
  AdditiveAnimationBlendMode,
  AdditiveBlending,
  AlphaFormat,
  AlwaysDepth,
  AlwaysStencilFunc,
  AmbientLight,
  AmbientLightProbe,
  AnimationClip,
  AnimationLoader,
  AnimationMixer,
  AnimationObjectGroup,
  AnimationUtils,
  ArcCurve,
  ArrayCamera,
  ArrowHelper,
  Audio,
  AudioAnalyser,
  AudioContext,
  AudioListener,
  AudioLoader,
  AxesHelper,
  AxisHelper,
  BackSide,
  BasicDepthPacking,
  BasicShadowMap,
  BinaryTextureLoader,
  Bone,
  BooleanKeyframeTrack,
  BoundingBoxHelper,
  Box2,
  Box3,
  Box3Helper,
  BoxGeometry as BoxBufferGeometry,
  BoxGeometry,
  BoxHelper,
  BufferAttribute,
  BufferGeometry,
  BufferGeometryLoader,
  ByteType,
  Cache,
  Camera,
  CameraHelper,
  CanvasRenderer,
  CanvasTexture,
  CatmullRomCurve3,
  CineonToneMapping,
  CircleGeometry as CircleBufferGeometry,
  CircleGeometry,
  ClampToEdgeWrapping,
  Clock,
  Color,
  ColorKeyframeTrack,
  CompressedTexture,
  CompressedTextureLoader,
  ConeGeometry as ConeBufferGeometry,
  ConeGeometry,
  CubeCamera,
  CubeReflectionMapping,
  CubeRefractionMapping,
  CubeTexture,
  CubeTextureLoader,
  CubeUVReflectionMapping,
  CubeUVRefractionMapping,
  CubicBezierCurve,
  CubicBezierCurve3,
  CubicInterpolant,
  CullFaceBack,
  CullFaceFront,
  CullFaceFrontBack,
  CullFaceNone,
  Curve,
  CurvePath,
  CustomBlending,
  CustomToneMapping,
  CylinderGeometry as CylinderBufferGeometry,
  CylinderGeometry,
  Cylindrical,
  DataTexture,
  DataTexture2DArray,
  DataTexture3D,
  DataTextureLoader,
  DataUtils,
  DecrementStencilOp,
  DecrementWrapStencilOp,
  DefaultLoadingManager,
  DepthFormat,
  DepthStencilFormat,
  DepthTexture,
  DirectionalLight,
  DirectionalLightHelper,
  DiscreteInterpolant,
  DodecahedronGeometry as DodecahedronBufferGeometry,
  DodecahedronGeometry,
  DoubleSide,
  DstAlphaFactor,
  DstColorFactor,
  DynamicBufferAttribute,
  DynamicCopyUsage,
  DynamicDrawUsage,
  DynamicReadUsage,
  EdgesGeometry,
  EdgesHelper,
  EllipseCurve,
  EqualDepth,
  EqualStencilFunc,
  EquirectangularReflectionMapping,
  EquirectangularRefractionMapping,
  Euler,
  EventDispatcher,
  ExtrudeGeometry as ExtrudeBufferGeometry,
  ExtrudeGeometry,
  FaceColors,
  FileLoader,
  FlatShading,
  Float16BufferAttribute,
  Float32Attribute,
  Float32BufferAttribute,
  Float64Attribute,
  Float64BufferAttribute,
  FloatType,
  Fog,
  FogExp2,
  Font,
  FontLoader,
  FrontSide,
  Frustum,
  GLBufferAttribute,
  GLSL1,
  GLSL3,
  GammaEncoding,
  GreaterDepth,
  GreaterEqualDepth,
  GreaterEqualStencilFunc,
  GreaterStencilFunc,
  GridHelper,
  Group,
  HalfFloatType,
  HemisphereLight,
  HemisphereLightHelper,
  HemisphereLightProbe,
  IcosahedronGeometry as IcosahedronBufferGeometry,
  IcosahedronGeometry,
  ImageBitmapLoader,
  ImageLoader,
  ImageUtils,
  ImmediateRenderObject,
  IncrementStencilOp,
  IncrementWrapStencilOp,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  InstancedInterleavedBuffer,
  InstancedMesh,
  Int16Attribute,
  Int16BufferAttribute,
  Int32Attribute,
  Int32BufferAttribute,
  Int8Attribute,
  Int8BufferAttribute,
  IntType,
  InterleavedBuffer,
  InterleavedBufferAttribute,
  Interpolant,
  InterpolateDiscrete,
  InterpolateLinear,
  InterpolateSmooth,
  InvertStencilOp,
  JSONLoader,
  KeepStencilOp,
  KeyframeTrack,
  LOD,
  LatheGeometry as LatheBufferGeometry,
  LatheGeometry,
  Layers,
  LensFlare,
  LessDepth,
  LessEqualDepth,
  LessEqualStencilFunc,
  LessStencilFunc,
  Light,
  LightProbe,
  Line,
  Line3,
  LineBasicMaterial,
  LineCurve,
  LineCurve3,
  LineDashedMaterial,
  LineLoop,
  LinePieces,
  LineSegments,
  LineStrip,
  LinearEncoding,
  LinearFilter,
  LinearInterpolant,
  LinearMipMapLinearFilter,
  LinearMipMapNearestFilter,
  LinearMipmapLinearFilter,
  LinearMipmapNearestFilter,
  LinearToneMapping,
  Loader,
  LoaderUtils,
  LoadingManager,
  LogLuvEncoding,
  LoopOnce,
  LoopPingPong,
  LoopRepeat,
  LuminanceAlphaFormat,
  LuminanceFormat,
  MOUSE,
  Material,
  MaterialLoader,
  MathUtils as Math,
  MathUtils,
  Matrix3,
  Matrix4,
  MaxEquation,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshFaceMaterial,
  MeshLambertMaterial,
  MeshMatcapMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  MinEquation,
  MirroredRepeatWrapping,
  MixOperation,
  MultiMaterial,
  MultiplyBlending,
  MultiplyOperation,
  NearestFilter,
  NearestMipMapLinearFilter,
  NearestMipMapNearestFilter,
  NearestMipmapLinearFilter,
  NearestMipmapNearestFilter,
  NeverDepth,
  NeverStencilFunc,
  NoBlending,
  NoColors,
  NoToneMapping,
  NormalAnimationBlendMode,
  NormalBlending,
  NotEqualDepth,
  NotEqualStencilFunc,
  NumberKeyframeTrack,
  Object3D,
  ObjectLoader,
  ObjectSpaceNormalMap,
  OctahedronGeometry as OctahedronBufferGeometry,
  OctahedronGeometry,
  OneFactor,
  OneMinusDstAlphaFactor,
  OneMinusDstColorFactor,
  OneMinusSrcAlphaFactor,
  OneMinusSrcColorFactor,
  OrthographicCamera,
  PCFShadowMap,
  PCFSoftShadowMap,
  PMREMGenerator,
  ParametricGeometry as ParametricBufferGeometry,
  ParametricGeometry,
  Particle,
  ParticleBasicMaterial,
  ParticleSystem,
  ParticleSystemMaterial,
  Path,
  PerspectiveCamera,
  Plane,
  PlaneGeometry as PlaneBufferGeometry,
  PlaneGeometry,
  PlaneHelper,
  PointCloud,
  PointCloudMaterial,
  PointLight,
  PointLightHelper,
  Points,
  PointsMaterial,
  PolarGridHelper,
  PolyhedronGeometry as PolyhedronBufferGeometry,
  PolyhedronGeometry,
  PositionalAudio,
  PropertyBinding,
  PropertyMixer,
  QuadraticBezierCurve,
  QuadraticBezierCurve3,
  Quaternion,
  QuaternionKeyframeTrack,
  QuaternionLinearInterpolant,
  REVISION,
  RGBADepthPacking,
  RGBAFormat,
  RGBAIntegerFormat,
  RGBA_ASTC_10x10_Format,
  RGBA_ASTC_10x5_Format,
  RGBA_ASTC_10x6_Format,
  RGBA_ASTC_10x8_Format,
  RGBA_ASTC_12x10_Format,
  RGBA_ASTC_12x12_Format,
  RGBA_ASTC_4x4_Format,
  RGBA_ASTC_5x4_Format,
  RGBA_ASTC_5x5_Format,
  RGBA_ASTC_6x5_Format,
  RGBA_ASTC_6x6_Format,
  RGBA_ASTC_8x5_Format,
  RGBA_ASTC_8x6_Format,
  RGBA_ASTC_8x8_Format,
  RGBA_BPTC_Format,
  RGBA_ETC2_EAC_Format,
  RGBA_PVRTC_2BPPV1_Format,
  RGBA_PVRTC_4BPPV1_Format,
  RGBA_S3TC_DXT1_Format,
  RGBA_S3TC_DXT3_Format,
  RGBA_S3TC_DXT5_Format,
  RGBDEncoding,
  RGBEEncoding,
  RGBEFormat,
  RGBFormat,
  RGBIntegerFormat,
  RGBM16Encoding,
  RGBM7Encoding,
  RGB_ETC1_Format,
  RGB_ETC2_Format,
  RGB_PVRTC_2BPPV1_Format,
  RGB_PVRTC_4BPPV1_Format,
  RGB_S3TC_DXT1_Format,
  RGFormat,
  RGIntegerFormat,
  RawShaderMaterial,
  Ray,
  Raycaster,
  RectAreaLight,
  RedFormat,
  RedIntegerFormat,
  ReinhardToneMapping,
  RepeatWrapping,
  ReplaceStencilOp,
  ReverseSubtractEquation,
  RingGeometry as RingBufferGeometry,
  RingGeometry,
  SRGB8_ALPHA8_ASTC_10x10_Format,
  SRGB8_ALPHA8_ASTC_10x5_Format,
  SRGB8_ALPHA8_ASTC_10x6_Format,
  SRGB8_ALPHA8_ASTC_10x8_Format,
  SRGB8_ALPHA8_ASTC_12x10_Format,
  SRGB8_ALPHA8_ASTC_12x12_Format,
  SRGB8_ALPHA8_ASTC_4x4_Format,
  SRGB8_ALPHA8_ASTC_5x4_Format,
  SRGB8_ALPHA8_ASTC_5x5_Format,
  SRGB8_ALPHA8_ASTC_6x5_Format,
  SRGB8_ALPHA8_ASTC_6x6_Format,
  SRGB8_ALPHA8_ASTC_8x5_Format,
  SRGB8_ALPHA8_ASTC_8x6_Format,
  SRGB8_ALPHA8_ASTC_8x8_Format,
  Scene,
  SceneUtils,
  ShaderChunk,
  ShaderLib,
  ShaderMaterial,
  ShadowMaterial,
  Shape,
  ShapeGeometry as ShapeBufferGeometry,
  ShapeGeometry,
  ShapePath,
  ShapeUtils,
  ShortType,
  Skeleton,
  SkeletonHelper,
  SkinnedMesh,
  SmoothShading,
  Sphere,
  SphereGeometry as SphereBufferGeometry,
  SphereGeometry,
  Spherical,
  SphericalHarmonics3,
  SplineCurve,
  SpotLight,
  SpotLightHelper,
  Sprite,
  SpriteMaterial,
  SrcAlphaFactor,
  SrcAlphaSaturateFactor,
  SrcColorFactor,
  StaticCopyUsage,
  StaticDrawUsage,
  StaticReadUsage,
  StereoCamera,
  StreamCopyUsage,
  StreamDrawUsage,
  StreamReadUsage,
  StringKeyframeTrack,
  SubtractEquation,
  SubtractiveBlending,
  TOUCH,
  TangentSpaceNormalMap,
  TetrahedronGeometry as TetrahedronBufferGeometry,
  TetrahedronGeometry,
  TextGeometry as TextBufferGeometry,
  TextGeometry,
  Texture,
  TextureLoader,
  TorusGeometry as TorusBufferGeometry,
  TorusGeometry,
  TorusKnotGeometry as TorusKnotBufferGeometry,
  TorusKnotGeometry,
  Triangle,
  TriangleFanDrawMode,
  TriangleStripDrawMode,
  TrianglesDrawMode,
  TubeGeometry as TubeBufferGeometry,
  TubeGeometry,
  UVMapping,
  Uint16Attribute,
  Uint16BufferAttribute,
  Uint32Attribute,
  Uint32BufferAttribute,
  Uint8Attribute,
  Uint8BufferAttribute,
  Uint8ClampedAttribute,
  Uint8ClampedBufferAttribute,
  Uniform,
  UniformsLib,
  UniformsUtils,
  UnsignedByteType,
  UnsignedInt248Type,
  UnsignedIntType,
  UnsignedShort4444Type,
  UnsignedShort5551Type,
  UnsignedShort565Type,
  UnsignedShortType,
  VSMShadowMap,
  Vector2,
  Vector3,
  Vector4,
  VectorKeyframeTrack,
  Vertex,
  VertexColors,
  VideoTexture,
  WebGL1Renderer,
  WebGLCubeRenderTarget,
  WebGLMultipleRenderTargets,
  WebGLMultisampleRenderTarget,
  WebGLRenderTarget,
  WebGLRenderTargetCube,
  WebGLRenderer,
  WebGLUtils,
  WireframeGeometry,
  WireframeHelper,
  WrapAroundEnding,
  XHRLoader,
  ZeroCurvatureEnding,
  ZeroFactor,
  ZeroSlopeEnding,
  ZeroStencilOp,
  sRGBEncoding,
};
