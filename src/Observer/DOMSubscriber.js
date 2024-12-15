const Subscriber = require('./Subscriber').Subscriber;

class DOMSubscriber extends Subscriber {
  constructor() {
    super("DOMSubscriber");
  }

  update(errors) {
    console.log(`${this.name}: Validation Errors:`);
    errors.forEach((error) => console.log(`- ${error}`));
  }
}

module.exports.DOMSubscriber = DOMSubscriber;
