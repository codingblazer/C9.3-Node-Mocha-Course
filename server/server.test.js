const request = require('supertest');

var app = require('./server').app;

it('should return hello',(done)=>{
  request(app)
    .get('/')
    .expect(404)
    .expect({
      error:'page not found'
    })
    .end(done);
});
