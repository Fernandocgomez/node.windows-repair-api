// Dependencies 
const mongoose = require("mongoose");

const leadSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  },
    phone: { type: String, required: true, match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im },
    zipCode: { type: String, required: true, match: /^\d{5}(?:[-\s]\d{4})?$/ },
    street: { type: String, required: true },
    city: { type: String, required: true }
});

module.exports = mongoose.model("Lead", leadSchema);