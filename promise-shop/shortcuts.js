const prom =  require('es6-promise');
 var promise = new Promise(function (fulfill, reject) {
 	let error = new Error("I DID NOT FIRE");
 	reject(error);

 }).catch(function (err) {
      console.error('THERE IS AN ERROR!!!');
      console.error(err.message);
    });


var promise = Promise.resolve('SECRET VALUE');

var promise = Promise.reject(new Error('SECRET VALUE'));