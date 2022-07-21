const express = require('express');
const router = express.Router()
const Product = require('../Entity/product')
const productService = require("../Services/productService")
router.get('/' , findproducts)
router.get('/:id' , findproductsbyid)
router.post('/' , addproduct)
router.post('/delete' , deleteproduct)
router.post('/update' , updateproduct)
async function findproducts (req , res) {
try{
const products = await productService.findproducts(Product)
res.send(products)
}catch(err){
res.send(err)
}
}
async function  findproductsbyid (req , res) {
try{
const products = await productService.findproductsbyid(Product,req.params.id)
res.send(products)
}catch(err){
res.send(err)
}
}
async function  findproductbyname (product) {
try{
const products = await productService.findproductbyname(Product,product)
res.send(products) 
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
try{

await productService.addproduct(product)
res.send(product)
}catch(err){
res.send(err)
}

}

async function  deleteproduct (req , res) {
console.log(req.body);
try{
const products = await productService.deleteproduct(req.body.id)
res.send("deleted")
}catch(err){
res.send(err)
}
}


async function  updateproduct (req , res) {
console.log(req.body);
const product =({
id : req.body.id ,
name : req.body.name  ,
price :req.body.price,
description :req.body.description
})
try{
const products = await productService.updateproduct(product)
res.send(products)
}catch(err){
res.send(err)
}
}




module.exports=router