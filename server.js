var express = require('express');
var up = require('./moves/up-down.js').up;
var down = require('./moves/up-down.js').down;

var app = express();


var cube = {
  front: ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
  back: ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  top: ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
  bottom: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'],
  left: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  right: ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
};


// APIs
app.get('/', function(req, res) {
  res.json(cube);
});




app.listen('3000', function(err) {
  if(err) console.log(err);
  else console.log('server is runnning at port 3000');
});






app.get('/up', function(req, res) {
  cube = up(cube);
  res.json(cube);
});


app.get('/down', function(req, res) {
  cube = down(cube);
  res.json(cube);
})

// app.get('/left', function(req, res) {

// })

// app.post('/right', function(req, res) {

// });










// app.get('/topLeft', function(req, res) {

// })

// app.get('/topRight', function(req, res) {

// })

// app.get('/middleLeft', function(req, res) {

// })

// app.get('/middleRight', function(req, res) {

// })


// app.get('/bottomLeft', function(req, res) {

// })

// app.get('/bottomRight', function(req, res) {

// })








// app.get('/leftUp', function(req, res) {

// })

// app.get('/leftDown', function(req, res) {

// })

// app.get('/middleUp', function(req, res) {

// })

// app.get('/middleDown', function(req, res) {

// })

// app.get('/rightUp', function(req, res) {

// })

// app.get('/rightDown', function(req, res) {

// })






// app.get('/startAgain', function(req, res) {

// })
