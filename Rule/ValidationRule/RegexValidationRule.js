const ValidationRule = require("../ValidationRule").ValidationRule;

class RegexValidationRule extends ValidationRule {
  constructor(regex, message = "Invalid format") {
    super(message);
    this.regex = regex;
  }

  validate(value) {
    return this.regex.test(value);
  }
}

module.exports.RegexValidationRule = RegexValidationRule;
