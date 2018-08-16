// const MongoClient = require('mongodb').MongoClient;
// or
const {MongoClient, ObjectID} = require('mongodb'); // example below
//Example ES6
// var user = {name: 'Peter', age: 25};
// var {name} = user;
// console.log(name); // This will show Peter
// var obj = new ObjectID(); // this to generate object ids


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {    // if mongo v3 we have (err, client)
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // if mongo v3: const db = client.db(TodoApp);

  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   // _id: 123,
  //   name: 'Peter',
  //   age: 26,
  //   location: 'Lebanon'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   //in order to get timestamp
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close(); // if mongo v3: client.close()
});
