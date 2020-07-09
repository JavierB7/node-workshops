const http = require('http');

portNumber = Number(process.argv[2]);

const server = http.createServer(function(request, response){

    const urlObject = new URL(request.url.toString(),'http://localhost:' + portNumber + '/');
    if (urlObject.pathname == '/api/parsetime') {
    	console.log(urlObject);
    	const vec = urlObject.searchParams.search;
        console.log(vec);
    }
    /*if (urlObject.pathname == '/api/unixtime') {

    }*/
    response.writeHead(200, { 'Content-Type': 'application/json' });
});

server.listen(portNumber);
