var db = require('./db.js');

module.exports.handleSignUp = (email,password)=>{
  //checkEmailNotExist();
  db.saveUser({email,password});
  //sendWelcomeEmail();
}
