var express = require('express');
var bodyParser =  require('body-parser');

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

//(resource, callback)
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  } , (error) => {
    res.status(400).send(error);
  })
})

app.get('/todos' , (req, res) =>{
  Todo.find().then( (todos) => {
      res.send({
        todos
      });
  } , (error) => {
    res.status(400).send(error);
  })
})

app.listen(3000, () => {
  console.log('Started on port 3000');
})

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minLength : 1,
//     trim : true
//   },
//   completed: {
//     type: Boolean,
//     default : false
//   },
//   completedAt :{
//     type: Number,
//     default : null
//   }
// });
//
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then( (doc) => {
//   console.log('Saved Todo.' , doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
// var otherTodo = new Todo({
//   text: 'Workout',
//   completed: true,
//   completedAt: 1900
// });

// var otherTodo =  new Todo({
//   text: '        edit this video                   '
// });
// otherTodo.save().then((doc) =>{
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('unable to save', err);
// })


//user
//email - require it - trim it -type string -minLength -1
// var User = mongoose.model('User' , {
//   email: {
//     type: String,
//     required : true,
//     minLength: 1,
//     trim : true
//   }
// });
//
// var user = new User({
//   email: 'akki.game003@gmail.com'
// });
// user.save().then((doc) => {
//   console.log('User saved. ' , doc);
// }, (err) => {
//   console.log('Unable to save user.' , err);
// })
