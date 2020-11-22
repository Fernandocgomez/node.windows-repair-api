// Dependencies
const express = require("express");
const router = express.Router();

// Controller

// Routes
// Create an email
router.post("/");
// Update spesific email based on id
router.patch("/:id");
// Delete spesific email based on id
router.delete("/:id");

module.exports = router;