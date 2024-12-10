const ValidationRule = require("./ValidationRule").ValidationRule;

class IsValidTypeValidator extends ValidationRule {
  constructor(type, message = "Invalid type") {
    super(message);
    this.type = type;
  }

  validate(value) {
    return typeof value === this.type;
  }
}

module.exports.IsValidTypeValidator = IsValidTypeValidator;