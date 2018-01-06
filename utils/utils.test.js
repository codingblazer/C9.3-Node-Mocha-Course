const utils = require('./utils');
it('should add two numbers',()=>{
  var res = utils.add(33,11);

  if(res!== 44){
    throw new Error(`Expected 44, but got ${res}`); //this function is used to fail the test. See that if you make addition wrong in utils.js i.e. do a+b+3 => test will fail
  }
});

it('should square',()=>{
  var res = utils.square(4);

  if(res!== 16){
    throw new Error(`Expected 44, but got ${res}`); //this function is used to fail the test. See that if you make addition wrong in utils.js i.e. do a+b+3 => test will fail
  }
});
