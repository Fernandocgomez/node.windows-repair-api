// Dependencies
const express = require("express");
const router = express.Router();

// Controller

// Routes
// Create an lead
router.post("/");
// Update spesific lead based on id
router.patch("/:id");
// Delete spesific lead based on id
router.delete("/:id");

module.exports = router;