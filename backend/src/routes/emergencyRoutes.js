/**
 * Emergency report routes.
 *
 * Groups the HTTP endpoints for the /api/emergencies resource and maps
 * each one to its controller function. Keeping routes separate from
 * controllers makes it easy to see all available endpoints at a glance.
 */
const express = require('express');
const { createEmergency, getEmergencies } = require('../controllers/emergencyController');

const router = express.Router();

router.post('/', createEmergency);
router.get('/', getEmergencies);

module.exports = router;
