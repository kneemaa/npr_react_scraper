const router = require('express').Router()
const postRoutes = require('./routes')

router.use('/posts', postRoutes)

module.exports = router