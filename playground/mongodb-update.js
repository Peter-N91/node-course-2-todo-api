const {MongoClient, ObjectID} = require('mongodb'); // example below


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {    // if mongo v3 we have (err, client)
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // if mongo v3: const db = client.db(TodoApp);

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b75d5de7132a6301e14b968')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //Challenge 1
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5b7335a99907de1844e77a8c')
  // }, {
  //   $set: {
  //     name: 'Peter'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //Challenge 2
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b7335a99907de1844e77a8c')
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close(); // if mongo v3: client.close()
});
