const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  // Define organization schema fields
  name: { type: String, required: true },
  location: String,
  organizationId:Number,
  emp_id: {
    type: Number,
    unique: true,
    required: true,
  },
});

const OrganizationModel = mongoose.model('Organization', organizationSchema);

module.exports = OrganizationModel;
