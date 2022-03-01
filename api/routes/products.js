const express = require("express");

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
})

router.post('/', (req, res, next) => {
    console.log(req.body)
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: 'Handling POST request to /products',
        order: order
    })
})

router.get('/:prodId', (req, res, next) => {
    const {prodId} = req.params
    if(prodId === 'special') {
        res.status(200).json({
            message: "You discovered the special"
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:prodId', (req, res, next) => {
    const {prodId} = req.params
    if(prodId === 'special') {
        res.status(200).json({
            message: "You discovered the special"
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.delete('/:prodId', (req, res, next) => {
    const {prodId} = req.params
    if(prodId === 'special') {
        res.status(200).json({
            message: "You discovered the special"
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})


module.exports = router