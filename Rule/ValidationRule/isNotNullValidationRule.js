const ValidationRule = require("../ValidationRule").ValidationRule;

class IsNotNullValidator extends ValidationRule {
  constructor(message = "Value is null") {
    super(message);
  }

  validate(value) {
    return value !== null;
  }
}

module.exports.IsNotNullValidator = IsNotNullValidator;