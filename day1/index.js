const fs = require("fs");
let counterIncreased = 0;
let data = fs.readFileSync("data.txt").toString().split("\n").map(Number);
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  if (element > data[index - 1]) {
    counterIncreased++;
  }
}
console.log("Part1: " + counterIncreased);

counterIncreased = 0;
for (let i = 2; i < data.length; i++) {
  if (data[i + 1] !== undefined) {
    const currentSum = data[i] + data[i - 1] + data[i - 2];
    const nextSum = data[i] + data[i - 1] + data[i + 1];
    if (currentSum < nextSum) {
      counterIncreased++;
    }
  }
}

console.log("Part2: " + counterIncreased);
