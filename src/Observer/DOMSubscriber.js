const Subscriber = require("./Subscriber").Subscriber;

class DOMSubscriber extends Subscriber {
  constructor() {
    super("DOMSubscriber");
  }

  update(errors) {
    console.log(`${this.name}: Validation Errors:`);
    console.log("<div>");
    errors.forEach((error) => console.log(` <span>${error}</span>`));
    console.log("</div>");
  }
}

module.exports.DOMSubscriber = DOMSubscriber;
