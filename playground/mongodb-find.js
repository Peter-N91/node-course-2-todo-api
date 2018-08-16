const {MongoClient, ObjectID} = require('mongodb'); // example below


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {    // if mongo v3 we have (err, client)
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // if mongo v3: const db = client.db(TodoApp);

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b75c7107132a6301e14b2a7')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  //Challenge
  db.collection('Users').find({name: 'Peter'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to get users', err);
  });


  //db.close(); // if mongo v3: client.close()
});
