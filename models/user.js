const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  entryNo: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "coordinator", "representative", "none"],
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
