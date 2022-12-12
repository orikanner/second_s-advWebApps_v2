const express = require("express")
const router = express.Router();

const productController = require("../controllers/cartController")
const cartController = require("../controllers/cartController");

router.route('/MyCart').get(productController.getAllCartProducts);

router.route('/userDetailsForm').post(cartController.userForm);







module.exports = router;