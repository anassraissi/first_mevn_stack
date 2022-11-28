
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// create out express app
const app = express()
//

// Handle CORS + middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // If using .fetch and not axios
  res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
})


//my connection string from mongo db: mongodb+srv://userdb:<password>@cluster0.xbzxxb7.mongodb.net/?retryWrites=true&w=majority

// database stuff
const uri = "mongodb+srv://userdb:<password>@cluster0.xbzxxb7.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected")
})
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('hello world')
})

//routes
app.get('/', (req, res) => {
  res.send('hello world')
})

  const TodosRoute=require('./routes/Todos');
app.use('/todos',TodosRoute)
// respond with "hello world" when a GET request is made to the homepage
app.listen(3000,()=>{
  console.log('Listning at port 3000');
})



