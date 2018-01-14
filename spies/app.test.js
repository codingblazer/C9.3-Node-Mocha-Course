const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App',()=>{

  it('shoud call the spy directly',()=>{
    var spy = expect.createSpy();
    spy('Andrew',25);
    expect(spy).toHaveBeenCalledWith('Andrew',25);
  });
});
