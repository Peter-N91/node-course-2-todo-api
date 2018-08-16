const {MongoClient, ObjectID} = require('mongodb'); // example below


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {    // if mongo v3 we have (err, client)
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // if mongo v3: const db = client.db(TodoApp);

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //Challenge 1
  // db.collection('Users').deleteMany({name: 'Peter'}).then((result) => {
  //   console.log(result);
  // });
  //Challenge 2
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b75c243c248431728499bd5')
  }).then((result) => {
    console.log(result);
  });


  //db.close(); // if mongo v3: client.close()
});
