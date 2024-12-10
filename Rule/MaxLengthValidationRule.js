const ValidationRule = require("./ValidationRule").ValidationRule;

class MaxLengthValidator extends ValidationRule {
  constructor(maxLength, message = "Exceeded maximum length") {
    super(message);
    this.maxLength = maxLength;
  }

  validate(value) {
    return value.length <= this.maxLength;
  }
}

module.exports.MaxLengthValidator = MaxLengthValidator;