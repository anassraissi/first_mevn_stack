const express=require('express');
const todos = require('../model/todos');
const router=express.router();
const todo=require('../model/todos');

//get all todo route
router.get('/',async(req,res)=>{
    const routes =await todo.find();
    res.json(todos)
})
module.exports=router();