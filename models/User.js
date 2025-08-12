// models/User.js

const mongoose = require('mongoose');

// 1️⃣ Define the schema (fields and rules)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // must be provided
  },
  email: {
    type: String,
    required: true,
    unique: true // no duplicates allowed
  },
  age: {
    type: Number,
    required: true
  }
}, { timestamps: true }); // adds createdAt & updatedAt automatically

// 2️⃣ Create the model from the schema
const User = mongoose.model('User', userSchema);

// 3️⃣ Export the model so we can use it in other files
module.exports = User;
