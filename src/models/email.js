// Dependencies 
const mongoose = require("mongoose");

const emailSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userEmail: { type: String, required: true, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
    providerEmail: { type: String, required: true, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
    subject: { type: String, required: true },
    content: { type: String, required: true },
    quote: { type: mongoose.Schema.Types.ObjectId, ref: "Quote", required: true }
});

module.exports = mongoose.model("Email", emailSchema);