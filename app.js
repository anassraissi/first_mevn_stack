
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
