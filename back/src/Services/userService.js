const express = require('express');
const router = express.Router()
const Encryption = require('../Services/EncryptionService')
const jwt = require("jsonwebtoken");
const User = require("../Entity/user")
module.exports = {
findusers:async function findusers (User) {
let users
try{
 users = await User.find()
}catch(err){
res.send(err)
}
return users
},
finduserbyid:async function  finduserbyid (User , id) {
let users
try{
users = await User.findById(id)
console.log(users );
}catch(err){
res.send(err)
}
return users
},
finduserbyname:async function  finduserbyname (User,username) {
let users
try{
users = await User.find({username:username})
if(users){
return false ; 
}else {
return true ; 
}
}catch(err){
console.log(err);
}
},
finduserbyemail:async function  finduserbyemail (email) {
let users
try{
users = await User.find({email:email})

}catch(err){
console.log(err);
}
return users
},adduser:async function adduser (user){
try{
await user.save()
}catch(err){
console.log(err)
}
},deleteuser:async function deleteuser (id){
try{
await User.deleteOne({_id:id})
}catch(err){
console.log(err)
}
}, updateuser : async function updateuser(user) {
const password = await Encryption.cryptPassword(user.password)    
try{
await User.findByIdAndUpdate(user.id ,{ 
username : user.username,  
email :user.email ,
password :password ,
firstName:user.firstName ,
lastName: user.lastName,
type : user.type
 },function (err, docs) {
})
}catch(err){
}
}
}