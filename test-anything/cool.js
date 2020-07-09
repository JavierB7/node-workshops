var cool = require(process.argv[2]);

var assert = require('assert')

var retor = cool(42)
 assert(retor === true,'not true');