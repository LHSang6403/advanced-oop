const {
  ValidationFramework,
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
  ConsoleSubscriber,
  DOMSubscriber,
  ValidationObserver,
  } = require("nodejs-validator-framework");
  
  const framework = ValidationFramework.getInstance();
  
  const usernameValidation = new RequiredFieldRule("Username is required");
  framework.addRule("username", usernameValidation);
  
  const passwordValidation = new ValidationRuleBuilder()
    .addRequired("Password is required")
    .addMinLength(8, "Password must be at least 8 characters long")
    .addRegex(/[A-Z]/, "Password must have at least one uppercase letter")
    .addRegex(/\d/, "Password must have at least one digit")
    .build();
  
  const stringValidation = new IsStringValidation();
  const doubleValidation = new IsDoubleValidator();
  const floatValidation = new IsFloatValidator();
  const intValidation = new IsIntValidator();
  const notEmptyValidation = new IsNotEmptyValidator();
  const notNullValidation = new IsNotNullValidator();
  const numberValidation = new IsNumberValidator();
  const validLengthValidation = new IsValidLengthValidator();
  const validTypeValidation = new IsValidTypeValidator();
  const maxLengthValidation = new MaxLengthValidator();
  const maxValueValidation = new MaxValueValidationRule();
  const minLengthValidation = new MinLengthValidationRule();
  const regexValidation = new RegexValidationRule(/^[a-zA-Z0-9_]+$/, "Username must be alphanumeric");
  const requiredFieldValidation = new RequiredFieldRule();

  const ValidationRuleDecoratorValidation = new ValidationRuleDecorator();
  const minLengthDecoratorValidation = new MinLengthDecorator(ValidationRuleDecoratorValidation, 20);
  
  const customValidation = new CustomValidationRule((value) => value === "hello", "Value must be 'hello'");

  framework.addRule("password", passwordValidation);
  framework.addRule('isString', stringValidation);
  framework.addRule('custom', customValidation);
  framework.addRule('isDouble', doubleValidation);
  framework.addRule('isFloat', floatValidation);
  framework.addRule('isInt', intValidation);
  framework.addRule('isNotEmpty', notEmptyValidation);
  framework.addRule('isNotNull', notNullValidation);
  framework.addRule('isNumber', numberValidation);
  framework.addRule('isValidLength', validLengthValidation);
  framework.addRule('isValidType', validTypeValidation);
  framework.addRule('maxLength', maxLengthValidation);
  framework.addRule('maxValue', maxValueValidation);
  framework.addRule('minLength', minLengthValidation);
  framework.addRule('regex', regexValidation);
  framework.addRule('requiredField', requiredFieldValidation);
  // framework.addRule('minLengthDecorator', minLengthDecoratorValidation);
  
  const observer = new ValidationObserver();
  observer.subscribe(new ConsoleSubscriber());
  observer.subscribe(new DOMSubscriber());

  framework.setDisplayStrategy({
    display: (errors) => observer.notify(errors),
  });

  const data = {
    username: "sang le",
    password: "Sang1234",
    isString: 123, // Không hợp lệ
    custom: "hello1" ,
    isDouble: 1123.2,
    isFloat: 1123.2,
    isInt: 1123,
    isNotEmpty: "hello",
    isNotNull: "hello",
    isNumber: 123,
    isValidLength: "hello",
    isValidType: "hello",
    maxLength: "hello",
    maxValue: 123,
    minLength: "hello",
    regex: "hello",
    requiredField: "hello",
    minLengthDecorator: "hello",
  };
  
  const result = framework.validate(data);
  
  if (!result.isSuccess()) {
    console.log("Validation failed:", result.errors);
  } else {
    console.log("Validation succeeded!");
  }