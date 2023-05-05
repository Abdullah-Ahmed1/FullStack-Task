const express = require('express')
const cartController = require('../controllers/cartController')
const router = express.Router()

router.route('/viewCart').get(cartController.viewCart)
router.route('/addProductToCart').get(cartController.viewCart)
router.route('/removeProductToCart').get(cartController.removeProductToCart)
router.route('/updateProductInCart').get(cartController.updateProductInCart)

module.exports = router
