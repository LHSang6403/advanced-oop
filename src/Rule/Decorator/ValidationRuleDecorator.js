const ValidationRule = require("../ValidationRule").ValidationRule;

class ValidationRuleDecorator extends ValidationRule {
    constructor(rule, message) {
      super(message);
      this.rule = rule;
    }
  
    validate(value) {
      return this.rule.validate(value) && this.additionalValidation(value);
    }
  
    additionalValidation(value) {
      throw new Error("additionalValidation() must be implemented");
    }
  }

  module.exports.ValidationRuleDecorator = ValidationRuleDecorator;
  