const ValidationRule = require("../ValidationRule").ValidationRule;

class IsStringValidation extends ValidationRule 
{
  constructor(message = "Value is not a string") {
    super(message);
  }

  validate(value) {
    return typeof value === "string";
  }
}

module.exports.IsStringValidation = IsStringValidation;