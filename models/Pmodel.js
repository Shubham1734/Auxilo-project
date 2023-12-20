const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
  // Define personal details schema fields
  name: String,
  age: Number,
  mob : Number,
  emp_id: {
    type: Number,
    unique: true,
    required: true,
  }
});

const PersonalDetailsModel = mongoose.model('PersonalDetails', personalDetailsSchema);

module.exports = PersonalDetailsModel;
