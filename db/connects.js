const mongoose = require("mongoose");

const connection = (url) => {
  return mongoose.connect(url, {
    autoIndex: true, //make this also true
  });
};

module.exports = connection;
