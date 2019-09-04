const express = require('express')
const productsRouter = require('../products/products-router')
const suppliersRouter = require('../suppliers/suppliiers-router')

const server = express()
server.use(express.json())
server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)

server.get('/', (req, res) =>
{
    res.status(200).json({ message: "server running" })
})



module.exports = server