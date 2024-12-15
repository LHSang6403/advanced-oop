const ValidationRule = require("../ValidationRule").ValidationRule;
const RequiredFieldRule  = require("../ValidationRule/RequiredFieldRule").RequiredFieldRule;
const MinLengthValidationRule = require("../ValidationRule/MinLengthValidationRule").MinLengthValidationRule;
const RegexValidationRule  = require("../ValidationRule/RegexValidationRule").RegexValidationRule;

class PasswordValidationRule extends ValidationRule {
  constructor(message = "Password validation failed") {
    super(message);

    this.rules = [
      new RequiredFieldRule("Password is required"),
      new MinLengthValidationRule(8, "Password must be at least 8 characters long"),
      new RegexValidationRule(/[A-Z]/, "Password must have at least one uppercase letter"),
      new RegexValidationRule(/[a-z]/, "Password must have at least one lowercase letter"),
      new RegexValidationRule(/\d/, "Password must have at least one digit"),
    ];
  }

  validate(value) {
    if (!value) {
      return false;
    }
    return this.rules.every((rule) => rule.validate(value));
  }

  getMessages(value) {
    return this.rules
      .filter((rule) => !rule.validate(value))
      .map((rule) => rule.getMessage());
  }
}

module.exports.PasswordValidationRule = PasswordValidationRule;
