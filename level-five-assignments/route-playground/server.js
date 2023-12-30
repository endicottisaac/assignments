const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = 9000

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)

mongoose.connect(
    'mongodb+srv://endicottisaac:52YuHJV2TxKOWlbK@cluster0.zb8uoh0.mongodb.net/', 
    (err) => console.log('Connected to the DB', err)
)

app.use('/food', require('./routes/foodRouter'))



app.use((err, req, res, next) => {
    console.log(err)
    
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
