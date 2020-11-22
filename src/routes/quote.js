// Dependencies
const express = require("express");
const router = express.Router();

// Controller

// Routes
// Create a quote
router.post("/");
// Update spesific quote based on id
router.patch("/:id");
// Delete spesific quote based on id
router.delete("/:id");

module.exports = router;