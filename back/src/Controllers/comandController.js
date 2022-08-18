const express = require('express');
const router = express.Router()
const Comand = require('../Entity/command');
const Product = require('../Entity/product');
const comandService = require("../Services/comandService")
router.get('/' , findcomands)
router.get('/:id' , findcomandsbyid)
router.get('/user/:id' , findcomandsbyuserId)
router.post('/' , addcomand)
router.post('/delete' , deletecomand)
router.post('/update' , updatecomand)
router.post('/status' , findcomandsbystatus)


async function findcomands(req , res) {
try{

const comands= await comandService.findcomands()
res.send(comands)
}catch(err){
return res.status(500).json({ msg: err.message })
}
}
async function  findcomandsbyid (req , res) {
try{
const comands = await comandService.findcomandsbyid(req.params.id)
res.send(comands)
}catch(err){
return res.status(500).json({ msg: err.message })
}
}
async function  findcomandsbyname (comand) {
try{
const comand = await comandService.findcomandbyname(comand)
res.send(comand) 
}catch(err){
console.log(err);
}
}

async function addcomand (req , res){

console.log("l add");


const comand = new Comand({

name:req.body.name , 
userId :req.body.userId , 
totalprice: req.body.totalprice,
products:   req.body.products ,
status : req.body.status ,
modifiedOn:Date.now() , 
})


console.log(comand);
try{

await comandService.addcomand(comand)
res.send(comand )
}catch(err){
return res.status(500).json({ msg: err.message })
}

}

async function  deletecomand (req , res) {
console.log(req.body);
try{
const comands = await comandService.deletecomand(req.body.id)
res.send("deleted")
}catch(err){
return res.status(500).json({ msg: err.message })
}
}


async function  updatecomand (req , res) {


const comand = new Comand({
id : req.body._id, 
name:req.body.name , 
totalprice: req.body.totalprice,
products:req.body.products,
modifiedOn:Date.now() , 
status : req.body.status
})
try{
const comands = await comandService.updatecomand(comand , req.body._id , req.body.op)
res.send(comands)
}catch(err){
console.log(err);
}
}


async function  findcomandsbystatus (status) {
try{
const comand = await comandService.findcomandbystatuts(status)
res.send(comand) 
}catch(err){
return res.status(500).json({ msg: err.message })
}
}
async function  findcomandsbyuserId (req , res) {
try{
const comands = await comandService.findcomandsbyuserId(req.params.id)
res.send(comands)
}catch(err){
return res.status(500).json({ msg: err.message })
}
}



module.exports=router