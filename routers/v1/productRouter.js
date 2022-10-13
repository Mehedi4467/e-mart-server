const express = require('express');
const router = express.Router();

//internal import
const {postProduct,getProduct} = require('../../controller/productController');

router.route('/')
.get(getProduct)
.post(postProduct)

module.exports = router;