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
let part1_ = genPart1_();
const genPart1 = (type = 0) =>
  part1_.map(([x, y, z]) => {
    const rad = (Math.PI / 4) * type;
    const x_ = x * Math.cos(rad) - y * Math.sin(rad);
    const y_ = x * Math.sin(rad) + y * Math.cos(rad);
    return [x_, y_, z];
    // }
  });

export const coords = genPart1(0);
// export default coords;
export default genPart1;
