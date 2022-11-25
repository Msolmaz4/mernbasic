const Product =require('../models/Products')


const getAllProducts = async(req,res)=>{
    try {
      //suslu paramtey yapinca hepsini cagiriry
        const products = await Product.find({})
        res.json(products)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({messsage:'allproduct hatali'})
        
    }
}
const getProductById = async(req,res)=>{
    try {
      //suslu paramtey yapinca hepsini cagiriry
        const product = await Product.findById(req.params.id)
        res.json(product)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({messsage:'allproduct hatali'})
        
    }
}
module.exports = {
    getAllProducts,
    getProductById
}