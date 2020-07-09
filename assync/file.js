var http = require('http');
var async = require('async');
const fs = require('fs');
var locationFile = process.argv[2];
var urlc = "";
fs.readFile(locationFile, 'utf8', function doneReading(err, fileContent){
    if (!err) {
      urlc = fileContent;
      http.get(urlc, function(res){
        var body = '';
             res.on('data', function(chunk){
               body += chunk.toString();
             });
             res.on('end', function(){
               console.log(body);
             });
           }).on('error', function(err) {
             
           });
    }
});
