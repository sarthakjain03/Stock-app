const express = require('express')
const router = express.Router()
const Stock = require('../models/Stock');

router.post('/addstock', async (req, res) => {
    try {
        const { page, symbol, desc, prevclose, change } = req.body;
        const newstock = new Stock({page, symbol, desc, prevclose, change})
        const savedStock = await newstock.save()
        res.json(savedStock)
    } catch (err) {
        console.log("Error in saving data to database", err)
    }
})

router.get('/getallstocks', async (req, res) => {
    try {
        // const pagenum = req.query.page;
        const reqStocks = await Stock.find()
        res.send(reqStocks)
    } catch (err) {
        console.log("Error in getting data from database", err)
    }
})

router.get('/getstocksbypage', async (req, res) => {
    try {
        const pagenum = req.query.page;
        const reqStocks = await Stock.find({page: pagenum})
        res.send(reqStocks)
    } catch (err) {
        console.log("Error in getting data from database", err)
    }
})

router.put('/updatestock', async (req, res) => {
    try {
        const { sym, prev, perchange } = req.body;
        const newStock = {}
        newStock.prevclose = prev
        newStock.change = perchange
        const currstock = await Stock.updateOne({symbol: sym}, {$set: newStock})
        res.json({currstock})

    } catch (err) {
        console.log("Error in updating data", err)
    }
})

module.exports = router
// http://localhost:5000/