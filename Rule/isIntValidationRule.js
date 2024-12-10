const ValidationRule = require("./ValidationRule").ValidationRule;

class IsIntValidator extends ValidationRule {
  constructor(message = "Value is not an integer") {
    super(message);
  }

  validate(value) {
    return Number.isInteger(value);
  }
}

module.exports.IsIntValidator = IsIntValidator;