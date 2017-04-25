// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  } else {
    console.log('Connected to MongoDB server');
  }

  // delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // find One and delete
  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID("58f42a0c9a10ac33cc01097f")
  // }).then((result) => {
  //   console.log(JSON.stringify(result));
  // });
  db.collection('Users').deleteMany({name: 'Jean-Christophe'}).then((result) => {
    console.log(JSON.stringify(result));
  });
  // db.close();
});
