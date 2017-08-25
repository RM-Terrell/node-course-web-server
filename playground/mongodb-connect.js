const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
   //Put Heroku url here for web deploy
  if(err){
    return console.log('Unable to connect to mongodb server') //Return makes the program stop
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err,result) => {
    if(err){
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2))
  });

  db.close();

});