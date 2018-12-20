const router = require('express').Router()
const {calculate} = require('../utilities')
module.exports = router

router.post('/', (req, res, next) => {
    const {calculation, numbers} = req.body

    res.status(201).json(calculate(calculation, numbers))
})
