const express = require('express');
const router = express.Router()
const Encryption = require('../Services/EncryptionService')
const jwt = require("jsonwebtoken");
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
},adduser:async function adduser (user){

try{
await user.save()
}catch(err){
console.log(err)
}
}
}