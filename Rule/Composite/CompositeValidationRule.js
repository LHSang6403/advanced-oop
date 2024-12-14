const ValidationRule = require("../ValidationRule").ValidationRule;

class CompositeValidationRule extends ValidationRule {
  constructor(message = "Composite validation failed") {
    super(message);
    this.rules = [];
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  validate(value) {
    let isValid = true;
    this.errors = [];

    for (const rule of this.rules) {
      if (!rule.validate(value)) {
        isValid = false;
        this.errors.push(rule.getMessage());
      }
    }
    return isValid;
  }

  getMessages() {
    return this.errors?.length > 0 ? this.errors : this.message;
  }
}

module.exports.CompositeValidationRule = CompositeValidationRule;
