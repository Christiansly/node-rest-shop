const express = require("express");

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET request for /order"
    })
})

router.post('/:prodId', (req, res, next) => {
    const {prodId} = req.params
    res.status(200).json({
        message: `Posted product with ID ${prodId}`
    })
})

module.exports = router