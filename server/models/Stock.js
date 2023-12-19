const mongoose = require("mongoose")

const stockSchema = new mongoose.Schema({
    page: Number,
    symbol: String,
    desc: String,
    prevclose: Number,
    change: Number
})

module.exports = mongoose.model("Stock", stockSchema)