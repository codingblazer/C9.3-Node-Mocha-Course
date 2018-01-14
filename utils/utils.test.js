const utils = require('./utils');
const expect = require('expect');


describe('Utils',()=>{

describe('#Add',()=>{

  it('should add two numbers',()=>{
    var res = utils.add(33,11);
  expect(res).toBe(44).toBeA('number');
  });

  it('should add asynch',(done)=>{ //done as argument to tell this is asynch type
    utils.asyncAdd(4,3,(sum)=>{
      expect(sum).toBe(7).toBeA('number');
      done(); //to tell mocha to  finish the test now
    });
  });

});


  it('should square',()=>{
    var res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
  });

  it('should expect some value',()=>{
    expect({name:'Andrew', age:25}).toInclude({age:25});
  });

  it('should return correct names',()=>{
    expect(utils.setName({},'Sachin Aggarwal')).toEqual({firstname:'Sachin',lastname:'Aggarwal'});
  });

});
