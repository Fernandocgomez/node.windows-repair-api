// Dependencies 
const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    typeWork: { type: String, required: true },
    whatNeedToBeRepair: { type: String, required: true },
    windowsStyle: { type: String, required: true },
    windowsMaterial: { type: String, required: true },
    windowsNumber: { type: String, required: true },
    windowsSize: { type: String, required: true },
    ladderRequired: { type: String, required: true },
    notesAboutTheJob: { type: String, required: false },
    lead: { type: mongoose.Schema.Types.ObjectId, ref: "Lead", required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: "Provider", required: true }
});

module.exports = mongoose.model("Quote", quoteSchema);