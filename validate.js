'use strict';
var validator = require('is-my-json-valid');
var fs = require('fs');

var tests = [
    {
        schema: './pt_form_schema.json',
        targets: [
            './pt_realty_form.json',
            './pt_auto_form.json',
            './pt_services_new_form.json'
        ]
    },
    {
        schema: './pt_services_form_schema.json',
        targets: [
        './services_form_moving.json'
        ]
    }
];



tests.forEach(function(test) {
   var schema = JSON.parse(fs.readFileSync(test.schema, 'utf8'));
   test.targets.forEach(function(targetPath) {
        var target = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        var validate = validator(schema, {verbose: true, greedy: true});
        console.log('validating [' + targetPath + '] against [' + test.schema + ']...');
        var result = validate(target);
        if (!result) {
            throw validate.errors.map(function (obj) {
                return JSON.stringify(obj);
            }).join('\n');
        }
    });
});

