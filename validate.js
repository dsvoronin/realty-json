var validator = require('is-my-json-valid');
var fs = require('fs');
var schema = JSON.parse(fs.readFileSync('./pt_realty_form_schema.json', 'utf8'));
var target = JSON.parse(fs.readFileSync('./protools_form_full.json', 'utf8'));
var validate = validator(schema, {verbose: true, greedy: true});

var result = validate(target);
if (!result) {
    throw validate.errors.map(function (obj) {
        return JSON.stringify(obj);
    }).join("\n");
}