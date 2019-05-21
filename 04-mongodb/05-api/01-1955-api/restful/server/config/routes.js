const ApiController = require('../controllers/api.controller');


module.exports = function (app) {
  console.log('loading routes');


   // api routes


  app.get('/', function (request, response) {
   ApiController.index(request, response);
  });

  app.get('/new/:name', function (request, response) {
    ApiController.new(request, response);
  });

  app.get('/remove/:name', function (request, response) {
    ApiController.remove(request, response);
  });

  app.get('/:name', function (request, response) {
    ApiController.show(request, response);
  });

};
