const ValidationRule = require("./ValidationRule").ValidationRule;

class IsNumberValidator extends ValidationRule {
  constructor(message = "Value is not a number") {
    super(message);
  }

  validate(value) {
    return typeof value === "number";
  }
}

module.exports.IsNumberValidator = IsNumberValidator;