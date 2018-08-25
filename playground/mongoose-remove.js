const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// to remove all Todos
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// findOneAndRemove this one returns the removed doc
// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '5b81878be1e1928f130dced2'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove // this one returns the id of the removed doc
Todo.findByIdAndRemove('5b81878be1e1928f130dced2').then((todo) => {
  console.log(todo);
});
