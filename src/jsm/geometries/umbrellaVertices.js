const genPart1_ = () => {
  // default
  const localZ0 = 15;
  const pStart = [0, 0, 0 + localZ0];
  const pEnd = [0, 9, -6 + localZ0];
  const yCoef = [3, 2, 1];
  const zCoef = [1, 3, 1];
  const cYScale = [1, 0.9, 0.9, 1];
  const cZScale = [1, 1.1, 1.1, 1];

  const points = [];
  const K = 4;
  for (let i = 0; i < K; i++) {
    const rad = (Math.PI / (3 * K)) * i;
    // const [x, y] = pStart;
    // const x_ = x * Math.cos(rad) - y * Math.sin(rad);
    // const y_ = x * Math.sin(rad) + y * Math.cos(rad);
    const [xEnd] = pEnd;
    const yEnd = pEnd[1] * cYScale[i];
    const zEnd = (pStart[2] - pEnd[2]) * cZScale[i];
    points[K * i] = pStart;

    const x = xEnd;
    // const y = (yEnd / (K - 1)) * 1;
    let y = (yEnd / yCoef.reduce((a, b) => a + b)) * yCoef[0];
    let z = (zEnd / zCoef.reduce((a, b) => a + b)) * zCoef[0] + localZ0;
    {
      const x_ = x * Math.cos(rad) - y * Math.sin(rad);
      const y_ = x * Math.sin(rad) + y * Math.cos(rad);
      points[K * i + 1] = [x_, y_, z];
    }

    // const y = (yEnd / (K - 1)) * 2;
    y += (yEnd / yCoef.reduce((a, b) => a + b)) * yCoef[1];
    z -= (zEnd / zCoef.reduce((a, b) => a + b)) * zCoef[1];
    {
      const x_ = x * Math.cos(rad) - y * Math.sin(rad);
      const y_ = x * Math.sin(rad) + y * Math.cos(rad);
      points[K * i + 2] = [x_, y_, z];
    }

    // const y = (yEnd / (K - 1)) * 3;
    y += (yEnd / yCoef.reduce((a, b) => a + b)) * yCoef[2];
    z -= (zEnd / zCoef.reduce((a, b) => a + b)) * zCoef[2];
    {
      const x_ = x * Math.cos(rad) - y * Math.sin(rad);
      const y_ = x * Math.sin(rad) + y * Math.cos(rad);
      points[K * i + 3] = [x_, y_, z];
    }
  }
  return points;
};
const genPart1 = () => {
  let part1_ = genPart1_();
  let res = [];
  part1_.forEach(([x, y, z], idx, self) => {
    const len = self.length;
    for (let i = 0; i < 8; i += 1) {
      const rad = (Math.PI / 4) * i;
      const x_ = x * Math.cos(rad) - y * Math.sin(rad);
      const y_ = x * Math.sin(rad) + y * Math.cos(rad);
      // res.push([x_, y_, z]);
      res[len * i + idx] = [x_, y_, z];
    }
  });
  return res;
};
const mirrorX4 = (points) => {
  let res = [];
  points.forEach(([x, y, z], idx, self) => {
    const len = self.length;
    for (let i = 0; i < 4; i += 1) {
      const rad = (Math.PI / 2) * i;
      const x_ = x * Math.cos(rad) - y * Math.sin(rad);
      const y_ = x * Math.sin(rad) + y * Math.cos(rad);
      // res.push([x_, y_, z]);
      res[len * i + idx] = [x_, y_, z];
    }
  });
  return res;
};
const genPart2 = () => {
  const localZ0 = 0;
  const radius = 0.2;
  const height = 20;
  const res = [];
  const Kh = 4;
  const Kr = 4;
  for (let i = 0; i < Kr; i++) {
    // const rad = (((Math.PI / (Kr + 1)) * Kr) / 2) * i;
    // const rad = (Math.PI / (3 * 4)) * i;
    for (let j = 0; j < 4; j++) {
      const rad = (Math.PI / 2 / Kr) * (i * Kr + j);
      // const rad = ((Math.PI * 8 * j) / Kr) * i;
      if (j == 0) for (let k = 0; k < 4; k++) res.push(res[res.length - 4]);
      else
        for (let h = 0; h < height; h += height / Kh) {
          res.push([
            -radius * Math.sin(rad),
            radius * Math.cos(rad),
            h + localZ0,
          ]);
        }
    }
  }
  for (let i = 0; i < 4; i++) res[i] = res[res.length - 4 + i];
  return res;
};
let a = 0;
const genPart3 = () => {
  const localZ0 = 0;
  const radius = 0.7;
  const height = 4;
  const res = [];
  const K = 10;

  for (let j = 0; j < K; j++) {
    for (let k = 0; k < 3; k++) {
      if (k == 0) {
        a++;
        // console.log(`res1`, res.slice());
        res.splice(-4, 0, ...res.slice(-4));
        // console.log(`res2`, res.slice());
      }
      for (let i = 0; i < 4; i++) {
        const rad = (Math.PI / K) * (k - 1 + j * 2);
        // const rad = Math.PI / K + k;
        res.push([
          -radius * Math.sin(rad),
          radius * Math.cos(rad),
          (height / 4) * i + localZ0,
        ]);
      }
    }
  }

  res.splice(0, 0, ...res.slice(-4));
  // res.splice(0, 0, ...res.slice(0, 4));
  return res;
};
// const genPart3 = () => {
//   const localZ0 = 0;
//   const radius = 0.7;
//   const height = 4;
//   const res = [];
//   const K = 6;

//   for (let j = 0; j < K; j++) {
//     for (let k = 0; k < 4; k++) {
//       for (let i = 0; i < 3; i++) {
//         const rad = (Math.PI / K) * (i + j * 2);
//         res.push([
//           -radius * Math.sin(rad),
//           radius * Math.cos(rad),
//           (height / 4) * k + localZ0,
//         ]);
//       }
//       // if (k == 2) res.splice(-4, 0, ...res.slice(-4));
//     }
//   }

//   // console.log(`res`, res);
//   return res;
// };

export const part1 = genPart1();
export const part2 = genPart2();
export const part3 = genPart3();

// const umbrellaVertices = [...part1];
// const umbrellaVertices = [...part2, ...part1];
const umbrellaVertices = [...part1, ...part2, ...part3];

export default umbrellaVertices;
