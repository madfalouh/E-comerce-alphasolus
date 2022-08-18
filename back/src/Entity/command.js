const mongoose = require('mongoose')
const product = require('./product')
const user = require('./user')
Schema = mongoose.Schema
const comandSchema = new mongoose.Schema({
name : {
type:String, 
required:true , 
index: {unique: true, dropDups: true}
},
userId : { type: Schema.Types.ObjectId, ref: 'User' } ,
totalprice : {
type:Number, 
required:true, 
},
products:[ {product : { type: Schema.Types.ObjectId, ref: 'Product' } , quantity : { type:Number,required:true,} }],
    
modifiedOn: {
    type: Date,
    default: Date.now , 
},
status:{
type:String, 
required:true ,
}


})
module.exports=mongoose.model('Comand',comandSchema)