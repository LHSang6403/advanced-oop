class ConsoleDisplayStrategy {
    display(errors) {
      console.log("Validation Errors:");
      errors.forEach((error) => console.log(`- ${error}`));
    }
  }

  module.exports.ConsoleDisplayStrategy = ConsoleDisplayStrategy;