const ValidationResult =
  require("../ValidationResult/ValidationResult").ValidationResult;

class FieldValidation {
  constructor(fieldName) {
    this.fieldName = fieldName;
    this.rules = [];
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  validate(value) {
    const result = new ValidationResult();
    for (const rule of this.rules) {
      if (!rule.validate(value)) {
        result.addError(`${this.fieldName}: ${rule.getMessage()}`);
      }
    }
    return result;
  }
}

module.exports.FieldValidation = FieldValidation;
