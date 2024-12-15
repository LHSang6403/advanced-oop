class ValidationObserver {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    notify(errors) {
      this.subscribers.forEach((subscriber) => subscriber.update(errors));
    }
  }

  module.exports.ValidationObserver = ValidationObserver;