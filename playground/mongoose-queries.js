const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "58812aba0ae1ea36fc0e5d4f11";
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById("587d7cb75d6af9a82a2d0cbf").then((user) => {
  if (!user) {
    return console.log('Unable to find user.');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
