const express = require("express")
const router = express.Router();

const productController = require("../controllers/cartController")

router.route('/MyCart').get(productController.getAllCartProducts);
router.route("/addToCart").post(productController.addToCart);







module.exports = router;