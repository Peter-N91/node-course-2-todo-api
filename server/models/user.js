const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: (value) => {    // or instead of the whole function we can put validator: validator.isEmail, then message
        return validator.isEmail(value);
      },
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      require: true
    },
    token: {
      type: String,
      require: true
    }
  }]
});


UserSchema.methods.toJSON = function () { // shows what to be returned when the mongoose model returns a JSON
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;   // instance methods get called as a document (lower case)
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens = user.tokens.concat([{access, token}]);

  return user.save().then(() => {
    return token;
  })
}; // we use the old function to bind the this keyword

UserSchema.methods.removeToken = function (token) {
  var user = this;

  return user.update({
    $pull: {
      tokens: {token}
    }
  });
};


UserSchema.statics.findByToken = function(token) {
  var User =  this; // model methods get called as a model (upper case)
  var decoded;

  // jwt.verify() // this function will throw an error if no match found so we use try catch
  try {
    decoded = jwt.verify(token, 'abc123');
  } catch (e) {
    // return new Promise((resolve, reject) => {
    //   reject();
    // });
    // OR
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token, // inside quotes because we are looking inside tokens array
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function(email, password) {
  var User = this;

  return User.findOne({email}).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    // we cannot use bcrypt as follows bcrypt.compare
    // because it's a callback and here we are using  Promises
    return new Promise((resolve, reject) => {
      //challenge
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    })
  });
};

UserSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) { // in order not to hash the hashed password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});


var User = mongoose.model('User', UserSchema);

module.exports = {User};
