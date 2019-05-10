var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dashboardSchema = new Schema({

  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  url: {
    type: String
  },
  phoneNumber: {
    type: String
  },

  gender: {
    type: String,
    default: ''
  },
  DOB: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  roleId: {
    type: String,
    default: '1'  //by default 1 for admin
  },

});

var dashboardDetails = mongoose.model('dashboard', dashboardSchema);

module.exports = dashboardDetails;

