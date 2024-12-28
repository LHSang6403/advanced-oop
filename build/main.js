"use strict";

var ValidationFramework = require('./Validator/ValidationFramework').ValidationFramework;
var RequiredFieldRule = require('./Rule/ValidationRule/RequiredFieldRule').RequiredFieldRule;
var RegexValidationRule = require('./Rule/ValidationRule/RegexValidationRule').RegexValidationRule;
var CompositeValidationRule = require('./Rule/Composite/CompositeValidationRule').CompositeValidationRule;
var ValidationRuleBuilder = require('./Rule/Builder/ValidationRuleBuilder').ValidationRuleBuilder;
var ConsoleDisplayStrategy = require('./Display/ConsoleDisplayStrategy').ConsoleDisplayStrategy;
var DOMDisplayStrategy = require('./Display/DOMDisplayStrategy').DOMDisplayStrategy;
var ConsoleSubscriber = require('./Observer/ConsoleSubscriber').ConsoleSubscriber;
var DOMSubscriber = require('./Observer/DOMSubscriber').DOMSubscriber;
var ValidationObserver = require('./Observer/ValidationObserver').ValidationObserver;
var isStringValidationRule = require('./Rule/ValidationRule/isStringValidationRule').IsStringValidation;
var CustomValidationRule = require('./Rule/ValidationRule/CustomValidationRule').CustomValidationRule;
var framework = ValidationFramework.getInstance();
var usernameValidation = new CompositeValidationRule();
usernameValidation.addRule(new RequiredFieldRule("Username is required"));
usernameValidation.addRule(new RegexValidationRule(/^[a-zA-Z0-9_]+$/, "Username must be alphanumeric"));
var passwordValidation = new ValidationRuleBuilder().addRequired("Password is required").addMinLength(8, "Password must be at least 8 characters long").addRegex(/[A-Z]/, "Password must have at least one uppercase letter").addRegex(/\d/, "Password must have at least one digit").build();
var isStringValidation = new isStringValidationRule();
var customValidation = new CustomValidationRule(function (value) {
  return value === "hello";
}, "Value must be 'hello'");
framework.addRule('username', usernameValidation);
framework.addRule('password', passwordValidation);
framework.addRule('isString', isStringValidation);
framework.addRule('custom', customValidation);
var observer = new ValidationObserver();
observer.subscribe(new ConsoleSubscriber());
observer.subscribe(new DOMSubscriber());
framework.setDisplayStrategy({
  display: function display(errors) {
    return observer.notify(errors);
  }
});
var data = {
  username: "",
  // Không hợp lệ
  password: "",
  // Không hợp lệ
  isString: 123,
  // Không hợp lệ
  custom: "hello1"
};
var result = framework.validate(data);
if (!result.isSuccess()) {
  console.log("Validation failed!");
} else {
  console.log("Validation succeeded!");
}