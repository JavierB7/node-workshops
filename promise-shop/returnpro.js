prom =  require('es6-promise');
function attachTitle(title) {
    return "DR. " + title;
}

 var promise = new Promise(function (fulfill, reject) {
	fulfill("MANHATTAN");
 }).then(function(value){
     return attachTitle(value);
 }).then(console.log, null);

