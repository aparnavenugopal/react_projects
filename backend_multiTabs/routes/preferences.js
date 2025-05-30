const express = require('express');
const router = express.Router();
const UserPreferences = require('../models/UserPreferences');


router.post('/submit-all', async (req, res) => {
  const { age, email, interest, subscribe, notificationPreference } = req.body;

  try {
    const preferences = await UserPreferences.create({
      age,
      email,
      interest: Array.isArray(interest) ? interest : [interest],
      subscribe,
      notificationPreference
    });

    res.status(201).json(preferences);
  } catch (err) {
    console.error('Error saving full preferences:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;