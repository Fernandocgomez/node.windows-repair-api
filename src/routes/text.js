// Dependencies
const express = require("express");
const router = express.Router();

// Controller

// Routes
// Create a text
router.post("/");
// Update spesific text based on id
router.patch("/:id");
// Delete spesific text based on id
router.delete("/:id");

module.exports = router;