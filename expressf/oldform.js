portNumber = process.argv[2];

const express = require('express')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res) {
	let strb = req.body.str.split('').reverse().join('')
    res.end(strb)
})


app.listen(portNumber)
