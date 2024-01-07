const express = require("express")
const thingsRouter = require("./routes/thingsRouter")
const app = express()

app.use(express.json())

app.use("/inventory", thingsRouter)


app.listen(9000, () => {
    console.log(`the server is running on host 9000`)
})