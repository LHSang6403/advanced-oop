const ValidationFramework =
  require("./ValidationFramework").ValidationFramework;
const RequiredFieldRule = require("./Rule/RequiredFieldRule").RequiredFieldRule;
const RegexValidationRule =
  require("./Rule/RegexValidationRule").RegexValidationRule;
const ConsoleDisplayStrategy =
  require("./DisplayStrategy/ConsoleDisplayStrategy").ConsoleDisplayStrategy;

const framework = ValidationFramework.getInstance();

framework.addRule("username", new RequiredFieldRule());
framework.addRule(
  "email",
  new RegexValidationRule(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
);
framework.addRule("email", new RequiredFieldRule());

framework.setDisplayStrategy(new ConsoleDisplayStrategy());

const data = {
  username: "sang le",
  email: "",
};

const result = framework.validate(data);

if (!result.isSuccess()) {
  console.log("Validation failed!");
} else {
  console.log("Validation succeeded!");
}
