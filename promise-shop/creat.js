const prom =  require('es6-promise');
 var promise = new Promise(function (fulfill, reject) {
 	fulfill("I FIRED");
 	let error = new Error("I DID NOT FIRE");
 	reject(error);

 }).then(console.log, onReject);


 function onReject (error) {
      console.log(error.message);
}