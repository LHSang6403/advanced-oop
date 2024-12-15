const ValidationRule = require("../ValidationRule").ValidationRule;

class CustomValidationRule extends ValidationRule {
  constructor(callback, message = "Validation failed") {
    super(message);
    this.callback = callback;
  }

  validate(value) {
    return this.callback(value);
  }
}

module.exports.CustomValidationRule = CustomValidationRule;
