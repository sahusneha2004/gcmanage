// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     entryNo: {
//         type: Number,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true, // Ensure unique emails
//     },
// phoneNo: {
//     type: String,
//     required: true,
// },
//     Degree: {
//         type: String,
//         required: true,
//     },
// });

// module.exports = mongoose.model('user', userSchema);


const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    entryNo: { type: String, required: true },
    role: { type: String, enum: ['admin', 'coordinator', 'representative'], required: true },
    phoneNo: {
        type: String,
        required: true,
    },
    Degree: {
        type: String,
        required: true,
    },
    Branch: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('User', userSchema);
