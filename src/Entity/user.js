const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
username : {
type:String, 
required:true , 
index: {unique: true, dropDups: true}
},
email : {
type:String, 
required:true, 
index: {unique: true, dropDups: true}
},
password: {
type:String, 
required:true
},
token: {
type:String, 
required:true
},
firstName: {
type:String, 
required:true
},
lastName: {
type:String, 
required:true
} , 
type:{
type:String, 
enum : ['user','admin' , 'moderator' , 'superadmin' ],
},
})
module.exports=mongoose.model('User',userSchema)