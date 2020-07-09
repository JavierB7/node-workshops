portNumber = process.argv[2];
path = process.argv[3];

const express = require('express')
const app = express()
app.use(express.static(path || path.join(__dirname, 'public')))
app.listen(portNumber)