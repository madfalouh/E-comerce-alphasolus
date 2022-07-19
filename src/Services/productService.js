const express = require('express');
const router = express.Router()
module.exports = {
findproducts :async function findproducts (Product) {
let products
try{
products = await Product.find()
}catch(err){
res.send(err)
}
return products
},
findproductsbyid:async function  findproductsbyid (Product,id) {
let products
try{
products = await Product.findById(id)
console.log(products );
}catch(err){
res.send(err)
}
return products
},
findproductbyname:async function  findproductbyname (Product,product) {
let products
try{
products = await Product.find({name:product})
}catch(err){
console.log(err);
}
return products
},

addproduct:async function addproduct (product){
console.log(product);
try{
await product.save()
}catch(err){
res.send(err)
}
}
}