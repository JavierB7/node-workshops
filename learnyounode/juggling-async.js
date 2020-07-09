const http = require('http');
url1 = process.argv[2];
url2 = process.argv[3];
url3 = process.argv[4];
complete1 = '';
complete2 = '';
complete3 = '';

http.get(url1, function(response){
	response.setEncoding('utf8');
    response.on('data', function (data){
    	complete1 += data;
    });
    response.on('end', function(data){
        console.log(complete1);
        http.get(url2, function(response2){
			response2.setEncoding('utf8');
		    response2.on('data', function (data2){
		    	complete2 += data2;
		    });
		    response2.on('end', function(data2){
		        console.log(complete2);
		        http.get(url3, function(response3){
					response3.setEncoding('utf8');
				    response3.on('data', function (data3){
				    	complete3 += data3;
				    });
				    response3.on('end', function(data3){
				        console.log(complete3);
				    });
				});
		    });
		});
    });
});