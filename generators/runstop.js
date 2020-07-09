 function *range(from, to) {
 	for (var i = from; i< to-from; i++) {

     var stop = yield i;
   }
     
}

for (var r of range(5, 10)) {

    console.log( r );
}