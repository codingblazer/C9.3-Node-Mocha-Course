module.exports.add = (a,b) => a+b;

module.exports.square = (x) => x*x;

module.exports.setName = (user, fullname) => {
  var names = fullname.split(' ');
  user.firstname = names[0];
  user.lastname = names[1];
  return user;
};
