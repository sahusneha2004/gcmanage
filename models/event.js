// const mongoose = require('mongoose');

// const EventSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     coordinator: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'user', // Single event coordinator
//         required: true,
//     },
//     teams: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Team', // Multiple teams participating in the event
//         },
//     ],
// });

// module.exports = mongoose.model('Event', EventSchema);


const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
});
module.exports = mongoose.model('Event', eventSchema);
