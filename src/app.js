const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT
const hostname = process.env.DB_HOSTNAME
const url= `mongodb://${hostname}/alphadb`
const app = express()
mongoose.connect(url)
const con = mongoose.connection
app.use(express.json())
con.on('open' , ()=>{

console.log("conected...");

} )
app.get('/',(req , res)=>{
res.send("app is working")
})

const userController = require('./Controllers/userController')


app.use('/users',userController)


app.listen(port, ()=> {

console.log(`port is listening on ${port}`);

})