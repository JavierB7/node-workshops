portNumber = process.argv[2];
path = process.argv[3];
const express = require('express')
const app = express()
app.use(express.static(path || path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
res.render('index', {date: new Date().toDateString()})
app.listen(portNumber)