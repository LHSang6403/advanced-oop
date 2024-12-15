const Subscriber = require('./Subscriber').Subscriber;

class ConsoleSubscriber extends Subscriber {
  constructor() {
    super("ConsoleSubscriber");
  }

  update(errors) {
    console.log(`${this.name}: Validation Errors:`);
    errors.forEach((error) => console.log(`- ${error}`));
  }
}

module.exports.ConsoleSubscriber = ConsoleSubscriber;
