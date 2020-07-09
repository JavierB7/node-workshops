const { Readable } = require('stream');

class MyStream extends Readable {
    _read() {}
}

let obj = new MyStream();
obj._read();
obj.push(process.argv[2]);
obj.pipe(process.stdout);