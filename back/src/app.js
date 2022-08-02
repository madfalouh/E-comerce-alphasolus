const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT
const hostname = process.env.DB_HOSTNAME
const url= `mongodb://${hostname}/alphadb`
const app = express()
app.use(cors())
mongoose.connect(url)
const con = mongoose.connection
app.use(express.json())
con.on('open' , ()=>{

console.log("connected...");

} )
app.get('/',(req , res)=>{
res.send("app is working")
})

const userController = require('./Controllers/userController')
const productController = require('./Controllers/productController')
const AuthController = require('./Controllers/AuthController')
const comandController = require('./Controllers/comandController');
app.use('/users',userController)
app.use('/products',productController)
app.use('/Auth',AuthController)
app.use('/comands' , comandController)
app.listen(port, ()=> {

console.log(`port is listening on ${port}`);

})