prom =  require('es6-promise');

function all(getPromise1, getPromise2){
	let counter = 0;
    
    pro1.then(function(value){
       counter++;
    });
    pro2.then(function(value){
       counter++;
    });

    var promise = new Promise(function (fulfill, reject) {
			if(counter == 2){
				let arr = [];
				arr.push(1);
				arr.push(2);
 				fulfill(arr);
			}
				
	}).then(console.log); 
}