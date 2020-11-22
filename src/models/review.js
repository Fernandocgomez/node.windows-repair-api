// Dependencies 
const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    rate: { type: String, required: true,  match: /^[0-4]+(\.[0-9]{1,2})?|^[5]+(\.[0]{1,2})?$/},
    content: { type: String, required: true, unique: true },
    picture: { type: String, required: false, default: "pictureurl" }, 
    provider: { type: mongoose.Schema.Types.ObjectId, ref: "Provider", required: true }
});

module.exports = mongoose.model("Review", reviewSchema);