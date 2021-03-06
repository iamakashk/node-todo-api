require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser =  require('body-parser');

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var app = express();

//heroku or localhost
//check package.json start and engines
//https://elements.heroku.com/addons/mongolab
var port = process.env.PORT;

const {ObjectID} = require('mongodb');
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

//GET /todos/123123
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //res.send(req.params);
  //validate id using isValid
  //404 - send back empty value
  //findById
  //success
  //error
  //400 -
  if(!ObjectID.isValid(id)){
    return res.status(404).send('');
  }

    Todo.find({_id:new ObjectID(id)}).then( (todo) =>{
        if(!todo){
          return res.status(404).send();
        }
        res.send({
          todo
        })
    }).catch((e) =>{
      res.status(400).send();
    });

});

app.delete('/todos/:id', (req, res) => {
  //get the idea
  // validate the id ==> not valid ? return 404
  //remove by id
  //success
  //error
  //400 with empty body
  //if no doc send 404
  //if doc send doc back with 200

  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send('');
  }
  Todo.findByIdAndRemove(id).then( (todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({
      todo
    })
}).catch((e) =>{
  res.status(400).send();
});
});

app.patch('/todos/:id' , (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text' , 'completed']);
  if(!ObjectID.isValid(id)){
    return res.status(404).send('');
  }
  if(_.isBoolean(body.completed)  && body.completed) {
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body} , {new : true}).then( (todo) =>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({
      todo
    })
  }).catch((e) => {
    res.status(400).send()
  })
})


app.listen(port, () => {
  console.log(`Started on port ${port}`);
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
