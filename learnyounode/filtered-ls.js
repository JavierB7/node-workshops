const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const fileExtension = "." + process.argv[3];

fs.readdir(directory, function (err, list) {
    if(err){
        console.log(err);
    }else{
    	for (var i = 0; i < list.length; i++) {
    		if (path.extname(list[i]) == fileExtension) {
                console.log(list[i]);
    		} 
    	}
    }
});