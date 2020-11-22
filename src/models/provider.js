// Dependencies 
const mongoose = require("mongoose");

const providerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  },
    phone: { type: String, required: true, match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im },
    description: { type: String, required: true },
    googleReviewRate: { type: String, required: true,  match: /^[0-4]+(\.[0-9]{1,2})?|^[5]+(\.[0]{1,2})?$/},
    address: { type: String, required: true, unique: true },
    logo: { type: String, required: false, default: "logourl" },
    postalcode: { type: mongoose.Schema.Types.ObjectId, ref: "Postalcode", required: true }
});

module.exports = mongoose.model("Provider", providerSchema);