const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const Team = require('../models/team');
const User = require('../models/user');

// Get all events
router.get('/events', async (req, res) => {
    try {
        const events = await Event.find().populate('coordinator teams');
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Create an event and assign a coordinator
router.post('/events', async (req, res) => {
    const { name, description, coordinatorId } = req.body;
    try {
        const event = new Event({ name, description, coordinator: coordinatorId });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Select hall representatives (assuming it's about assigning roles)
router.post('/hall-representatives', async (req, res) => {
    const { userId, role } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.role = role; // Assume role is a new field in the user schema
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
