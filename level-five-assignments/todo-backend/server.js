const express = require("express")
const todoRouter = require("./routes/todoRouter")
const app = express()


app.use(express.json())

app.use("/todo", todoRouter)

app.listen(9000, () => {
    console.log('the server be running, check over on 9000')
})