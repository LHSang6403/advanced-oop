class ValidationResult {
    constructor() {
      this.isValid = true;
      this.errors = [];
    }
  
    addError(message) {
      this.errors.push(message);
      this.isValid = false;
    }
  
    isSuccess() {
      return this.isValid;
    }
  }

  module.exports.ValidationResult = ValidationResult;