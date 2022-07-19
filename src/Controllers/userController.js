const express = require('express');
const router = express.Router()
const User = require('../Entity/user')
const Encryption = require('../Services/EncryptionService')
const jwt = require("jsonwebtoken");
const userService = require("../Services/userService")
router.get('/' , findusers)
router.get('/:id' , finduserbyid)
router.post('/' , adduser)
async function findusers (req , res) {
try{
const users = await userService.findusers(User)
res.send(users)
}catch(err){
res.send(err)
}
}
async function  finduserbyid (req , res) {
try{
const users = await userService.finduserbyid(User ,req.params.id)
res.send(users)
}catch(err){
res.send(err)
}
}
async function  finduserbyname (username) {
try{
const users = await userService.finduserbyname( User,username)

if(users){
return false ; 
}else {
return true ; 
}
}catch(err){
console.log(err);
}
}

async function adduser (req , res){
 const token = jwt.sign(
                    { 
                    username:req.body.username , 
                    email: req.body.email,
                    firstName:req.body.firstName,
                    lastName:req.body.lastName
                    },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "7d",
                    }
                );
const password = await  Encryption.cryptPassword(req.body.password)
const user = new User({
username:req.body.username , 
email: req.body.email,
password:password,
token:token,
firstName:req.body.firstName,
lastName:req.body.lastName
})
console.log(req.body);
try{
await userService.adduser(user)
res.send(user)
}catch(err){
res.send(err)
}

}
module.exports=router