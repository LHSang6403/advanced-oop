// Export Validation Framework
const ValidationFramework =
  require("./Validator/ValidationFramework").ValidationFramework;
const FieldValidation = require("./Validator/FieldValidation").FieldValidation;

// Export Validation Rules
const ValidationRuleBuilder =
  require("./Rule/Builder/ValidationRuleBuilder").ValidationRuleBuilder;
const CompositeValidationRule =
  require("./Rule/Composite/CompositeValidationRule").CompositeValidationRule;
const PasswordValidationRule =
  require("./Rule/Composite/PasswordValidationRule").PasswordValidationRule;
const MinLengthDecorator =
  require("./Rule/Decorator/MinLengthDecorator").MinLengthDecorator;
const ValidationRuleDecorator =
  require("./Rule/Decorator/ValidationRuleDecorator").ValidationRuleDecorator;
const CustomValidationRule =
  require("./Rule/ValidationRule/CustomValidationRule").CustomValidationRule;
const IsDoubleValidator =
  require("./Rule/ValidationRule/isDoubleValidationRule").IsDoubleValidator;
const IsFloatValidator =
  require("./Rule/ValidationRule/isFloatValidationRule").IsFloatValidator;
const IsIntValidator =
  require("./Rule/ValidationRule/isIntValidationRule").IsIntValidator;
const IsNotEmptyValidator =
  require("./Rule/ValidationRule/isNotEmptyValidationRule").IsNotEmptyValidator;
const IsNotNullValidator =
  require("./Rule/ValidationRule/isNotNullValidationRule").IsNotNullValidator;
const IsNumberValidator =
  require("./Rule/ValidationRule/isNumberValidationRule").IsNumberValidator;
const IsStringValidation =
  require("./Rule/ValidationRule/isStringValidationRule").IsStringValidation;
const IsValidLengthValidator =
  require("./Rule/ValidationRule/isValidLengthValidationRule").IsValidLengthValidator;
const IsValidTypeValidator =
  require("./Rule/ValidationRule/isValidTypeValidationRule").IsValidTypeValidator;
const MaxLengthValidator =
  require("./Rule/ValidationRule/MaxLengthValidationRule").MaxLengthValidator;
const MaxValueValidationRule =
  require("./Rule/ValidationRule/MaxValueValidationRule").MaxValueValidationRule;
const MinLengthValidationRule =
  require("./Rule/ValidationRule/MinLengthValidationRule").MinLengthValidationRule;
const RegexValidationRule =
  require("./Rule/ValidationRule/RegexValidationRule").RegexValidationRule;
const RequiredFieldRule =
  require("./Rule/ValidationRule/RequiredFieldRule").RequiredFieldRule;
const ValidationRule = require("./Rule/ValidationRule").ValidationRule;

// Export Display Strategies
const ConsoleDisplayStrategy =
  require("./Display/ConsoleDisplayStrategy").ConsoleDisplayStrategy;
const DOMDisplayStrategy =
  require("./Display/DOMDisplayStrategy").DOMDisplayStrategy;

// Export Observers
const ConsoleSubscriber =
  require("./Observer/ConsoleSubscriber").ConsoleSubscriber;
const DOMSubscriber = require("./Observer/DOMSubscriber").DOMSubscriber;
const Subscriber = require("./Observer/Subscriber").Subscriber;
const ValidationObserver =
  require("./Observer/ValidationObserver").ValidationObserver;

// Export Validation Result
const ValidationResult =
  require("./ValidationResult/ValidationResult").ValidationResult;

// Export for the user
module.exports = {
  ValidationFramework,
  FieldValidation,
  RequiredFieldRule,
  RegexValidationRule,
  CompositeValidationRule,
  PasswordValidationRule,
  MinLengthDecorator,
  ValidationRuleDecorator,
  CustomValidationRule,
  IsDoubleValidator,
  IsFloatValidator,
  IsIntValidator,
  IsNotEmptyValidator,
  IsNotNullValidator,
  IsNumberValidator,
  IsStringValidation,
  IsValidLengthValidator,
  IsValidTypeValidator,
  MaxLengthValidator,
  MaxValueValidationRule,
  MinLengthValidationRule,
  ValidationRule,
  ValidationRuleBuilder,
  ConsoleDisplayStrategy,
  DOMDisplayStrategy,
  ConsoleSubscriber,
  Subscriber,
  DOMSubscriber,
  ValidationObserver,
  ValidationResult,
};
