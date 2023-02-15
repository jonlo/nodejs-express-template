const { body, validationResult, checkSchema } = require('express-validator')
/* Validation rules

//Validation rules
const validationRules = () => {
	return [
		body(null, 'must be an array').isArray(),
		body('*.seats', 'seats field must be a number').exists().isNumeric(),
		body('*.id', 'id must be a number').exists().isNumeric(),
	]
}

const journeyValidationRules = () => {
	return [
		body('id', 'id field must be a number').exists().isNumeric(),
		body('people', 'id must be a number').exists().isInt({ min:Min_Group_Size, max:Max_Group_Size}),
	]
}

const formIdSchema = {
	ID: {
		notEmpty: true,
		isNumeric: true,
	}
}

const formIdRules = () => {
	return [
		checkSchema(formIdSchema),
	]
}

//Validate a set of rules
const validate = (req, res, next) => {
	const errors = validationResult(req)
	if (errors.isEmpty()) {
		return next()
	}
	return res.status(400).send();
}

//Validate header content type
const validateContentType = (type) => (req, res, next) => {
	if (req.headers['content-type'] !== type) {
		return res.status(400).send();
	}
	next();
}

module.exports = {
	validationRules,
	journeyValidationRules,
	formIdRules,
	validateContentType,
	validate,
}
*/