//const { MinLengthDecorator } = require('nodejs-validator-framework');

const ValidationFramework = require('./Validator/ValidationFramework').ValidationFramework;
const RequiredFieldRule = require('./Rule/ValidationRule/RequiredFieldRule').RequiredFieldRule;
const RegexValidationRule = require('./Rule/ValidationRule/RegexValidationRule').RegexValidationRule;
const CompositeValidationRule = require('./Rule/Composite/CompositeValidationRule').CompositeValidationRule;
const ValidationRuleBuilder = require('./Rule/Builder/ValidationRuleBuilder').ValidationRuleBuilder;
const ConsoleDisplayStrategy = require('./Display/ConsoleDisplayStrategy').ConsoleDisplayStrategy;
const DOMDisplayStrategy = require('./Display/DOMDisplayStrategy').DOMDisplayStrategy;
const ConsoleSubscriber = require('./Observer/ConsoleSubscriber').ConsoleSubscriber;
const DOMSubscriber = require('./Observer/DOMSubscriber').DOMSubscriber;
const ValidationObserver = require('./Observer/ValidationObserver').ValidationObserver;
const isStringValidationRule = require('./Rule/ValidationRule/isStringValidationRule').IsStringValidation;
const CustomValidationRule = require('./Rule/ValidationRule/CustomValidationRule').CustomValidationRule;
const MinLengthDecorator = require('./Rule/Decorator/MinLengthDecorator').MinLengthDecorator;

const framework = ValidationFramework.getInstance();

const usernameValidation = new CompositeValidationRule();
usernameValidation.addRule(new RequiredFieldRule("Username is required"));
usernameValidation.addRule(
  new RegexValidationRule(/^[a-zA-Z0-9_]+$/, "Username must be alphanumeric")
);

const passwordValidation = new ValidationRuleBuilder()
  .addRequired("Password is required")
  .addMinLength(8, "Password must be at least 8 characters long")
  .addRegex(/[A-Z]/, "Password must have at least one uppercase letter")
  .addRegex(/\d/, "Password must have at least one digit")
  .build();

const isStringValidation = new isStringValidationRule();

const customValidation = new CustomValidationRule((value) => value === "hello", "Value must be 'hello'");


framework.addRule('username', usernameValidation);
framework.addRule('password', passwordValidation);
framework.addRule('isString', isStringValidation);
framework.addRule('custom', customValidation);

const observer = new ValidationObserver();
observer.subscribe(new ConsoleSubscriber());
observer.subscribe(new DOMSubscriber());

framework.setDisplayStrategy({
  display: (errors) => observer.notify(errors),
});

const data = {
  username: "", // Không hợp lệ
  password: "", // Không hợp lệ
  isString: 123, // Không hợp lệ
  custom: "hello1" 
};


const result = framework.validate(data);

if (!result.isSuccess()) {
  console.log("Validation failed!");
} else {
  console.log("Validation succeeded!");
}

const minLengthDecorator = new MinLengthDecorator(new RequiredFieldRule("Username is required"), 5, "Username must be at least 5 characters long");
console.log(minLengthDecorator.validate("1234"));