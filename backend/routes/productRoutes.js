const express = require('express')
const productController = require('../controllers/productController')
const router = express.Router()

router.route('/create').get(productController.createProduct)

module.exports = router
