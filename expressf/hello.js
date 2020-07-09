portNumber = process.argv[2];

const express = require('express')
const app = express()
app.get('/', function(req, res) {
    res.end('Hello World!')
})
app.get('/home', (req, res) => {
    res.end('Hello World!')
});

app.listen(portNumber)
