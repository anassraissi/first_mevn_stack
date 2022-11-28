const mongoose=require('mongoose');
const TodosShema=new mongoose.Schema({
    todo:String,
    author:String
})
module.exports=mongoose.model('todo',TodosShema);