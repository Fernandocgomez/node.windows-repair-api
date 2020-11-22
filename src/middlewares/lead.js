// Validations
const Validate = require("../validations/validations");

/**
 * return a 500 response if any of the request params is missing
 * @param {any} req - request
 * @param {any} res - response
 * @param {any} next - move to the next middleware
 * @return {any | void} - Returns a 500 response or nothing
 */
const validateLeadPresentOfBodyParams = (req, res, next) => {
    if(req.body === {}) {
        return res.status(500).setHeader('Content-Type', 'text/plain').json({
            message: "body is empty"
        });
    }
    if(!Validate.present(req.body.email)) {
        return res.status(500).json({
            message: "email is empty"
        });
    }
    if(!Validate.present(req.body.phone)) {
        return res.status(500).json({
            message: "phone is empty"
        });
    }
    if(!Validate.present(req.body.zipCode)) {
        return res.status(500).json({
            message: "zipCode is empty"
        });
    }
    if(!Validate.present(req.body.street)) {
        return res.status(500).json({
            message: "street is empty"
        });
    }
    if(!Validate.present(req.body.city)) {
        return res.status(500).json({
            message: "city is empty"
        });
    }
    next()
};

/**
 * return a 500 response if email, phone or zipCode is invalid
 * @param {any} req - request
 * @param {any} res - response
 * @param {any} next - move to the next middleware
 * @return {any | void} - Returns a 500 response or nothing
 */
const validateEmailPhoneAndZipCode = (req, res, next) => {
    if(!Validate.email(req.body.email)) {
        return res.status(500).json({
            message: "email is not valid"
        });
    }
    if(!Validate.phone(req.body.phone)) {
        return res.status(500).json({
            message: "phone is not valid"
        });
    }
    if(!Validate.zipCode(req.body.zipCode)) {
        return res.status(500).json({
            message: "zipCode is not valid"
        });
    }
    next();
};

module.exports = {
    validateLeadPresentOfBodyParams: validateLeadPresentOfBodyParams, 
    validateEmailPhoneAndZipCode: validateEmailPhoneAndZipCode
};