//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }


    // db.collection('Todos').findOneAndUpdate({
    //   _id : new ObjectID('5b3b14425bea3d07bc9307a8')
    // } , {
    //   $set: {
    //     completed : false
    //   }
    // },{
    //   returnOriginal: false
    // }).then( (result) =>{
    //   console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5b389b1dc0a35765902bb941')
    },{
      $set: {
        name : 'JOHN SNOW'
      },
      $inc:{
        age:+2
      }
    },
  {
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  })
//  db.close();
})
