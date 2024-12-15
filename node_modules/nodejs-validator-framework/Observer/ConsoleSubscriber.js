class ConsoleSubscriber {
    update(errors) {
      console.log("Console Notification:", errors);
    }
  }

  module.exports.ConsoleSubscriber = ConsoleSubscriber;