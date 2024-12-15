const ValidationRule = require("../ValidationRule").ValidationRule;

class IsNotEmptyValidator extends ValidationRule {
  constructor(message = "Value is empty") {
    super(message);
  }

  validate(value) {
    return value !== "";
  }
}

module.exports.IsNotEmptyValidator = IsNotEmptyValidator;
