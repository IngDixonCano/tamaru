import { DomainError } from "./domain-error";

export interface StockShortage {
  materialId: string;
  materialNombre: string;
  requerido: number;
  disponible: number;
  faltante: number;
}

export class InsufficientStockError extends DomainError {
  public readonly shortages: StockShortage[];

  constructor(shortages: StockShortage[]) {
    const message = shortages
      .map(
        (s) =>
          `${s.materialNombre}: requiere ${s.requerido}, disponible ${s.disponible}, faltan ${s.faltante}`
      )
      .join("; ");

    super(
      `Stock insuficiente: ${message}`,
      "INSUFFICIENT_STOCK",
      409
    );
    this.name = "InsufficientStockError";
    this.shortages = shortages;
  }
}
