const express = require("express")
const bountyRouter = require("./routes/bountyRouter")

const app = express()

app.use(express.json())

app.use("/bounty", bountyRouter)

app.listen(9000, () => {
    console.log('the server be running, check over on 9000')
})