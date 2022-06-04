const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  host_name: {
    type: String,
    required: [true, "Please provide name"],
    maxlength: [20, "Name is too long"],
    minlength: [3, "Name is too short"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  phone_number: {
    type: String,
    required: [true, "Please provide a phone number"],
    match: [
      /^\(?(\d{3,4})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
      "Please provide a valid phone number",
    ],
  },
  apartment_address: {
    type: String,
    required: [true, "Please provide an address"],
  },
  image: {
    type: String,
    required: [true, "Please provide some images"],
  },
  home_stay: {
    type: Boolean,
    default: false,
  },
  rent: {
    type: Boolean,
    default: false,
  },
  star: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("FormSchema", FormSchema);
