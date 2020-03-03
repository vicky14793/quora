const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({

  category:{
     type: String,
     required: true
   },

  description:{
    type: String,
    required: true
  },

  // userid:{
  //   type: String,
  //   required: true
  // }
}, {timestamps: true})


  module.exports = mongoose.model("Question", QuestionSchema);
