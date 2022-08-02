const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
name : {
type:String, 
required:true , 
index: {unique: true, dropDups: true}
},
price : {
type:Number, 
required:true, 
},
description: {
type:String, 
required:true
},


})
module.exports=mongoose.model('Product',productSchema)