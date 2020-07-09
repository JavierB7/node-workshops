let promise1 = first();
second().then(function(fullfile){
   promise1.resolve()
});