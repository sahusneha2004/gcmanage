const mongoose = require('mongoose');
const hallSchema = new mongoose.Schema({
    name: { type: String, required: true },
    representative: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    totalPoints: { type: Number, default: 0 },
});
module.exports = mongoose.model('Hall', hallSchema);
