const fs = require('fs');
const http = require('http');

portNumber = Number(process.argv[2]);
location = process.argv[3];


const server = http.createServer(function(request, response){
    const file = fs.createReadStream(location);
    file.pipe(response);
});

server.listen(portNumber);