// Dependencies
const mongoose = require("mongoose");

// Modles 
const Lead = require("../../models/lead");

/**
 * @api {post} /leads
 * 
 * @apiDescription create an instance of the lead model
 * 
 * @apiParamExample {json} Request-Example:
 * 
{
    name: string;
    email: string;
    phone: string;
    zipCode: string;
    street: string;
    city: string;

}
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
{
    message: string;
    lead: {
        _id: string;
        name: string;
        email: string;
        phone: string;
        zipCode: string;
        street: string;
        city: string;
    }
}
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server
 *     {
 *       error: HttpError;
 *     }
 * 
 *  * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server
 *     {
 *       message: string;
 *     }
 */
const create = (req, res, next) => {
    const lead = new Lead({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        zipCode: req.body.zipCode,
        street: req.body.street,
        city: req.body.city
    })
    return lead.save()
    .then(result => {
        res.status(200).json({
            message: "Lead has been created", 
            lead: {
                _id: new mongoose.Types.ObjectId(),
                name: result.name,
                email: result.email,
                phone: result.phone,
                zipCode: result.zipCode,
                street: result.street,
                city: result.city
            }
        })
    })
    .catch((error) => {
        res.status(500).json({
            error: error 
        });
    });
}

module.exports = create;