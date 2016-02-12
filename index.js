var express = require('express')
var redis   = require('redis')

var app = express();

var client = redis.createClient('6379', 'redis')
console.log('This is the redis client  ::',client);

app.get('/', function(req, res, next){
  client.incr('counter',function(err, counter){
    if(err){
      return next(err);
    }
    console.log('This is what your counter looks like ::', counter);
    res.send('This page has been viewed '+ counter + " times.");
  });
})

app.listen('8080', function(){
  console.log('Ready to serve!');
})
