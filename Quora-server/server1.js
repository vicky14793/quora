const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Registration = require('./api/routes/routes_registration');
const Question = require('./api/routes/routes_questions');
var cors = require('cors')

//
var bodyParser = require('body-parser')



 //
 mongoose.connect('mongodb://localhost:27017/quoranew', {useNewUrlParser: true}).then(
   db =>  {
     console.log('Connected to server');
   }, err =>  {
     console.log('Could not connect to db');
   }
 );
app.use(cors());
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())

app.use('/registration', Registration)
app.use('/questions', Question)




app.listen(5001, () => {
  console.log("Server is running on port 5001");
});


module.exports = app;
