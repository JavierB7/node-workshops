

const directory = process.argv[2];
const fileExtension = process.argv[3];

const mymodule = require('./mymodule.js')

mymodule(directory, fileExtension, function(err, data){
   if(err){
        return console.log(err);
    }else{
    	for (var i = 0; i < data.length; i++) {
             console.log(data[i]);
    	}
    }
});
