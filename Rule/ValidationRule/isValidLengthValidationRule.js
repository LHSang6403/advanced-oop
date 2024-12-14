const ValidationRule = require("../ValidationRule").ValidationRule;

class IsValidLengthValidator extends ValidationRule {
  constructor(minLength, maxLength, message = "Invalid length") {
    super(message);
    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  validate(value) {
    return value.length >= this.minLength && value.length <= this.maxLength;
  }
}

module.exports.IsValidLengthValidator = IsValidLengthValidator;