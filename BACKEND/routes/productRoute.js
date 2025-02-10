const express = require('express')
const { addProduct, removeProduct, getAllProduct, updateProduct } = require('../controller/ProductController')
const productRouter=express.Router()
//creating Route for the add product
productRouter.post("/addproduct",addProduct)
//creating Route for the remove product
productRouter.post("/removeproduct",removeProduct)
//creating Route for the getting all product
productRouter.get("/getallproduct",getAllProduct)
//creating Route for the updating product
productRouter.patch("/updateproduct",updateProduct)

module.exports=productRouter