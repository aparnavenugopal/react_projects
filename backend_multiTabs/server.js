const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userPreferencesRoutes = require('./routes/preferences');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://aparnavenugopal1996:Targetcat430@cluster0.zbjjj.mongodb.net/multitabform?retryWrites=true&w=majority');

app.use('/api/preferences', userPreferencesRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});