const request = require('supertest');

var app = require('./server').app;

it('should return hello',(done)=>{
  request(app)
    .get('/')
    .expect(200)
    .expect('hello')
    .end(done);
});
