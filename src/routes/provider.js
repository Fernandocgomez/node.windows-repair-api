// Dependencies
const express = require("express");
const router = express.Router();

// Controller

// Routes
// Get spesific provider based on the id
router.get("/:id");
// Create a provider
router.post("/");
// Update spesific provider based on id
router.patch("/:id");
// Delete spesific provider based on id
router.delete("/:id");

module.exports = router;