import {
  BufferAttribute,
  BufferGeometry,
  Matrix4,
  Vector3,
  Vector4,
} from "../../libs/opengl.module.js";
import umbrellaVertices from "./Vertices.js";
class Geometry extends BufferGeometry {
  constructor(
    size = 50,
    segments = 200,
    bottom = true,
    lid = true,
    body = true,
    fitLid = true,
    blinn = true
  ) {
    super();

    segments = Math.max(2, Math.floor(segments));
    const blinnScale = 1.3;
    const maxHeight = 3.15 * (blinn ? 1 : blinnScale);

    const maxHeight2 = maxHeight / 2;
    const trueSize = size / maxHeight2;
    let numTriangles = bottom ? (8 * segments - 4) * segments : 0;
    numTriangles += lid ? (16 * segments - 4) * segments : 0;
    numTriangles += body ? 40 * segments * segments : 0;

    const indices = new Uint32Array(numTriangles * 3);
    // console.log(`numTriangles`, numTriangles);
    let numVertices = 500;
    numVertices *= (segments + 1) * (segments + 1);
    // console.log(`numVertices`, numVertices);

    const vertices = new Float32Array(numVertices * 3);
    const normals = new Float32Array(numVertices * 3);
    const uvs = new Float32Array(numVertices * 2);

    const ms = new Matrix4();
    ms.set(
      -1.0,
      3.0,
      -3.0,
      1.0,
      3.0,
      -6.0,
      3.0,
      0.0,
      -3.0,
      3.0,
      0.0,
      0.0,
      1.0,
      0.0,
      0.0,
      0.0
    );

    const g = [];

    const sp = [];
    const tp = [];
    const dsp = [];
    const dtp = [];
    const mgm = [];

    const vert = [];
    const sdir = [];
    const tdir = [];

    const norm = new Vector3();

    let tcoord;

    let sval;
    let tval;
    let p;
    let dsval = 0;
    let dtval = 0;

    const normOut = new Vector3();

    const gmx = new Matrix4();
    const tmtx = new Matrix4();

    const vsp = new Vector4();
    const vtp = new Vector4();
    const vdsp = new Vector4();
    const vdtp = new Vector4();

    const vsdir = new Vector3();
    const vtdir = new Vector3();

    const mst = ms.clone();
    mst.transpose();
    const notDegenerate = (vtx1, vtx2, vtx3) =>
      !(
        (vertices[vtx1 * 3] === vertices[vtx2 * 3] &&
          vertices[vtx1 * 3 + 1] === vertices[vtx2 * 3 + 1] &&
          vertices[vtx1 * 3 + 2] === vertices[vtx2 * 3 + 2]) ||
        (vertices[vtx1 * 3] === vertices[vtx3 * 3] &&
          vertices[vtx1 * 3 + 1] === vertices[vtx3 * 3 + 1] &&
          vertices[vtx1 * 3 + 2] === vertices[vtx3 * 3 + 2]) ||
        (vertices[vtx2 * 3] === vertices[vtx3 * 3] &&
          vertices[vtx2 * 3 + 1] === vertices[vtx3 * 3 + 1] &&
          vertices[vtx2 * 3 + 2] === vertices[vtx3 * 3 + 2])
      );

    for (let i = 0; i < 3; i++) {
      mgm[i] = new Matrix4();
    }

    const minPatches = 0;
    // const maxPatches = 12;
    const maxPatches = umbrellaVertices.length / 16;
    // console.log(
    //   `umbrellaVertices.length`,
    //   umbrellaVertices.length,
    //   `(${maxPatches})`,
    //   umbrellaVertices
    // );
    // const maxPatches = 1;

    const vertPerRow = segments + 1;

    let surfCount = 0;

    let vertCount = 0;
    let normCount = 0;
    let uvCount = 0;

    let indexCount = 0;

    for (let surf = minPatches; surf < maxPatches; surf++) {
      // if (lid || surf < 20 || surf >= 28) {
      for (let i = 0; i < 3; i++) {
        const RR = 4;
        for (let r = 0; r < RR; r++) {
          for (let c = 0; c < 4; c++) {
            const cof = surf * 16 + r * 4 + c;
            // // console.log(
            //   `surf * 16 + r * 4 + c`,
            //   surf,
            //   r,
            //   c,
            //   cof,
            //   umbrellaVertices[cof]
            // );
            // teapotVertices[teapotPatches[surf * 16 + r * 4 + c] * 3 + i];
            // teapotVertices[surf * 16 + r * 4 + c][i];
            // g[c * 4 + r] = umbrellaVertices[0][cof][i];
            g[c * 4 + r] = umbrellaVertices[cof][i];
            // switch (i) {
            //   case 0:
            //     // rotate by x
            //     const x_ = x * Math.cos(rad) - y * Math.sin(rad);
            //     g[c * 4 + r] = x_;
            //     break;
            //   case 1:
            //     // rotate by y
            //     const y_ = x * Math.sin(rad) + y * Math.cos(rad);
            //     g[c * 4 + r] = y_;
            //     break;
            // }

            if (fitLid && surf >= 20 && surf < 28 && i !== 2) {
              g[c * 4 + r] *= 1.077;
            }
            if (!blinn && i === 2) {
              g[c * 4 + r] *= blinnScale;
            }
          }
        }

        gmx.set(
          g[0],
          g[1],
          g[2],
          g[3],
          g[4],
          g[5],
          g[6],
          g[7],
          g[8],
          g[9],
          g[10],
          g[11],
          g[12],
          g[13],
          g[14],
          g[15]
        );

        tmtx.multiplyMatrices(gmx, ms);
        mgm[i].multiplyMatrices(mst, tmtx);
      }

      for (let sstep = 0; sstep <= segments; sstep++) {
        const s = sstep / segments;

        for (let tstep = 0; tstep <= segments; tstep++) {
          const t = tstep / segments;

          for (p = 4, sval = tval = 1.0; p--; ) {
            sp[p] = sval;
            tp[p] = tval;
            sval *= s;
            tval *= t;

            if (p === 3) {
              dsp[p] = dtp[p] = 0.0;
              dsval = dtval = 1.0;
            } else {
              dsp[p] = dsval * (3 - p);
              dtp[p] = dtval * (3 - p);
              dsval *= s;
              dtval *= t;
            }
          }

          vsp.fromArray(sp);
          vtp.fromArray(tp);
          vdsp.fromArray(dsp);
          vdtp.fromArray(dtp);

          for (let i = 0; i < 3; i++) {
            tcoord = vsp.clone();
            tcoord.applyMatrix4(mgm[i]);
            vert[i] = tcoord.dot(vtp);

            tcoord = vdsp.clone();
            tcoord.applyMatrix4(mgm[i]);
            sdir[i] = tcoord.dot(vtp);

            tcoord = vsp.clone();
            tcoord.applyMatrix4(mgm[i]);
            tdir[i] = tcoord.dot(vdtp);
          }

          vsdir.fromArray(sdir);
          vtdir.fromArray(tdir);
          norm.crossVectors(vtdir, vsdir);
          norm.normalize();

          if (vert[0] === 0 && vert[1] === 0) {
            normOut.set(0, vert[2] > maxHeight2 ? 1 : -1, 0);
          } else {
            normOut.set(norm.x, norm.z, -norm.y);
          }

          vertices[vertCount++] = trueSize * vert[0];
          vertices[vertCount++] = trueSize * (vert[2] - maxHeight2);
          vertices[vertCount++] = -trueSize * vert[1];

          normals[normCount++] = normOut.x;
          normals[normCount++] = normOut.y;
          normals[normCount++] = normOut.z;

          uvs[uvCount++] = 1 - t;
          uvs[uvCount++] = 1 - s;
        }
      }

      for (let sstep = 0; sstep < segments; sstep++) {
        for (let tstep = 0; tstep < segments; tstep++) {
          const v1 =
            surfCount * vertPerRow * vertPerRow + sstep * vertPerRow + tstep;
          const v2 = v1 + 1;
          const v3 = v2 + vertPerRow;
          const v4 = v1 + vertPerRow;

          if (notDegenerate(v1, v2, v3)) {
            indices[indexCount++] = v1;
            indices[indexCount++] = v2;
            indices[indexCount++] = v3;
          }

          if (notDegenerate(v1, v3, v4)) {
            indices[indexCount++] = v1;
            indices[indexCount++] = v3;
            indices[indexCount++] = v4;
          }
        }
      }

      surfCount++;
      // }
    }

    this.setIndex(new BufferAttribute(indices, 1));
    this.setAttribute("position", new BufferAttribute(vertices, 3));
    this.setAttribute("normal", new BufferAttribute(normals, 3));
    this.setAttribute("uv", new BufferAttribute(uvs, 2));

    this.computeBoundingSphere();
  }
}

export { Geometry };
