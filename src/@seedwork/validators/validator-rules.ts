import ValidationError from "../errors/validation-error";

export default class ValidatorRules {
  constructor(private value: any, private property: string) {}

  static values(value: any, property: string) {
    return new ValidatorRules(value, property);
  }

  required() {
    if (this.value === null || this.value === undefined || this.value === "") {
      throw new ValidationError(`The ${this.property} is required`);
    }
    return this;
  }

  string() {
    if (typeof this.value != "string") {
      throw new ValidationError(`The ${this.property} must be a string`);
    }
    return this;
  }

  boolean() {
    if (typeof this.value !== "boolean") {
      throw new ValidationError(`The ${this.property} must be a boolean`);
    }
    return this;
  }

  maxLength(max: number) {
    if (this.value.length > max) {
      throw new ValidationError(
        `The ${this.property} must be less or equal than ${max} characters`
      );
    }
    return this;
  }
}
//exemplo de aplicação
//ValidatorRules.values("xpto", "name").required().string().maxLength(255);
