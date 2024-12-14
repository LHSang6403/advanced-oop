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
  
  class MinLengthDecorator extends ValidationRuleDecorator {
    constructor(rule, minLength, message = `Minimum length is ${minLength}`) {
      super(rule, message);
      this.minLength = minLength;
    }
  
    additionalValidation(value) {
      return value.length >= this.minLength;
    }
  }

  module.exports.ValidationRuleDecorator = ValidationRuleDecorator;
  