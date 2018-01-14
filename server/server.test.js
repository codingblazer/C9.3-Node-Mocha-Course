const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello',(done)=>{
  request(app)
    .get('/')
    .expect(404)
    .expect((res)=>{
      expect(res.body).toInclude({
        error:'page not found'
      });
    })
    .end(done);
});
