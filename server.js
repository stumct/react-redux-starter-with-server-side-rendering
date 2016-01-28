require("babel-core/register"); //used for jsx and es6 transpiling

//initialise express server
var express = require('express');
var app = express();

//get the React libs
var React = require('react');
var ReactDOM = require('react-dom/server')

//get the React components
var component = require('./src/index.jsx')
var HelloWorld = React.createFactory(component)

//set up the jade middleware for templates in express
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

//server up the public dir
app.use(express.static(__dirname + '/public'))

//set up the default route
app.get('/', function(req, res){
  res.render('index', {
    react: ReactDOM.renderToString(HelloWorld({name: "SERVER"}))
  })
})

//start the server
app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
