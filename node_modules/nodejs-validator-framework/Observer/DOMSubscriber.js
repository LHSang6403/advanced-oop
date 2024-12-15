class DOMSubscriber {
    update(errors) {
      //const errorContainer = document.getElementById("validation-errors");
    errors.map((err) => `<p>${err}</p>`).join("");
    }
  }

  module.exports.DOMSubscriber = DOMSubscriber;