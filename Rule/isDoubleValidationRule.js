const ValidationRule = require("./ValidationRule").ValidationRule;

class IsDoubleValidator extends ValidationRule {
  constructor(message = "Value is not a double") {
    super(message);
  }

  validate(value) {
    return typeof value === "number" && !isNaN(value);
  }
}

module.exports.IsDoubleValidator = IsDoubleValidator;