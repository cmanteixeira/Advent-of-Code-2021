import * as fs from "fs";
import * as path from "path";

// const part1 = async () => {
//   let data: string[] = await fs
//     .readFileSync(path.join(__dirname, "../files/data.txt"))
//     .toString()
//     .split("\n");
//   let gammaRate: number[] = [];
//   let epsilonRate: number[] = [];
//   for (let index = 0; index < data[0].length; index++) {
//     let countZeros: number = 0;
//     let countOnes: number = 0;
//     data.map(function (val, i) {
//       val.split("").splice(index, 1).toString() == "0"
//         ? countZeros++
//         : countOnes++;
//       if (i == data.length - 1) {
//         gammaRate.push(countOnes > countZeros ? 1 : 0);
//         epsilonRate.push(countOnes > countZeros ? 0 : 1);
//       }
//     });
//   }
//   return (
//     parseInt(gammaRate.toString().replace(/,/g, ""), 2) *
//     parseInt(epsilonRate.toString().replace(/,/g, ""), 2)
//   );
// };
// console.log(
//   part1().then((result) => {
//     console.log("Parte1: " + result);
//   })
// );

const part2 = async () => {
  let oxygen: string[] = await fs
    .readFileSync(path.join(__dirname, "../files/data.txt"))
    .toString()
    .split("\n")
    .sort();
  let co = await fs
    .readFileSync(path.join(__dirname, "../files/data.txt"))
    .toString()
    .split("\n")
    .sort();
  for (let index = 0; index < oxygen[0].length; index++) {
    let countZeros: number = 0;
    let countOnes: number = 0;
    if (oxygen.length != 1) {
      oxygen.forEach(function (val, i) {
        const digit = parseInt(val.split("").splice(index, 1).toString());
        digit ? countOnes++ : countZeros++;
        if (i == oxygen.length - 1) {
          countOnes >= countZeros
            ? oxygen.splice(0, countZeros)
            : oxygen.splice(countZeros, countOnes);
        }
      });
    }
  }
  const coLength = co.length;
  for (let index = 0; index < co[0].length; index++) {
    let countZeros: number = 0;
    let countOnes: number = 0;
    if (co.length != 1) {
      co.forEach((val, i) => {
        const digit = parseInt(val.split("").splice(index, 1).toString());
        digit ? countOnes++ : countZeros++;
        if (i == co.length - 1) {
          countOnes >= countZeros
            ? co.splice(countZeros, countOnes)
            : co.splice(0, countZeros);
        }
      });
    }
  }
  console.log(oxygen);
  // console.log(co);
  return parseInt(oxygen.toString(), 2) * parseInt(co.toString(), 2);
};
console.log(
  part2().then((result) => {
    console.log("Parte2: " + result);
  })
);
