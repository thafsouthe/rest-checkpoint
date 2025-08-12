// server.js

// 1️⃣ Load environment variables from config/.env
require('dotenv').config({ path: './config/.env' });

// 2️⃣ Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import User model

// 3️⃣ Create Express app
const app = express();

// 4️⃣ Middleware to parse JSON
app.use(express.json());

// 5️⃣ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// 6️⃣ Test route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// ========================= CRUD ROUTES ========================= //

// 📌 GET: Return all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 📌 POST: Add a new user
app.post('/users', async (req, res) => {
  try {
    const { name, email, age } = req.body; // extract data from request body
    const newUser = new User({ name, email, age });
    await newUser.save(); // save to DB
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 📌 PUT: Edit a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, // id from URL
      req.body,      // new data
      { new: true, runValidators: true } // return updated doc, validate fields
    );
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 📌 DELETE: Remove a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ========================= END CRUD ROUTES ========================= //

// 7️⃣ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
