const ValidationRule = require("./ValidationRule").ValidationRule;

class MinLengthValidationRule extends ValidationRule {
  constructor(minLength, message = "Exceeded maximum value") {
    super(message);
    this.minLength = minLength;
  }

  validate(value) {
    return value.length >= this.minLength;
  }
}

module.exports.MinLengthValidationRule = MinLengthValidationRule;