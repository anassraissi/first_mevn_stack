const mongoose=require('mongoose');
const TodosShema=new mongoose.Schema({  
    todo:String,
    author:String
})
module.exports=mongoose.model('todo',TodosShema);

//La méthode  Schema  de Mongoose vous permet de créer un schéma de données pour votre base de données MongoDB.
//La méthode  model  transforme ce modèle en un modèle utilisable.

