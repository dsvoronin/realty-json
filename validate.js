var validator = require('is-my-json-valid/require');

var validate = validator('pt_realty_form_schema.json');

var result = validate('protools_form_full.json');
if(!result) {
throw JSON.stringify(validate.errors);
}