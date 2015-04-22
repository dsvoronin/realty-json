var validator = require('is-my-json-valid/require');

var validate = validator('pt_realty_form_schema.json');
console.log('should be valid', validate('protools_form_full.json'));
console.error(validate.errors);