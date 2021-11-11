const express = require('express');
const router = express.Router();
const { getProducts, getSingleProduct } = require('../controllers/products')

router
    .route('/').get(getProducts);
    
router.
    route('/:id').get(getSingleProduct);

module.exports = router;