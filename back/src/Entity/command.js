const mongoose = require('mongoose')
const comandSchema = new mongoose.Schema({
name : {
type:String, 
required:true , 
index: {unique: true, dropDups: true}
},
userId : {
type:String, 
required:true , 
} ,
totalprice : {
type:Number, 
required:true, 
},
    products: [
      {
        productId: String,
        productName:String,
        quantity: Number,
        name: String,
        price: Number , 
  
      }
    ],
modifiedOn: {
    type: Date,
    default: Date.now , 
},
status:{
enum : ['notstarted','onhold','accepted','refused'],
}


})
module.exports=mongoose.model('Comand',comandSchema)