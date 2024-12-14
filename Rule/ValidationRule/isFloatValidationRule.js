const ValidationRule = require("../ValidationRule").ValidationRule;

class IsFloatValidator extends ValidationRule {
  constructor(message = "Value is not a float") {
    super(message);
  }

  validate(value) {
    return typeof value === "number" && Number.isFinite(value);
  }
}

module.exports.IsFloatValidator = IsFloatValidator;