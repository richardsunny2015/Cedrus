const router = require('express').Router()
const {calculate} = require('../utilities')
module.exports = router

router.get('/', (req, res, next) => {
    // const {calculation, numbers} = req.body

    res.status(200).json(calculate('add', [1, 2]))
})
