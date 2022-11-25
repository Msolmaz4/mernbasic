const express = require('express')

const router = express.Router()
const { getAllProducts,getProductById } =require('../controller/productControllers')

//hepsini cagirmak icin
router.get('/',getAllProducts)
//bir tane cagirmak icin id kullaniriy
router.get('/:id',getProductById)
module.exports = router