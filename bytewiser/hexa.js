process.argv.splice(0, 2);
var buffer = new Buffer(process.argv);
console.log(buffer.toString('hex'));