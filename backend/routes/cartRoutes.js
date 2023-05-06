const express = require('express')
const cartController = require('../controllers/cartController')
const router = express.Router()

router.route('/viewCart').get(cartController.viewCart)
router.route('/addProductToCart/:productId').post(cartController.addProductToCart)
router.route('/removeProductFromCart/:productId').patch(cartController.removeProductFromCart)
router.route('/updateProductInCart').get(cartController.updateProductInCart)

module.exports = router
