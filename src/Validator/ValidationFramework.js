const ValidationResult =
  require("../ValidationResult/ValidationResult").ValidationResult;
const FieldValidation = require("./FieldValidation").FieldValidation;

class ValidationFramework {
  constructor() {
    this.validators = {};
    this.displayStrategy = null;
  }

  static getInstance() {
    if (!ValidationFramework.instance) {
      ValidationFramework.instance = new ValidationFramework();
    }
    return ValidationFramework.instance;
  }

  registerValidator(name, validator) {
    this.validators[name] = validator;
  }

  validate(object) {
    const result = new ValidationResult();
    for (const fieldName in this.validators) {
      if (this.validators.hasOwnProperty(fieldName)) {
        const fieldValidation = this.validators[fieldName];
        const value = object[fieldName];
        const fieldResult = fieldValidation.validate(value);
        if (!fieldResult.isSuccess()) {
          result.isValid = false;
          result.errors.push(...fieldResult.errors);
        }
      }
    }

    if (this.displayStrategy) {
      this.displayStrategy.display(result.errors);
    }

    return result;
  }

  addRule(fieldName, rule) {
    if (!this.validators[fieldName]) {
      this.validators[fieldName] = new FieldValidation(fieldName);
    }
    this.validators[fieldName].addRule(rule);
  }

  setDisplayStrategy(strategy) {
    this.displayStrategy = strategy;
  }

  notifyInvalidFields() {
    console.log("Invalid fields detected!");
  }
}

module.exports.ValidationFramework = ValidationFramework;
