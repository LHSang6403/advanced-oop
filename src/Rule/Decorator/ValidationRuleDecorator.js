const ValidationRule = require("../ValidationRule").ValidationRule;

class ValidationRuleDecorator extends ValidationRule {
    constructor(rule, message) {
      super(message);
      this.rule = rule
      this.message = message;
    }
  
    validate(value) {
      return this.rule.validate(value) && this.additionalValidation(value);
    }
  
    additionalValidation(value) {
      throw new Error("additionalValidation() must be implemented");
    }

    getMessage() {
      return this.rule.getMessage();
    }
  }

  module.exports.ValidationRuleDecorator = ValidationRuleDecorator;
  