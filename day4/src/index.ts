import * as fs from "fs";
import * as path from "path";

const part1 = async () => {
  let data: string[] = await fs
    .readFileSync(path.join(__dirname, "../files/data.txt"))
    .toString()
    .split("\n");
};
console.log(
  part1().then((result) => {
    console.log("Parte1: " + result);
  })
);

const part2 = async () => {
  let oxygen: string[] = await fs
    .readFileSync(path.join(__dirname, "../files/data.txt"))
    .toString()
    .split("\n")
    .sort();
};
console.log(
  part2().then((result) => {
    console.log("Parte2: " + result);
  })
);
