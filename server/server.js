var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/1234321
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // Valid id using isValid
    // 404 - send empty send
  if (!ObjectID.isValid(id)) {
     console.log('ID not valid / not found');
     return res.status(404).send();
  }

  // findById
  Todo.findById(id).then((todo) => {
    if (!todo) {
      console.log('ID not valid / not found');
      return res.status(404).send();
    }
    res.send({todo});

  }).catch((e) => {
    console.log('ID not found / bad request');
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});


module.exports = {app};
