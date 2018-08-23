const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b7eb263d9809be42e6e76e4'; // valid right id
// var id = '6b7eb263d9809be42e6e76e4'; // valid wrong id
// var id = '5b7eb263d9809be42e6e76e411'; // invalid wrong id

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id     // in mongoose this is a valid request
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
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));



// challenge
var id = '5b7e8321245a0c481f845c57'

User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }

  console.log('User by ID', user);
}, (e) => {
  console.log(e);
});
