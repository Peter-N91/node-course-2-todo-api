var {User} = require('./../models/user');


// Define the middleware function
var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject(); // it will trigger the catch function
    }

    req.user = user;
    req.token = token;
    next(); // otherwise the function after it will never be executed
  }).catch((e) => {
    res.status(401).send(); // here we will not call next because we don't want the function to run
  });
};



module.exports = {authenticate};
