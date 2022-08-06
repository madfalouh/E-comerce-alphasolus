const express = require('express');
const router = express.Router()
const User = require('../Entity/user')
const Encryption = require('../Services/EncryptionService')
const jwt = require("jsonwebtoken");
const userService = require("../Services/userService");
const { use } = require('./userController');
router.post("/login" , login)
router.post("/logout" , logout)


async function login(req , res) {
console.log(req.body);
const {email , password}=req.body
let compare
let user = await userService.finduserbyemail(email)
 try{
 compare = await Encryption.compare(password , user[0].password);
 } catch{
}
if(user!=undefined &&  compare){
const id= user[0]._id
 const token = jwt.sign(
                    {
                    id: user[0]._id,
                    username:user[0].username , 
                    email: user[0].email,
                    firstName:user[0].firstName,
                    lastName:user[0].lastName,
                    type:user[0].type
                    },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "7d",
                    }
                );

user[0].token=token

try{
await User.findByIdAndUpdate(id , { token: token })
}catch(err){
return res.status(500).json({ msg: err.message })
}
res.json(token)
}else{
}

}


 async function logout(req, res, next)  {
        res.end();
        return;
    }

module.exports=router
