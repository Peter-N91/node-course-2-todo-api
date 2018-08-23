var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// model explanation and example
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });

//challenge
// var challengeTodo = new Todo({
//   text: true,
//   // completed: true,
//   // completedAt: 245
// })
//
// challengeTodo.save().then((doc) => {
//   console.log('Todo saved successfully', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });



//challenge schema
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var newUser = new User({
  email: '   peternehme91@gmail.com  '
});

newUser.save().then((user) => {
  console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
  console.log('Unable to save user', err);
})
