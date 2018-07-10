var express = require('express');
var router = express.Router();
var appConfig = require('../appConfig.js')

console.log("Starting api setup");

router.get('/', function(req, res, next) {
  res.send('Works!');
});

router.get('/_config', function(req, res, next){
  res.send(appConfig);
})

router.get('/_help', function(req, res, next){
  res.send('_help in progress');
});

router.get('/data/:collection/:id', function(req, res, next){
  let fullInfo = {
    'FunctionCall' : 'Info by collection+id',
    'Method': req.method,
    'Parameters': req.params,
    'Full Url': req.url
  }
  console.log(fullInfo);
  res.send(fullInfo);
});

router.get('/data/:collection', function(req, res, next){
  let fullInfo = {
    'FunctionCall' : 'Info collection',
    'Method': req.method,
    'Parameters': req.params,
    'Full Url': req.url
  }
  console.log(fullInfo);
  res.send(fullInfo);
});


console.log("Finish starting setup");
module.exports = router;