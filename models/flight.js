const mongoose = require('mongoose');
const flightSchema = new mongoose.Schema({
  airline: { type: String, enum: ['American', 'Southwest', 'United'] },
  airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN' },
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: { type: Date, default: new Date().getFullYear() + 1 },
});
module.exports = mongoose.model('Flight', flightSchema)
