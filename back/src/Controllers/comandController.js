const express = require('express');
const router = express.Router()
const Comand = require('../Entity/command')
const comandService = require("../Services/comandService")
router.get('/' , findcomands)
router.get('/:id' , findcomandsbyid)
router.post('/' , addcomand)
router.post('/delete' , deletecomand)
router.post('/update' , updatecomand)
router.post('/status' , findcomandsbystatus)


async function findcomands(req , res) {
try{

const comands= await comandService.findcomands()
res.send(comands)
}catch(err){
res.send(err)
}
}
async function  findcomandsbyid (req , res) {
try{
const comands = await comandService.findcomandsbyid(req.params.id)
res.send(comands)
}catch(err){
res.send(err)
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

console.log(req);

const comand = new Comand({
name:req.body.name , 
totalprice: req.body.totalprice,
products:req.body.products,
modifiedOn:Date.now() , 
status : 'onhold'
})
try{

await comandService.addcomand(comand)
res.send(comand )
}catch(err){
res.send(err)
}

}

async function  deletecomand (req , res) {
console.log(req.body);
try{
const comands = await comandService.deletecomand(req.body.id)
res.send("deleted")
}catch(err){
res.send(err)
}
}


async function  updatecomand (req , res) {
console.log(req.body);
const comand = new Comand({
name:req.body.name , 
totalprice: req.body.totalprice,
products:req.body.products,
modifiedOn:Date.now() , 
status : 'onhold'
})
try{
const comands = await comandService.updatecomand(comand)
res.send(comands)
}catch(err){
res.send(err)
}
}


async function  findcomandsbystatus (status) {
try{
const comand = await comandService.findcomandbystatuts(status)
res.send(comand) 
}catch(err){
console.log(err);
}
}



module.exports=router