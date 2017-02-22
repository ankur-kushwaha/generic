var Router = require('restify-router').Router;
var routerInstance = new  Router();
var testService=require('./test-service');

// add a route like you would on a restify server instance
routerInstance.get('/',function respond(req, res, next) {
  testService.getName(function(name){
    res.json(name);
  })
});

module.exports=routerInstance;
