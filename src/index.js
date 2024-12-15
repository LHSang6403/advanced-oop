// Export Validation Framework
const ValidationFramework =
  require("./ValidationFramework").ValidationFramework;

// Export Validation Rules
const RequiredFieldRule =
  require("./Rule/ValidationRule/RequiredFieldRule").RequiredFieldRule;
const RegexValidationRule =
  require("./Rule/ValidationRule/RegexValidationRule").RegexValidationRule;
const CompositeValidationRule =
  require("./Rule/Composite/CompositeValidationRule").CompositeValidationRule;
const ValidationRuleBuilder =
  require("./Rule/Builder/ValidationRuleBuilder").ValidationRuleBuilder;

// Export Display Strategies
const ConsoleDisplayStrategy =
  require("./Display/ConsoleDisplayStrategy").ConsoleDisplayStrategy;
const DOMDisplayStrategy =
  require("./Display/DOMDisplayStrategy").DOMDisplayStrategy;

// Export Observers
const ConsoleSubscriber =
  require("./Observer/ConsoleSubscriber").ConsoleSubscriber;
const DOMSubscriber = require("./Observer/DOMSubscriber").DOMSubscriber;
const ValidationObserver =
  require("./Observer/ValidationObserver").ValidationObserver;

// Export everything for the user
module.exports = {
  ValidationFramework,
  RequiredFieldRule,
  RegexValidationRule,
  CompositeValidationRule,
  ValidationRuleBuilder,
  ConsoleDisplayStrategy,
  DOMDisplayStrategy,
  ConsoleSubscriber,
  DOMSubscriber,
  ValidationObserver,
};
