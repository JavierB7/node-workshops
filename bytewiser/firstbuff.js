const through = require('through2');
const stream = through(write, end);
process.stdin.pipe(stream);

function write (buffer, encoding, next) {

	this.push(buffer.toString().toLowerCase());
	next();
}

function end (done) {
	console.log("");
    done();
}