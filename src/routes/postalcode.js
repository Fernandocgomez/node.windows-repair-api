// Dependencies
const express = require("express");
const router = express.Router();

// Controller

// Routes
// Get all postal code on DB
router.get("/")
// Create an postal code
router.post("/");
// Update spesific postal code based on id
router.patch("/:id");
// Delete spesific postal code based on id
router.delete("/:id");
// Gets all the providers associted with postal code
router.get("/:zipcode") 


module.exports = router;