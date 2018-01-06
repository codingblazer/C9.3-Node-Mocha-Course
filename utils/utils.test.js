const utils = require('./utils');
const expect = require('expect');

it('should add two numbers',()=>{
  var res = utils.add(33,11);

  // if(res!== 44){
  //   throw new Error(`Expected 44, but got ${res}`); //this function is used to fail the test. See that if you make addition wrong in utils.js i.e. do a+b+3 => test will fail
  // }
  expect(res).toBe(44).toBeA('number');
});

it('should square',()=>{
  var res = utils.square(4);

  expect(res).toBe(16).toBeA('number');
});

it('should expect some value',()=>{
  // expect(12).toNotBe(12);
  // expect({name:'Andrew'}).toBe({name:'Andrew'}); this will fail because these are not equal => these are 2 diff objects with same prop
  // expect({name:'Andrew'}).toEqual({name:'Andrew'}); //this checks if objects are equal valuewise, same to be done for arrays as they are also objects
  // expect([2,3,4]).toInclude(5);
  // expect([1,2,3]).toExclude(5);
  expect({name:'Andrew', age:25}).toInclude({age:25});


});

it('should return correct names',()=>{
  expect(utils.setName({},'Sachin Aggarwal')).toEqual({firstname:'Sachin',lastname:'Aggarwal'});
});

it('should add asynch',()=>{
  utils.asyncAdd(4,3,(sum)=>{
    expect(sum).toBe(10).toBeA('number');
  });
});
