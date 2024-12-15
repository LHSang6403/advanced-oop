const ValidationRuleDecorator = require('./ValidationRuleDecorator').ValidationRuleDecorator;

class MinLengthDecorator extends ValidationRuleDecorator {
    constructor(rule, minLength, message = `Minimum length is ${minLength}`) {
      super(rule, message);
      this.minLength = minLength;
    }
  
    additionalValidation(value) {
      return value.length >= this.minLength;
    }
  }

  module.exports.MinLengthDecorator = MinLengthDecorator;