const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App',()=>{

  it('shoud call the spy directly',()=>{
    var spy = expect.createSpy();
    spy('Andrew',25);
    expect(spy).toHaveBeenCalledWith('Andrew',25);
  });

  var db = {
    saveUser : expect.createSpy()
  };

  app.__set__('db',db);

  it('should call saveUser with user object',()=>{
    var email = 'sasachin04@gmail.com';
    var password = '123abc';

    app.handleSignUp(email,password);

    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });

});
