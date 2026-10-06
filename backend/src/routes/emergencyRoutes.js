
/**
 * Emergency report routes.
 *
 * Groups the HTTP endpoints for the /api/emergencies resource and maps
 * each one to its controller function. Keeping routes separate from
 * controllers makes it easy to see all available endpoints at a glance.
 */
const express = require('express');
const { createEmergency, getEmergencies, getEmergencyById } = require('../controllers/emergencyController');

const router = express.Router();

router.post('/', createEmergency);
router.get('/', getEmergencies);

// Parameterized routes go last: /:id matches ANY single path segment,
// so it would swallow any fixed GET route declared below it.
router.get('/:id', getEmergencyById);

module.exports = router;
