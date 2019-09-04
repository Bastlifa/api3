const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) =>
{
    res.send('get to /products/')
})

router.get('/:id', (req, res) =>
{
    const id = req.params.id
    res.send(`get to /products/${id}`)
})

module.exports = router