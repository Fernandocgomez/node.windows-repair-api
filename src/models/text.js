// Dependencies 
const mongoose = require("mongoose");

const textSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userPhone: { type: String, required: true, match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im },
    providerPhone: { type: String, required: true, match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im },
    content: { type: String, required: true },
    quote: { type: mongoose.Schema.Types.ObjectId, ref: "Quote", required: true }
});

module.exports = mongoose.model("Text", textSchema);