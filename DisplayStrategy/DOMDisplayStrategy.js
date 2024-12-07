class DOMDisplayStrategy {
  display(errors) {
    const errorContainer = document.getElementById("validation-errors");
    if (errorContainer) {
      errorContainer.innerHTML = errors
        .map((error) => `<p>${error}</p>`)
        .join("");
    }
  }
}

module.exports.DOMDisplayStrategy = DOMDisplayStrategy;
