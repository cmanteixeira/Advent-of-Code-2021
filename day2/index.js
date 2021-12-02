const fs = require("fs");
let counterHorz = 0;
let counterDep = 0;
let data = fs.readFileSync("data.txt").toString().split("\n");
for (let index = 0; index < data.length; index++) {
  const elements = data[index].split(" ");
  const where = elements[0];
  const step = Number(elements[1]);
  switch (where) {
    case "forward":
      counterHorz += step;
      break;
    case "down":
      counterDep += step;
      break;
    case "up":
      counterDep -= step;
      break;
    default:
      break;
  }
}
console.log("Part1: " + counterHorz * counterDep);

counterHorz = 0;
counterDep = 0;
let counterAim = 0;
for (let index = 0; index < data.length; index++) {
  const elements = data[index].split(" ");
  const where = elements[0];
  const step = Number(elements[1]);
  switch (where) {
    case "forward":
      counterHorz += step;
      counterDep += counterAim * step;
      break;
    case "down":
      counterAim += step;
      break;
    case "up":
      counterAim -= step;
      break;
    default:
      break;
  }
}
console.log("Part2: " + counterHorz * counterDep);
