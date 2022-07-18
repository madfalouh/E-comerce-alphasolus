const express = require('express');
const router = express.Router()
const Product = require('../Entity/product')
router.get('/' , findproducts)
router.get('/:id' , findproductsbyid)
router.post('/' , addproduct)
async function findproducts (req , res) {
try{
const products = await Product.find()
}catch(err){
res.send(err)
}
}
async function  findproductsbyid (req , res) {
try{
const products = await Product.findById(req.params.id)
console.log(products );
}catch(err){
res.send(err)
}
}
async function  findproductbyname (product) {
try{
const products = await Product.find({name:product})

}catch(err){
console.log(err);
}
}

async function addproduct (req , res){
const product = new Product({
name:req.body.name , 
price: req.body.price,
description:req.body.description
})
console.log(req.body);
try{
await product.save()
res.send(product)
}catch(err){
res.send(err)
}

}
module.exports=router