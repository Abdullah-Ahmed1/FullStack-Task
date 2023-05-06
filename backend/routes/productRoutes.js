const express = require('express')
const productController = require('../controllers/productController')
const router = express.Router()


router.route('/create').post(productController.createProduct)
router.route('/view').get(productController.ViewAllProducts)

module.exports = router
