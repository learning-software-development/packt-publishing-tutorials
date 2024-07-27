var chai = require('chai');

var expect = chai.expect;
var should = chai.should();

var request = require('request');
var config = require('config');

global.domain = 'http://' + config.host + ':' + config.port;

describe('---Testing the task list api---', function () {
  it('GET: Task list', function (done) {
    var options = {
      url: domain + '/task',
      headers: {
        'Content-Type': 'application/json'
      },
      json: {
        tasks: 'Hello world'
      }
    };
    request.post(options, function (error, response, body) {
      response.statusCode.should.equal(200);
      expect(body).to.be.a('array');
      expect(body).to.include(options.json.task);
      done();
    });
  });
});
