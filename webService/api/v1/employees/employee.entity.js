let mongoose = require('mongoose');

let schema = new mongoose.Schema({
  name: { type: String, unique: true },
  dob: { type: Date, required: true },
  department: { type: String },
  email: { type: String },
  joinedon: { type: Date, default: Date.now() }
});

// Export the Model
module.exports = mongoose.model('employees', schema);