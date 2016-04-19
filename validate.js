'use strict';
var fs = require('fs');
var Ajv = require('ajv');

var ajv = Ajv(
  {
    // allErrors: true
  }
);

var tests = [
    {
        schema: './pt_form_schema.json',
        targets: [
            './pt_realty_form.json',
            './pt_auto_form.json',
            './pt_realty_filters_and_sorts.json'
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

        var validate = ajv.compile(schema)
        console.log('validating [' + targetPath + '] against [' + test.schema + ']...');

        var result = validate(target)

        if (!result) {
            console.log(validate.errors)
        }
    });
});
