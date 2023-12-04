const express = require("express")
const middlewareFunction = express()

middlewareFunction.use("/", (req, res, next) => {
    console.log("initial middleware executed")
    next()
})

middlewareFunction.use((req, res, next) => {
    req.body = {title: "my first middlware file"}
    next()
})

middlewareFunction.use("/", (req, res, next) => {
    console.log("request recieved")
    res.send(req.body)
})

module.exports = middlewareFunction