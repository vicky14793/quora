const express = require('express');
const router = express.Router();
const Question = require("./../../model/questions");

router.post('/', (req, res, next)=>{
console.log(req.body)
// Question.findOne({title:req.body.title}, (err, ques)=>{
//   if(err) res.send(err)
//
//   if(ques){
//     return res.status(500).send({error: "Question already exist"})
//   }


  let newquestion = new Question({
    //title: req.body.title,
    category: req.body.category,
    description: req.body.description
    //userid: req.body.userid
  });

  newquestion.save().then(que=>{
    return res.status(200).send("question added successfully");
  }).catch(error=>{
    return res.status(500).send({error:"error while saving data"})
  //});
     });
        });

router.get("/fetch", (req, res)=>{
Question.find( (err, ques)=>{
  if(err) res.status(500).json({error: 'error while fetching questions'})
  res.status(200).send(ques);

});
});


router.delete("/:id", (req, res) => {
  Question.findByIdAndRemove(req.params.id, (err, que) =>  {
    if (err) res.status(500).send({error: 'error while deleting question'});
    res.status(200).send('question deleted');
  });
});

module.exports = router;


// Book store
// Oct 2018 - Jan 2019• Book store that allows students to sell and buy their second hand books.
// • CRUD for books.
