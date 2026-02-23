import { DomainError } from "./domain-error";

export class BusinessRuleError extends DomainError {
  constructor(message: string) {
    super(message, "BUSINESS_RULE_VIOLATION", 422);
    this.name = "BusinessRuleError";
  }
}
