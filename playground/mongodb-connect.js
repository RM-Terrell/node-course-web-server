const {MongoClient, ObjectID} = require('mongodb'); //Switched  to using ES6 destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
   //Put Heroku url here for web deploy
  if(err){
    return console.log('Unable to connect to mongodb server') //Return makes the program stop
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    id: 123, // Can change ids here. Not auto incrementing.
    text: 'Something to do',
    completed: false
  }, (err,result) => {
    if(err){
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops/*[0]._id.getTimestamp*/, undefined, 2)) //Uncomment to print timestamp
  });

  db.close();

});
