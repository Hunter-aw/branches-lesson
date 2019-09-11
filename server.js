let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let path = require('path')

let app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(2822, () => {console.log('got it')})
