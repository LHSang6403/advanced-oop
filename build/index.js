"use strict";

// Export Validation Framework
var ValidationFramework = require("./Validator/ValidationFramework").ValidationFramework;
var FieldValidation = require("./Validator/FieldValidation").FieldValidation;

// Export Validation Rules
var ValidationRuleBuilder = require("./Rule/Builder/ValidationRuleBuilder").ValidationRuleBuilder;
var CompositeValidationRule = require("./Rule/Composite/CompositeValidationRule").CompositeValidationRule;
var PasswordValidationRule = require("./Rule/Composite/PasswordValidationRule").PasswordValidationRule;
var MinLengthDecorator = require("./Rule/Decorator/MinLengthDecorator").MinLengthDecorator;
var ValidationRuleDecorator = require("./Rule/Decorator/ValidationRuleDecorator").ValidationRuleDecorator;
var CustomValidationRule = require("./Rule/ValidationRule/CustomValidationRule").CustomValidationRule;
var IsDoubleValidator = require("./Rule/ValidationRule/IsDoubleValidator").IsDoubleValidator;
var IsFloatValidator = require("./Rule/ValidationRule/IsFloatValidator").IsFloatValidator;
var IsIntValidator = require("./Rule/ValidationRule/IsIntValidator").IsIntValidator;
var IsNotEmptyValidator = require("./Rule/ValidationRule/IsNotEmptyValidator").IsNotEmptyValidator;
var IsNotNullValidator = require("./Rule/ValidationRule/IsNotNullValidator").IsNotNullValidator;
var IsNumberValidator = require("./Rule/ValidationRule/IsNumberValidator").IsNumberValidator;
var IsStringValidation = require("./Rule/ValidationRule/IsStringValidation").IsStringValidation;
var IsValidLengthValidator = require("./Rule/ValidationRule/IsValidLengthValidator").IsValidLengthValidator;
var IsValidTypeValidator = require("./Rule/ValidationRule/IsValidTypeValidator").IsValidTypeValidator;
var MaxLengthValidator = require("./Rule/ValidationRule/MaxLengthValidator").MaxLengthValidator;
var MaxValueValidationRule = require("./Rule/ValidationRule/MaxValueValidationRule").MaxValueValidationRule;
var MinLengthValidationRule = require("./Rule/ValidationRule/MinLengthValidationRule").MinLengthValidationRule;
var RegexValidationRule = require("./Rule/ValidationRule/RegexValidationRule").RegexValidationRule;
var RequiredFieldRule = require("./Rule/ValidationRule/RequiredFieldRule").RequiredFieldRule;
var ValidationRule = require("./Rule/ValidationRule").ValidationRule;

// Export Display Strategies
var ConsoleDisplayStrategy = require("./Display/ConsoleDisplayStrategy").ConsoleDisplayStrategy;
var DOMDisplayStrategy = require("./Display/DOMDisplayStrategy").DOMDisplayStrategy;

// Export Observers
var ConsoleSubscriber = require("./Observer/ConsoleSubscriber").ConsoleSubscriber;
var DOMSubscriber = require("./Observer/DOMSubscriber").DOMSubscriber;
var Subscriber = require("./Observer/Subscriber").Subscriber;
var ValidationObserver = require("./Observer/ValidationObserver").ValidationObserver;

// Export Validation Result
var ValidationResult = require("./ValidationResult/ValidationResult").ValidationResult;

// Export for the user
module.exports = {
  ValidationFramework: ValidationFramework,
  FieldValidation: FieldValidation,
  RequiredFieldRule: RequiredFieldRule,
  RegexValidationRule: RegexValidationRule,
  CompositeValidationRule: CompositeValidationRule,
  PasswordValidationRule: PasswordValidationRule,
  MinLengthDecorator: MinLengthDecorator,
  ValidationRuleDecorator: ValidationRuleDecorator,
  CustomValidationRule: CustomValidationRule,
  IsDoubleValidator: IsDoubleValidator,
  IsFloatValidator: IsFloatValidator,
  IsIntValidator: IsIntValidator,
  IsNotEmptyValidator: IsNotEmptyValidator,
  IsNotNullValidator: IsNotNullValidator,
  IsNumberValidator: IsNumberValidator,
  IsStringValidation: IsStringValidation,
  IsValidLengthValidator: IsValidLengthValidator,
  IsValidTypeValidator: IsValidTypeValidator,
  MaxLengthValidator: MaxLengthValidator,
  MaxValueValidationRule: MaxValueValidationRule,
  MinLengthValidationRule: MinLengthValidationRule,
  ValidationRule: ValidationRule,
  ValidationRuleBuilder: ValidationRuleBuilder,
  ConsoleDisplayStrategy: ConsoleDisplayStrategy,
  DOMDisplayStrategy: DOMDisplayStrategy,
  ConsoleSubscriber: ConsoleSubscriber,
  Subscriber: Subscriber,
  DOMSubscriber: DOMSubscriber,
  ValidationObserver: ValidationObserver,
  ValidationResult: ValidationResult
};