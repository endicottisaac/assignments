const express = require("express")
const middlewareFunction = require("./middlewareFunction")
const app = express()

app.use(express.json())

app.use('/', middlewareFunction)

app.listen(9000, () => {
    console.log("The console is running on local host 9000")
})