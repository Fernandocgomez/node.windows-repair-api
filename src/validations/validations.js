/**
 * Validates email
 * fernando@live.com valid
 * @param {string} email - Model email
 * @return {boolean} - Returns true if the email is valid
 */
const email = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(email);
}

/**
 * Validates phone number
 * (123) 456-7890 valid
 * (123)456-7890 valid
 * 123-456-7890 valid
 * 123.456.7890 valid
 * 1234567890 valid
 * +31636363634 valid
 * 075-63546725 valid
 * @param {string} phone - Model phone
 * @return {boolean} - Returns true if the phone number is valid
 */
const phone = (phone) => {
    const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regEx.test(phone);
}

/**
 * Validates zip code
 * 77047 valid
 * @param {string} zipCode - Model zipCode
 * @return {boolean} - Returns true if the zip code is valid
 */
const zipCode = (zipCode) => {
    const regEx = /^\d{5}(?:[-\s]\d{4})?$/;
    return regEx.test(zipCode);
}

/**
 * Validates rating
 * 0 valid
 * 0.05 valid
 * 1.5 valid
 * 5 valid
 * 5.00 valid
 * @param {string} rating - Model rating
 * @return {boolean} - Returns true if the rating is valid
 */
const rating = (rating) => {
    const regEx = /^[0-4]+(\.[0-9]{1,2})?|^[5]+(\.[0]{1,2})?$/;
    return regEx.test(rating);
}

/**
 * return false if param is empty or undefine
 * "fer" valid
 * "f" valid
 * @param {string} param - request body param
 * @return {boolean} - Returns true if the param is valid
 */
const present = (param) => {
    if(param === "" | param === undefined) {
        return false;
    } else {
        return true;
    }
}


module.exports = {
    email: email,
    phone: phone, 
    zipCode: zipCode, 
    rating: rating, 
    present: present, 
}