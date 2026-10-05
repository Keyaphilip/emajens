/**
 * Emergency report model.
 *
 * Defines the Mongoose schema for the "emergencies" collection.
 * Each document represents one emergency report submitted by a campus
 * user, as described in the project documentation (type, description,
 * location, status, and date/time).
 */
const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema(
  {
    // Category of the emergency. "type" is the field name used in the
    // documented API example; the enum restricts values to the emergency
    // categories listed in the project documentation.
    type: {
      type: String,
      required: [true, 'Emergency type is required'],
      enum: ['Security', 'Medical', 'Fire', 'Accident', 'Suspicious Activity', 'Other'],
    },

    description: {
      type: String,
      required: [true, 'A description of the emergency is required'],
      trim: true, // Remove leading/trailing whitespace before saving
    },

    // Geographic coordinates associated with the report, matching the
    // documented API example. Optional: a report may be submitted without
    // coordinates. The range checks keep invalid coordinates out of the
    // database.
    location: {
      latitude: {
        type: Number,
        min: -90,
        max: 90,
      },
      longitude: {
        type: Number,
        min: -180,
        max: 180,
      },
    },

    // Lifecycle of the report. New reports always start as "Pending".
    status: {
      type: String,
      enum: ['Pending', 'Under Review', 'Resolved'],
      default: 'Pending',
    },
  },
  {
    // Automatically add createdAt and updatedAt fields, which provide
    // the "date and time" information required for each report.
    timestamps: true,
  }
);

module.exports = mongoose.model('Emergency', emergencySchema);
