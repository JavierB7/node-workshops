const fs = require('fs');
const path = require('path');

module.exports = function(directory, fileExtension, f){
    fs.readdir(directory, function (err, list) {
	    if (err) { return f(err) }
	    let listf = [];
	    for (var i = 0; i < list.length; i++) {
	    	if (path.extname(list[i]) == ('.' + fileExtension)) {
	               listf.push(list[i]);
	    	} 
	    }
        f(null, listf);

	});
};