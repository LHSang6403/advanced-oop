class ConsoleDisplayStrategy {
  display(errors) {
    if (!errors.length) {
      console.log("There is no error.");
      return;
    }

    console.log("Validation Errors:");
    errors.forEach((error) => console.log(`- ${error}`));
  }
}

module.exports.ConsoleDisplayStrategy = ConsoleDisplayStrategy;
