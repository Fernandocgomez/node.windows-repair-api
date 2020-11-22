// Dependencies
const express = require("express");
const router = express.Router();

// Controller

// Routes
// Get spesific review based on the id
router.get("/:id");
// Create a review
router.post("/");
// Update spesific review based on id
router.patch("/:id");
// Delete spesific review based on id
router.delete("/:id");

module.exports = router;