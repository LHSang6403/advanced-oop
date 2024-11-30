const ValidationRule = require("./ValidationRule").ValidationRule;

class RequiredFieldRule extends ValidationRule {
    constructor(message = "This field is required") {
      super(message);
    }
  
    validate(value) {
      return value !== null && value !== undefined && value.trim() !== "";
    }
  }

  module.exports.RequiredFieldRule = RequiredFieldRule;