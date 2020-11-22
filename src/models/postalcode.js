// Dependencies 
const mongoose = require("mongoose");

const textSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    zipcode: { type: String, required: true, unique: true, match: /^\d{5}(?:[-\s]\d{4})?$/ },
});

module.exports = mongoose.model("Text", textSchema);