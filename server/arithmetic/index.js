const router = require('express').Router()
module.exports = router

router.post('/', (req, res, next) => {
    const {calculation, numbers} = req.body
    res.sendStatus(200)
})
