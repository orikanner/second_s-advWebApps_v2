const express = require("express")
const router = express.Router();

const productController = require("../controllers/productController")


router.route('/getAllProducts').get(productController.getAllProducts);










module.exports = router;