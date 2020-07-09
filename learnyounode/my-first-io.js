const fs = require('fs');
const buffer = (fs.readFileSync(process.argv[2])).toString()
const arrayFile = buffer.split("\n");
console.log(arrayFile.length-1);