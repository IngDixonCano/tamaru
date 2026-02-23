import { DomainError } from "./domain-error";

export class NotFoundError extends DomainError {
  constructor(entity: string, id: string) {
    super(
      `${entity} con id "${id}" no encontrado`,
      "NOT_FOUND",
      404
    );
    this.name = "NotFoundError";
  }
}
