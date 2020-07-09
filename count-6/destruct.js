let userArray = process.argv.slice(2);

let userData = {};
[,userData.username, userData.email] = userArray;
console.log(userData);