const express = require('express');
const router = express.Router()
const User = require('../Entity/user')
const Encryption = require('../Services/EncryptionService')
const jwt = require("jsonwebtoken");
const userService = require("../Services/userService")
router.post("/login" , login)


async function login(req , res) {

const {email , password}=req.body

const user = await userService.finduserbyemail(email)

const compare = await Encryption.compare(password , user[0].password);

if(user!=undefined &&  compare  ){






res.send("connected")
}else{
res.send("password or email is incorrect")
}

}

module.exports=router
