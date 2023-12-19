require('dotenv').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(cors())

port = 5000
const url = process.env.CONN_STR

app.use('/api/stocks', require('./routes/stocks'))

const main = async () => {
    try {
        await mongoose.connect(url)
        console.log("MongoDB connected")
    } catch (err) {
        console.log(err)
    }
}
main()

app.listen(port, () => {
    console.log(`Server listening on port ${port}....`)
})