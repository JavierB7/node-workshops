let acum = 0;
for (var i = 2; i < process.argv.length; i++) {
	acum += (isNaN(process.argv[i]) ?   process.argv[i] :Number(process.argv[i]));
}
console.log(acum);