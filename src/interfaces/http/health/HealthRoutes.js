const router = require('express').Router()
const authMiddleware = require('../middlewares/auth')

router.get('/health-check', authMiddleware.execute, (req, res) => {
    return res.status(200).send('OK')
})

module.exports = router