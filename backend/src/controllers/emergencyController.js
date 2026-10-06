/**
 * Emergency report controller.
 *
 * Contains the request-handling logic for the /api/emergencies
 * endpoints. Controllers receive the HTTP request, interact with the
 * database through the Emergency model, and send back JSON responses.
 */
const Emergency = require('../models/Emergency');

/**
 * POST /api/emergencies
 *
 * Creates a new emergency report from the JSON request body.
 * Mongoose schema validation runs automatically on create; payloads
 * that fail the schema rules are rejected with a 400 response.
 */
const createEmergency = async (req, res) => {
  try {
    const emergency = await Emergency.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Emergency report created successfully',
      data: emergency,
    });
  } catch (error) {
    // A ValidationError means the request body failed the schema rules
    // (missing fields, invalid category, out-of-range coordinates), so
    // the problem is the client's request, not the server.
    if (error.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: error.message });
    }
    // Anything else is an unexpected server-side failure.
    res.status(500).json({ success: false, message: 'Server error while creating report' });
  }
};

/**
 * GET /api/emergencies
 *
 * Returns all stored emergency reports, newest first.
 */
const getEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: emergencies.length, data: emergencies });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error while fetching reports' });
  }
};

module.exports = { createEmergency, getEmergencies };
