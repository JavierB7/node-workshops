const prom =  require('es6-promise');
 var promise = new Promise(function (fulfill, reject) {
 	setTimeout( function(){ 
 		let error = new Error("REJECTED!");
		reject(error);
    }, 300);
 }).then(function(value){
    console.log(value);
 }, onReject);


 function onReject (error) {
      console.log(error.message);
}