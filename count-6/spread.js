let numberArray = process.argv.slice(2);
var min = Math.min(...numberArray);
let message = `The minimum of [${numberArray}] is ${min}`;
console.log(message);