const Z0 = -14;
let _part1_ = [
  [0, 0, 17 + Z0],
  [0, 0, 17 + Z0],
  [0, 0, 17 + Z0],
  [0, 0, 17 + Z0],

  [3, 0, 16 + Z0],
  // [1, 0, 16 + Z0],
  [2.7, 2.3, 16 + Z0],
  [2.3, 2.7, 16 + Z0],
  // [0, 1, 16 + Z0],
  [0, 3, 16 + Z0],

  [6, 0, 14 + Z0],
  [4.6, 4.2, 14 + Z0],
  [4.2, 4.6, 14 + Z0],
  [0, 6, 14 + Z0],

  [9, 0, 11 + Z0],
  [8.2, 7.7, 11 + Z0],
  [7.7, 8.2, 11 + Z0],
  [0, 9, 11 + Z0],
];
export const part1_ = [];

let _part1 = [];
part1_.forEach(([x, y, z], idx, self) => {
  const len = self.length;
  for (let i = 0; i < 4; i += 1) {
    const rad = (Math.PI / 2) * i;
    const x_ = x * Math.cos(rad) - y * Math.sin(rad);
    const y_ = x * Math.sin(rad) + y * Math.cos(rad);
    // res.push([x_, y_, z]);
    _part1[len * i + idx] = [x_, y_, z];
  }
});
export const part1 = _part1;

const umbrellaVertices = [part1];

export default umbrellaVertices;
