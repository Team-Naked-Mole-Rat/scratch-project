const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assesmentSchema = new Schema({
  assessment: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('assesment', assesmentSchema);
