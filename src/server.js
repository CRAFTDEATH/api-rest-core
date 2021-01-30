const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const user = require("./routes/user")
const address = require("./routes/address")
const tech = require("./routes/tech")
const errors = require("./routes/errors")
const app = express()
const port = process.env.PORT || 3333
require("./database/connection")

app.use(express.static('src/public'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(user)
app.use(address)
app.use(tech)
app.use(cors())
app.use(errors)

app.listen(port, ()=>console.log(`Ok, Servidor Rodando em ${port}`))



