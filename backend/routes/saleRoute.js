const express = require('express')
const saleController = require('../controllers/saleController')
const router = express.Router()

router.route('/createSale').post(saleController.addSale)
router.route('/viewSale').get(saleController.viewSale)

module.exports = router
