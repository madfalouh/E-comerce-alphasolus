const express = require('express');
const Comand = require('../Entity/command');
const router = express.Router()
module.exports = {
findcomands :async function findcomands () {
let commands
try{
commands = await Comand.find()
}catch(err){
console.log(err);
}
return commands
},
findcomandsbyid:async function  findcomandsbyid (id) {
let commands
try{
commands = await Comand.findById(id)
console.log(commands );
}catch(err){
res.send(err)
}
return commands
},
findcomandsbyuserId:async function  findcomandsbyuserId (id) {
let commands
try{
commands = await Comand.find({userId:id})
console.log(commands );
}catch(err){
res.send(err)
}
return commands
},
findcomandbyname:async function  findcomandbyname (command) {
let commands
try{
commands = await Comand.find({name:command})
}catch(err){
console.log(err);
}
return commands
},addcomand:async function addcomand (comand){

try{
await comand.save()
}catch(err){
console.log(err);
}
},deletecomand:async function deletecomand (id){
try{
await Comand.deleteOne({_id:id})
}catch(err){
console.log(err)
}
}, updatecomand : async function updatecomand(comand , id , op) {  


try{

console.log(id);

await Comand.findByIdAndUpdate(id ,{ 

totalprice :comand.totalprice ,
products: comand.products,
modifiedOn : Date.now()
 })
}catch(err){

console.log(err);
}





},
findproductbyname:async function  findproductbyname (command) {
let commands
try{
commands = await Comand.find({name:command})
}catch(err){
console.log(err);
}
return commands
},
findcomandbystatuts:async function  findcomandbystatuts (statuts) {
let commands
try{
commands = await Comand.find({status:statuts})
}catch(err){
console.log(err);
}
return commands
},

}