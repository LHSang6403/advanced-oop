const ValidationRule = require("./ValidationRule").ValidationRule;

class MaxValueValidationRule extends ValidationRule {
  constructor(maxValue, message = "Exceeded maximum value") {
    super(message);
    this.maxValue = maxValue;
  }

  validate(value) {
    return value <= this.maxValue;
  }
}

module.exports.MaxValueValidationRule = MaxValueValidationRule;