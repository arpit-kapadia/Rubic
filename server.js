var express = require('express');

// Cube Moves
var up = require('./moves/up-down.js').up;
var down = require('./moves/up-down.js').down;
var left = require('./moves/left-right.js').left;
var right = require('./moves/left-right.js').right;

// Single Side Moves
var turnUp = require('./moves/single-vertical-move.js').turnUp;
var turnDown = require('./moves/single-vertical-move.js').turnDown;

var turnLeft = require('./moves/single-horizontal-move.js').turnLeft;
var turnRight = require('./moves/single-horizontal-move.js').turnRight;

// Instanciating the app
var app = express();

// View Engine
app.set('view engine', 'ejs');

var cube = {
  front: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
  back: ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'],
  top: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'],
  bottom: ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'],
  left: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
  right: ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange']
};


// APIs
app.get('/', function(req, res) {
  // res.json(cube);
  res.render('front.ejs', {face: cube.front});
});



app.listen('8008', function(err) {
  if(err) console.log(err);
  else console.log('server is runnning at port 8008');
});






app.get('/up', function(req, res) {
  cube = up(cube);
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
});
app.get('/down', function(req, res) {
  cube = down(cube);
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
});
app.get('/left', function(req, res) {
  cube = left(cube);
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
});
app.get('/right', function(req, res) {
  cube = right(cube);
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
});






app.get('/leftUp', function(req, res) {
  cube = turnUp(cube, 'LEFT');
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
})

app.get('/leftDown', function(req, res) {
  cube = turnDown(cube, 'LEFT');
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
})

app.get('/middleUp', function(req, res) {
  cube = turnUp(cube, 'MIDDLE');
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
})

app.get('/middleDown', function(req, res) {
  cube = turnDown(cube, 'MIDDLE');
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
})

app.get('/rightUp', function(req, res) {
  cube = turnUp(cube, 'RIGHT');
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
})

app.get('/rightDown', function(req, res) {
  cube = turnDown(cube, 'RIGHT');
  res.render('front.ejs', {face: cube.front});
  // res.json(cube);
})






app.get('/topLeft', function(req, res) {
  cube = turnLeft(cube, 'TOP');
  res.render('front.ejs', {face: cube.front});  
})

app.get('/topRight', function(req, res) {
  cube = turnRight(cube, 'TOP');
  res.render('front.ejs', {face: cube.front});
})

app.get('/middleLeft', function(req, res) {
  cube = turnLeft(cube, 'MIDDLE');
  res.render('front.ejs', {face: cube.front});
})

app.get('/middleRight', function(req, res) {
  cube = turnRight(cube, 'MIDDLE');
  res.render('front.ejs', {face: cube.front});
})


app.get('/bottomLeft', function(req, res) {
  cube = turnLeft(cube, 'BOTTOM');
  res.render('front.ejs', {face: cube.front});
})

app.get('/bottomRight', function(req, res) {
  cube = turnRight(cube, 'BOTTOM');
  res.render('front.ejs', {face: cube.front});
})














// app.get('/startAgain', function(req, res) {

// })
