//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
//
// var user = {name : 'akash', age: 24};
// var {name} = user;
// console.log(name);
//

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do' ,
  //   completed: false
  // }, (err , result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops , undefined, 2));
  // });

  //INSERT NEW DOC INTO USERS (NAME, AGE , LOCATION)
  // db.collection('Users').insertOne({
  //   name: 'AKASH KAMBLE' ,
  //   age: '24',
  //   location: 'MALAD MUMBAI MAHARASHTRA'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('unable ot insert record ' , err);
  //
  //   }
  //   console.log(JSON.stringify(result.ops, undefined , 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  db.close();
})
