const express = require("express")
const bountyRouter = require("./routes/bountyRouter")
const morgan = require("morgan")

const app = express()

app.use(express.json())
app.use(morgan('dev')) // logs requests to the console

app.use("/bounty", bountyRouter)

app.listen(9000, () => {
    console.log('the server be running, check over on 9000')
})