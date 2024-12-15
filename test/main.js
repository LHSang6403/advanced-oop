const {
    ValidationFramework,
    RequiredFieldRule,
    ValidationRuleBuilder,
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
  
  framework.addRule("password", passwordValidation);
  
  const data = {
    username: "sang le",
    password: "Sang1234",
  };
  
  const result = framework.validate(data);
  
  if (!result.isSuccess()) {
    console.log("Validation failed:", result.errors);
  } else {
    console.log("Validation succeeded!");
  }