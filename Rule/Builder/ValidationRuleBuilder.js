const RequiredFieldRule = require("../ValidationRule/RequiredFieldRule").RequiredFieldRule;
const MinLengthRule = require("../ValidationRule/MinLengthValidationRule").MinLengthValidationRule;
const RegexValidationRule = require("../ValidationRule/RegexValidationRule").RegexValidationRule;   
const CompositeValidationRule = require("../Composite/CompositeValidationRule").CompositeValidationRule;

class ValidationRuleBuilder {
    constructor() {
      this.rules = [];
    }
  
    addRequired(message = "This field is required") {
      this.rules.push(new RequiredFieldRule(message));
      return this;
    }
  
    addMinLength(minLength, message) {
      this.rules.push(new MinLengthRule(minLength, message));
      return this;
    }
  
    addRegex(regex, message) {
      this.rules.push(new RegexValidationRule(regex, message));
      return this;
    }
  
    build() {
      const composite = new CompositeValidationRule();
      this.rules.forEach((rule) => composite.addRule(rule));
      return composite;
    }
  }

  module.exports.ValidationRuleBuilder = ValidationRuleBuilder;
  