import { DomainError } from "./domain-error";

export class ValidationError extends DomainError {
  public readonly field: string | null;

  constructor(message: string, field: string | null = null) {
    super(message, "VALIDATION_ERROR", 400);
    this.name = "ValidationError";
    this.field = field;
  }
}
