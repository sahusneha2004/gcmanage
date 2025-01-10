// const mongoose = require('mongoose');

// const TeamSchema = new mongoose.Schema({
//     event: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Event', // Links team to a specific event
//         required: true,
//     },
//     hallMembership: {
//         type: String,
//         required: true,
//     },
//     teamName: {
//         type: String,
//         required: true,
//     },
//     whySelect: {
//         type: String,
//         required: true,
//     },
//     members: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'user', // Points to team members
//         },
//     ],
//     accepted: {
//         type: Boolean,
//         default: false,
//     },
// });

// module.exports = mongoose.model('Team', TeamSchema);

const mongoose = require('mongoose');
const teamSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    hallMembership: { type: String, required: true },
    teamName: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    score: { type: Number, default: 0 }, // Updated by coordinators
});
module.exports = mongoose.model('Team', teamSchema);

