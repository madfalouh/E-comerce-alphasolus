const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose');
const fs = require("fs");
var fileupload = require("express-fileupload");
const cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const port = process.env.PORT
const hostname = process.env.DB_HOSTNAME
const url= `mongodb://${hostname}/alphadb`
const app = express()
app.use(cors())
app.use(fileupload());
mongoose.connect(url)
const con = mongoose.connection
app.use(express.json())
con.on('open' , ()=>{
console.log("connected...");
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });


app.post("/upload", upload.single("testImage"), (req, res) => {
  const saveImage =  product({
    name: "req.body.name",
    price : 10 ,
    description:"edfggd",

    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send('image is saved')
});







app.get('/',(req , res)=>{
res.send("app is working")
})




const userController = require('./Controllers/userController')
const productController = require('./Controllers/productController')
const AuthController = require('./Controllers/AuthController')
const comandController = require('./Controllers/comandController');
const product = require('./Entity/product');
const req = require('express/lib/request');
app.use('/users',userController)
app.use('/products',productController)
app.use('/Auth',AuthController)
app.use('/comands' , comandController)
app.listen(port, ()=> {

console.log(`port is listening on ${port}`);

})