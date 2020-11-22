// Dependencies
const express = require("express");
const router = express.Router();

// Controller
const LeadController = require("../controllers/lead/lead");

// Validations middleware
const LeadValidationMiddleWare = require("../middlewares/lead");

// Routes
// Create an lead
router.post(
  "/",
  LeadValidationMiddleWare.validateLeadPresentOfBodyParams,
  LeadValidationMiddleWare.validateEmailPhoneAndZipCode,
  LeadController.create
);
// Update spesific lead based on id
router.patch("/:id");
// Delete spesific lead based on id
router.delete("/:id");

module.exports = router;
