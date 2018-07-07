const {ObjectID} = require('mongodb');

const {mongoose} =  require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user');

//Todo.remove({}) --> deletes everything

// Todo.remove({}).then((result) => {
//   console.log('result: ' , result);
// });

//Tod.findOneAndRemove
//Todo.findByIdAndRemove
Todo.findOneAndRemove({_id: '5b40c3027afad6650d416291' }).then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('5b40c3027afad6650d416291').then( (todo) => {
  console.log(todo);
})
