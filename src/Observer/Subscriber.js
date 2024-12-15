class Subscriber {
    constructor(name) {
      this.name = name;
    }
  
    update(errors) {
      throw new Error("The update method must be implemented by subclasses");
    }
  }
  
  module.exports.Subscriber = Subscriber;