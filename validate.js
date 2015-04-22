var validator = require('is-my-json-valid');
var schema = require('./pt_realty_form_schema.json');
var validate = validator(JSON.parse(schema), {verbose: true}, {greedy: true});

var result = validate('protools_form_full.json');
if (!result) {
    throw JSON.stringify(validate.errors);
}