const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    notes: [{type: mongoose.SchemaTypes.ObjectID, ref: "Note"}]
})

module.exports = mongoose.models.User || mongoose.model("User", userSchema)