const ValidationFramework = require('./ValidationFramework').ValidationFramework;
const RequiredFieldRule = require('./Rule/ValidationRule/RequiredFieldRule').RequiredFieldRule;
const RegexValidationRule = require('./Rule/ValidationRule/RegexValidationRule').RegexValidationRule;
const CompositeValidationRule = require('./Rule/Composite/CompositeValidationRule').CompositeValidationRule;
const ValidationRuleBuilder = require('./Rule/Builder/ValidationRuleBuilder').ValidationRuleBuilder;
const ConsoleDisplayStrategy = require('./DisplayStrategy/ConsoleDisplayStrategy').ConsoleDisplayStrategy;
const DOMDisplayStrategy = require('./DisplayStrategy/DOMDisplayStrategy').DOMDisplayStrategy;
const ConsoleSubscriber = require('./Observer/ConsoleSubscriber').ConsoleSubscriber;
const DOMSubscriber = require('./Observer/DOMSubscriber').DOMSubscriber;
const ValidationObserver = require('./Observer/ValidationObserver').ValidationObserver;

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

framework.addRule('username', usernameValidation);
framework.addRule('password', passwordValidation);

const observer = new ValidationObserver();
observer.subscribe(new ConsoleSubscriber());
observer.subscribe(new DOMSubscriber());

framework.setDisplayStrategy({
  display: (errors) => observer.notify(errors),
});

const data = {
  username: "", // Không hợp lệ
  password: "", // Không hợp lệ
};

const result = framework.validate(data);

if (!result.isSuccess()) {
  console.log("Validation failed!");
} else {
  console.log("Validation succeeded!");
}