const express = require('express');
const router = express.Router()
const User = require('../Entity/user')
const Encryption = require('../Services/EncryptionService')
const jwt = require("jsonwebtoken");
const userService = require("../Services/userService");
router.get('/' , findusers)
router.get('/:id' , finduserbyid)
router.post('/' , adduser)
router.post('/delete' , deleteuser)
router.post('/update' , updateuser)
async function findusers (req , res) {
try{
const users = await userService.findusers(User)
res.json(users)
}catch(err){
return res.status(500).json({ msg: err.message })

}
}
async function  finduserbyid (req , res) {
try{
const users = await userService.finduserbyid(User ,req.params.id)
res.json(users)
}catch(err){
return res.status(500).json({ msg: err.message })

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
return res.status(500).json({ msg: err.message })
}
}

async function adduser (req , res){

console.log(req.body);
const password = await  Encryption.cryptPassword(req.body.password)
const user = new User({
username:req.body.username , 
email: req.body.email,
password:password,
token:"token",
firstName:req.body.firstName,
lastName:req.body.lastName,
type : req.body.type,
})

try{
await userService.adduser(user)
res.json(user.token)
}catch(err){
return res.status(500).json({ msg: err.message })

}

}

async function  deleteuser (req , res) {
console.log(req.body);
try{
const users = await userService.deleteuser(req.body.id)
res.json({ msg: 'deleted!' })
}catch(err){
 res.status(404)
throw new Error('Project not found')

}
}


async function  updateuser (req , res) {
console.log(req.body);
const user =({
id : req.body.id ,
username : req.body.username  ,
email :req.body.email,
password :req.body.password,
firstName :req.body.firstName,
lastName :req.body.lastName,
type:req.body.type
})
try{
const users = await userService.updateuser(user)
res.send(users)
}catch(err){
return res.status(500).json({ msg: err.message })
}
}




module.exports=router