class DOMDisplayStrategy {
  display(errors) {
    if (!errors.length) {
      console.log("There is no error.");
      return;
    }
    console.log(errors
      .map((error) => `<p>${error}</p>`));
  }
}

module.exports.DOMDisplayStrategy = DOMDisplayStrategy;
