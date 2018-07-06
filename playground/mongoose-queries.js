const {ObjectID} = require('mongodb');

const {mongoose} =  require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user');

// var id = '5b3bbbd8379c4da394e3f711';
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos' , todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id' , todo);
// }).catch((e) =>
//   console.log(e)
// );

User.findById('5b3b73e77478c44ecc349201').then( (user) => {
  if(!user){
    console.log('unable to find user');
  }
  console.log(JSON.stringify(user , undefined, 2));
}, (e) => {
  console.log(e);
})
