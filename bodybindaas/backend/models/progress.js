const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  weight: Number,
  bodyShape: String,
  calories: Number,
  protein: Number,
  vitamins: Object,
}, { timestamps: true });

module.exports = mongoose.model('progress', progressSchema);
