const DOMDisplayStrategy      = require("./DisplayStrategy/DOMDisplayStrategy").DOMDisplayStrategy;
const ValidationFramework     = require("./ValidationFramework").ValidationFramework;
const RequiredFieldRule       = require("./Rule/RequiredFieldRule").RequiredFieldRule;
const RegexValidationRule     = require("./Rule/RegexValidationRule").RegexValidationRule;
const ConsoleDisplayStrategy  = require("./DisplayStrategy/ConsoleDisplayStrategy").ConsoleDisplayStrategy;
const CustomValidationRule    = require("./Rule/CustomValidationRule").CustomValidationRule;

const framework = ValidationFramework.getInstance();

framework.addRule("username", new RequiredFieldRule());
framework.addRule(
  "email",
  new RegexValidationRule(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
);
framework.addRule("email", new RequiredFieldRule());
framework.addRule(
    "age",
    new CustomValidationRule(
      (value) => value >= 10 && value <= 100,
      "Age must be between 10 and 100"
    )
  );

framework.setDisplayStrategy(new ConsoleDisplayStrategy());
framework.setDisplayStrategy(new DOMDisplayStrategy());

const data = {
  username: "sang le",
  email: "",
  age: 120,
};

const result = framework.validate(data);

if (!result.isSuccess()) {
  console.log("Validation failed!");
} else {
  console.log("Validation succeeded!");
}