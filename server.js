const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(bodyParser.json({limit: '50mb', extended: true}))
const port = 4000
const server = http.createServer(app)
server.listen(4000, '0.0.0.0')

const day0 = require('./routes/day0')
const day1 = require('./routes/day1')
const day3 = require('./routes/day3')
const day8 = require('./routes/day8')
app.use('/',day0)
app.use('/',day1)
app.use('/',day3)
app.use('/',day8)
app.use((req,res)=>{
  const error = new Error('Not Found')
})
