var inputs = process.argv.slice(2);
var result = inputs.map(x => x[0])
            .reduce((anterior, actual )=> anterior + actual);
var message = `[${inputs}] becomes "${result}"`            
console.log(message);