class ValidationRule {
  constructor(message) {
    this.message = message;
  }

  validate(value) {
    throw new Error("validate() method must be implemented in subclasses");
  }

  getMessage() {
    return this.errors?.length > 0 ? this.errors : this.message;
  }
}

module.exports.ValidationRule = ValidationRule;
