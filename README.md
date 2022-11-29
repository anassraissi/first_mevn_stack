# first_mevn_stack

# Mongouuse 
 bibliothèque de programmation orientée objet JavaScript qui crée une connexion entre MongoDB et l'environnement d'exécution JavaScript Node.js.

 ## description
  **exemple**

 
```bash
 const mongoose = require('mongoose'); 
 
mongoose.connect('mongodb://localhost:27017/testDB', 
	{ 
  	No More Deprecation Warning Options in Mongoose 6
   these are no longer supported options in Mongoose 6 - only use it with old versions

	 //useNewUrlParser: true,

        ## What is useNewUrlParser true? The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser.

	 //useUnifiedTopology: true,
    ##What is useUnifiedTopology true? useUnifiedTopology: False by default. Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true , except for the unlikely case that it prevents you from maintaining a stable connection.

	 //useCreateIndex: true,
	 //useFindAndModify: false
	})
.then(()=>{
	console.log('connected');
	})
.catch((e)=>{
	console.log("Something went wrong", e);
	})
```

## Expressjs
Express Web Framework (Node. js/JavaScript) Express est une infrastructure d'application (framework), écrit en JavaScript et hébergée dans l'environnement d'exécution node. js

## node js 
Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node

## Cors
 Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that 
allows a server to indicate any other origins (domain, scheme, or port) than 
its own from which a browser should permit loading of resources

```bash

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

```
# bodyParser
```bash

 var bodyParser = require('body-parser')

 ## Express body-parser is an npm library used to process data sent through an HTTP request body. It exposes four express middlewares for parsing text, JSON, url-encoded and raw data set through an HTTP request body. These middlewares are functions that process incoming requests before they reach the target controller.
```

# mongodb use no sql database
## KEY DIFFERENCE between nosql qnd sql
```bash

##The five critical differences between SQL vs NoSQL are:

1.SQL databases are relational, NoSQL databases are non-relational.

2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.

3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.

4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.

5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
```





