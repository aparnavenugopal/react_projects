const mongoose = require('mongoose');

const userPreferencesSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  interest: {
    type: [String],
    default: []
  },
  subscribe: {
    type: Boolean,
    default: false
  },
  notificationPreference: {
    type: String,
    default: 'email'
  }
}, {
  timestamps: true
});

// 🔒 Add unique index to prevent duplicates
userPreferencesSchema.index(
  { email: 1, age: 1, interest: 1, subscribe: 1, notificationPreference: 1 },
  { unique: true }
);

module.exports = mongoose.model('UserPreferences', userPreferencesSchema);