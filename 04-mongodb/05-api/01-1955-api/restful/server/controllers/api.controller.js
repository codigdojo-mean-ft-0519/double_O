const mongoose = require('mongoose');
const User = mongoose.model('User');
// const Book = require('../models/book.model');

module.exports = {
  // is used for getting all of a resource (apis)
  index(request, response) {
    User.find({})
      .then(user => response.json(user))
      .catch(error => response.json(error));
  },
  // used for getting a single resource (one book)
  show(request, response) {
    User.findOne(request.params)
      .then(user => {
          response.json(user ? user : "They weren't born in 1955");
      })
      .catch(error => response.json(error));
  },

  // used for showing form to create resource (user)
  new(request, response) {
    User.create(request.params)
    .then(user => response.json(user))
    .catch(error => response.json(error));
  },

  destroy(request, response) {
      User.remove(request.params)
        .then(outcome => response.json(outcome))
        .catch(error => response.json(error));
  },
};
