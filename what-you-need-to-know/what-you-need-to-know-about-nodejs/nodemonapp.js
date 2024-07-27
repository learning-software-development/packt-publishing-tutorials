var express = require('express');
var config = require('config');
var bodyParser = require('body-parser');
var _ = require('lodash');

var app = express();
app.listen(config.port);
app.use(bodyParser.json());

var taskList = [];

app.get('/list', function (request, response) {
  response.send(taskList);
});

app.post('/task', [validationMiddleware, function (request, response) {
  var task = request.body.task;
  taskList.push(task);
  response.send(taskList);
}]);

app.put('/task/:task_index', [validationMiddleware, function (request, response) {
  var taskIndex = request.params.task_index;
  taskList[taskIndex] = request.body.task
  response.send(taskList);
}]);

app.delete('/task/:task_index', function (request, response) {
  var taskIndex = request.params.task_index;
  taskList.splice(taskIndex, 1)
  response.send(taskList);
});

function validationMiddleware(request, response, next) {
  if (_.isEmpty(request.body.task)) {
    return response.status(422).send("Task is empty");
  }
  return next();
}
