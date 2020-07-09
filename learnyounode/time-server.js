portNumber = Number(process.argv[2]);
date = new Date();
data = '';
const net = require('net');
function firstZero(number, plus){
	const newNumber = (number + plus) <= 9 ? '0' + (number + plus):(number + plus);
    return newNumber;
}
const server = net.createServer(function listener(socket){
	month = firstZero(date.getMonth(), 1);
	day = firstZero(date.getDate(), 0);
	hours = firstZero(date.getHours(), 0);
	minutes = firstZero(date.getMinutes(), 0);
	data = date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
	socket.write(data);
	socket.end('\n');
});
server.listen(portNumber);