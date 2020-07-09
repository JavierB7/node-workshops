const fs = require('fs');
const fileLoc = process.argv[2];
const file = fs.createReadStream(fileLoc);
file.pipe(process.stdout);