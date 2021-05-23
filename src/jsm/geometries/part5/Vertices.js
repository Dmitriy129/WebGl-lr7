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

export default genPart2();
