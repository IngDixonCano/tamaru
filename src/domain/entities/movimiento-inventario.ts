import type { TipoMovimiento } from "./enums";

export interface MovimientoInventario {
  id: string;
  materialId: string;
  tipo: TipoMovimiento;
  cantidad: number;
  motivo: string;
  ventaId: string | null;
  compraLoteId: string | null;
  fecha: Date;
  createdAt: Date;
}

export interface CreateMovimientoInput {
  materialId: string;
  tipo: TipoMovimiento;
  cantidad: number;
  motivo: string;
  ventaId?: string;
  compraLoteId?: string;
  fecha?: Date;
}
