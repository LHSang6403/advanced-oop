const ValidationRuleDecorator = require('./ValidationRuleDecorator').ValidationRuleDecorator;

class MinLengthDecorator extends ValidationRuleDecorator {
    constructor(rule, minLength, message = `Minimum length is ${minLength}`) {
      super(rule, message);
      this.minLength = minLength;
    }
  
    additionalValidation(value) {
      return value.length >= this.minLength;
    }

    getMessage() {
      return this.message;
    }
  }

  module.exports.MinLengthDecorator = MinLengthDecorator;