const http = require('http');
url = process.argv[2];
complete = '';
http.get(url, function(response){
	response.setEncoding('utf8');
    response.on('data', function (data){
    	complete += data;
    });
    response.on('end', function(data){
    	console.log(complete.length);
        console.log(complete);
    });
});